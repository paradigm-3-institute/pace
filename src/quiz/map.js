import { QUIZ_DATA } from "./content.js";
import { CONFIG } from "./config.js";
import { live } from "./live.js";

const UI = QUIZ_DATA.ui;
const NS = "http://www.w3.org/2000/svg";

/* The camp pictures, as a fraction of their file's pixels (which are 2x). */
const IMAGE_SCALE = 0.34;

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

/* "BRANCHING POINT 1A" → "Branching Point 1A". Tags are written in
   capitals in content.js; the panel sets them in sentence style. */
const titleCase = (text) =>
  String(text)
    .toLowerCase()
    .replace(/\b[a-z]/g, (c) => c.toUpperCase())
    .replace(/\b(\d+)([a-z])\b/g, (_, n, s) => n + s.toUpperCase());

/* The number a branching point shows in its corner on the map: the tag
   without the words, "1A" or "5". */
const tagNumber = (tag) => String(tag).replace(/^\s*branching\s+point\s*/i, "");

/* -------------------------------------------------------------------
   The ending: the map.

   The quiz's map in plain DOM, SVG and canvas. React Flow is not
   used — this project has no build step — so what it provided is
   reimplemented here, keeping to the contracts in FIXES.md:

     · handles: every node offers t/b/l/r, and every arm names the side
       it leaves and arrives on, so nothing terminates in mid-air
     · smoothstep at borderRadius 0: right-angled polylines
     · edge labels as HTML with a real max-width, never SVG <text>,
       which cannot wrap
     · framing computed rather than fitted: fit across, hold a zoom
       floor of 0.5, and let the reader pan down
     · clouds absolutely positioned, outside their camp's layout box,
       and folded into the bounds by hand or halt and entente clip

   Positions are hand-tuned in QUIZ_DATA.map. Nothing here lays out.
   ------------------------------------------------------------------- */

const FLOOR = 0.5; /* never render smaller than this; pan instead */
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 2.5;
const ACCENT = "oklch(0.55 0.17 28)";

/* Draws the map into `container` for the walk in `state`, records the
   walk, and keeps the tallies live. Returns a function that stops the
   live updates; the Map component calls it on unmount.

   `feedback` is an element the Map component renders the "did we get
   that right?" box into; the panel keeps it at its foot through every
   redraw. */
