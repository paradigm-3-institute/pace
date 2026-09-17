import { QUIZ_DATA } from "./content.js";
import { Button, Rise } from "./ui.jsx";

/* The page between the last branching point and the extra questions.
   One button, no way back: the camp is decided by the time this shows.
   Centred on the page from md, where there is no icon to keep in place,
   and at the top on a phone, where centring would push the button down. */
export function Divider({ onContinue }) {
  const copy = QUIZ_DATA.survey.intro;
  return (
    <div class="flex flex-auto flex-col justify-start md:justify-center max-w-[34em] md:pb-[10vh]">
      <Rise at={0}>
        <p class="font-serif text-[1em] leading-[1.6] text-pretty">{copy.text}</p>
      </Rise>
      <Rise at={1} class="mt-8">
        <Button onClick={onContinue}>{copy.button}</Button>
      </Rise>
    </div>
  );
}
