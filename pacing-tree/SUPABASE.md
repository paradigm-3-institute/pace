# Connecting the quiz to Supabase

The quiz works with no database at all — this is entirely optional. Connect it
and the map at the end fills with dots: one per response, clustered at the
camp each walk ended in, with your own dot picked out in red.

Setup is four steps and takes about five minutes.

---

## 1. Make a project

At [supabase.com](https://supabase.com), create a project. The free tier is
ample — a row per walk is a few hundred bytes.

## 2. Run the schema

In the Supabase dashboard, open **SQL Editor → New query**, paste the entire
contents of [`supabase/schema.sql`](supabase/schema.sql), and run it.

That creates two tables, two views, two functions, the access rules that hold
the whole thing together, and the Realtime publication in step 3.

You only need to run it once. It is written to be safe to run again, so that if
it fails part way, or the schema changes later, you can paste the whole file
back in rather than unpicking what already ran.

## 3. Check Realtime

Step 2 already tried to switch this on — it is the last block of the file. To
confirm, run:

```sql
select tablename from pg_publication_tables where pubname = 'supabase_realtime';
```

`walks` in the results means it worked, and there is nothing to click. If the
list is empty and your run reported a notice about `supabase_realtime` not
being found, Realtime isn't enabled on the project: turn it on under
**Database → Publications**, then run the schema file again.

(The **Replication** page in that sidebar is a different feature — sending data
to outside destinations — and is not what this needs.)

Realtime is what makes the dots appear while someone is looking at the map.
Without it the page notices and falls back to re-reading the counts every 15
seconds, which works perfectly well.

## 4. Paste your keys

**Project Settings → API** gives you a project URL and an `anon` `public` key.
Put both into `config.js`:

```js
url: "https://yourproject.supabase.co",
anonKey: "eyJhbGciOi...",
```

Reload the quiz, walk it once, and your dot appears on the map.

---

## Is it safe to publish the anon key?

Yes — it's designed for it, and it's already visible to anyone who views the
page source. What matters is what that key is *allowed* to do, which the schema
pins down:

- **Visitors cannot write to any table.** There is no insert policy on `walks`.
  The only way to record anything is the `record_walk()` function, which
  validates its arguments and is the sole entry point.
- **Visitors can read `walks`,** because Supabase Realtime only delivers row
  changes to a role that could select them. This is safe because the table
  holds nothing identifying: a camp id, the branch taken, a timestamp.
- **The de-duplication token lives elsewhere.** It's in `voters`, which has row
  level security on and no policies, so it is unreachable from the browser.
  Only the security-definer function can touch it.

**Never put the `service_role` key in `config.js`.** That key ignores every
rule above.

## What gets stored

One row per completed walk:

| column       | example                                   |
| ------------ | ----------------------------------------- |
| `camp_id`    | `"coordinatedDelay"`                      |
| `path`       | `[{"q":"c1","i":0},{"q":"c2","i":0}, …]`  |
| `survey`     | `{"location": {"answer": "London", "index": 2}}` |
| `created_at` | `2026-09-04 14:02:11+00`                  |

`i` is the option's index in `content.js` — `0` for the first option, `1` for
the second — never its position on screen, which is shuffled per visitor. Only
the index is stored, so **you can reword any option without invalidating the
data collected so far.** Reordering the two options within a question would
invalidate it; adding or removing a question would not, and neither does
changing an option's `rank`, which only affects the order the cards are shown
in.

`survey` holds the answers to the extra questions after the tree, keyed by
each question's `id` from `content.js`. Each answer records the option's
`answer` (its label) and `index` (its position, from 0 — stable if you reword
it). When an option opened a text box, what was typed is in `detail`. A skipped
question is simply absent.

```sql
-- where people are: listed choices, with typed places where given
select coalesce(survey -> 'location' ->> 'detail',
                survey -> 'location' ->> 'answer') as place,
       count(*)
from walks
group by 1 order by 2 desc;
```

No IP address, no user agent, no session, no cookie. The one thing the browser
keeps is a random id in `localStorage` under `pacing-tree-token`, which maps to
that visitor's single row so a reload doesn't double-count and a second walk
updates their answer instead of adding one. It identifies nothing on its own,
and clearing site data discards it.

That said: this is honest counting, not enforcement. Anyone who wants to vote
twice can clear their storage, and the totals are best described as walks, not
people.

## Reading the data yourself

In the SQL editor:

```sql
-- where walks land
select * from camp_tallies order by votes desc;

-- how each branching point split
select * from branching_point_tallies order by question_id, option_index;

-- everything the result screen sees, in one object
select get_tallies();
```

## Two settings worth knowing

`config.js` also carries:

- **`perDot`** — the map draws one dot per response. Past about 1,200 responses
  it starts grouping them and says so in the caption. Set a number to pin it.
- **`liveDots`** — the slow drift that makes the clouds feel alive. Set to
  `false` for a still map. Readers who ask their system for reduced motion get
  a still map either way.

## Switching it off

Set `enabled: false` in `config.js`, or blank the `url`. The quiz reverts to
collecting and showing nothing, with no other change in behaviour.

## Starting the counts over

```sql
truncate public.walks cascade;   -- also clears voters, via the foreign key
```

## If the tally doesn't appear

Open the browser console; every failure is logged with a `[pacing-tree]` prefix.

| What you see                                | Usually means                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| "The live tally can't be reached right now." (under the map) | `url` / `anonKey` wrong, or the CDN that serves the Supabase client is blocked |
| `record_walk failed: … does not exist`       | The schema hasn't been run                                               |
| Numbers appear but never move                | Realtime isn't enabled on `walks` — it's polling instead, which is fine  |
| The map draws but stays empty of dots        | `minVotesToShow` in `config.js` is above the current total               |

## Local development

The page uses ES modules, so it must be served over http — opening
`index.html` from the file system won't work. From this folder:

```sh
python serve.py
```

then visit <http://localhost:5173/>. That server also reloads open tabs when
you save, which a plain `python -m http.server` does not.
