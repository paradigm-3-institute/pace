import { QUIZ_DATA } from "./content.js";
import { Icon, Kicker, ICON, STEM, HELP, FRAME, CARD, CARD_LABEL, CARD_TEXT, RISE, delay } from "./ui.jsx";

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

/* A branching point. `onChoose` gets the option's index in content.js,
   never its position on screen, so what is stored stays meaningful
   when the copy is reworded. */
export function Question({ id, onChoose }) {
  const q = QUIZ_DATA.questions[id];
  return (
    <>
      <div class="flex-none">
        <Icon name={q.icon} class={`${ICON} ${RISE}`} style={delay(0)} />
        <div class={RISE} style={delay(1)}>
          <Kicker text={q.kicker} />
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

        {/* One column per option on a wide screen, a stack below lg. The
            cards come last, one after another, so the eye reaches the
            question before the answers arrive. */}
        <div
          class={`${FRAME} grid-cols-1 lg:grid-cols-[repeat(var(--cols),1fr)]`}
          style={{ "--cols": q.options.length }}
        >
          {order[id].map((index, i) => {
            const option = q.options[index];
            return (
              <button
                type="button"
                key={index}
                class={`${CARD} flex flex-col gap-4 px-9 py-8 lg:min-h-[16em] ${RISE}`}
                style={delay(4 + i)}
                onClick={() => onChoose(index)}
              >
                <span class={CARD_LABEL}>{option.label}</span>
                <p class={CARD_TEXT}>{option.text}</p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
