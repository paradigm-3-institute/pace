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

import { useState } from "preact/hooks";
import { QUIZ_DATA } from "./content.js";
import * as T from "./state.js";
import { Button } from "./ui.jsx";
import { Intro } from "./Intro.jsx";
import { Question } from "./Question.jsx";
import { Divider } from "./Divider.jsx";
import { Survey } from "./Survey.jsx";
import { Map } from "./Map.jsx";

const UI = QUIZ_DATA.ui;

export default function Quiz() {
  const [state, setState] = useState(T.initialState);
  const go = (transition, ...args) => {
    setState((s) => transition(s, ...args));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

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
      controls = <Button onClick={() => go(T.back)}>{UI.backButton}</Button>;
      break;
    case "divider":
      screen = <Divider key={key} onContinue={() => go(T.enterSurvey)} />;
      break;
    case "survey":
      screen = <Survey key={key} state={state} onAnswer={(answer) => go(T.answerSurvey, answer)} />;
      controls = (
        <>
          <Button onClick={() => go(T.surveyBack)}>{UI.backButton}</Button>
          <Button onClick={() => go(T.skipSurvey)}>{UI.skipButton}</Button>
        </>
      );
      break;
    case "map":
      screen = <Map key={key} state={state} onRestart={() => go(T.restart)} />;
      break;
  }

  return (
    <>
      {/* Anchored to the top, not centred: centring would move the icon
          up and down with the length of each question. */}
      <div class="flex flex-auto flex-col justify-start" aria-live="polite">
        {screen}
      </div>
      {controls && <div class="mt-6 flex flex-wrap gap-3">{controls}</div>}
    </>
  );
}
