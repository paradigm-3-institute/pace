/* ---------------------------------------------------------------------
   The one place the reader's position is kept.

   `state` is a plain object describing exactly where the walk is (see
   state.js for its shape). Screens never change it directly: they call
   dispatch() with a transition, which returns the next state, and every
   subscriber is told.
   ------------------------------------------------------------------- */

let state = null;
const listeners = [];

export function getState() {
  return state;
}

export function setState(next) {
  state = next;
  for (const listen of listeners) listen(state);
}

export function dispatch(transition, ...args) {
  setState(transition(state, ...args));
}

export function subscribe(listen) {
  listeners.push(listen);
}