export function mountMap(container, state, { onRestart, feedback }) {
  let stopWatching = () => {};
  const MAP = QUIZ_DATA.map;

  const view = el("div", "map-view");
  const pane = el("div", "map-pane");
  const space = el("div", "map-space");
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "map-edges");
  const labelLayer = el("div", "map-labels");
  space.append(svg, labelLayer);
  pane.append(space);

  const caption = el("p", "map-caption");
  pane.append(caption);

  const panel = el("aside", "map-panel");
  panel.tabIndex = 0;
  view.append(pane, panel);
  container.append(view);

  /* ---- nodes ------------------------------------------------------ */

  const nodes = new Map();

  for (const [id, q] of Object.entries(QUIZ_DATA.questions)) {
    const at = MAP.nodes[id];
    if (!at) continue;
    const box = el("div", "branching-point");
    box.append(el("div", "branching-point-q", q.stem));
    box.append(el("div", "branching-point-num", tagNumber(q.tag || id)));
    box.style.left = `${at.x}px`;
    box.style.top = `${at.y}px`;
    box.addEventListener("click", () => select(id));
    space.append(box);
    nodes.set(id, { box, kind: "question" });
  }

  let seed = 0;
  for (const [id, camp] of Object.entries(QUIZ_DATA.camps)) {
    const at = MAP.nodes[id];
    if (!at) continue;
    seed += 1;

    const box = el("div", "camp");
    box.style.left = `${at.x}px`;
    box.style.top = `${at.y}px`;

    /* The cloud never enters the label's layout box, so the camp stays
       label-sized at any n and the composition doesn't shift. */
    const cloud = el("div", "camp-cloud");
    cloud.dataset.cloud = "1";
    const label = el("div", "camp-label", camp.title);
    box.append(cloud, label);

    /* The camp's picture sits on the far side of the label from its
       cloud, placed once the image has a size (see placeImage). */
    let image = null;
    if (camp.image) {
      image = el("img", "camp-image");
      image.src = camp.image;
      image.alt = "";
      image.draggable = false;
      /* Every picture is the same 2x square, the icon placed within it
         by design, so each camp reserves the same space on the map.
         IMAGE_SCALE sets how big: 0.5 shows it at its drawn size. */
      image.addEventListener("load", () => {
        image.style.width = `${image.naturalWidth * IMAGE_SCALE}px`;
        image.style.height = `${image.naturalHeight * IMAGE_SCALE}px`;
        placeImage(nodes.get(id));
        frame();
      });
      box.append(image);
    }
    box.addEventListener("click", () => select(id));
    space.append(box);

    nodes.set(id, {
      box,
      cloud,
      label,
      image,
      kind: "camp",
      seed,
      place: at.place || "above",
      imagePlace: at.imagePlace,
    });
  }

  /* The picture goes on the side named by imagePlace, or else opposite
     the cloud. On the cloud's own side it sits past the cloud, so the
     two never overlap. Numeric like the cloud, so bounds() folds it in. */
  const OPPOSITE = { above: "below", below: "above", left: "right", right: "left" };
  function placeImage(node) {
    const img = node.image;
    if (!img || !img.offsetWidth) return;
    const w = img.offsetWidth;
    const h = img.offsetHeight;
    const lw = node.label.offsetWidth;
    const lh = node.label.offsetHeight;
    const side = node.imagePlace || OPPOSITE[node.place] || "below";
    const cloud = node.cloud;
    const past = side === node.place && !cloud.hidden;
    const cw = past ? cloud.offsetWidth + 6 : 0;
    const ch = past ? cloud.offsetHeight + 6 : 0;
    const spot = {
      above: [(lw - w) / 2, -h - 8 - ch],
      below: [(lw - w) / 2, lh + 8 + ch],
      left: [-w - 12 - cw, (lh - h) / 2],
      right: [lw + 12 + cw, (lh - h) / 2],
    };
    let [x, y] = spot[side];

    /* On a side at right angles to the cloud (halt: dots left, picture
       below), a tall or wide cloud can still reach the picture's corner.
       Nudge the picture sideways, away from the cloud, until it clears. */
    if (!cloud.hidden && cloud.offsetWidth && side !== node.place) {
      const cx = cloud.offsetLeft, cy = cloud.offsetTop;
      const cw2 = cloud.offsetWidth, ch2 = cloud.offsetHeight;
      const GAP = 6;
      const hits = () =>
        x < cx + cw2 + GAP && x + w + GAP > cx &&
        y < cy + ch2 + GAP && y + h + GAP > cy;
      if (hits()) {
        if (side === "above" || side === "below") {
          x = node.place === "left" ? cx + cw2 + GAP : cx - w - GAP;
        } else {
          y = node.place === "above" ? cy + ch2 + GAP : cy - h - GAP;
        }
      }
    }
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  }

  /* ---- arms ------------------------------------------------------- */

  const arms = [];
  for (const [id, q] of Object.entries(QUIZ_DATA.questions)) {
    q.options.forEach((option, index) => {
      const to = option.next || option.camp;
      const spec = MAP.arms[`${id}:${index}`];
      if (!to || !spec || !nodes.has(to)) return;
      arms.push({ from: id, to, label: option.short || option.label, ...spec });
    });
  }
  for (const extra of MAP.extras || []) {
    if (nodes.has(extra.from) && nodes.has(extra.to)) arms.push({ ...extra });
  }

  /* ---- clouds ----------------------------------------------------- */

  function cloudPoints(n, seedValue, perDot, mine) {
    /* The design adds the reader's own dot on top of n, because there n
       is a fixed sample that doesn't include them. Here n comes from the
       database and already counts this walk, so the accent dot is one of
       the n rather than an extra — otherwise the first person to finish
       sees two dots for one response. */
    const count = Math.max(1, Math.round(n / perDot));
    const D = count > 900 ? 1.5 : count > 300 ? 2.2 : 3.2;
    const SP = D * 1.35;

    let s = seedValue * 9301 + 49297;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };

    /* The radius wobbles with angle, so a big cloud reads as an organic
       clump rather than a perfect disc. */
    const ph = [rnd() * 6.28, rnd() * 6.28, rnd() * 6.28];
    const amp = [0.09 + rnd() * 0.05, 0.05 + rnd() * 0.03, 0.03];
    const lobe = (th) =>
      1 +
      amp[0] * Math.sin(2 * th + ph[0]) +
      amp[1] * Math.sin(3 * th + ph[1]) +
      amp[2] * Math.sin(5 * th + ph[2]);

    const pts = Array.from({ length: count }, (_, i) => {
      const th = i * 2.39996 + seedValue + (rnd() - 0.5) * 0.5;
      const rad = SP * Math.sqrt(i + 0.5) * (0.92 + rnd() * 0.16) * lobe(th);
      return [Math.cos(th) * rad, Math.sin(th) * rad * 0.78];
    });

    const maxX = Math.max(6, ...pts.map((p) => Math.abs(p[0]))) + D;
    const maxY = Math.max(6, ...pts.map((p) => Math.abs(p[1]))) + D;
    return { pts, count, D, maxX, maxY };
  }

  const still = window.matchMedia("(prefers-reduced-motion: reduce)");
  const liveDots = CONFIG.liveDots !== false && !still.matches;

  function drawCloud(node, n, perDot, mine) {
    const cloud = node.cloud;
    cloud.replaceChildren();

    /* A camp nobody has reached gets no cloud. The packing always
       rounds up to one dot, which would otherwise read as one response
       where there are none. */
    if (n <= 0 && !mine) {
      cloud.hidden = true;
      cloud.style.width = "0px";
      cloud.style.height = "0px";
      placeImage(node);
      return;
    }
    cloud.hidden = false;

    const { pts, count, D, maxX, maxY } = cloudPoints(n, node.seed, perDot, mine);
    cloud.style.width = `${maxX * 2}px`;
    cloud.style.height = `${maxY * 2}px`;

    /* One span per dot is fine in the hundreds; past that the main
       thread stalls, so the blob is painted instead. */
    if (count > 600) {
      const cv = document.createElement("canvas");
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = maxX * 2 * dpr;
      cv.height = maxY * 2 * dpr;
      cv.style.width = `${maxX * 2}px`;
      cv.style.height = `${maxY * 2}px`;
      cv.style.display = "block";
      const g = cv.getContext("2d");
      g.scale(dpr, dpr);
      g.fillStyle = "#3b0d03";
      pts.forEach((p, i) => {
        if (mine && i === pts.length - 1) return;
        g.beginPath();
        g.arc(maxX + p[0], maxY + p[1], D / 2, 0, 6.2832);
        g.fill();
      });
      if (mine) {
        const p = pts[pts.length - 1];
        g.fillStyle = ACCENT;
        g.beginPath();
        g.arc(maxX + p[0], maxY + p[1], (D + 5.2) / 2, 0, 6.2832);
        g.fill();
      }
      cloud.append(cv);
    } else {
      pts.forEach((p, i) => {
        const own = mine && i === count - 1;
        const d = own ? D + 5.2 : D;
        const dot = el("span", "dot");
        dot.style.left = `${maxX + p[0] - d / 2}px`;
        dot.style.top = `${maxY + p[1] - d / 2}px`;
        dot.style.width = `${d}px`;
        dot.style.height = `${d}px`;
        if (own) dot.dataset.mine = "true";

        if (liveDots) {
          const dur = (3.4 + ((i * 37 + node.seed * 11) % 45) / 10).toFixed(1);
          const lag = -((i * 53 + node.seed * 7) % 90) / 10;
          const ang = (i * 2.39996 + node.seed) * 1.7;
          dot.style.setProperty("--dx", `${(Math.cos(ang) * 3.4).toFixed(2)}px`);
          dot.style.setProperty("--dy", `${(Math.sin(ang) * 3.4).toFixed(2)}px`);
          dot.style.animation = own
            ? "breathe 3.4s ease-in-out infinite"
            : `drift ${dur}s ease-in-out ${lag}s infinite`;
        }
        cloud.append(dot);
      });
    }

    /* Placed numerically rather than by transform, so the box can be
       folded straight into the bounds below. */
    const w = maxX * 2;
    const h = maxY * 2;
    const lw = node.label.offsetWidth;
    const lh = node.label.offsetHeight;
    const spot = {
      above: [(lw - w) / 2, -h - 5],
      below: [(lw - w) / 2, lh + 5],
      left: [-w - 9, (lh - h) / 2],
      right: [lw + 9, (lh - h) / 2],
    };
    const [cx, cy] = spot[node.place] || spot.above;
    cloud.style.left = `${cx}px`;
    cloud.style.top = `${cy}px`;
    placeImage(node);
  }

  /* ---- routing ---------------------------------------------------- */

  function port(id, side) {
    const box = nodes.get(id).box;
    const x = box.offsetLeft;
    const y = box.offsetTop;
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    if (side === "t") return { x: x + w / 2, y, dx: 0, dy: -1 };
    if (side === "b") return { x: x + w / 2, y: y + h, dx: 0, dy: 1 };
    if (side === "l") return { x, y: y + h / 2, dx: -1, dy: 0 };
    return { x: x + w, y: y + h / 2, dx: 1, dy: 0 };
  }

  function orthogonal(a, b, turn, stub) {
    /* How far an arm runs straight out of its port before it may turn.
       An arm can ask for more in content.js, to keep a long run clear
       of the boxes it leaves. */
    const STUB = stub || 20;
    /* Camps are bare words with no box, so an arrow that runs to the
       node's edge lands on the glyphs. Stop it a little short. */
    const GAP = 7;
    const end = { x: b.x + b.dx * GAP, y: b.y + b.dy * GAP };
    const p1 = { x: a.x + a.dx * STUB, y: a.y + a.dy * STUB };
    const p2 = { x: b.x + b.dx * STUB, y: b.y + b.dy * STUB };
    const aV = a.dx === 0;
    const bV = b.dx === 0;

    /* Ports facing each other and all but aligned get a straight line
       on the source's own axis, rather than a jog of a few pixels
       halfway along. A camp is a bare word, so the arrow still lands
       on it when the tip is a little off its centre. */
    const SNAP = 40;
    if (aV && bV && a.dy !== b.dy && Math.abs(a.x - b.x) <= SNAP) {
      return [a, { x: a.x, y: end.y }];
    }
    if (!aV && !bV && a.dx !== b.dx && Math.abs(a.y - b.y) <= SNAP) {
      return [a, { x: end.x, y: a.y }];
    }

    const points = [a, p1];
    if (aV && bV) {
      /* Facing each other, meet in the middle. Pointing the same way —
         both out of the bottom, say — go round the outside instead, or
         the arm runs back past its own target to reach it. */
      const mid =
        a.dy === b.dy
          ? a.dy > 0
            ? Math.max(p1.y, p2.y)
            : Math.min(p1.y, p2.y)
          : (p1.y + p2.y) / 2;
      points.push({ x: p1.x, y: mid }, { x: p2.x, y: mid });
    } else if (!aV && !bV) {
      const mid =
        a.dx === b.dx
          ? a.dx > 0
            ? Math.max(p1.x, p2.x)
            : Math.min(p1.x, p2.x)
          : (p1.x + p2.x) / 2;
      points.push({ x: mid, y: p1.y }, { x: mid, y: p2.y });
    } else if (aV) {
      /* "late" (the default) carries on along the arm's own line and
         turns near the target; "early" turns straight out of the box
         and runs along the target's line instead. An arm can ask for
         one in content.js; otherwise late is used unless it would
         reverse the final approach. */
      const early = turn === "early" || (turn !== "late" && (p1.x - p2.x) * -b.dx > 0);
      points.push(early ? { x: p2.x, y: p1.y } : { x: p1.x, y: p2.y });
    } else {
      const early = turn === "early" || (turn !== "late" && (p1.y - p2.y) * -b.dy > 0);
      points.push(early ? { x: p1.x, y: p2.y } : { x: p2.x, y: p1.y });
    }
    points.push(p2, end);
    return points;
  }

  /* Where a label sits on its arm: NEAR pixels from the start, so it
     reads as the answer leaving that question, or halfway on an arm too
     short for that. An arm can name its own distance in content.js. */
  const NEAR = 70;
  function along(points, dist) {
    const lengths = [];
    let total = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const len =
        Math.abs(points[i + 1].x - points[i].x) +
        Math.abs(points[i + 1].y - points[i].y);
      lengths.push(len);
      total += len;
    }
    const target = dist === undefined ? Math.min(NEAR, total / 2) : Math.min(dist, total);
    let walked = 0;
    for (let i = 0; i < lengths.length; i++) {
      if (walked + lengths[i] >= target) {
        const t = lengths[i] ? (target - walked) / lengths[i] : 0;
        return {
          x: points[i].x + (points[i + 1].x - points[i].x) * t,
          y: points[i].y + (points[i + 1].y - points[i].y) * t,
        };
      }
      walked += lengths[i];
    }
    return points[0];
  }

  function drawArms(box) {
    svg.style.left = `${box.x0}px`;
    svg.style.top = `${box.y0}px`;
    svg.setAttribute("width", String(box.w));
    svg.setAttribute("height", String(box.h));
    svg.setAttribute("viewBox", `${box.x0} ${box.y0} ${box.w} ${box.h}`);
    svg.replaceChildren();
    labelLayer.replaceChildren();

    const defs = document.createElementNS(NS, "defs");
    const marker = document.createElementNS(NS, "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("viewBox", "0 0 8 8");
    marker.setAttribute("refX", "7");
    marker.setAttribute("refY", "4");
    marker.setAttribute("markerWidth", "14");
    marker.setAttribute("markerHeight", "14");
    marker.setAttribute("orient", "auto");
    const head = document.createElementNS(NS, "path");
    head.setAttribute("d", "M0 0 L8 4 L0 8 z");
    head.setAttribute("class", "arm-head");
    marker.append(head);
    defs.append(marker);
    svg.append(defs);

    for (const arm of arms) {
      const points = orthogonal(
        port(arm.from, arm.sh),
        port(arm.to, arm.th),
        arm.turn,
        arm.stub,
      );
      const line = document.createElementNS(NS, "path");
      line.setAttribute(
        "d",
        points.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" "),
      );
      line.setAttribute("class", "arm");
      line.dataset.dash = String(Boolean(arm.dash));
      line.setAttribute("marker-end", "url(#arrowhead)");
      svg.append(line);

      if (!arm.label) continue;
      const at = along(points, arm.labelAt);
      const tag = el("div", "arm-label", arm.label);
      tag.style.left = `${at.x}px`;
      tag.style.top = `${at.y + (arm.dy || 0)}px`;
      labelLayer.append(tag);
    }
  }

  /* ---- the viewport ------------------------------------------------ */

  const vp = { x: 0, y: 0, zoom: 1 };

  function applyViewport() {
    space.style.transform =
      `translate(${vp.x}px, ${vp.y}px) scale(${vp.zoom})`;
  }

  function bounds() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const node of nodes.values()) {
      const b = node.box;
      x0 = Math.min(x0, b.offsetLeft);
      y0 = Math.min(y0, b.offsetTop);
      x1 = Math.max(x1, b.offsetLeft + b.offsetWidth);
      y1 = Math.max(y1, b.offsetTop + b.offsetHeight);

      /* Clouds sit outside their node's box; without this, halt (cloud
         on the left) and entente (right-most) get clipped. */
      for (const part of [node.cloud, node.image]) {
        if (!part || part.hidden || !part.offsetWidth) continue;
        const cx = b.offsetLeft + part.offsetLeft;
        const cy = b.offsetTop + part.offsetTop;
        x0 = Math.min(x0, cx);
        y0 = Math.min(y0, cy);
        x1 = Math.max(x1, cx + part.offsetWidth);
        y1 = Math.max(y1, cy + part.offsetHeight);
      }
    }
    /* An arm can swing wide of every node — 1C's run down the far left
       to pause now — so the paths count too, with room either side for
       a label straddling the line. */
    const LABEL = 60;
    for (const arm of arms) {
      for (const p of orthogonal(port(arm.from, arm.sh), port(arm.to, arm.th), arm.turn, arm.stub)) {
        x0 = Math.min(x0, p.x - LABEL);
        y0 = Math.min(y0, p.y);
        x1 = Math.max(x1, p.x + LABEL);
        y1 = Math.max(y1, p.y);
      }
    }
    const PAD = 30;
    return {
      x0: x0 - PAD,
      y0: y0 - PAD,
      w: x1 - x0 + PAD * 2,
      h: y1 - y0 + PAD * 2,
    };
  }

  function frame() {
    const box = bounds();
    if (!isFinite(box.w)) return;
    drawArms(box);

    const w = pane.clientWidth;
    const h = pane.clientHeight;
    const wFit = (w / box.w) * 0.94;
    const hFit = (h / box.h) * 0.94;

    /* Always fit across; the floor only buys legibility, by letting the
       map run past the bottom and be panned to. */
    vp.zoom = Math.min(wFit, Math.max(FLOOR, hFit));
    vp.x = w / 2 - (box.x0 + box.w / 2) * vp.zoom;
    vp.y =
      vp.zoom > hFit
        ? 24 - box.y0 * vp.zoom
        : (h - box.h * vp.zoom) / 2 - box.y0 * vp.zoom;
    applyViewport();
  }

  /* Drag to pan, wheel to zoom — the map is bigger than the pane
     whenever the floor is holding it above the fitting zoom. */
  let dragging = null;
  pane.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = { x: event.clientX, y: event.clientY, moved: false };
    /* Deliberately no setPointerCapture here. Capturing on every press
       retargets the click that follows to the pane, so a click on a
       branching point or a camp never reaches it. The capture is taken below, once
       the pointer has actually moved and this is really a drag. */
  });
  pane.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - dragging.x;
    const dy = event.clientY - dragging.y;
    if (!dragging.moved) {
      if (Math.abs(dx) + Math.abs(dy) <= 3) return;
      dragging.moved = true;
      pane.setPointerCapture(event.pointerId);
    }
    vp.x += dx;
    vp.y += dy;
    dragging.x = event.clientX;
    dragging.y = event.clientY;
    applyViewport();
  });
  const endDrag = (event) => {
    if (pane.hasPointerCapture(event.pointerId)) {
      pane.releasePointerCapture(event.pointerId);
    }
    /* A drag must not also read as a click on whatever was underneath. */
    const moved = dragging && dragging.moved;
    dragging = null;
    if (moved) {
      pane.addEventListener("click", (e) => e.stopPropagation(), {
        capture: true,
        once: true,
      });
    }
  };
  pane.addEventListener("pointerup", endDrag);
  pane.addEventListener("pointercancel", endDrag);

  pane.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = pane.getBoundingClientRect();
      const cx = event.clientX - rect.left;
      const cy = event.clientY - rect.top;
      const next = Math.min(
        MAX_ZOOM,
        Math.max(MIN_ZOOM, vp.zoom * Math.exp(-event.deltaY * 0.0012)),
      );
      /* Keep the point under the cursor where it is. */
      vp.x = cx - (cx - vp.x) * (next / vp.zoom);
      vp.y = cy - (cy - vp.y) * (next / vp.zoom);
      vp.zoom = next;
      applyViewport();
    },
    { passive: false },
  );

  /* ---- the panel --------------------------------------------------- */

  /* The panel opens on the reader's own camp; clicking the map or the
     empty space around it takes over from there. */
  let chosen = state.campId || null;
  let tallies = null;

  function select(id) {
    chosen = id;
    drawPanel();
  }

  pane.addEventListener("click", (event) => {
    if (event.target === pane || event.target === space) {
      chosen = null;
      drawPanel();
      frame();
    }
  });

  /* Turns [words](https://...) into a link on those words, and a bare
     https://... into a link shown as a short citation ("arxiv.org/…").
     Everything else stays plain text: nothing is ever parsed as HTML,
     and only http and https addresses are linked. */
  const LINK =
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

  function richText(node, source) {
    let at = 0;
    for (const match of String(source).matchAll(LINK)) {
      if (match.index > at) {
        node.append(source.slice(at, match.index));
      }

      let label, href, tail = "";
      if (match[1]) {
        label = match[1];
        href = match[2];
      } else if (match[4]) {
        /* a bare email address, shown as itself */
        label = match[4];
        href = `mailto:${match[4]}`;
      } else {
        href = match[3];
        /* a full stop or comma after a bare address belongs to the
           sentence, not the link */
        const punct = href.match(/[.,;:]+$/);
        if (punct) {
          tail = punct[0];
          href = href.slice(0, -tail.length);
        }
        try {
          const u = new URL(href);
          label = u.hostname.replace(/^www\./, "") + (u.pathname.length > 1 ? "/…" : "");
        } catch {
          label = href;
        }
      }

      const link = el("a", null, label);
      link.href = href;
      link.title = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      node.append(link);
      if (tail) node.append(tail);
      at = match.index + match[0].length;
    }
    node.append(source.slice(at));
    return node;
  }

  function drawPanel() {
    panel.replaceChildren();

    const q = chosen && QUIZ_DATA.questions[chosen];
    const camp = chosen && QUIZ_DATA.camps[chosen];

    panel.append(
      q
        ? el("div", "panel-num", tagNumber(q.tag || chosen))
        : el("div", "panel-tag", titleCase(camp ? UI.campWord : UI.detailWord)),
    );

    if (q) {
      panel.append(el("div", "panel-title", q.stem));
      if (q.help) panel.append(el("div", "panel-note", q.help));
      if (q.details) {
        panel.append(richText(el("div", "panel-body"), q.details));
      }
    } else if (camp) {
      panel.append(el("div", "panel-title panel-title-camp", camp.title));
      if (camp.details) {
        panel.append(richText(el("div", "panel-body"), camp.details));
      }
    } else {
      panel.append(el("div", "panel-title", UI.detailEmpty));
    }

    if (feedback) panel.append(feedback);
  }


  /* ---- the numbers -------------------------------------------------- */

  function apply() {
    const total = tallies ? Number(tallies.total) || 0 : 0;
    const camps = tallies ? tallies.camps || {} : {};
    const enough = total >= (Number(CONFIG.minVotesToShow) || 0);

    /* One dot per response by default; several once that stops being
       drawable. config.js can pin it. */
    const perDot =
      Number(CONFIG.perDot) > 0
        ? Number(CONFIG.perDot)
        : Math.max(1, Math.ceil(total / 1200));

    for (const [id, node] of nodes) {
      if (node.kind !== "camp") continue;
      const n = enough ? Number(camps[id]) || 0 : 0;
      drawCloud(node, n, perDot, enough && id === state.campId);
    }

    if (!live.configured()) caption.textContent = UI.treeOffline;
    else if (!tallies) caption.textContent = "";
    else if (!enough) caption.textContent = UI.resultsWaiting;
    else caption.textContent = "";

    frame();
    drawPanel();
  }

  drawPanel();
  requestAnimationFrame(apply);

  const observer = new ResizeObserver(() => frame());
  observer.observe(pane);

  if (!live.configured()) {
    return () => observer.disconnect();
  }

  const refresh = async () => {
    const fresh = await live.tallies();
    if (!fresh) {
      caption.textContent = UI.resultsUnavailable;
      return;
    }
    tallies = fresh;
    apply();
  };

  (async () => {
    if (!(await live.init())) {
      caption.textContent = UI.resultsUnavailable;
      return;
    }
    await live.record(
      state.campId,
      state.history.map((step) => ({ q: step.questionId, i: step.optionIndex })),
      state.survey,
    );
    await refresh();

    /* Coalesce bursts: ten people finishing at once is one redraw. */
    let pending = null;
    const stopWatch = live.watch(() => {
      clearTimeout(pending);
      pending = setTimeout(refresh, 400);
    });
    stopWatching = stopWatch;
  })();

  return () => {
    stopWatching();
    observer.disconnect();
  };
}
