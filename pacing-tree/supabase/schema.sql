-- =============================================================================
-- The Pacing Tree — Supabase schema
-- -----------------------------------------------------------------------------
-- Paste this whole file into the Supabase SQL editor and run it once.
-- It is idempotent: running it again is safe and changes nothing.
--
-- The design in one paragraph. The page holds only the public anon key, so
-- everything here assumes the client is hostile. Visitors cannot write to any
-- table directly; they call one function, record_walk(), which is the sole
-- entry point and validates what it is given. Visitors CAN read `walks`,
-- because Supabase Realtime only delivers row changes a role is allowed to
-- select — but `walks` holds nothing identifying. The de-duplication token
-- lives in a separate table, `voters`, which no visitor can read or write.
-- =============================================================================


-- ---------------------------------------------------------------------------
-- 1. Tables
-- ---------------------------------------------------------------------------

-- One row per completed walk. Deliberately contains no identifiers: a camp,
-- the branch taken, and a timestamp.
--
--   path is a JSON array in the order the questions were answered:
--     [{"q": "c1", "i": 0}, {"q": "c2", "i": 1}, ...]
--   where "i" is the option's index in content.js (0 = first, 1 = second),
--   NOT its position on screen — the page shuffles left/right per visitor.
--   Only the index is stored, never the wording, so you can reword freely.
create table if not exists public.walks (
  id          uuid primary key default gen_random_uuid(),
  camp_id     text not null check (length(camp_id) between 1 and 64),
  path        jsonb not null default '[]'::jsonb,
  created_at  timestamptz not null default now()
);

create index if not exists walks_camp_id_idx on public.walks (camp_id);
create index if not exists walks_created_at_idx on public.walks (created_at desc);

-- The private half. `token` is the random uuid the browser keeps in
-- localStorage; it maps to that visitor's single row in `walks`, so a reload
-- or a second walk updates their answer instead of inflating the totals.
-- No client role is granted anything on this table.
create table if not exists public.voters (
  token       uuid primary key,
  walk_id     uuid not null references public.walks (id) on delete cascade,
  updated_at  timestamptz not null default now()
);


-- ---------------------------------------------------------------------------
-- 2. Row level security
-- ---------------------------------------------------------------------------

alter table public.walks  enable row level security;
alter table public.voters enable row level security;

-- Visitors may read walks (needed for tallies and for Realtime), and may do
-- nothing else. There is no insert/update/delete policy, so those are denied.
drop policy if exists "walks are publicly readable" on public.walks;
create policy "walks are publicly readable"
  on public.walks for select
  to anon, authenticated
  using (true);

-- `voters` gets no policies at all: with RLS on and nothing granted, it is
-- unreachable except from the security-definer function below.
revoke all on public.voters from anon, authenticated;
revoke insert, update, delete on public.walks from anon, authenticated;


-- ---------------------------------------------------------------------------
-- 3. Aggregate views
-- ---------------------------------------------------------------------------

-- How many walks ended at each camp.
create or replace view public.camp_tallies as
  select camp_id, count(*)::bigint as votes
  from public.walks
  group by camp_id;

-- How each crux split, across everyone who reached it.
create or replace view public.crux_tallies as
  select
    step ->> 'q'            as question_id,
    (step ->> 'i')::int     as option_index,
    count(*)::bigint        as votes
  from public.walks, lateral jsonb_array_elements(path) as step
  where jsonb_typeof(path) = 'array'
  group by 1, 2;

grant select on public.camp_tallies, public.crux_tallies to anon, authenticated;


-- ---------------------------------------------------------------------------
-- 4. The one function visitors may call to write
-- ---------------------------------------------------------------------------

-- Records a completed walk, or updates the one this token already recorded.
-- SECURITY DEFINER: it runs as the owner, which is why it can touch `voters`
-- when the caller cannot. Every argument is validated before use.
create or replace function public.record_walk(
  p_token   uuid,
  p_camp_id text,
  p_path    jsonb default '[]'::jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_walk_id uuid;
  v_path    jsonb := coalesce(p_path, '[]'::jsonb);
begin
  if p_token is null then
    raise exception 'a token is required';
  end if;

  if p_camp_id is null or length(p_camp_id) = 0 or length(p_camp_id) > 64 then
    raise exception 'camp_id must be 1-64 characters';
  end if;

  if jsonb_typeof(v_path) <> 'array' or jsonb_array_length(v_path) > 32 then
    raise exception 'path must be an array of at most 32 steps';
  end if;

  select walk_id into v_walk_id from public.voters where token = p_token;

  if v_walk_id is null then
    insert into public.walks (camp_id, path)
    values (p_camp_id, v_path)
    returning id into v_walk_id;

    insert into public.voters (token, walk_id)
    values (p_token, v_walk_id);
  else
    update public.walks
       set camp_id = p_camp_id,
           path = v_path,
           created_at = now()
     where id = v_walk_id;

    update public.voters
       set updated_at = now()
     where token = p_token;
  end if;

  return v_walk_id;
end;
$$;

revoke all on function public.record_walk(uuid, text, jsonb) from public;
grant execute on function public.record_walk(uuid, text, jsonb) to anon, authenticated;


-- Everything the result screen needs, in one round trip.
create or replace function public.get_tallies()
returns jsonb
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select jsonb_build_object(
    'total',  (select count(*) from public.walks),
    'camps',  coalesce((
                select jsonb_object_agg(camp_id, votes)
                from public.camp_tallies
              ), '{}'::jsonb),
    'cruxes', coalesce((
                select jsonb_object_agg(question_id, counts)
                from (
                  select question_id,
                         jsonb_object_agg(option_index::text, votes) as counts
                  from public.crux_tallies
                  group by question_id
                ) grouped
              ), '{}'::jsonb)
  );
$$;

revoke all on function public.get_tallies() from public;
grant execute on function public.get_tallies() to anon, authenticated;


-- ---------------------------------------------------------------------------
-- 5. Realtime
-- ---------------------------------------------------------------------------

-- Publish row changes on `walks` so open result screens update themselves.
-- Wrapped because adding a table that is already published raises an error.
do $$
begin
  alter publication supabase_realtime add table public.walks;
exception
  when duplicate_object then null;
  when undefined_object then
    raise notice 'publication supabase_realtime not found — enable Realtime in the dashboard, then re-run this file';
end;
$$;
