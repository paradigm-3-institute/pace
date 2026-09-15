import { useState, useRef, useEffect } from "preact/hooks";
import { QUIZ_DATA } from "./content.js";
import { surveyQuestions, surveyApplies } from "./state.js";
import { Button, Icon, Kicker, ICON, STEM, HELP, FRAME, CARD, CARD_LABEL, RISE, delay } from "./ui.jsx";

const UI = QUIZ_DATA.ui;

/* One extra question at a time. Choosing an answer moves on at once; an
   "other" answer opens a box first. `onAnswer` gets { answer, index }
   or, for an "other" option, { answer, index, detail }. */
export function Survey({ state, onAnswer }) {
  const questions = surveyQuestions();
  const q = questions[state.surveyIndex];
  const previous = state.survey[q.id];

  /* numbered among the questions that apply right now */
  const asked = questions.filter((each) => surveyApplies(state, each));
  const kicker = String(UI.surveyKicker)
    .replace("{n}", String(asked.indexOf(q) + 1))
    .replace("{total}", String(asked.length));

  /* Coming back to a question shows what was chosen before, including
     an "other" answer's text. */
  const [chosen, setChosen] = useState(previous?.index ?? null);
  const [detail, setDetail] = useState(previous?.detail || "");
  const other = chosen !== null && q.options[chosen].other ? q.options[chosen] : null;

  /* Opening the box puts the cursor in it. */
  const input = useRef(null);
  useEffect(() => {
    if (other) input.current?.focus();
  }, [other]);

  const submitOther = () => {
    const text = detail.trim();
    if (!text || !other) return;
    onAnswer({ answer: other.label, index: chosen, detail: text });
  };

  return (
    <>
      <div class="flex-none">
        {q.icon && <Icon name={q.icon} class={`${ICON} ${RISE}`} style={delay(0)} />}
        <div class={RISE} style={delay(1)}>
          <Kicker text={kicker} />
        </div>
      </div>

      <div class="flex flex-auto flex-col justify-start">
        <h2 class={`${STEM} ${RISE}`} style={delay(2)}>
          {q.stem}
        </h2>
        {q.help && (
          <p class={`${HELP} ${RISE}`} style={delay(3)}>
            {q.help}
          </p>
        )}

        <div class={`${FRAME} grid-cols-1 max-w-[30em]`}>
          {q.options.map((option, i) => (
            <button
              type="button"
              key={i}
              class={`${CARD} ${CARD_LABEL} text-[19px] px-6 py-4 data-[chosen=true]:bg-(--color-why-pace-bg) ${RISE}`}
              style={delay(4 + i)}
              data-chosen={chosen === i ? "true" : undefined}
              onClick={() => {
                setChosen(i);
                if (!option.other) onAnswer({ answer: option.label, index: i });
              }}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* The box an "other" answer opens. It keeps its space whether or
            not it is showing, so choosing an answer that needs it doesn't
            shove the buttons about; it only fades in. */}
        {q.options.some((o) => o.other) && (
          <div
            class={`flex gap-2.5 max-w-[30em] w-full mt-3.5 transition-opacity duration-180 ${other ? "" : "invisible opacity-0"}`}
          >
            <input
              type="text"
              class="flex-auto min-w-0 text-[16px] text-foreground bg-background border-2 border-sidebar rounded-sm px-3.5 py-2.5 focus:outline-none focus:border-(--color-conclusion-bg)"
              maxLength={120}
              aria-label={q.stem}
              placeholder={other?.placeholder || UI.otherPlaceholder}
              value={detail}
              ref={input}
              onInput={(event) => setDetail(event.currentTarget.value)}
              onKeyDown={(event) => event.key === "Enter" && submitOther()}
            />
            {/* Continue wakes up as soon as there is something to continue with. */}
            <Button variant="primary" disabled={detail.trim() === ""} onClick={submitOther}>
              {UI.continueButton}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
