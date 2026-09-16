import { useRef, useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { mountMap } from "./map.js";
import { Feedback } from "./Feedback.jsx";

/* The map at the end is plain DOM, SVG and canvas (map.js). This mounts
   it into an empty element and tears it down when the screen changes.

   The panel is part of that DOM, and map.js rebuilds it on every click
   on the map, so the feedback box can't simply be placed here in JSX.
   Instead this makes one empty element, map.js keeps it at the foot of
   the panel through every rebuild, and Preact renders the Feedback
   component into it through a portal. */
export function Map({ state, onRestart, onFit }) {
  const host = useRef(null);
  const [feedback] = useState(() => {
    const host = document.createElement("div");
    /* Once the box has gone, the empty host must not keep the panel's
       gap at its foot. */
    host.className = "empty:hidden";
    return host;
  });
  useEffect(() => mountMap(host.current, state, { onRestart, feedback }), []);

  return (
    <>
      <div ref={host} />
      {createPortal(<Feedback campId={state.campId} onSend={onFit} />, feedback)}
    </>
  );
}
