import { QUIZ_DATA } from "./content.js";
import { CONFIG } from "./config.js";
/* ---------------------------------------------------------------------
   The Supabase layer. Everything here is optional: with no keys in
   config.js the whole quiz runs exactly as before, offline and silent.
   See SUPABASE.md.
   ------------------------------------------------------------------- */
const TOKEN_KEY = "pacing-tree-token";

const live = {
  client: null,
  ready: false,

  configured() {
    return Boolean(CONFIG.enabled && CONFIG.url && CONFIG.anonKey);
  },

  async init() {
    if (!this.configured()) return false;
    try {
      const { createClient } = await import("@supabase/supabase-js");
      this.client = createClient(CONFIG.url, CONFIG.anonKey, {
        /* The client keeps no session of its own; the only thing this
           page stores is the single token below. */
        auth: { persistSession: false, autoRefreshToken: false },
      });
      this.ready = true;
    } catch (err) {
      console.warn("[pacing-tree] Supabase client unavailable:", err);
    }
    return this.ready;
  },

  /* One random id per browser, so reloading doesn't inflate the count
     and walking again updates your own row rather than adding one. It
     identifies nothing and never leaves this page except as itself. */
  token() {
    try {
      let t = localStorage.getItem(TOKEN_KEY);
      if (!t) {
        t = crypto.randomUUID();
        localStorage.setItem(TOKEN_KEY, t);
      }
      return t;
    } catch {
      /* Private browsing, or storage blocked: still count the walk, we
         just can't recognise this visitor a second time. */
      return crypto.randomUUID();
    }
  },

  async record(campId, path, answers) {
    if (!this.ready) return;
    const { error } = await this.client.rpc("record_walk", {
      p_token: this.token(),
      p_camp_id: campId,
      p_path: path,
      p_survey: answers || {},
    });
    if (error) console.warn("[pacing-tree] record_walk failed:", error);
  },

  async tallies() {
    if (!this.ready) return null;
    const { data, error } = await this.client.rpc("get_tallies");
    if (error) {
      console.warn("[pacing-tree] get_tallies failed:", error);
      return null;
    }
    return data;
  },

  /* Calls onChange whenever anyone finishes a walk. Prefers the
     websocket; drops to polling if it can't connect. Returns a stop(). */
  watch(onChange) {
    if (!this.ready) return () => {};

    let timer = null;
    let channel = null;
    const startPolling = () => {
      if (timer) return;
      const every = Math.max(5, Number(CONFIG.pollSeconds) || 15) * 1000;
      timer = setInterval(onChange, every);
    };

    if (CONFIG.realtime) {
      channel = this.client
        .channel("pacing-tree-walks")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "walks" },
          onChange,
        )
        .subscribe((status) => {
          if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
            startPolling();
          }
        });
    } else {
      startPolling();
    }

    return () => {
      if (timer) clearInterval(timer);
      if (channel) this.client.removeChannel(channel);
    };
  },
};

const stage = document.getElementById("stage");
const controls = document.getElementById("controls");
const masthead = document.getElementById("masthead");

/* The fixed labels around the content, all editable in content.js. */
const UI = QUIZ_DATA.ui;
document.getElementById("masthead-text").textContent = UI.masthead;

/* history: one entry per answered question, in the order answered. */
let history = [];
let currentId = QUIZ_DATA.start;
let campId = null;

/* Answers to the extra questions, by question id. Stored with the walk. */
let survey = {};

/* The order the options are shown in is drawn once per session per
   question — so going Back and forward again doesn't shuffle the cards
   under the reader. Each entry is a list of indexes into that question's
   options in content.js.

   Answers that form a scale are shuffled as a sequence: they keep their
   order and the whole run is either read up or read down, decided by a
   coin flip. Scrambling a scale would make a reader hunt for their
   answer, while always printing it one way round would bias which end
   gets picked. Everything else is shuffled freely. */
const order = {};
for (const [id, q] of Object.entries(QUIZ_DATA.questions)) {
  const indexes = q.options.map((_, i) => i);
  const isScale = q.options.every((o) => typeof o.rank === "number");

  if (q.order === "fixed") {
    /* left exactly as written in content.js */
  } else if (isScale) {
    const direction = Math.random() < 0.5 ? 1 : -1;
    indexes.sort(
      (a, b) => (q.options[a].rank - q.options[b].rank) * direction,
    );
  } else {
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
  }
  order[id] = indexes;
}

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const NS = "http://www.w3.org/2000/svg";

/* Set while the map is open; called to stop live updates. */
let stopWatching = null;


function leaveResult() {
  if (stopWatching) stopWatching();
  stopWatching = null;
  delete document.documentElement.dataset.map;
}

