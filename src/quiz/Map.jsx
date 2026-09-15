import { useRef, useEffect } from "preact/hooks";
import { mountMap } from "./map.js";

/* The map at the end is plain DOM, SVG and canvas (map.js). This mounts
   it into an empty element and tears it down when the screen changes. */
export function Map({ state, onRestart }) {
  const host = useRef(null);
  useEffect(() => mountMap(host.current, state, onRestart), []);
  return <div ref={host} />;
}
