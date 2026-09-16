import { QUIZ_DATA } from "./content.js";
import { Button, Icon, Rise } from "./ui.jsx";

/* A centred cover. The sidebar carries the introduction, so this is
   just the icon, the kicker as a heading, the note and the button. */
export function Intro({ onBegin }) {
  const intro = QUIZ_DATA.intro;
  return (
    <div class="flex flex-auto flex-col items-center justify-center max-w-md mx-auto">
      <Icon name={intro.icon} class="block text-[72px] leading-none text-(--color-conclusion-bg)" at={0} />
      <Rise at={1}>
        <h2 class="font-sans text-[2.2em] md:text-[2.6em] text-center font-semibold tracking-[-0.02em] leading-[1.1] text-(--color-conclusion-bg) mt-6">
          {intro.kicker || intro.title}
        </h2>
      </Rise>
      {intro.note && (
        <Rise at={2}>
          <p class="font-serif text-[1em] leading-[1.6] text-foreground text-pretty mt-8">{intro.note}</p>
        </Rise>
      )}
      <Rise at={3} class="mt-12">
        <Button icon={intro.buttonIcon} onClick={onBegin}>
          {intro.button}
        </Button>
      </Rise>
    </div>
  );
}