const STILL = window.matchMedia("(prefers-reduced-motion: reduce)");

/* Brings a screen's parts in one after the next, top to bottom. */
function stagger(parts, step = 55) {
  if (STILL.matches) return;
  parts.filter(Boolean).forEach((part, i) => {
    part.classList.add("enter");
    part.style.animationDelay = `${i * step}ms`;
  });
}

/* Shrinks the type until the screen fits the window, so the page never
   scrolls. Runs after every render and on resize. The map has its own
   framing and opts out. */
const shell = document.querySelector(".shell");
const MIN_FS = 0.62;

function fitScreen() {
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

function chrome(visible) {
  masthead.hidden = !visible;
}

function renderIntro() {
  leaveResult();
  const intro = QUIZ_DATA.intro;
  if (!intro) return fatal("There is no `intro` block.");

  chrome(false);
  stage.replaceChildren();

  const wrap = el("div", "intro");

  const icon = el("i", `q-icon ${intro.icon}`);
  icon.setAttribute("aria-hidden", "true");
  wrap.append(icon);

  const kicker = intro.kicker ? el("p", "kicker", intro.kicker) : null;
  const title = el("h2", "intro-title", intro.title);
  const text = el("p", "intro-text", intro.text);
  const note = intro.note ? el("p", "intro-note", intro.note) : null;
  if (kicker) wrap.append(kicker);
  wrap.append(title, text);
  if (note) wrap.append(note);

  const actions = el("div", "intro-actions");
  const begin = button(intro.button, start);
  begin.classList.add("btn-primary");
  if (intro.buttonIcon) {
    const mark = el("i", `btn-icon ${intro.buttonIcon}`);
    mark.setAttribute("aria-hidden", "true");
    begin.prepend(mark);
  }
  actions.append(begin);
  wrap.append(actions);

  stage.append(wrap);
  controls.replaceChildren();
  fitScreen();
  stagger([icon, kicker, title, text, note, actions]);
}

function start() {
  currentId = QUIZ_DATA.start;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderQuestion() {
  leaveResult();
  chrome(true);
  const q = QUIZ_DATA.questions[currentId];
  if (!q) return fatal(`No question with the id "${currentId}".`);

  stage.replaceChildren();

  const head = el("div", "q-head");
  const icon = el("i", `q-icon ${q.icon}`);
  icon.setAttribute("aria-hidden", "true");
  head.append(icon);
  const kicker = el("p", "kicker", q.kicker);
  head.append(kicker);
  stage.append(head);

  const body = el("div", "q-body");
  const stem = el("h2", "stem", q.stem);
  const help = q.help ? el("p", "help", q.help) : null;
  body.append(stem);
  if (help) body.append(help);
  stage.append(body);

  const grid = el("div", "options");
  /* One column per option on a wide screen; they stack on a narrow one. */
  grid.style.setProperty("--cols", String(q.options.length));
  const ordered = order[currentId].map((i) => q.options[i]);

  for (const option of ordered) {
    const card = el("button", "option");
    card.type = "button";
    card.append(el("span", "option-label", option.label));
    card.append(el("p", "option-text", option.text));
    card.addEventListener("click", () => choose(option));
    grid.append(card);
  }

  body.append(grid);

  controls.replaceChildren();
  controls.append(button(UI.backButton, back));
  fitScreen();
  /* The cards last, one after another, so the eye reaches the question
     before the answers arrive. */
  stagger([icon, kicker, stem, help, ...grid.children]);
}

function choose(option) {
  const q = QUIZ_DATA.questions[currentId];
  history.push({
    questionId: currentId,
    kicker: q.kicker,
    label: option.label,
    /* The index in content.js, not the position on screen — so the
       stored data stays meaningful when the copy is reworded. */
    optionIndex: q.options.indexOf(option),
  });

  if (option.next) {
    currentId = option.next;
    renderQuestion();
  } else {
    campId = option.camp;
    renderDivider();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* Whether an extra question is asked, given the answers so far. */
function surveyApplies(q) {
  const gate = q.showIf;
  if (!gate) return true;
  const answer = survey[gate.question];
  if ("chose" in gate) return Boolean(answer) && answer.index === gate.chose;
  if ("choseNot" in gate) return !answer || answer.index !== gate.choseNot;
  return true;
}

/* The next question that applies, walking from `from` in `direction`.
   Past either end means there are none left that way. */
function surveyStep(from, direction) {
  const questions = QUIZ_DATA.survey?.questions || [];
  let i = from;
  while (i >= 0 && i < questions.length && !surveyApplies(questions[i])) {
    i += direction;
  }
  return i;
}

/* One extra question at a time, in the order written, skipping any
   whose showIf isn't met. Choosing an answer moves on at once; an
   "other" answer opens a box first. Any of them can be skipped. When
   they run out, the map. */
function renderSurvey(wanted) {
  const questions = QUIZ_DATA.survey?.questions || [];
  const index = surveyStep(wanted, 1);
  if (index >= questions.length) return renderTree();
  const q = questions[index];

  /* numbered among the questions that apply right now */
  const asked = questions.filter(surveyApplies);

  leaveResult();
  chrome(true);
  stage.replaceChildren();
  controls.replaceChildren();

  const head = el("div", "q-head");
  if (q.icon) {
    const icon = el("i", `q-icon ${q.icon}`);
    icon.setAttribute("aria-hidden", "true");
    head.append(icon);
  }
  const kicker = el(
    "p",
    "kicker",
    String(UI.surveyKicker)
      .replace("{n}", String(asked.indexOf(q) + 1))
      .replace("{total}", String(asked.length)),
  );
  head.append(kicker);
  stage.append(head);

  const body = el("div", "q-body");
  const stem = el("h2", "stem", q.stem);
  body.append(stem);
  const help = q.help ? el("p", "help", q.help) : null;
  if (help) body.append(help);

  const list = el("div", "choices");
  const previous = survey[q.id];

  /* The box an "other" answer opens. One box serves every such
     option; which one is active decides the prompt and what is saved. */
  let active = null;
  const otherRow = el("div", "other-row");
  otherRow.hidden = true;
  const otherInput = document.createElement("input");
  otherInput.type = "text";
  otherInput.className = "other-input";
  otherInput.maxLength = 120;
  otherInput.setAttribute("aria-label", q.stem);
  const otherGo = button(UI.continueButton, () => {
    const text = otherInput.value.trim();
    if (!text || active === null) return otherInput.focus();
    const option = q.options[active];
    survey[q.id] = { answer: option.label, index: active, detail: text };
    renderSurvey(index + 1);
  });
  otherGo.classList.add("btn-primary");
  otherGo.disabled = true;
  /* Continue wakes up as soon as there is something to continue with. */
  otherInput.addEventListener("input", () => {
    otherGo.disabled = otherInput.value.trim() === "";
  });
  otherInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !otherGo.disabled) otherGo.click();
  });
  otherRow.append(otherInput, otherGo);

  const choices = [];
  const mark = (i) => {
    for (const c of choices) delete c.dataset.chosen;
    choices[i].dataset.chosen = "true";
  };
  const open = (i) => {
    active = i;
    otherInput.placeholder = q.options[i].placeholder || UI.otherPlaceholder;
    otherRow.hidden = false;
  };

  q.options.forEach((option, i) => {
    const choice = el("button", "choice", option.label);
    choice.type = "button";
    choice.addEventListener("click", () => {
      mark(i);
      if (option.other) {
        open(i);
        otherInput.focus();
        return;
      }
      survey[q.id] = { answer: option.label, index: i };
      renderSurvey(index + 1);
    });
    choices.push(choice);
    list.append(choice);
  });

  /* coming back to a question shows what was chosen before */
  if (previous && q.options[previous.index]) {
    mark(previous.index);
    if (q.options[previous.index].other) {
      open(previous.index);
      otherInput.value = previous.detail || "";
      otherGo.disabled = otherInput.value.trim() === "";
    }
  }

  body.append(list);
  if (q.options.some((o) => o.other)) body.append(otherRow);
  stage.append(body);

  /* Back to the previous extra question, or the divider; and Skip. */
  controls.append(
    button(UI.backButton, () => {
      const previousIndex = surveyStep(index - 1, -1);
      if (previousIndex < 0) renderDivider();
      else renderSurvey(previousIndex);
    }),
  );
  controls.append(
    button(UI.skipButton, () => {
      delete survey[q.id];
      renderSurvey(index + 1);
    }),
  );

  fitScreen();
  stagger([head.firstChild, kicker, stem, help, ...list.children]);
}

/* The page between the last branching point and what follows it. One
   button, no way back: the camp is decided by the time this shows. */
function renderDivider() {
  leaveResult();
  chrome(true);
  stage.replaceChildren();
  controls.replaceChildren();

  const copy = QUIZ_DATA.survey?.intro;
  if (!copy) return renderTree();

  const wrap = el("div", "intro divider");
  const text = el("p", "intro-text", copy.text);
  wrap.append(text);

  const actions = el("div", "intro-actions");
  const go = button(copy.button, () => renderSurvey(0));
  go.classList.add("btn-primary");
  actions.append(go);
  wrap.append(actions);

  stage.append(wrap);
  fitScreen();
  stagger([text, actions]);
}

function back() {
  campId = null;
  const last = history.pop();
  if (!last) return renderIntro();
  currentId = last.questionId;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function restart() {
  history = [];
  campId = null;
  survey = {};
  renderIntro();
  window.scrollTo({ top: 0, behavior: "auto" });
}

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

function renderTree() {
  leaveResult();
  chrome(false);
  stage.replaceChildren();
  controls.replaceChildren();
  document.documentElement.dataset.map = "open";

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
  view.append(pane, panel);
  stage.append(view);

  /* ---- nodes ------------------------------------------------------ */

  const nodes = new Map();

  for (const [id, q] of Object.entries(QUIZ_DATA.questions)) {
    const at = MAP.nodes[id];
    if (!at) continue;
    const box = el("div", "branching-point");
    box.append(el("div", "branching-point-tag", q.tag || id));
    box.append(el("div", "branching-point-q", q.stem));
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
    box.addEventListener("click", () => select(id));
    space.append(box);

    nodes.set(id, {
      box,
      cloud,
      label,
      kind: "camp",
      seed,
      place: at.place || "above",
    });
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
      g.fillStyle = "#1a1a18";
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

  function orthogonal(a, b, turn) {
    const STUB = 20;
    /* Camps are bare words with no box, so an arrow that runs to the
       node's edge lands on the glyphs. Stop it a little short. */
    const GAP = 7;
    const end = { x: b.x + b.dx * GAP, y: b.y + b.dy * GAP };
    const p1 = { x: a.x + a.dx * STUB, y: a.y + a.dy * STUB };
    const p2 = { x: b.x + b.dx * STUB, y: b.y + b.dy * STUB };
    const points = [a, p1];
    const aV = a.dx === 0;
    const bV = b.dx === 0;
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

  /* Halfway along the path, so a label always lands on its own line. */
  function midpoint(points) {
    const lengths = [];
    let total = 0;
    for (let i = 0; i < points.length - 1; i++) {
      const len =
        Math.abs(points[i + 1].x - points[i].x) +
        Math.abs(points[i + 1].y - points[i].y);
      lengths.push(len);
      total += len;
    }
    let walked = 0;
    for (let i = 0; i < lengths.length; i++) {
      if (walked + lengths[i] >= total / 2) {
        const t = lengths[i] ? (total / 2 - walked) / lengths[i] : 0;
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
      const at = midpoint(points);
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
      if (node.cloud && !node.cloud.hidden && node.cloud.offsetWidth) {
        const cx = b.offsetLeft + node.cloud.offsetLeft;
        const cy = b.offsetTop + node.cloud.offsetTop;
        x0 = Math.min(x0, cx);
        y0 = Math.min(y0, cy);
        x1 = Math.max(x1, cx + node.cloud.offsetWidth);
        y1 = Math.max(y1, cy + node.cloud.offsetHeight);
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

  let chosen = null;
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
      el("div", "panel-tag", q ? q.tag || "" : camp ? UI.campWord : UI.detailWord),
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

    /* No way back from the map: the walk is recorded by the time it
       is drawn, so the only move from here is to start again. */
    const actions = el("div", "panel-actions");
    actions.append(button(UI.restartButton, restart));
    panel.append(actions);
    if (UI.mapNote) panel.append(richText(el("div", "panel-foot"), UI.mapNote));
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
      drawCloud(node, n, perDot, enough && id === campId);
    }

    if (!live.configured()) caption.textContent = UI.treeOffline;
    else if (!tallies) caption.textContent = "";
    else if (!enough) caption.textContent = UI.resultsWaiting;
    else {
      caption.textContent = String(
        perDot === 1 ? UI.mapCaption : UI.mapCaptionMany,
      )
        .replace("{per}", String(perDot))
        .replace("{n}", String(total));
    }

    frame();
    drawPanel();
  }

  drawPanel();
  requestAnimationFrame(apply);

  const observer = new ResizeObserver(() => frame());
  observer.observe(pane);

  if (!live.configured()) {
    stopWatching = () => observer.disconnect();
    return;
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
      campId,
      history.map((step) => ({ q: step.questionId, i: step.optionIndex })),
      survey,
    );
    await refresh();

    /* Coalesce bursts: ten people finishing at once is one redraw. */
    let pending = null;
    const stopWatch = live.watch(() => {
      clearTimeout(pending);
      pending = setTimeout(refresh, 400);
    });
    stopWatching = () => {
      stopWatch();
      observer.disconnect();
    };
  })();
}

function button(text, onClick) {
  const b = el("button", "btn", text);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}

function fatal(message) {
  stage.replaceChildren(
    el("p", "fatal", `Content problem in content.js — ${message}`),
  );
  controls.replaceChildren();
}

renderIntro();
