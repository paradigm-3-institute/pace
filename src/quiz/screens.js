/* ---------------------------------------------------------------------
   The screens before the map: intro, branching point, divider, extra
   question. Each takes the current state and draws it. Clicks dispatch a
   transition from state.js and nothing else; the redraw follows from the
   store. The map has its own file.
   ------------------------------------------------------------------- */

import { QUIZ_DATA } from "./content.js";
import { el, icon, button, stage, controls, stagger, fatal } from "./dom.js";
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

/* ---- the screens' shared type, as utility classes ----
   Left-aligned, on the essay's palette: the sans, light, for the
   question; the serif for the answers; --color-conclusion-bg for the
   ink and --color-then-what-bg for secondary text. The cards sit in a
   double rule like the essay's article border. */

/* The icon and kicker pinned to the top of a screen. */
const ICON = "block text-[72px] leading-none text-(--color-conclusion-bg) mb-4";
const KICKER = "font-sans text-[17px] leading-tight text-(--color-then-what-bg)";
/* The second line of a kicker ("Branching Point 01 · Transformation"). */
const KICKER_STRONG = "block font-serif text-[20px] font-bold text-(--color-conclusion-bg) mt-1";

const STEM =
  "font-sans text-[30px] md:text-[39px] font-bold tracking-[-0.02em] leading-[1.15] text-(--color-conclusion-bg) text-balance mt-8";
const HELP = "font-sans text-[17px] leading-normal text-(--color-then-what-bg) text-balance mt-4";

/* The question, its note and the cards, top-anchored below the kicker. */
const BODY = "flex flex-auto flex-col justify-start";

/* The frame around a set of cards: a 2px rule, a 4px gutter, then the
   cards' own 2px rules. */
const FRAME = "grid gap-1 p-1 border-2 border-(--color-conclusion-bg) bg-background mt-10";
const CARD =
  "cursor-pointer border-2 border-(--color-conclusion-bg) bg-background text-left transition-colors duration-120 hover:bg-(--color-why-pace-bg) focus-visible:bg-(--color-why-pace-bg) focus-visible:outline-none";
const CARD_LABEL = "block font-serif text-[22px] font-bold leading-[1.3] text-(--color-conclusion-bg) text-balance";
const CARD_TEXT = "font-serif text-[17px] leading-[1.55] text-foreground text-pretty";

/* "Branching Point 01 · Transformation" becomes two lines. */
function kicker(text) {
  const [first, ...rest] = String(text).split(" · ");
  const p = el("p", KICKER, first);
  if (rest.length) p.append(el("span", KICKER_STRONG, rest.join(" · ")));
  return p;
}

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

  stage.replaceChildren();
  controls.replaceChildren();

  /* A centred cover. The sidebar carries the introduction, so this is
     just the icon, the kicker as a heading, the note and the button. */
  const wrap = el("div", "flex flex-auto flex-col items-center justify-center text-center max-w-[36em] mx-auto");
  const mark = icon(intro.icon, "block text-[72px] leading-none text-(--color-conclusion-bg)");
  const title = el(
    "h2",
    "font-sans text-[39px] font-bold tracking-[-0.02em] leading-none text-(--color-conclusion-bg) mt-6",
    intro.kicker || intro.title,
  );
  const note = intro.note
    ? el("p", "font-sans text-[19px] leading-[1.45] text-(--color-conclusion-bg) text-balance mt-14", intro.note)
    : null;
  wrap.append(mark, title);
  if (note) wrap.append(note);

  const actions = el("div", "mt-14");
  const go = button(intro.button, () => dispatch(begin), "primary");
  if (intro.buttonIcon) go.prepend(icon(intro.buttonIcon, "text-[1.3em] leading-none -mt-px"));
  actions.append(go);
  wrap.append(actions);

  stage.append(wrap);
  stagger([mark, title, note, actions]);
}

