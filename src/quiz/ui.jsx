/* ---------------------------------------------------------------------
   The pieces the screens are built from. The palette and rules follow
   the essay's stylesheets: the sans for headings and labels, the serif
   for answers, --color-conclusion-bg for the ink and --color-then-what-bg
   for secondary text, 2px rules.

   Each screen's parts arrive one after another, top to bottom. A part's
   `at` is its place in that sequence; readers who ask for reduced motion
   get the screen at once.
   ------------------------------------------------------------------- */

const rise = (at) =>
  at === undefined
    ? {}
    : { class: "animate-rise motion-reduce:animate-none", style: { animationDelay: `${at * 55}ms` } };

const join = (...classes) => classes.filter(Boolean).join(" ");

/* A block that rises in with the rest of the screen. */
export function Rise({ at, class: className, children }) {
  const r = rise(at);
  return (
    <div class={join(className, r.class)} style={r.style}>
      {children}
    </div>
  );
}

/* A Phosphor icon, hidden from screen readers; the text beside it says
   what it means. `name` is the class pair from content.js. */
export function Icon({ name, class: className, at }) {
  const r = rise(at);
  return <i class={join(className, name, r.class)} style={r.style} aria-hidden="true" />;
}

/* The large icon at the top of a screen. */
export function ScreenIcon({ name, at }) {
  return <Icon name={name} class="block text-[3.8em] leading-none text-(--color-conclusion-bg) mb-3" at={at} />;
}

/* "Branching Point 01 · Transformation" on two lines. */
export function Kicker({ text, at }) {
  const [first, ...rest] = String(text).split(" · ");
  return (
    <Rise at={at}>
      <p class="font-sans text-[0.9em] leading-tight text-(--color-then-what-bg)">
        {first}
        {rest.length > 0 && (
          <span class="block font-serif text-[1.25em] font-bold leading-[1.25] text-(--color-conclusion-bg) mt-1">
            {rest.join(" · ")}
          </span>
        )}
      </p>
    </Rise>
  );
}

/* The question. */
export function Stem({ children, at }) {
  const r = rise(at);
  return (
    <h2
      class={join(
        "font-sans text-[1.3em] md:text-[1.6em] font-semibold tracking-[-0.01em] leading-[1.2] text-(--color-conclusion-bg) text-balance mt-6",
        r.class,
      )}
      style={r.style}
    >
      {children}
    </h2>
  );
}

/* The smaller line beneath a question. */
export function Help({ children, at }) {
  const r = rise(at);
  return (
    <p
      class={join("font-sans text-[0.9em] leading-normal text-(--color-then-what-bg) text-balance mt-4", r.class)}
      style={r.style}
    >
      {children}
    </p>
  );
}

/* A set of cards, each standing on its own. `cols` is how many sit
   side by side from lg; below that they stack. */
export function Frame({ cols = 1, class: className, children }) {
  return (
    <div
      class={join(
        "grid gap-4 mt-10 grid-cols-1 lg:grid-cols-[repeat(var(--cols),1fr)]",
        className,
      )}
      style={{ "--cols": cols }}
    >
      {children}
    </div>
  );
}

/* One answer. Framed twice like the essay's panels: its rule, then a
   second line set 4px in from it. */
export function Card({ class: className, at, children, ...rest }) {
  const r = rise(at);
  return (
    <button
      type="button"
      class={join(
        "cursor-pointer border-2 border-(--color-conclusion-bg) outline-2 -outline-offset-6 outline-(--color-conclusion-bg) bg-background text-left transition-colors duration-120 hover:bg-(--color-why-pace-bg) focus-visible:bg-(--color-why-pace-bg) focus-visible:outline-none",
        className,
        r.class,
      )}
      style={r.style}
      {...rest}
    >
      {children}
    </button>
  );
}

export function CardLabel({ children }) {
  return (
    <span class="block font-serif text-[1.25em] font-bold leading-[1.25] text-(--color-conclusion-bg) text-balance">
      {children}
    </span>
  );
}

export function CardText({ children }) {
  return <p class="font-serif text-[1em] leading-[1.6] text-foreground text-pretty">{children}</p>;
}

/* The one button: sidebar green, the page's cream for the label, which
   turns to the pace-what green on hover. Exported as a class string too,
   for the map's Start again button, which is plain DOM (map.js). */
export const BUTTON =
  "inline-flex items-center gap-[9px] cursor-pointer rounded-[9px] font-sans font-medium px-4 py-2 bg-sidebar text-(--color-introduction-bg) transition-colors duration-120 hover:text-(--color-pace-what-bg) focus-visible:text-(--color-pace-what-bg) focus-visible:outline-none disabled:cursor-default disabled:hover:text-(--color-introduction-bg)";

export function Button({ icon, trailingIcon, class: className, children, ...rest }) {
  return (
    <button type="button" class={join(BUTTON, className)} {...rest}>
      {icon && <Icon name={icon} class="text-[1.3em] leading-none -mt-px antialiased" />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} class="text-[1.3em] leading-none -mt-px antialiased" />}
    </button>
  );
}
