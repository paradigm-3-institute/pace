/* ---------------------------------------------------------------------
   The page's fixed parts and the small helpers every screen builds with.
   Nothing here knows about the walk; see state.js for that.
   ------------------------------------------------------------------- */

export const stage = document.getElementById("stage");
export const controls = document.getElementById("controls");

export const NS = "http://www.w3.org/2000/svg";

export const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/* The quiz's buttons: the essay's 2px rule and 4px radius, in sans.
   "primary" is reversed out, the way the essay sets its code blocks.
   "map" is the printed-diagram style the map's panel uses (quiz.css). */
const BUTTON = {
  default: [
    "inline-flex items-center gap-[9px] cursor-pointer rounded-sm border-2 border-sidebar",
    "font-sans text-[15px] font-semibold tracking-[-0.02em] px-[18px] py-2",
    "bg-transparent text-(--color-conclusion-bg) transition-colors duration-120",
    "hover:bg-(--color-why-pace-bg) focus-visible:bg-(--color-why-pace-bg) focus-visible:outline-none",
  ].join(" "),
  primary: [
    "inline-flex items-center gap-[9px] cursor-pointer rounded-sm border-2 border-sidebar",
    "font-sans text-[17px] font-semibold tracking-[-0.02em] px-[26px] py-3",
    "bg-sidebar text-dark transition-colors duration-120",
    "hover:bg-(--color-conclusion-bg) focus-visible:bg-(--color-conclusion-bg) focus-visible:outline-none",
    "disabled:cursor-default disabled:hover:bg-sidebar",
  ].join(" "),
  map: "map-btn",
};

export function button(text, onClick, variant = "default") {
  const b = el("button", BUTTON[variant], text);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}

/* A Phosphor icon, hidden from screen readers; the text beside it says
   what it means. */
export function icon(className, classes) {
  const i = el("i", `${classes} ${className}`);
  i.setAttribute("aria-hidden", "true");
  return i;
}

export function fatal(message) {
  stage.replaceChildren(
    el(
      "p",
      "text-[17px] leading-[1.55] text-pretty px-5 py-4 bg-(--color-why-pace-bg) text-(--color-conclusion-bg) border-l-[6px] border-(--color-conclusion-bg)",
      `Content problem in content.js — ${message}`,
    ),
  );
  controls.replaceChildren();
}

const STILL = window.matchMedia("(prefers-reduced-motion: reduce)");

/* Brings a screen's parts in one after the next, top to bottom. */
export function stagger(parts, step = 55) {
  if (STILL.matches) return;
  parts.filter(Boolean).forEach((part, i) => {
    part.classList.add("animate-rise");
    part.style.animationDelay = `${i * step}ms`;
  });
}