export function renderQuestion(state) {
  const q = QUIZ_DATA.questions[state.currentId];
  if (!q) return fatal(`No question with the id "${state.currentId}".`);

  stage.replaceChildren();
  controls.replaceChildren();

  const head = el("div", "flex-none");
  const mark = icon(q.icon, ICON);
  const label = kicker(q.kicker);
  head.append(mark, label);
  stage.append(head);

  const body = el("div", BODY);
  const stem = el("h2", STEM, q.stem);
  const help = q.help ? el("p", HELP, q.help) : null;
  body.append(stem);
  if (help) body.append(help);

  /* One column per option on a wide screen, a stack below lg. */
  const grid = el("div", `${FRAME} grid-cols-1 lg:grid-cols-[repeat(var(--cols),1fr)]`);
  grid.style.setProperty("--cols", String(q.options.length));

  for (const index of order[state.currentId]) {
    const option = q.options[index];
    const card = el("button", `${CARD} flex flex-col gap-4 px-9 py-8 lg:min-h-[16em]`);
    card.type = "button";
    card.append(el("span", CARD_LABEL, option.label));
    card.append(el("p", CARD_TEXT, option.text));
    card.addEventListener("click", () => dispatch(choose, index));
    grid.append(card);
  }
  body.append(grid);
  stage.append(body);

  controls.append(button(UI.backButton, () => dispatch(back)));
  /* The cards last, one after another, so the eye reaches the question
     before the answers arrive. */
  stagger([mark, label, stem, help, ...grid.children]);
}

/* The page between the last branching point and the extra questions.
   One button, no way back: the camp is decided by the time this shows. */
export function renderDivider() {
  const copy = QUIZ_DATA.survey?.intro;
  if (!copy) return fatal("There is no `survey.intro` block.");

  stage.replaceChildren();
  controls.replaceChildren();

  /* Sits in the middle of the screen, like a question's body. */
  const wrap = el("div", `${BODY} max-w-[34em]`);
  const text = el("p", "font-serif text-[19px] leading-[1.6] text-pretty", copy.text);
  const actions = el("div", "mt-8");
  actions.append(button(copy.button, () => dispatch(enterSurvey), "primary"));
  wrap.append(text, actions);

  stage.append(wrap);
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

  stage.replaceChildren();
  controls.replaceChildren();

  const head = el("div", "flex-none");
  const glyph = q.icon ? icon(q.icon, ICON) : null;
  if (glyph) head.append(glyph);
  const label = kicker(
    String(UI.surveyKicker)
      .replace("{n}", String(asked.indexOf(q) + 1))
      .replace("{total}", String(asked.length)),
  );
  head.append(label);
  stage.append(head);

  const body = el("div", BODY);
  const stem = el("h2", STEM, q.stem);
  body.append(stem);
  const help = q.help ? el("p", HELP, q.help) : null;
  if (help) body.append(help);

  const list = el("div", `${FRAME} grid-cols-1 max-w-[30em]`);
  const previous = state.survey[q.id];

  /* The box an "other" answer opens. One box serves every such
     option; which one is active decides the prompt and what is saved.
     It keeps its space whether or not it is showing, so choosing an
     answer that needs it doesn't shove the buttons about; it only
     fades in. */
  let active = null;
  const otherRow = el("div", "flex gap-2.5 max-w-[30em] w-full mt-3.5 transition-opacity duration-180 invisible opacity-0");
  const otherInput = document.createElement("input");
  otherInput.type = "text";
  otherInput.className =
    "flex-auto min-w-0 text-[16px] text-foreground bg-background border-2 border-sidebar rounded-sm px-3.5 py-2.5 focus:outline-none focus:border-(--color-conclusion-bg)";
  otherInput.maxLength = 120;
  otherInput.setAttribute("aria-label", q.stem);
  const otherGo = button(
    UI.continueButton,
    () => {
      const text = otherInput.value.trim();
      if (!text || active === null) return otherInput.focus();
      const option = q.options[active];
      dispatch(answerSurvey, { answer: option.label, index: active, detail: text });
    },
    "primary",
  );
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
    otherRow.classList.remove("invisible", "opacity-0");
  };

  q.options.forEach((option, i) => {
    const choice = el(
      "button",
      `${CARD} ${CARD_LABEL} text-[19px] px-6 py-4 data-[chosen=true]:bg-(--color-why-pace-bg)`,
      option.label,
    );
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

  stagger([glyph, label, stem, help, ...list.children]);
}
