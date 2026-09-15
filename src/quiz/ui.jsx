/* ---------------------------------------------------------------------
   The small pieces every screen is built from, and their shared type.
   The palette and rules follow the essay's stylesheets: the sans for
   headings and labels, the serif for answers, --color-conclusion-bg for
   the ink and --color-then-what-bg for secondary text, 2px rules.
   ------------------------------------------------------------------- */

/* The icon and kicker pinned to the top of a screen. */
export const ICON = "block text-[72px] leading-none text-(--color-conclusion-bg) mb-4";
const KICKER = "font-sans text-[17px] leading-tight text-(--color-then-what-bg)";
const KICKER_STRONG = "block font-serif text-[20px] font-bold text-(--color-conclusion-bg) mt-1";

export const STEM =
  "font-sans text-[30px] md:text-[39px] font-bold tracking-[-0.02em] leading-[1.15] text-(--color-conclusion-bg) text-balance mt-8";
export const HELP = "font-sans text-[17px] leading-normal text-(--color-then-what-bg) text-balance mt-4";

/* The frame around a set of cards: a 2px rule, a 4px gutter, then the
   cards' own 2px rules. */
export const FRAME = "grid gap-1 p-1 border-2 border-(--color-conclusion-bg) bg-background mt-10";
export const CARD =
  "cursor-pointer border-2 border-(--color-conclusion-bg) bg-background text-left transition-colors duration-120 hover:bg-(--color-why-pace-bg) focus-visible:bg-(--color-why-pace-bg) focus-visible:outline-none";
export const CARD_LABEL =
  "block font-serif text-[22px] font-bold leading-[1.3] text-(--color-conclusion-bg) text-balance";
export const CARD_TEXT = "font-serif text-[17px] leading-[1.55] text-foreground text-pretty";

const BUTTON = {
  default:
    "inline-flex items-center gap-[9px] cursor-pointer rounded-sm border-2 border-sidebar font-sans text-[15px] font-semibold tracking-[-0.02em] px-[18px] py-2 bg-transparent text-(--color-conclusion-bg) transition-colors duration-120 hover:bg-(--color-why-pace-bg) focus-visible:bg-(--color-why-pace-bg) focus-visible:outline-none",
  /* Reversed out, the way the essay sets its code blocks. */
  primary:
    "inline-flex items-center gap-[9px] cursor-pointer rounded-sm border-2 border-sidebar font-sans text-[17px] font-semibold tracking-[-0.02em] px-[26px] py-3 bg-sidebar text-dark transition-colors duration-120 hover:bg-(--color-conclusion-bg) focus-visible:bg-(--color-conclusion-bg) focus-visible:outline-none disabled:cursor-default disabled:hover:bg-sidebar",
};

export function Button({ variant = "default", icon, children, ...rest }) {
  return (
    <button type="button" class={BUTTON[variant]} {...rest}>
      {icon && <Icon name={icon} class="text-[1.3em] leading-none -mt-px" />}
      {children}
    </button>
  );
}

/* A Phosphor icon, hidden from screen readers; the text beside it says
   what it means. `name` is the class pair from content.js. */
export function Icon({ name, class: className, ...rest }) {
  return <i class={`${className} ${name}`} aria-hidden="true" {...rest} />;
}

/* "Branching Point 01 · Transformation" on two lines. */
export function Kicker({ text }) {
  const [first, ...rest] = String(text).split(" · ");
  return (
    <p class={KICKER}>
      {first}
      {rest.length > 0 && <span class={KICKER_STRONG}>{rest.join(" · ")}</span>}
    </p>
  );
}

/* Each screen's parts arrive one after another, top to bottom: give a
   part the RISE class and delay(i), its place in the sequence. Readers
   who ask for reduced motion get the screen at once. */
export const RISE = "animate-rise motion-reduce:animate-none";
export const delay = (i, step = 55) => ({ animationDelay: `${i * step}ms` });
