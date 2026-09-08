/* ============================================================================
   content.js — ALL the words for "The Pacing Tree: Walk the Cruxes"
   ----------------------------------------------------------------------------
   This is the only file you need to edit to change the quiz. No programming
   knowledge required — just keep the punctuation exactly as you find it:
   every piece of text sits inside `backticks`, and every entry ends with a
   comma. Write anything you like between the backticks — apostrophes, "double
   quotes", dashes, accents. See "WHEN THE PAGE GOES BLANK" below.

   THE SHAPE OF THINGS
   -------------------
   QUIZ_DATA has four parts: `intro`, `start`, `questions`, and `camps`.

   intro — the title card shown before the first question.
       icon    a Phosphor icon class, drawn large in ochre — as above.
       kicker  the small label above the title.
       title   the big serif title.
       text    a short paragraph — one to three sentences — setting up the walk.
       note    OPTIONAL. A smaller, lighter line beneath the text.
       button  the words on the button that starts the walk.
       buttonIcon  OPTIONAL. A Phosphor icon shown just before those
               words. Delete the line for a button with no icon.

   ui — the handful of fixed labels the screens use around your content.
       masthead   the small line above every question and the result.
       colophon   the small line at the foot of the page.
       backButton / restartButton   the words on those two buttons.
       throttleLabel  the word before the throttle squares.
       neighborsHeading / neighborsCaveat   the heading and the small print
                      over the list of published neighbours.

       The remaining labels appear only when live results are switched on in
       config.js.
       resultsWaiting      shown instead of bars while too few have walked.
       resultsUnavailable  shown if the results can't be reached.
       mapCaption          the line under the map's population count, used
                           when one dot stands for one response.
       mapCaptionMany      the same line when one dot stands for several;
                           {per} becomes how many. {n} is the total either way.
       detailWord          the heading over the side panel before anything is
                           clicked, and detailEmpty the line beneath it.
       campWord            the heading over the panel when a camp is open.
       campResponses       the count line under a camp's name. {n} is that
                           camp's responses, {total} all of them, {pct} the
                           share.
       treeOffline         shown under the tree when no database is connected.

   start: "c1"
       The id of the question shown first.

   questions — a list of questions, each with its own id (the bit before the ":").
       icon    a Phosphor icon class, e.g. "ph-light ph-rocket-launch".
               Browse them at https://phosphoricons.com — click any icon and
               copy its name, then write "ph-light " in front of it.
               "light" is the weight. thin, light, regular, bold, fill and
               duotone all exist, but index.html loads one weight only, so
               changing weight means editing the stylesheet link there too.
       kicker  the small label printed above the question while walking,
               e.g. "Crux 01 · Transformation".
       tag     the short label printed above the question on the map at the
               end, e.g. "CRUX 2". Kept separate because the map has room for
               far less than the quiz screen does.
       stem    the question itself, one or two sentences. Printed in full
               both on the quiz screen and in the map's boxes at the end.
       short   OPTIONAL. A two- or three-word version of the question, used
               in the tree diagram at the end where the full stem would not
               fit. Falls back to the stem if you leave it out.
       order   OPTIONAL. Set to "fixed" to stop the answers moving at all,
               for a question that must read one particular way.
       help    OPTIONAL. One or two sentences defining key terms, shown smaller
               and lighter beneath the stem. Delete the line if you don't want one.
       options a list of answers — two is the usual, three works too. Each has:
                 label  a short headline (a few words), shown large on the card.
                 text   2–3 sentences making the best case for that answer.
                 short  OPTIONAL. A one- or two-word version of the label, for
                        the branch in the tree diagram. Falls back to label.
                 rank   OPTIONAL. Only for answers that form a scale — a low
                        number at one end, higher numbers toward the other. If
                        EVERY answer to a question has a rank, the cards keep
                        that order and the whole run is shown either way up,
                        decided at random for each reader. If none do, the
                        cards are shuffled freely. The numbers need not be
                        1, 2, 3 — any increasing numbers will do.
                 side   OPTIONAL. "left" or "right" — which way this branch
                        leaves the trunk in the tree diagram. Leave it out and
                        the diagram decides for itself.
                 next   the id of the question to ask next — OR null.
                 camp   used only when next is null: the id of the camp to land on.
               An option must have EITHER a `next` (keep walking) OR a `camp`
               (stop, and show the result screen). Never both.

   camps — a list of destinations, each with its own id.
       title      the camp's name.
       quote      OPTIONAL. A few words in the camp's own voice, printed under
                  its name in the tree diagram.
       meter      a whole number from 0 to 5 — how much throttle the camp wants.
                  0 = full stop, 5 = full speed. Drawn as filled/empty squares
                  in the panel a camp opens when you click it.
       blurb      two sentences describing the camp, in a neutral register.
       details    OPTIONAL. A longer passage, shown under the blurb in the
                  panel the map opens. Write a link as [the words](https://...)
                  — square brackets round the words, round brackets round the
                  address, nothing between them. Anything else is printed as
                  you typed it.
       neighbors  a list of names of adjacent published thinkers or groups.

   WHEN THE PAGE GOES BLANK
   ------------------------
   A blank page always means this file has a punctuation slip, never that
   something else broke. The page will now tell you so and name the line, and
   the browser console (F12) has the same message.

   Only three things can cause it:

   1. A missing comma at the end of a line.
   2. A missing backtick at either end of a piece of text.
   3. A stray backtick INSIDE your text. Backticks are the only character you
      cannot type freely. Everything else is safe: apostrophes, "double
      quotes", ' single quotes ', dashes, ellipses, accents, emoji.

   Angle brackets are printed literally, so <>like this</> will show up on the
   page as those exact characters rather than doing anything. There is no way
   to make text bold or italic, or to force a line break, from this file — the
   words are printed exactly as you write them.

   RULES OF THUMB
   --------------
   · Every `next` and every `camp` must match an id that actually exists below,
     spelled identically (capital letters matter). Those, and the `icon` lines,
     are wiring rather than words: they stay in "double quotes" so you can tell
     at a glance which lines appear on screen and which do not.
   · Keep the names of real people OUT of the questions. Names belong only in
     camps, on the result screen.
   · The order the options appear in is shuffled afresh for every visitor, so
     never write "the option on the left" into any text. Answers that carry a
     `rank` keep their own order but may be shown either way up, so don't
     write "the first option" either.
   · A question can have three options as well as two; the cards and the tree
     diagram at the end both adjust on their own. Past three they get cramped.
   · You can add or remove questions freely — nothing outside this file needs
     to know how long a path is.
   ========================================================================== */

