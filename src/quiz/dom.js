/* ---------------------------------------------------------------------
   The page's fixed parts and the small helpers every screen builds with.
   Nothing here knows about the walk; see state.js for that.
   ------------------------------------------------------------------- */

export const stage = document.getElementById("stage");
export const controls = document.getElementById("controls");
export const masthead = document.getElementById("masthead");
const shell = document.querySelector(".shell");

export const NS = "http://www.w3.org/2000/svg";

export const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

export function button(text, onClick) {
  const b = el("button", "btn", text);
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

/* The masthead shows on the question screens and not on the covers. */
export function chrome(visible) {
  masthead.hidden = !visible;
}

export function fatal(message) {
  stage.replaceChildren(el("p", "fatal", `Content problem in content.js — ${message}`));
  controls.replaceChildren();
}

const STILL = window.matchMedia("(prefers-reduced-motion: reduce)");

/* Brings a screen's parts in one after the next, top to bottom. */
export function stagger(parts, step = 55) {
  if (STILL.matches) return;
  parts.filter(Boolean).forEach((part, i) => {
    part.classList.add("enter");
    part.style.animationDelay = `${i * step}ms`;
  });
}

/* Shrinks the type until the screen fits the window, so the page never
   scrolls. Runs after every render and on resize. The map has its own
   framing and opts out. */
const MIN_FS = 0.62;

export function fitScreen() {
  if (document.documentElement.dataset.map === "open") return;

  shell.dataset.overflowing = "false";
  let fs = 1;
  shell.style.setProperty("--fs", "1");

  const overflows = () => shell.scrollHeight > shell.clientHeight + 1;
  while (overflows() && fs > MIN_FS) {
    fs = Math.max(MIN_FS, fs - 0.04);
    shell.style.setProperty("--fs", fs.toFixed(2));
  }
  if (overflows()) shell.dataset.overflowing = "true";
}

let fitPending = null;
window.addEventListener("resize", () => {
  clearTimeout(fitPending);
  fitPending = setTimeout(fitScreen, 120);
});
