/* ---------------------------------------------------------------------
   What the quiz remembers, and every way it can change.

   The state is one plain object:

     screen       "intro" | "question" | "divider" | "survey" | "map"
     history      one entry per answered branching point, in order:
                  { questionId, kicker, label, optionIndex }
     currentId    the branching point on screen (while screen is "question")
     campId       where the walk ended, once it has
     survey       answers to the extra questions, by question id:
                  { answer, index, detail? }
     surveyIndex  the extra question on screen (while screen is "survey")

   Every function below takes a state and returns the next one, without
   touching the DOM or anything else.
   ------------------------------------------------------------------- */

import { QUIZ_DATA } from "./content.js";

export function initialState() {
  return {
    screen: "intro",
    history: [],
    currentId: QUIZ_DATA.start,
    campId: null,
    survey: {},
    surveyIndex: 0,
  };
}

/* ---- the branching points ---------------------------------------- */

export function begin(s) {
  return { ...s, screen: "question", currentId: QUIZ_DATA.start };
}

/* `optionIndex` is the option's index in content.js, never its position
   on screen — so what is stored stays meaningful when copy is reworded. */
export function choose(s, optionIndex) {
  const q = QUIZ_DATA.questions[s.currentId];
  const option = q.options[optionIndex];
  const history = [
    ...s.history,
    { questionId: s.currentId, kicker: q.kicker, label: option.label, optionIndex },
  ];
  if (option.next) {
    return { ...s, history, currentId: option.next };
  }
  return afterQuestions({ ...s, history, campId: option.camp });
}

/* The camp is decided. If there is a survey, its divider page comes
   next; otherwise straight to the map. */
function afterQuestions(s) {
  return { ...s, screen: QUIZ_DATA.survey?.intro ? "divider" : "map" };
}

/* Back to the previous branching point, discarding its answer; from
   the first one, back to the intro. */
export function back(s) {
  const last = s.history[s.history.length - 1];
  const history = s.history.slice(0, -1);
  if (!last) return { ...s, history, campId: null, screen: "intro" };
  return { ...s, history, campId: null, screen: "question", currentId: last.questionId };
}

/* ---- the extra questions ----------------------------------------- */

export function surveyQuestions() {
  return QUIZ_DATA.survey?.questions || [];
}

/* Whether an extra question is asked, given the answers so far. */
export function surveyApplies(s, q) {
  const gate = q.showIf;
  if (!gate) return true;
  const answer = s.survey[gate.question];
  if ("chose" in gate) return Boolean(answer) && answer.index === gate.chose;
  if ("choseNot" in gate) return !answer || answer.index !== gate.choseNot;
  return true;
}

/* The next question that applies, walking from `from` in `direction`.
   Past either end means there are none left that way. */
export function surveyStep(s, from, direction) {
  const questions = surveyQuestions();
  let i = from;
  while (i >= 0 && i < questions.length && !surveyApplies(s, questions[i])) {
    i += direction;
  }
  return i;
}

/* Lands on the first applicable question from `from`; past the end is
   the map, before the start is the divider. */
function gotoSurvey(s, from, direction) {
  const index = surveyStep(s, from, direction);
  if (index >= surveyQuestions().length) return { ...s, screen: "map" };
  if (index < 0) return { ...s, screen: "divider" };
  return { ...s, screen: "survey", surveyIndex: index };
}

export function enterSurvey(s) {
  return gotoSurvey(s, 0, 1);
}

/* `answer` is { answer, index } or, for an "other" option, { answer,
   index, detail }. */
export function answerSurvey(s, answer) {
  const q = surveyQuestions()[s.surveyIndex];
  const survey = { ...s.survey, [q.id]: answer };
  return gotoSurvey({ ...s, survey }, s.surveyIndex + 1, 1);
}

export function skipSurvey(s) {
  const q = surveyQuestions()[s.surveyIndex];
  const { [q.id]: _dropped, ...survey } = s.survey;
  return gotoSurvey({ ...s, survey }, s.surveyIndex + 1, 1);
}

export function surveyBack(s) {
  return gotoSurvey(s, s.surveyIndex - 1, -1);
}

/* ---- the map's banner ---------------------------------------------- */

/* Whether the camp felt right: { answer: "yes" } or
   { answer: "no", reason, index, detail? }. Kept with the other survey
   answers. */
export function answerFit(s, answer) {
  return { ...s, survey: { ...s.survey, fit: answer } };
}

/* ---- the end ------------------------------------------------------- */

export function restart() {
  return initialState();
}
