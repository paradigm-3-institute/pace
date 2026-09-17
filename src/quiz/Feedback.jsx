import { useState, useRef, useEffect } from "preact/hooks";
import { QUIZ_DATA } from "./content.js";
import { Button } from "./ui.jsx";

const REASONS = ["I'm closer to a different camp", "Not vibing with the wording", "Something else"];
const OTHER = 2; /* the reason that opens a box */

/* The feedback box at the foot of the map's panel: did we get the camp
   right? A thumbs up sends at once; a thumbs down asks for a reason
   first. After either it thanks the reader and goes away. `onSend` gets
   the answer in the shape state.js's answerFit stores: { answer: "yes" }
   or { answer: "no", reason, index, detail? }. With `inline`, for the
   phone's result screen, it is a plain block rather than a strip bled
   to the panel's edges. */
export function Feedback({ campId, onSend, inline }) {
  const [phase, setPhase] = useState("ask"); /* "ask" | "reasons" | "done" */
  const [picked, setPicked] = useState(null);
  const [detail, setDetail] = useState("");
  const [gone, setGone] = useState(false);

  const camp = QUIZ_DATA.camps[campId];
  const ready = picked !== null && (picked !== OTHER || detail.trim() !== "");

  /* Picking "Something else" puts the cursor in the box. */
  const input = useRef(null);
  useEffect(() => {
    if (picked === OTHER) input.current?.focus();
  }, [picked]);

  const send = (answer) => {
    onSend(answer);
    setPhase("done");
    setTimeout(() => setGone(true), 2500);
  };
  const sendReason = () => {
    if (!ready) return;
    const answer = { answer: "no", reason: REASONS[picked], index: picked };
    if (picked === OTHER) answer.detail = detail.trim();
    send(answer);
  };

  if (!camp || gone) return null;

  return (
    <div
      class={
        inline
          ? "rounded-md bg-(--color-pace-what-bg) px-5 py-4 font-sans"
          : "-mx-[26px] border-t-sidebar border-t mt-5 bg-(--color-pace-what-bg) px-[26px] pt-4 pb-5 font-sans"
      }
    >
      {phase === "ask" && (
        <>
          <div>Your camp is...</div>
          <div class="font-serif text-xl font-bold leading-none">{camp.title}</div>
          <div class="mt-2">Did we get that right?</div>
          <div class="mt-4 flex gap-2">
            <Button icon="ph-light ph-thumbs-up" onClick={() => send({ answer: "yes" })}>
              Yes
            </Button>
            <Button icon="ph-light ph-thumbs-down" onClick={() => setPhase("reasons")}>
              Not quite
            </Button>
          </div>
        </>
      )}

      {phase === "reasons" && (
        <>
          <div class="font-bold mb-2">What's off?</div>
          <div class="grid gap-1.5 mb-2">
            {REASONS.map((label, i) => (
              <label key={i} class="flex cursor-pointer items-start gap-2 text-[15px] leading-snug">
                <input
                  type="radio"
                  name="fit-reason"
                  autocomplete="off"
                  class="mt-1 accent-(--color-introduction-bg)"
                  checked={picked === i}
                  onChange={() => setPicked(i)}
                />
                {label}
              </label>
            ))}
          </div>
          {/* kept in its place so nothing shifts when it appears */}
                <input
                  ref={input}
                  type="text"
                  name="feedback-detail"
                  autocomplete="off"
                  maxLength={200}
            placeholder="Tell us more"
            class={`w-full rounded-sm border border-(--color-introduction-bg) bg-(--color-why-pace-bg) px-2 py-1 font-sans text-[15px] text-foreground focus:outline-none ${picked === OTHER ? "" : "invisible"}`}
            value={detail}
            onInput={(event) => setDetail(event.currentTarget.value)}
            onKeyDown={(event) => event.key === "Enter" && sendReason()}
          />
          <div class="mt-3 flex gap-2">
            <Button disabled={!ready} onClick={sendReason}>
              Send
            </Button>
          </div>
        </>
      )}

      {phase === "done" && (
        <div class="text-[15px]">
          {picked === null
            ? "Glad it worked; thanks for participating!"
            : "Thank you for your input; we'll look into it."}
        </div>
      )}
    </div>
  );
}
