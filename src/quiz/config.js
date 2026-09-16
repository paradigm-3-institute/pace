/* ============================================================================
   config.js — where the quiz connects to Supabase (served at /quiz)
   ----------------------------------------------------------------------------
   Fill in the two values below and live results switch themselves on. Leave
   them as they are and the quiz still works perfectly — it simply doesn't
   collect or show any results. See SUPABASE.md for the walkthrough.

   Both values are safe to publish. The anon key is designed to sit in public
   page source; what it is allowed to do is fenced off by the database rules in
   supabase/schema.sql. Never put the *service role* key in this file — that
   one bypasses every rule.
   ========================================================================== */

export const CONFIG = {
  /* From Supabase → Project Settings → API Keys.
     url looks like "https://abcdefghijklm.supabase.co"
     anonKey is the "publishable" key (sb_publishable_…). On an older
     project it may still be called the "anon public" key; either works. */
  url: "https://thwznnwmbyvhuyraxgyh.supabase.co",
  anonKey: "sb_publishable_h8yIWnZVIvGpusGKRFxkFQ_kdv7dYy8",

  /* Set to false to switch off all collection and display without deleting
     your keys above — useful while editing copy. */
  enabled: true,

  /* Live updates. When true, the page opens a websocket and the bars move the
     instant anyone else finishes. If the socket can't connect, it quietly
     falls back to re-reading the counts every `pollSeconds`. */
  realtime: true,
  pollSeconds: 15,

  /* Hide the tallies until enough people have walked, so early visitors aren't
     shown a chart built from three data points. Set to 0 to always show. */
  minVotesToShow: 0,

  /* The map at the end draws one dot per response. Once there are more
     responses than dots worth drawing, it starts grouping them, and says so
     in the caption. Set a number here to pin it instead: 5 would mean one dot
     per five responses, whatever the total. 0 leaves it automatic. */
  perDot: 0,

  /* Each dot drifts a few pixels on its own slow loop, which makes the clouds
     feel alive. Set to false for a still map. Readers who ask their system for
     reduced motion get a still map either way. */
  liveDots: true,
};
