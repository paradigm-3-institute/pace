/* ---------------------------------------------------------------------
   The screens before the map: intro, branching point, divider, extra
   question. Each takes the current state and draws it. Clicks dispatch a
   transition from state.js and nothing else; the redraw follows from the
   store. The map has its own file.
   ------------------------------------------------------------------- */

import { QUIZ_DATA } from "./content.js";
import { el, icon, button, stage, controls, chrome, stagger, fitScreen, fatal } from "./dom.js";
import { dispatch } from "./store.js";
import {
  begin,
  choose,
  back,
  enterSurvey,
  answerSurvey,
  skipSurvey,
  surveyBack,
  surveyQuestions,
  surveyApplies,
} from "./state.js";

/* The fixed labels around the content, all editable in content.js. */
const UI = QUIZ_DATA.ui;

/* The order the options are shown in is drawn once per session per
   question — so going Back and forward again doesn't shuffle the cards
   under the reader, and neither does starting again. Each entry is a
   list of indexes into that question's options in content.js.

   Answers that form a scale are shuffled as a sequence: they keep their
   order and the whole run is either read up or read down, decided by a
   coin flip. Scrambling a scale would make a reader hunt for their
   answer, while always printing it one way round would bias which end
   gets picked. Everything else is shuffled freely. */
const order = {};
for (const [id, q] of Object.entries(QUIZ_DATA.questions)) {
  const indexes = q.options.map((_, i) => i);
  const isScale = q.options.every((o) => typeof o.rank === "number");

  if (q.order === "fixed") {
    /* left exactly as written in content.js */
  } else if (isScale) {
    const direction = Math.random() < 0.5 ? 1 : -1;
    indexes.sort((a, b) => (q.options[a].rank - q.options[b].rank) * direction);
  } else {
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
  }
  order[id] = indexes;
}

export function renderIntro() {
  const intro = QUIZ_DATA.intro;
  if (!intro) return fatal("There is no `intro` block.");

  chrome(false);
  stage.replaceChildren();
  controls.replaceChildren();

  const wrap = el("div", "intro");
  const mark = icon(intro.icon, "q-icon");
  wrap.append(mark);

  const kicker = intro.kicker ? el("p", "kicker", intro.kicker) : null;
  const title = el("h2", "intro-title", intro.title);
  const text = el("p", "intro-text", intro.text);
  const note = intro.note ? el("p", "intro-note", intro.note) : null;
  if (kicker) wrap.append(kicker);
  wrap.append(title, text);
  if (note) wrap.append(note);

  const actions = el("div", "intro-actions");
  const go = button(intro.button, () => dispatch(begin));
  go.classList.add("btn-primary");
  if (intro.buttonIcon) go.prepend(icon(intro.buttonIcon, "btn-icon"));
  actions.append(go);
  wrap.append(actions);

  stage.append(wrap);
  fitScreen();
  stagger([mark, kicker, title, text, note, actions]);
}

export function renderQuestion(state) {
  const q = QUIZ_DATA.questions[state.currentId];
  if (!q) return fatal(`No question with the id "${state.currentId}".`);

  chrome(true);
  stage.replaceChildren();
  controls.replaceChildren();

  const head = el("div", "q-head");
  const mark = icon(q.icon, "q-icon");
  const kicker = el("p", "kicker", q.kicker);
  head.append(mark, kicker);
  stage.append(head);

  const body = el("div", "q-body");
  const stem = el("h2", "stem", q.stem);
  const help = q.help ? el("p", "help", q.help) : null;
  body.append(stem);
  if (help) body.append(help);

  const grid = el("div", "options");
  /* One column per option on a wide screen; they stack on a narrow one. */
  grid.style.setProperty("--cols", String(q.options.length));

  for (const index of order[state.currentId]) {
    const option = q.options[index];
    const card = el("button", "option");
    card.type = "button";
    card.append(el("span", "option-label", option.label));
    card.append(el("p", "option-text", option.text));
    card.addEventListener("click", () => dispatch(choose, index));
    grid.append(card);
  }
  body.append(grid);
  stage.append(body);

  controls.append(button(UI.backButton, () => dispatch(back)));
  fitScreen();
  /* The cards last, one after another, so the eye reaches the question
     before the answers arrive. */
  stagger([mark, kicker, stem, help, ...grid.children]);
}

