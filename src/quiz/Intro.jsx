import { QUIZ_DATA } from "./content.js";
import { Button, Icon, RISE, delay } from "./ui.jsx";

/* A centred cover. The sidebar carries the introduction, so this is
   just the icon, the kicker as a heading, the note and the button. */
export function Intro({ onBegin }) {
  const intro = QUIZ_DATA.intro;
  return (
    <div class="flex flex-auto flex-col items-center justify-center max-w-md mx-auto">
      <Icon
        name={intro.icon}
        class={`block text-[72px] leading-none text-(--color-conclusion-bg) ${RISE}`}
        style={delay(0)}
      />
      <h2
        class={`font-sans text-4xl text-center font-bold tracking-[-0.02em] leading-none text-(--color-conclusion-bg) mt-6 ${RISE}`}
        style={delay(1)}
      >
        {intro.kicker || intro.title}
      </h2>
      {intro.note && (
        <p class={`font-sans text-lg leading-[1.45] text-(--color-conclusion-bg) mt-8 ${RISE}`} style={delay(2)}>
          {intro.note}
        </p>
      )}
      <div class={`mt-12 ${RISE}`} style={delay(3)}>
        <Button variant="primary" icon={intro.buttonIcon} onClick={onBegin}>
          {intro.button}
        </Button>
      </div>
    </div>
  );
}
