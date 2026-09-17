import { useRef, useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { QUIZ_DATA } from "./content.js";
import { mountMap, richText } from "./map.js";
import { Feedback } from "./Feedback.jsx";
import { Button, Rise } from "./ui.jsx";

const UI = QUIZ_DATA.ui;
const narrowQuery = "(width < 900px)";

/* The map at the end is plain DOM, SVG and canvas (map.js). This mounts
   it into an empty element and tears it down when the screen changes.

   From 900px the map is the whole ending, with the reader's camp open
   in its panel. The panel is part of that DOM, and map.js rebuilds it
   on every click on the map, so the feedback box can't simply be placed
   here in JSX. Instead this makes one empty element, map.js keeps it at
   the foot of the panel through every rebuild, and Preact renders the
   Feedback component into it through a portal.

   On a phone the ending is one page: a result screen — the camp, the
   feedback box, the camp's passage, Start again — with the map below
   it, and a button that scrolls down to the map. */
export function Map({ state, onRestart, onFit }) {
  const [narrow] = useState(() => window.matchMedia(narrowQuery).matches);
  const map = useRef(null);

  if (!narrow) return <MapView state={state} narrow={false} onRestart={onRestart} onFit={onFit} />;
  return (
    <>
      <Result
        state={state}
        onRestart={onRestart}
        onFit={onFit}
        onOpenMap={() => map.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
      />
      {/* Bled to the screen's edges, past the page's side padding. */}
      <div ref={map} class="-mx-(--x-padding) mt-8 scroll-mt-2">
        <MapView state={state} narrow onRestart={onRestart} onFit={onFit} />
      </div>
    </>
  );
}

function MapView({ state, narrow, onRestart, onFit }) {
  const host = useRef(null);
  const [feedback] = useState(() => {
    if (narrow) return null;
    const host = document.createElement("div");
    /* Stuck to the panel's foot, over whatever the reader has scrolled
       to. The panel's 28px padding insets the sticky edge, so the box
       is pushed down by as much to sit flush, and the negative margin
       lets it cover that padding at the end. Once the box has gone,
       the empty host must not keep the panel's gap. */
    host.className = "empty:hidden sticky -bottom-7 -mb-7 mt-auto z-10";
    return host;
  });
  useEffect(() => mountMap(host.current, state, { onRestart, feedback }), []);

  return (
    <>
      <div ref={host} />
      {feedback && createPortal(<Feedback campId={state.campId} onSend={onFit} />, feedback)}
    </>
  );
}

/* The phone's result screen. The camp's passage is written with the
   same [words](link) marks the map's panel reads, so it goes through
   the same renderer. */
function Result({ state, onRestart, onFit, onOpenMap }) {
  const camp = QUIZ_DATA.camps[state.campId];
  const body = useRef(null);
  useEffect(() => {
    if (body.current && camp?.details) richText(body.current, camp.details);
  }, [camp]);
  if (!camp) return null;

  return (
    <div class="flex flex-auto flex-col max-w-[34em]">
      <div class="flex-none flex items-start justify-between gap-4">
        <div>
          <Rise at={0}>
            <p class="font-sans text-[0.9em] leading-tight text-(--color-then-what-bg)">{UI.resultKicker}</p>
          </Rise>
          <Rise at={1}>
            <h2 class="font-serif text-[2em] font-bold leading-[1.1] text-(--color-conclusion-bg) mt-1">{camp.title}</h2>
          </Rise>
        </div>
        {camp.image && (
          <Rise at={0} class="flex-none">
            <img src={camp.image} alt="" class="w-16 h-16" draggable={false} />
          </Rise>
        )}
      </div>

      <Rise at={2} class="mt-5">
        <Feedback campId={state.campId} onSend={onFit} inline />
      </Rise>

      <Rise at={3} class="mt-5">
        <Button onClick={onOpenMap} trailingIcon="ph-light ph-caret-right">
          {UI.seeMapButton}
        </Button>
      </Rise>

      <Rise at={4}>
        <div ref={body} class="font-serif text-[1em] leading-[1.6] text-foreground text-pretty mt-6 [&_a]:text-(--color-conclusion-bg) [&_a]:underline [&_a]:underline-offset-2" />
      </Rise>

      <Rise at={5} class="mt-8 flex-none">
        <Button onClick={onRestart}>{UI.restartButton}</Button>
      </Rise>
      {UI.mapNote && (
        <Rise at={6}>
          <p class="font-sans text-[0.85em] leading-[1.4] text-(--color-then-what-bg) mt-5 [&_a]:font-bold [&_a]:text-(--color-conclusion-bg) [&_a]:underline" ref={(n) => n && !n.childNodes.length && richText(n, UI.mapNote)} />
        </Rise>
      )}
    </div>
  );
}
