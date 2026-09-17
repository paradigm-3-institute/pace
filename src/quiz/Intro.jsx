import { QUIZ_DATA } from "./content.js";
import { Button, Icon, Rise } from "./ui.jsx";

/* The cover: the icon, the kicker as a heading, the note and the
   button. Centred from md, where the sidebar carries the introduction;
   on a phone it starts at the top, so the button is in view. */
export function Intro({ onBegin }) {
  const intro = QUIZ_DATA.intro;
  return (
    <div class="flex flex-auto flex-col items-center justify-start md:justify-center max-w-md mx-auto">
      <Icon name={intro.icon} class="block text-[56px] md:text-[72px] leading-none text-(--color-conclusion-bg)" at={0} />
      <Rise at={1}>
        {/* The title on a phone, where the header is a bare bar; from md
            the sidebar shows the title, so the kicker heads the card. */}
        <h2 class="font-sans text-[1.8em] md:text-[2.6em] text-center font-semibold tracking-[-0.02em] leading-[1.1] text-(--color-conclusion-bg) mt-6">
          <span class="md:hidden">{intro.title || intro.kicker}</span>
          <span class="hidden md:inline">{intro.kicker || intro.title}</span>
        </h2>
      </Rise>
      {/* The introduction: on a phone it is here, since the header above
          has no room for it; from md the sidebar carries it. */}
      {intro.text && (
        <Rise at={2} class="md:hidden">
          <p class="font-sans text-[0.95em] leading-[1.55] text-(--color-then-what-bg) text-pretty mt-6">{intro.text}</p>
        </Rise>
      )}
      {intro.note && (
        <Rise at={3}>
          <p class="font-serif text-[1em] leading-[1.6] text-foreground text-pretty mt-6 md:mt-8">{intro.note}</p>
        </Rise>
      )}
      <Rise at={4} class="mt-8 md:mt-12">
        <Button icon={intro.buttonIcon} onClick={onBegin}>
          {intro.button}
        </Button>
      </Rise>
    </div>
  );
}
