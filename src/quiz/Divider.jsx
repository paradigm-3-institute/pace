import { QUIZ_DATA } from "./content.js";
import { Button, RISE, delay } from "./ui.jsx";

/* The page between the last branching point and the extra questions.
   One button, no way back: the camp is decided by the time this shows. */
export function Divider({ onContinue }) {
  const copy = QUIZ_DATA.survey.intro;
  return (
    <div class="flex flex-auto flex-col justify-start max-w-[34em]">
      <p class={`font-serif text-[19px] leading-[1.6] text-pretty ${RISE}`} style={delay(0)}>
        {copy.text}
      </p>
      <div class={`mt-8 ${RISE}`} style={delay(1)}>
        <Button variant="primary" onClick={onContinue}>
          {copy.button}
        </Button>
      </div>
    </div>
  );
}