/* The page between the last branching point and the extra questions.
   One button, no way back: the camp is decided by the time this shows. */
export function renderDivider() {
  const copy = QUIZ_DATA.survey?.intro;
  if (!copy) return fatal("There is no `survey.intro` block.");

  chrome(true);
  stage.replaceChildren();
  controls.replaceChildren();

  const wrap = el("div", "intro divider");
  const text = el("p", "intro-text", copy.text);
  const actions = el("div", "intro-actions");
  const go = button(copy.button, () => dispatch(enterSurvey));
  go.classList.add("btn-primary");
  actions.append(go);
  wrap.append(text, actions);

  stage.append(wrap);
  fitScreen();
  stagger([text, actions]);
}

/* One extra question at a time, in the order written, skipping any
   whose showIf isn't met. Choosing an answer moves on at once; an
   "other" answer opens a box first. Any of them can be skipped. */
export function renderSurvey(state) {
  const questions = surveyQuestions();
  const q = questions[state.surveyIndex];
  if (!q) return fatal(`No extra question at position ${state.surveyIndex}.`);

  /* numbered among the questions that apply right now */
  const asked = questions.filter((each) => surveyApplies(state, each));

  chrome(true);
  stage.replaceChildren();
  controls.replaceChildren();

  const head = el("div", "q-head");
  const glyph = q.icon ? icon(q.icon, "q-icon") : null;
  if (glyph) head.append(glyph);
  const kicker = el(
    "p",
    "kicker",
    String(UI.surveyKicker)
      .replace("{n}", String(asked.indexOf(q) + 1))
      .replace("{total}", String(asked.length)),
  );
  head.append(kicker);
  stage.append(head);

  const body = el("div", "q-body");
  const stem = el("h2", "stem", q.stem);
  body.append(stem);
  const help = q.help ? el("p", "help", q.help) : null;
  if (help) body.append(help);

  const list = el("div", "choices");
  const previous = state.survey[q.id];

  /* The box an "other" answer opens. One box serves every such
     option; which one is active decides the prompt and what is saved. */
  let active = null;
  const otherRow = el("div", "other-row");
  otherRow.hidden = true;
  const otherInput = document.createElement("input");
  otherInput.type = "text";
  otherInput.className = "other-input";
  otherInput.maxLength = 120;
  otherInput.setAttribute("aria-label", q.stem);
  const otherGo = button(UI.continueButton, () => {
    const text = otherInput.value.trim();
    if (!text || active === null) return otherInput.focus();
    const option = q.options[active];
    dispatch(answerSurvey, { answer: option.label, index: active, detail: text });
  });
  otherGo.classList.add("btn-primary");
  otherGo.disabled = true;
  /* Continue wakes up as soon as there is something to continue with. */
  otherInput.addEventListener("input", () => {
    otherGo.disabled = otherInput.value.trim() === "";
  });
  otherInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !otherGo.disabled) otherGo.click();
  });
  otherRow.append(otherInput, otherGo);

  const choices = [];
  const mark = (i) => {
    for (const c of choices) delete c.dataset.chosen;
    choices[i].dataset.chosen = "true";
  };
  const open = (i) => {
    active = i;
    otherInput.placeholder = q.options[i].placeholder || UI.otherPlaceholder;
    otherRow.hidden = false;
  };

  q.options.forEach((option, i) => {
    const choice = el("button", "choice", option.label);
    choice.type = "button";
    choice.addEventListener("click", () => {
      mark(i);
      if (option.other) {
        open(i);
        otherInput.focus();
        return;
      }
      dispatch(answerSurvey, { answer: option.label, index: i });
    });
    choices.push(choice);
    list.append(choice);
  });

  /* coming back to a question shows what was chosen before */
  if (previous && q.options[previous.index]) {
    mark(previous.index);
    if (q.options[previous.index].other) {
      open(previous.index);
      otherInput.value = previous.detail || "";
      otherGo.disabled = otherInput.value.trim() === "";
    }
  }

  body.append(list);
  if (q.options.some((o) => o.other)) body.append(otherRow);
  stage.append(body);

  /* Back to the previous extra question, or the divider; and Skip. */
  controls.append(button(UI.backButton, () => dispatch(surveyBack)));
  controls.append(button(UI.skipButton, () => dispatch(skipSurvey)));

  fitScreen();
  stagger([glyph, kicker, stem, help, ...list.children]);
}
