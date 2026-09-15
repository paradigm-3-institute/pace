import { CONFIG } from "./config.js";

/* ---------------------------------------------------------------------
   The Supabase layer. Everything here is optional: with no keys in
   config.js the whole quiz runs exactly as before, offline and silent.
   See SUPABASE.md.
   ------------------------------------------------------------------- */
const TOKEN_KEY = "pacing-tree-token";

export const live = {
  client: null,
  ready: false,

  configured() {
    return Boolean(CONFIG.enabled && CONFIG.url && CONFIG.anonKey);
  },

  async init() {
    if (!this.configured()) return false;
    try {
      const { createClient } = await import("@supabase/supabase-js");
      this.client = createClient(CONFIG.url, CONFIG.anonKey, {
        /* The client keeps no session of its own; the only thing this
           page stores is the single token below. */
        auth: { persistSession: false, autoRefreshToken: false },
      });
      this.ready = true;
    } catch (err) {
      console.warn("[pacing-tree] Supabase client unavailable:", err);
    }
    return this.ready;
  },

  /* One random id per browser, so reloading doesn't inflate the count
     and walking again updates your own row rather than adding one. It
     identifies nothing and never leaves this page except as itself. */
  token() {
    try {
      let t = localStorage.getItem(TOKEN_KEY);
      if (!t) {
        t = crypto.randomUUID();
        localStorage.setItem(TOKEN_KEY, t);
      }
      return t;
    } catch {
      /* Private browsing, or storage blocked: still count the walk, we
         just can't recognise this visitor a second time. */
      return crypto.randomUUID();
    }
  },

  async record(campId, path, answers) {
    if (!this.ready) return;
    const { error } = await this.client.rpc("record_walk", {
      p_token: this.token(),
      p_camp_id: campId,
      p_path: path,
      p_survey: answers || {},
    });
    if (error) console.warn("[pacing-tree] record_walk failed:", error);
  },

  async tallies() {
    if (!this.ready) return null;
    const { data, error } = await this.client.rpc("get_tallies");
    if (error) {
      console.warn("[pacing-tree] get_tallies failed:", error);
      return null;
    }
    return data;
  },

  /* Calls onChange whenever anyone finishes a walk. Prefers the
     websocket; drops to polling if it can't connect. Returns a stop(). */
  watch(onChange) {
    if (!this.ready) return () => {};

    let timer = null;
    let channel = null;
    const startPolling = () => {
      if (timer) return;
      const every = Math.max(5, Number(CONFIG.pollSeconds) || 15) * 1000;
      timer = setInterval(onChange, every);
    };

    if (CONFIG.realtime) {
      channel = this.client
        .channel("pacing-tree-walks")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "walks" },
          onChange,
        )
        .subscribe((status) => {
          if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
            startPolling();
          }
        });
    } else {
      startPolling();
    }

    return () => {
      if (timer) clearInterval(timer);
      if (channel) this.client.removeChannel(channel);
    };
  },
};
