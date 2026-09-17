/* ---------------------------------------------------------------------
   Ways to Pace.

   One state object (state.js) describes where the reader is, and this
   component draws it. Every click applies a transition from state.js to
   that object; nothing else changes it.

     content.js    every word on screen
     config.js     the optional Supabase connection
     state.js      the state's shape and every way it changes
     ui.jsx        buttons, icons, the kicker, the shared type
     Intro.jsx, Question.jsx, Divider.jsx, Survey.jsx   the screens
     Map.jsx       mounts the map at the end (map.js, plain DOM)
     live.js       the Supabase layer
   ------------------------------------------------------------------- */

import { useState, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { createPortal } from "preact/compat";
import { QUIZ_DATA } from "./content.js";
import * as T from "./state.js";
import { Button } from "./ui.jsx";
import { Intro } from "./Intro.jsx";
import { Question } from "./Question.jsx";
import { Divider } from "./Divider.jsx";
import { Survey } from "./Survey.jsx";
import { Map } from "./Map.jsx";
import { live } from "./live.js";

const UI = QUIZ_DATA.ui;

/* The foot of the sidebar while the map is showing: the note, with any
   email in it made a link, and Start again — the only move from the
   map, since the walk is recorded by the time it is drawn. Rendered
   into quiz.astro's #sidebar-foot. */
function SidebarFoot({ onRestart }) {
  const note = String(UI.mapNote || "");
  const parts = note.split(/(\S+@\S+\.\S+)/);
  return (
    <div class="grid gap-4 font-sans text-[clamp(0.85rem,2vh,1rem)] leading-[1.45] text-(--color-why-pace-bg) antialiased opacity-60">
      {note && (
        <p class="text-pretty">
          {parts.map((part, i) =>
            i % 2 ? (
              <a key={i} class="font-bold text-background underline underline-offset-[3px] decoration-[1.5px]" href={`mailto:${part}`}>
                {part}
              </a>
            ) : (
              part
            ),
          )}
        </p>
      )}
      <button
        type="button"
        class="justify-self-start inline-flex items-center gap-2 px-4 py-2 border rounded-md border-(--color-pace-how-bg) text-(--color-pace-how-bg) hover:border-(--color-why-pace-bg) hover:text-(--color-why-pace-bg) transition-colors cursor-pointer text-base"
        onClick={onRestart}
      >
        {UI.restartButton}
      </button>
    </div>
  );
}

/* A way to see any screen without walking the tree or touching the
   database, for the dev server only. /quiz?preview=halt jumps to the map
   with made-up tallies, ?preview=halt&n=10000 with that many responses
   spread across the camps; ?preview=c2 opens that question, and
   ?preview=divider or ?preview=survey those screens. Ignored in the
   built site. */
function preview() {
  if (!import.meta.env.DEV || typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const campId = params.get("preview");
  if (!campId) return null;
  if (QUIZ_DATA.questions[campId]) return { ...T.initialState(), screen: "question", currentId: campId };
  if (campId === "divider" || campId === "survey") return { ...T.initialState(), screen: campId };
  if (!QUIZ_DATA.camps[campId]) return null;
  const total = Number(params.get("n")) || 1200;
  const ids = Object.keys(QUIZ_DATA.camps);
  const weights = ids.map((id, i) => (id === campId ? 2.5 : 1) * (0.6 + ((i * 7) % 5) / 5));
  const sum = weights.reduce((a, b) => a + b, 0);
  const camps = Object.fromEntries(ids.map((id, i) => [id, Math.round((total * weights[i]) / sum)]));
  live.configured = () => true;
  live.init = async () => true;
  live.record = async () => {};
  live.tallies = async () => ({ total, camps });
  live.watch = () => () => {};
  return { ...T.initialState(), screen: "map", campId };
}

/* Back and Skip: the chevron beside its word. Sized in fixed units,
   not em: the fit pass shrinks the page's type per screen, and the
   buttons shouldn't follow. */
const CONTROL = "text-[17px] md:text-[19px]";

export default function Quiz() {
  const [state, setState] = useState(() => preview() || T.initialState());
  const [sidebarFoot] = useState(() => document.getElementById("sidebar-foot"));

  /* Every screen before the map is a browser history entry holding the
     state that drew it, so the back button does what the on-page Back
     does, and forward works too. The URL never changes: a walk is a path
     through a tree, and no single screen means anything without the
     answers before it.

     The map is different: the walk is recorded by the time it shows, so
     the only way out is Start again. Opening it collapses the walk's
     entries into one, and a second, identical entry on top absorbs the
     back button — pressing it lands on the first, which pushes the
     second again. Start again collapses that pair into a fresh intro. */
  const nav = useRef({ trapped: false, pending: null });
  const host = useRef(null);

  /* Each entry also records how many entries this walk has pushed
     before it, so collapsing knows how far back the intro is whatever
     Back and Forward have done in between. */
  const depth = () => history.state?.depth ?? 0;

  const go = (transition, ...args) => {
    const next = transition(state, ...args);
    if (next.screen === "map" || next.screen === "intro") collapse(next);
    else {
      history.pushState({ ...next, depth: depth() + 1 }, "");
      setState(next);
    }
    /* Only as far as the top of the quiz: on a phone the sidebar sits
       above it, and the page's own top is the wrong place to land. */
    const top = host.current.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "auto" });
  };

  /* Steps back over every entry this walk pushed, then replaces the one
     it lands on with `next`. The stepping is asynchronous, so the swap
     happens in onPop below. */
  const collapse = (next) => {
    const steps = depth() + (nav.current.trapped ? 1 : 0);
    if (steps === 0) return land(next);
    nav.current.pending = next;
    history.go(-steps);
  };

  const land = (next) => {
    const entry = { ...next, depth: 0 };
    history.replaceState(entry, "");
    nav.current.trapped = next.screen === "map";
    if (nav.current.trapped) history.pushState(entry, "");
    setState(next);
  };

  /* The map's banner answered. Not a screen change, so no history entry;
     the walk is sent again with the answer added, which updates its row. */
  const answerFit = (answer) => {
    const next = T.answerFit(state, answer);
    history.replaceState({ ...history.state, ...next }, "");
    setState(next);
    live.record(
      next.campId,
      next.history.map((step) => ({ q: step.questionId, i: step.optionIndex })),
      next.survey,
    );
  };

  useEffect(() => {
    history.replaceState({ ...state, depth: 0 }, "");
    const onPop = (event) => {
      const { pending, trapped } = nav.current;
      if (pending) {
        nav.current.pending = null;
        land(pending);
      } else if (trapped) {
        history.pushState(event.state, "");
      } else if (event.state?.screen === "map") {
        /* A map entry left behind by Start again: the walk it showed is
           over, so it becomes a fresh intro instead. */
        land(T.initialState());
      } else if (event.state?.screen) {
        setState(event.state);
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* Keyed by screen and position, so moving on remounts the screen and
     its parts rise in again. */
  const key = `${state.screen}:${state.currentId}:${state.surveyIndex}`;

  let screen;
  let controls = null;
  switch (state.screen) {
    case "intro":
      screen = <Intro key={key} onBegin={() => go(T.begin)} />;
      break;
    case "question":
      screen = <Question key={key} id={state.currentId} onChoose={(index) => go(T.choose, index)} />;
      controls = <Button class={CONTROL} icon="ph-light ph-caret-left" onClick={() => go(T.back)}>{UI.backButton}</Button>;
      break;
    case "divider":
      screen = <Divider key={key} onContinue={() => go(T.enterSurvey)} />;
      break;
    case "survey":
      screen = <Survey key={key} state={state} onAnswer={(answer) => go(T.answerSurvey, answer)} />;
      controls = (
        <>
          <Button class={CONTROL} icon="ph-light ph-caret-left" onClick={() => go(T.surveyBack)}>{UI.backButton}</Button>
          <Button class={CONTROL} trailingIcon="ph-light ph-caret-right" onClick={() => go(T.skipSurvey)}>{UI.skipButton}</Button>
        </>
      );
      break;
    case "map":
      screen = <Map key={key} state={state} onRestart={() => go(T.restart)} onFit={answerFit} />;
      break;
  }

  /* The page never scrolls from md, so each screen has to fit the
     window. Every size in the quiz is an em of --prose-size, so shrinking
     that one number scales the whole screen. After each render: start at
     the stylesheet's size and step down until nothing overflows, down to a
     floor; past the floor, let the screen scroll rather than clip words.
     The map is a full-screen overlay with its own framing, and is skipped. */
  useLayoutEffect(() => {
    const main = host.current?.closest("main");
    if (!main) return;

    const fit = () => {
      main.style.removeProperty("--prose-size");
      main.style.overflowY = "";
      if (state.screen === "map" || !window.matchMedia("(width >= 48rem)").matches) return;

      const base = parseFloat(getComputedStyle(main).getPropertyValue("--prose-size")) || 17;
      const FLOOR = 12;
      let size = base;
      const overflows = () => main.scrollHeight > main.clientHeight + 1;
      while (overflows() && size > FLOOR) {
        size = Math.max(FLOOR, size - 0.5);
        main.style.setProperty("--prose-size", `${size}px`);
      }
      if (overflows()) main.style.overflowY = "auto";
    };

    fit();
    let pending = null;
    const onResize = () => {
      clearTimeout(pending);
      pending = setTimeout(fit, 120);
    };
    window.addEventListener("resize", onResize);
    /* The screen can grow on its own, without a state change — an "other"
       answer opens its text box — so its size is watched too. Deferred a
       frame, since fit itself resizes it. */
    const grew = new ResizeObserver(() => requestAnimationFrame(fit));
    grew.observe(host.current);
    return () => {
      clearTimeout(pending);
      window.removeEventListener("resize", onResize);
      grew.disconnect();
    };
  }, [state]);

  return (
    <>
      {/* Anchored to the top, not centred: centring would move the icon
          up and down with the length of each question. */}
      <div ref={host} class="flex flex-auto flex-col justify-start" aria-live="polite">
        {screen}
      </div>
      {/* Back and Skip. On a phone they are a bar stuck to the foot of
          the screen, above the home indicator, so going back never means
          scrolling past every answer; from md they sit under the screen. */}
      {controls && (
        <div class="sticky bottom-0 -mx-(--x-padding) mt-6 px-(--x-padding) pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-background/95 backdrop-blur-sm border-t border-(--color-why-pace-bg) flex flex-wrap justify-center gap-3 md:static md:justify-start md:mx-0 md:mt-auto md:px-0 md:pt-6 md:pb-0 md:bg-transparent md:backdrop-blur-none md:border-0">
          {controls}
        </div>
      )}
      {state.screen === "map" && sidebarFoot && createPortal(<SidebarFoot onRestart={() => go(T.restart)} />, sidebarFoot)}
    </>
  );
}
