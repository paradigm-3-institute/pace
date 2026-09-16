/* ---------------------------------------------------------------------
   Ways to Pace — the entry point.

   One state object (state.js) describes where the reader is; render()
   draws it. Every click dispatches a transition through the store, and
   the store tells the renderer.

     content.js   every word on screen
     config.js    the optional Supabase connection
     state.js     the state's shape and every way it changes
     store.js     holds the state; dispatch() and subscribe()
     dom.js       element helpers, buttons, the entrance animation
     screens.js   intro, branching point, divider, extra question
     map.js       the map at the end
     live.js      the Supabase layer
   ------------------------------------------------------------------- */

import { setState, subscribe } from "./store.js";
import { initialState } from "./state.js";
import { renderIntro, renderQuestion, renderDivider, renderSurvey } from "./screens.js";
import { renderTree, leaveMap } from "./map.js";

let onMap = false;

function render(state) {
  /* Leaving the map stops its live updates; harmless if it wasn't open. */
  if (state.screen !== "map") leaveMap();

  /* A change of state while the map is open — the banner being answered —
     must not rebuild the map under the reader. The map reads what it needs
     from the store itself. */
  const stayingOnMap = state.screen === "map" && onMap;
  onMap = state.screen === "map";
  if (stayingOnMap) return;

  switch (state.screen) {
    case "intro":
      return renderIntro();
    case "question":
      return renderQuestion(state);
    case "divider":
      return renderDivider();
    case "survey":
      return renderSurvey(state);
    case "map":
      return renderTree(state);
  }
}

subscribe((state) => {
  render(state);
  window.scrollTo({ top: 0, behavior: "auto" });
});

setState(initialState());