export const QUIZ_DATA = {
  intro: {
    icon: "ph-light ph-tree",
    kicker: `The Pacing Tree`,
    title: `Walk the Cruxes`,
    text: `Experts who mostly agree that unrestricted AI progress poses significant risks to human societies still disagree on major cruxes of the pacing debate. We created this interactive tool as an invitation for you to consider your position on these cruxes and to give you an opportunity to compare others' views with your own.`,
    note: `You'll be presented up to 6 questions about your predictions of AI futures. If you're on the fence or believe the answer is somewhere along the lines of "it depends", go with your gut or whatever option feels like a better fit.`,
    button: `Let's begin`,
    buttonIcon: "ph-light ph-rocket-launch",
  },

  ui: {
    masthead: `Walk the cruxes`,
    colophon:
      `Your progress is not stored. Reload the page and the walk begins again from nothing.`,
    backButton: `Back`,
    restartButton: `Start again`,
    throttleLabel: `Throttle`,
    neighborsHeading: `Nearest published neighbours`,
    neighborsCaveat:
      `This is the published position your answers sat closest to — a landmark for locating the argument, not a label for you.`,

    resultsWaiting:
      `The live tally appears once a few more people have walked the tree.`,
    resultsUnavailable: `The live tally can't be reached right now.`,
    mapCaption: `one dot = one response · n={n}`,
    mapCaptionMany: `one dot = {per} responses · n={n}`,
    detailWord: `DETAIL`,
    detailEmpty: `Click any question or camp on the map.`,
    campWord: `CAMP`,
    campResponses: `{n} of {total} responses · {pct}%`,
    treeOffline: `Counts appear once this is connected to a database — see SUPABASE.md.`,
  },

  start: "c1",

  questions: {
    c1: {
      tag: `CRUX 1A`,
      icon: "ph-light ph-rocket-launch",
      kicker: `Crux 01 · Transformation`,
      stem: `Do you see frontier AI developing transformative powers within the next two decades from now?`,
      help: `Transformative = automating most cognitive work, including AI research itself.`,
      options: [
        {
          label: `Yes, plausibly.`,
          short: `yes`,
          text: `Capability will keep hitting milestones predicted by scaling and task-horizon forecasts.`,
          next: "c2",
        },
        {
          label: `No (or not for a long time).`,
          short: `not really`,
          text: `Current methods hit diminishing returns or capability will not have a significant impact due to slow adoption/diffusion.`,
          next: "c1b",
        },
      ],
    },

    c1b: {
      tag: `CRUX 1B`,
      icon: "ph-light ph-users-three",
      kicker: `Crux 01B · General Harm`,
      stem: `Is harm inherent to frontier AI development in its current form?`,
      help: `Harm could include effects we’re presently observing but also emergent harms. AI R&D in its current form means capped on inputs (chips, data, algorithms) with limited top-down regulation.`,
      options: [
        {
          label: `Yes.`,
          short: `yes!`,
          text: `We see worrisome impacts on labour, privacy, power, and discourse today. The damage will compound if left unaddressed.`,
          next: null,
          camp: "presentHarms",
        },
        {
          label: `Not really.`,
          short: `not any more than any other technology`,
          text: `AI does not cause more harm than any other technology\u2014and if it does, the harm does not outweigh the benefits of AI progress or justify the cost of intervening.`,
          next: null,
          camp: "normalTech",
        },
      ],
    },

    c2: {
      tag: `CRUX 2`,
      icon: "ph-light ph-warning",
      kicker: `Crux 02 · Default risk`,
      stem: `If AI development continues at default speed, how likely is it to lead to lasting, irreversible, society-wide harm?`,
      help: `This may include harms from misalignment (model doing bad stuff) or misuse (humans using models for bad stuff).`,
      options: [
        {
          label: `Substantial (1-50%)`,
          short: `1-50%`,
          rank: 2,
          text: `Big time misalignment or misuse may be rather occasional, but human societies remain unequipped to avert or absorb the harms.`,
          next: "c3",
        },
        {
          label: `Negligible (\u22641%)`,
          short: `\u22641%`,
          rank: 1,
          text: `Models are getting mostly safer; misuse will not scale and/or human societies are resilient to substantial harms.`,
          next: null,
          camp: "accelerate",
        },
        {
          label: `Near-certain (\u226550%)`,
          short: `>50%`,
          rank: 3,
          text: `Some sort of power-seeking behaviour or cases of misuse should be the default prediction.`,
          next: null,
          camp: "halt",
        },
      ],
    },

    c3: {
      tag: `CRUX 3`,
      icon: "ph-light ph-scales",
      kicker: `Crux 03 · Moral Justification`,
      stem: `Does the reward of reducing catastrophic risks morally justify the cost of pacing?`,
      help: `Reward = (mostly) crises averted. Cost = foregone benefits, money spent on infrastructure necessary for pacing, coordination efforts.`,
      options: [
        {
          label: `Reducing risks justifies the costs.`,
          short: `yes`,
          text: `The value of human survival and flourishing is higher than what it'd cost to pace, esp. if people alive today and/or future generations count.`,
          next: "c4",
        },
        {
          label: `Pacing's just too expensive.`,
          short: `not really`,
          text: `Delaying unprecedented benefits from advanced AI and/or allocating significant resources toward slowing AI R&D would be unreasonable or counterproductive.`,
          next: null,
          camp: "accelerate",
        },
      ],
    },

    c4: {
      tag: `CRUX 4`,
      icon: "ph-light ph-hourglass-medium",
      kicker: `Crux 04 · Instrumental Efficacy`,
      stem: `How would more time change the risk?`,
      options: [
        {
          label: `Time converts to safety.`,
          short: `reduce`,
          text: `Our understanding of dangers, ability to control AI and/or defences need mostly just time.`,
          next: "c5",
        },
        {
          label: `Time doesn't necessarily help (and might backfire).`,
          short: `unclear or might backfire`,
          text: `We don't have a good enough idea to make use of extra time to arrive at more understanding, control, or better defences, <em>and</em> any attempts to artificially create time may just make the eventual release more dangerous.`,
          next: null,
          camp: "entente",
        },
      ],
    },

    c5: {
      tag: `CRUX 5`,
      icon: "ph-light ph-handshake",
      kicker: `Crux 05 · Feasibility`,
      stem: `Can relevant actors meaningfully and sustainably coordinate to pace?`,
      options: [
        {
          label: `Probably.`,
          short: `likely`,
          text: `Actors are incentivised to come to the table; verification/enforcement looks solvable/promising; precedents exist.`,
          next: "c6",
        },
        {
          label: `No way.`,
          short: `unlikely`,
          text: `Actors are not incentivised to give up their current position and/or are likely to quickly defect on any agreement.`,
          next: null,
          camp: "dacc",
        },
        {
          label: `Unclear but worth trying.`,
          short: `unclear but worth trying`,
          text: `Actors may admittedly defect, but the fear of mutual distruction may also be enough to sustain cooperation.`,
          next: null,
          camp: "buildOption",
        },
      ],
    },

    c6: {
      tag: `CRUX 6`,
      icon: "ph-light ph-percent",
      kicker: `Crux 06 · Trade-offs`,
      stem: `How much risk would pacing frontier AI need to avert to be worth it?`,
      options: [
        {
          label: `Almost anything helps.`,
          short: `anything helps`,
          rank: 1,
          text: `The risk is large enough that any improvement may save a lot of pain.`,
          next: null,
          camp: "pauseNow",
        },
        {
          label: `It better be significant.`,
          short: `it better be significant`,
          rank: 3,
          text: `Safe futures with AI are all or nothing OR we need to work harder to identify solutions that actually work before we spend our resources on them.`,
          next: null,
          camp: "coordinatedDelay",
        },
        {
          label: `Small is enough.`,
          short: `some`,
          rank: 2,
          text: `Committing what we reasonably can to improve our odds seems reasonable; smaller improvements may be enough over time.`,
          next: null,
          camp: "tripwires",
        },
      ],
    },
  },

  map: {
    nodes: {
      c1: { x: 350, y: -60 },
      c1b: { x: -60, y: 120 },
      c2: { x: 350, y: 200 },
      c3: { x: 350, y: 400 },
      c4: { x: 350, y: 570 },
      c5: { x: 350, y: 740 },
      c6: { x: 350, y: 990 },

      presentHarms: { x: -250, y: 410, place: "below" },
      normalTech: { x: 43, y: 430, place: "below" },
      accelerate: { x: 870, y: 215, place: "above" },
      halt: { x: -200, y: 735, place: "left" },
      entente: { x: 990, y: 580, place: "above" },
      dacc: { x: 896, y: 880, place: "above" },
      buildOption: { x: -80, y: 840, place: "below" },
      pauseNow: { x: 203, y: 1240, place: "below" },
      coordinatedDelay: { x: 453, y: 1240, place: "below" },
      tripwires: { x: 743, y: 1240, place: "below" },
    },

    arms: {
      "c1:0": { sh: "b", th: "t" },
      "c1:1": { sh: "l", th: "t" },
      "c1b:0": { sh: "l", th: "t" },
      "c1b:1": { sh: "b", th: "t" },
      "c2:0": { sh: "b", th: "t" },
      "c2:1": { sh: "r", th: "l" },
      "c2:2": { sh: "l", th: "t", turn: "early" },
      "c3:0": { sh: "b", th: "t" },
      "c3:1": { sh: "r", th: "b" },
      "c4:0": { sh: "b", th: "t" },
      "c4:1": { sh: "r", th: "l" },
      "c5:0": { sh: "b", th: "t" },
      "c5:1": { sh: "r", th: "l" },
      "c5:2": { sh: "l", th: "t" },
      "c6:0": { sh: "b", th: "t" },
      "c6:1": { sh: "b", th: "t", dy: 38 },
      "c6:2": { sh: "b", th: "t" },
    },

    extras: [
      { from: "c6", to: "halt", sh: "l", th: "b", label: ``, dash: true },
      { from: "c6", to: "entente", sh: "r", th: "r", label: `≲0`, dash: true },
    ],
  },

  camps: {
    presentHarms: {
      title: `present harms`,
      quote: `slow it — the harms are here`,
      meter: 1,
      blurb: `Restraint here rests on documented, present-tense harms: extractive training data, degraded labour conditions, surveillance, and concentrated corporate power. Speculative long-run scenarios are treated as a distraction from — and sometimes a marketing device for — the systems already deployed.`,
      details: `People in this house generally agree that AI is a tool too powerful to turn a blind eye to as is—either because it has already reached sufficient capability to significantly destabilise societies, or because it doesn’t need to be super powerful to cause harm. Examples of present-day harms from AI that are arguably harmful enough to justify an intervention include: cybersecurity, labour displacement, human oversight on AI-made or AI-assisted decisions, inaccuracy, mental health implications, etc. This house might warns against the development of [fully autonomous agents](https://arxiv.org/abs/2502.02649), [implications of AI in consequential decision-making](https://arxiv.org/abs/2608.23642), or [impacts on the mental health of human societies](https://www.rand.org/news/press/2026/06/nearly-1-in-5-us-adolescents-and-young-adults-use-ai.html).`,
      neighbors: [`Gebru / Bender / the DAIR lineage`],
    },

    normalTech: {
      title: `normal technology`,
      quote: `regulate uses, not models`,
      meter: 4,
      blurb: `AI is read as a general-purpose technology whose effects arrive at the speed institutions can absorb them, not at the speed of a training run. Governance should target deployments, liability, and downstream resilience rather than the models themselves or the pace of research.`,
      neighbors: [`Narayanan & Kapoor`, `Acemoglu`],
    },

    accelerate: {
      title: `accelerate`,
      quote: `floor it`,
      meter: 5,
      blurb: `Catastrophic risk is judged low enough that the dominant term in the ledger is the good that arrives sooner — health, growth, and capability compounding for people alive now. On this view restraint is the costly and unproven intervention, and the burden of proof sits with those proposing it.`,
      neighbors: [`Andreessen`, `e/acc`, `Mechanize / Barnett`],
    },

    halt: {
      title: `halt`,
      quote: `shut it all down`,
      meter: 0,
      blurb: `If the default outcome of building superintelligence with current understanding is ruin, then no exchange rate applies and no amount of delay is too expensive. The ask is an enforced stop to frontier training worldwide, treated as the only response proportionate to the estimate.`,
      neighbors: [`MIRI — Yudkowsky & Soares`],
    },

    entente: {
      title: `entente`,
      quote: `win the race, spend the lead`,
      meter: 4,
      blurb: `The risk is taken seriously, but unilateral slowing is read as transferring the frontier to less careful hands rather than removing the hazard. Safety is therefore pursued from a position of lead: hard security, internal safeguards, and a coalition that arrives first and sets the terms.`,
      neighbors: [`Amodei`, `Aschenbrenner`],
    },

    dacc: {
      title: `d/acc`,
      quote: `accelerate defense only`,
      meter: 4,
      blurb: `If the pace cannot be held down by agreement, the remaining lever is what gets built rather than how fast. Effort goes into defensive, decentralising and verification-friendly technology, so that the world the frontier arrives into is harder to knock over.`,
      neighbors: [`Buterin`],
    },

    buildOption: {
      title: `build the option`,
      quote: `build brakes, decide later`,
      meter: 3,
      blurb: `A durable pace looks unenforceable today, so the work is to build what would make it enforceable later: compute accounting, verification mechanisms, evaluations, and the institutions to run them. The brake is constructed and tested now so that it exists if the evidence ever warrants pulling it.`,
      neighbors: [`Pacing the Frontier signatories`],
    },

    pauseNow: {
      title: `pause now`,
      quote: `stop giant runs, worldwide`,
      meter: 0,
      blurb: `Frontier scaling is treated as an unacceptable gamble taken without the consent of those exposed to it, and the threshold for stopping has already been met. The ask is a moratorium on the largest training runs in advance of any particular warning shot, on the grounds that waiting for one may mean waiting too long.`,
      neighbors: [`PauseAI`, `the FLI lineage`],
    },

    coordinatedDelay: {
      title: `coordinated delay`,
      quote: `a deal to delay ASI`,
      meter: 2,
      blurb: `Delay is worth buying, but only in the quantities that a genuine agreement between the leading states and labs can deliver. The work is diplomatic and verificatory: making a jointly observed slowdown attractive enough to sign and legible enough to check.`,
      neighbors: [`AI Futures Project (Plan A)`],
    },

    tripwires: {
      title: `if-then tripwires`,
      quote: `pause when tripwires fire`,
      meter: 2,
      blurb: `Delay is a scarce resource to be spent where it buys the most, bound to specified capability thresholds rather than left open-ended. Development continues until an agreed tripwire fires, at which point pre-committed responses take effect.`,
      neighbors: [`the RSP school`, `Karnofsky`],
    },
  },
};
