import { QUIZ_DATA } from "./content.js";
import { ScreenIcon, Kicker, Stem, Help, Frame, Card, CardLabel, CardText } from "./ui.jsx";

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
        <ScreenIcon name={q.icon} at={0} />
        <Kicker text={q.kicker} at={1} />
      </div>

      <div class="flex flex-col justify-start">
        <Stem at={2}>{q.stem}</Stem>
        {q.help && <Help at={3}>{q.help}</Help>}

        {/* The cards come last, one after another, so the eye reaches the
            question before the answers arrive. */}
        <Frame cols={q.options.length}>
          {order[id].map((index, i) => {
            const option = q.options[index];
            return (
              <Card
                key={index}
                class="flex flex-col gap-4 px-5 py-4 lg:min-h-[16em]"
                at={4 + i}
                onClick={() => onChoose(index)}
              >
                <CardLabel>{option.label}</CardLabel>
                <CardText>{option.text}</CardText>
              </Card>
            );
          })}
        </Frame>
      </div>
    </>
  );
}
