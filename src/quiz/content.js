/* ============================================================================
   content.js — ALL the words for "Ways to Pace"
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

   survey — what comes after the last branching point.
       intro      the divider page shown before the extra questions: `text`
                  is the paragraph, `button` the words on its one button.
       questions  a list, asked in the order written (never shuffled). Each:
                    id       a short name the answer is stored under, e.g.
                             "location". Letters and underscores only; keep
                             it once people have answered.
                    icon     OPTIONAL. A Phosphor icon, as for the branching
                             points.
                    stem     the question.
                    help     OPTIONAL. A smaller line beneath it.
                    options  the answers, each with a `label`. Any option
                             marked `other: true` opens a box for the reader
                             to type into when chosen; `placeholder` is the
                             grey prompt inside that box. Several options
                             in one question can do this.
                    showIf   OPTIONAL. Asks this question only after a given
                             answer to an earlier one:
                               showIf: { question: "experience", chose: 0 }
                             shows it to those who picked the FIRST option
                             (options count from 0) of the question with id
                             "experience"; `choseNot: 0` shows it to everyone
                             else, including anyone who skipped that one.
                  Answers are stored with the walk. Every one of these can be
                  skipped; the reader's camp is already decided by now.

   ui — the handful of fixed labels the screens use around your content.
       backButton / restartButton   the words on those two buttons.
       continueButton / skipButton  the buttons on the extra questions.
       otherPlaceholder  the grey prompt inside an "other" box, for options
                         that don't set their own `placeholder`.
       surveyKicker      the small line above an extra question; {n} and
                         {total} become the numbers.
       mapNote           the small line at the foot of the map's side panel.
                         An email address in it becomes a link.

       The remaining labels appear only when live results are switched on in
       config.js.
       resultsWaiting      shown instead of bars while too few have walked.
       resultsUnavailable  shown if the results can't be reached.
       mapCaption          the line under the map's population count, used
                           when one dot stands for one response.
       mapCaptionMany      the same line when one dot stands for several;
                           {per} becomes how many.
       detailWord          the heading over the side panel before anything is
                           clicked, and detailEmpty the line beneath it.
       campWord            the heading over the panel when a camp is open.
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
               e.g. "Branching Point 01 · Transformation".
       tag     the short label printed above the question on the map at the
               end, e.g. "BRANCHING POINT 2". Kept separate because the map has room for
               far less than the quiz screen does.
       stem    the question itself, one or two sentences. Printed in full
               both on the quiz screen and in the map's boxes at the end.
       short   OPTIONAL. A two- or three-word version of the question, used
               in the tree diagram at the end where the full stem would not
               fit. Falls back to the stem if you leave it out.
       order   OPTIONAL. Set to "fixed" to stop the answers moving at all,
               for a question that must read one particular way.
       details OPTIONAL. A longer passage about this branching point — what
               people disagree on, and why — shown in the panel when it is
               clicked on the map at the end. Not shown during the quiz.
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
       details    The passage shown in the panel a camp opens on the map.
                  Write a link as [the words](https://...) — square brackets
                  round the words, round brackets round the address, nothing
                  between them. A bare address like https://example.org/page
                  also becomes a link, shown as a short citation such as
                  "example.org/…". Anything else is printed as you typed it.

   WHEN THE PAGE GOES BLANK
   ------------------------
   A blank page always means this file has a punctuation slip, never that
   something else broke. While running `pnpm dev`, the error overlay names
   the line; `pnpm build` refuses to build and says the same.

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
    icon: "ph-light ph-compass",
    kicker: `Quiz`,
    title: `Ways to Pace`,
    text: `Experts who mostly agree that unrestricted AI progress poses significant risks to human societies still disagree on major branching points of the pacing debate. We created this interactive tool as an invitation for you to consider your position on these branching points and to give you an opportunity to compare others' views with your own.`,
    note: `You'll be presented with up to 6 questions about your predictions of AI futures. If you're on the fence or believe the answer is somewhere along the lines of "it depends", go with your gut or whatever option feels like a better fit.`,
    button: `Let's begin`,
    buttonIcon: "ph-light ph-rocket-launch",
  },

  /* The page shown once the last branching point is answered, before the
     extra questions and the map. */
  survey: {
    intro: {
      text: `Before we show you where your position on pacing sits relative to others', help us turn individual answers into a better picture of the field by answering a few extra questions.`,
      button: `Let's go!`,
    },

    questions: [
      {
        id: "location",
        icon: "ph-light ph-map-pin",
        stem: `Do you happen to be based in one of the following areas?`,
        options: [
          { label: `Bay Area` },
          { label: `DC` },
          { label: `London` },
          { label: `Other`, other: true, placeholder: `Where, then?` },
        ],
      },
      {
        id: "experience",
        icon: "ph-light ph-shield-check",
        stem: `How much experience do you have with AI safety?`,
        options: [
          { label: `Working on it full time!` },
          { label: `A hobby contributor` },
          { label: `Am AI-safety-curious` },
          { label: `Heard of it, not involved` },
          { label: `Never heard` },
        ],
      },
      {
        id: "ais_kind",
        icon: "ph-light ph-flask",
        stem: `What kind of AIS do you work on?`,
        /* only for those who chose the first answer above */
        showIf: { question: "experience", chose: 0 },
        options: [
          { label: `Technical alignment` },
          { label: `Evaluations, red-teaming, or security` },
          { label: `AI governance and policy` },
          { label: `Field-building, grantmaking, or operations` },
          { label: `Something else`, other: true, placeholder: `What, then?` },
        ],
      },
      {
        id: "day_job",
        icon: "ph-light ph-briefcase",
        stem: `What best describes your day job?`,
        /* for everyone else */
        showIf: { question: "experience", choseNot: 0 },
        options: [
          { label: `Technical research or engineering` },
          { label: `Policy, government, or law` },
          { label: `Academia or research`, other: true, placeholder: `Which area?` },
          { label: `Journalism, writing, or communications` },
          { label: `Student`, other: true, placeholder: `Which area?` },
          { label: `Something else`, other: true, placeholder: `What, then?` },
        ],
      },
    ],
  },

  ui: {
    backButton: `Back`,
    restartButton: `Start again`,
    continueButton: `Continue`,
    skipButton: `Skip`,
    otherPlaceholder: `Tell us more`,
    surveyKicker: `Extra question {n} of {total}`,
    mapNote: `If you notice a way to improve our quiz, email nikola@arbresearch.com`,

    resultsWaiting: `The live tally appears once a few more people have walked the tree.`,
    resultsUnavailable: `The live tally can't be reached right now.`,
    mapCaption: `one dot = one response`,
    mapCaptionMany: `one dot = {per} responses`,
    detailWord: `The Pacing Decision Tree`,
    detailEmpty: `Click any question or camp on the map.`,
    campWord: `CAMP`,
    treeOffline: `Counts appear once this is connected to a database — see SUPABASE.md.`,
  },

  start: "c1",

  questions: {
    c1: {
      tag: `BRANCHING POINT 1A`,
      icon: "ph-light ph-rocket-launch",
      kicker: `Branching Point 01 · Transformation`,
      stem: `Do you see frontier AI developing transformative powers within the next two decades from now?`,
      details: `On this branching point, people often disagree on what counts as transformative, whether it’s possible for any intelligent entity to become transformative-level smart, and how fast AI can get there. For example, does AI have to be all that much more capable than humans to be transformative? Or does it just need to solve tasks comparably well but a lot faster and/or cheaper?`,
      help: `Transformative = automating most cognitive work, including AI research itself.`,
      options: [
        {
          label: `Yes, plausibly`,
          short: `yes`,
          text: `AI capabilities will keep hitting milestones predicted by scaling and task-horizon forecasts.`,
          next: "c2",
        },
        {
          label: `No (or not for a long time)`,
          short: `not really`,
          text: `Current methods will hit diminishing returns or capability will not have a significant impact due to slow adoption/diffusion.`,
          next: "c1b",
        },
      ],
    },

    c1b: {
      tag: `BRANCHING POINT 1B`,
      icon: "ph-light ph-users-three",
      kicker: `Branching Point 01B · General Harm`,
      stem: `Is harm inherent to frontier AI development in its current form?`,
      details: `This branching point opens the floor for conversation about what role AI (as a tool or the whole industry) plays in society (or what it’s doing to society). Is AI's reshaping of wealth, power, and cognition significant? If so, is it a harm to be prevented, or a potentially positive change for humanity to adapt to?`,
      help: `Harm could include effects we’re presently observing but also emergent harm. AI R&D in its current form means capped on inputs (chips, data, algorithms) with limited top-down regulation.`,
      options: [
        {
          label: `Yes`,
          short: `yes!`,
          text: `We see worrisome impacts on labour, privacy, power, and discourse today. The damage will compound if left unaddressed.`,
          next: null,
          camp: "presentHarms",
        },
        {
          label: `Not really`,
          short: `not any more than any other technology`,
          text: `AI does not cause more harm than any other technology—and if it does, the harm does not outweigh the benefits of AI progress or justify the cost of intervening.`,
          next: null,
          camp: "normalTech",
        },
      ],
    },

    c2: {
      tag: `BRANCHING POINT 2`,
      icon: "ph-light ph-warning",
      kicker: `Branching Point 02 · Default risk`,
      stem: `If AI development continues at default speed, how likely is it to lead to lasting, irreversible, society-wide harm?`,
      details: `This branching point calls into question whether it’s AI development that’s the problem. Do the current race dynamics leave no room for defences to keep up? Is there an alternative reality where identical AI development paired with adequate misuse controls and resilience measures effectively prevent catastrophic harm? Is the risk from current AI development likely? How about significant?`,
      help: `This includes harm from misalignment (model doing bad stuff) or misuse (humans using models for bad stuff).`,
      options: [
        {
          label: `Substantial (1-50%)`,
          short: `1-50%`,
          rank: 2,
          text: `Big time misalignment or misuse may be rare, but human societies remain unequipped to avert or absorb the harm.`,
          next: "c4",
        },
        {
          label: `Negligible (≤1%)`,
          short: `\u22641%`,
          rank: 1,
          text: `Models are getting mostly safer; misuse will not scale and/or human societies are resilient to substantial harm.`,
          next: null,
          camp: "accelerate",
        },
        {
          label: `Near-certain (≥50%)`,
          short: `>50%`,
          rank: 3,
          text: `Some sort of power-seeking behaviour by AI or significant cases of misuse at scale should be the default prediction.`,
          next: null,
          camp: "halt",
        },
      ],
    },

    c3: {
      tag: `BRANCHING POINT 4`,
      icon: "ph-light ph-scales",
      kicker: `Branching Point 04 · Moral Justification`,
      stem: `Does the reward of reducing catastrophic risks morally justify the cost of pacing?`,
      details: `This branching point asks people to identify what AI can do for humanity, and whether it’s worth foregoing. Can AI develop capabilities powerful enough to, say, cure cancer? Can it advance in research (and other beneficial capabilities) significantly faster than humans? If so, will any interventions that could prevent catastrophic risks associated with this progress save at least as many lives?`,
      help: `Reward = (mostly) crises averted. Cost = foregone benefits, money spent on infrastructure necessary for pacing, coordination efforts.`,
      options: [
        {
          label: `Reducing risks justifies the costs`,
          short: `yes`,
          text: `The value of human survival and flourishing is higher than what it'd cost to pace, esp. if people alive today and/or future generations count.`,
          next: "c5",
        },
        {
          label: `Pacing's just too expensive`,
          short: `not really`,
          text: `Delaying unprecedented benefits from advanced AI and/or allocating significant resources toward slowing AI R&D would be unreasonable or counterproductive.`,
          next: null,
          camp: "accelerate",
        },
      ],
    },

    c4: {
      tag: `BRANCHING POINT 3`,
      icon: "ph-light ph-hourglass-medium",
      kicker: `Branching Point 03 · Instrumental Efficacy`,
      stem: `How would more time change the risk?`,
      details: `People who disagree on this branching point don’t necessarily disagree that AI could cause catastrophic harm worth preventing but rather that time is not the solution. Do we have the infrastructure to make use of more time, or do we need more solutions on the table first? Maybe good enough solutions can naturally keep pace with the development of potentially harmful capabilities?`,
      options: [
        {
          label: `Time converts to safety`,
          short: `reduce`,
          text: `Our understanding of dangers, ability to control AI and/or defences need mostly just time.`,
          next: "c3",
        },
        {
          label: `Time doesn't necessarily help (and might backfire)`,
          short: `unclear or might backfire`,
          text: `We don't have a good enough idea to make use of extra time to arrive at more understanding, control, or better defences, and any attempts to artificially create time may just make the eventual release more dangerous.`,
          next: null,
          camp: "entente",
        },
      ],
    },

    c5: {
      tag: `BRANCHING POINT 5`,
      icon: "ph-light ph-handshake",
      kicker: `Branching Point 05 · Feasibility`,
      stem: `Can relevant actors meaningfully and sustainably coordinate to pace?`,
      details: `This branching point shifts the conversation from justifying that pacing interventions can work to justifying that pacing interventions can work as part of a system. Is coordination required to make pacing work? How much can coordination between actors (e.g. in terms of international treaties) improve risk reduction? Who needs to be in on it? Do the current geopolitical and economic dynamics create an environment where actors are incentivised to cooperate in the long run (or are they likely to defect at the sight of inconvenience)?`,
      options: [
        {
          label: `Probably`,
          short: `likely`,
          text: `Actors are incentivised to come to the table; verification/enforcement looks solvable/promising; precedents exist.`,
          next: "c6",
        },
        {
          label: `No way`,
          short: `unlikely`,
          text: `Actors are not incentivised to give up their current position and/or are likely to quickly defect on any agreement.`,
          next: null,
          camp: "dacc",
        },
        {
          label: `Unclear but worth trying`,
          short: `unclear but worth trying`,
          text: `Actors may admittedly defect, but the fear of mutual distruction may also be enough to sustain cooperation.`,
          next: null,
          camp: "buildOption",
        },
      ],
    },

    c6: {
      tag: `BRANCHING POINT 6`,
      icon: "ph-light ph-percent",
      kicker: `Branching Point 06 · Trade-offs`,
      stem: `How much risk would pacing frontier AI need to avert to be worth it?`,
      details: `At this point of the debate, most people agree that increasing safety measures is justified and necessary but will have different opinions on how much pacing is worth the trouble (as opposed to spending effort and money on other safety measures for example). Is any minimal risk reduction worth the attention? Can our effort take us further elsewhere? Do forecasts on risk reduction actually account for the right variables?`,
      options: [
        {
          label: `Almost anything helps`,
          short: `anything helps`,
          rank: 1,
          text: `The risk is large enough that any improvement may save a lot of pain.`,
          next: null,
          camp: "pauseNow",
        },
        {
          label: `It better be significant`,
          short: `it better be significant`,
          rank: 3,
          text: `Safe futures with AI are all or nothing OR we need to work harder to identify solutions that actually work before we spend our resources on them.`,
          next: null,
          camp: "coordinatedDelay",
        },
        {
          label: `Small is enough`,
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
      c3: { x: 350, y: 570 },
      c4: { x: 350, y: 400 },
      c5: { x: 350, y: 740 },
      c6: { x: 350, y: 990 },

      presentHarms: { x: -250, y: 410, place: "below" },
      normalTech: { x: 43, y: 430, place: "below" },
      accelerate: { x: 1120, y: 215, place: "above" },
      halt: { x: -200, y: 735, place: "left" },
      entente: { x: 990, y: 410, place: "above" },
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
      "c6:1": { sh: "b", th: "t", dy: 26 },
      "c6:2": { sh: "b", th: "t" },
    },

    extras: [],
  },

  camps: {
    presentHarms: {
      title: `present harm`,
      details: `People in this house generally agree that AI is a tool too powerful to turn a blind eye to as is—either because it has already reached sufficient capability to significantly destabilise societies, or because it doesn’t need to be super powerful to cause harm. Examples of present-day harm from AI that are arguably harmful enough to justify an intervention include: cybersecurity, labour displacement, human oversight on AI-made or AI-assisted decisions, inaccuracy, mental health implications, etc. This house might warn against the development of [fully autonomous agents](https://arxiv.org/abs/2502.02649), [implications of AI in consequential decision-making](https://arxiv.org/abs/2608.23642), or [impacts on the mental health of human societies](https://www.rand.org/news/press/2026/06/nearly-1-in-5-us-adolescents-and-young-adults-use-ai.html). An important critique of this house is that the argument often does not look past the current capability, and any catastrophic outcomes, however improbable, fall outside its threat model. Pacing based on harm society could reasonably absorb in time furthermore blocks the feedback loop through which emerging harm would be identified, studied, and managed/prevented.`,
    },

    normalTech: {
      title: `normal technology`,
      details: `This impact-centred approach mostly considers the impact of AI on human societies rather than properties of the technology itself, and argues that the relevance of AI comes from adoption/diffusion of capabilities rather than research and development itself. This means that typical evidence of skyrocketing capability (e.g. benchmarks), amongst other things, does not alter the position because it rarely measures real-life use; despite steep development, the impacts on e.g. labour or education have been rather slow/gradual. It follows that AI is best understood the way we understand any prior technology. This leads to two main implications on regulating AI: (1) tools to regulate (e.g. policies) are already available and not dependent on defensive and control innovation, and (2) any regulation should be [targeted at use, not development](https://knightcolumbia.org/content/ai-as-normal-technology). Critics reply that just because adoption is slow and historically unexceptional, doesn’t mean the technology itself should be treated the same. Unlike previous technologies, which ran on deterministic steps a (trained) human could follow, AI reaches decisions in ways we cannot yet explain or backtrack. This means that harmful capability invisible before (and sometimes even at) inference may do its damage before any use-based regulations apply (see recent sandbox escapes).`,
    },

    accelerate: {
      title: `accelerate`,
      details: `People in this camp see AI as the route to [greater prosperity, scientific progress](https://a16z.com/the-techno-optimist-manifesto/) and [freedom from work](https://www.mechanize.work/blog/life-after-work/). They either see the risks associated as negligible, or think that the cost of slowing down is too great given the benefits they expect. A consequence of this is that while mitigations of particular risks may be acceptable to this camp, slowing down progress is a moral disaster, as it puts cures for diseases and improvements in the human condition further from reach, and out of reach entirely of those who will die in the lag between when the benefits would have arrived in the counterfactual, and when they actually do. Some of this camp do see non-negligible risks of extinction, but due to either a belief that slowing down would achieve very little, or particular views on population ethics which make extinction seem relatively less bad (see [Schubert](https://futureoflife.org/recent-news/the-psychology-of-existential-risk/), also [Frick](https://www.cambridge.org/core/journals/canadian-journal-of-philosophy/article/abs/on-the-survival-of-humanity/16497F49E0133310FD5D8372E5DBE0F1) for plausible counterarguments). One objection to this position is that it lacks informed consent from its subjects (few claim to hold this position) and also that they think citizens generally hold similar views (rather, they make normative claims themselves).`,
    },

    halt: {
      title: `halt`,
      details: `People in this camp argue that the current AI research and development necessarily creates a race dynamic that ends only with the development of artificial superintelligence, which, if developed, is likely to [pursue undesirable goals](https://intelligence.org/the-problem/) and, by extension, harms (or kills) many humans. With the same breath, people in this camp often add that to prevent the development of ASI before we know how to control it, we need to complement technical research with [policy solutions](https://intelligence.org/wp-content/uploads/2025/05/AI-Governance-to-Avoid-Extinction.pdf), as frontier AI labs [will not regulate on their own accord](https://theconversation.com/if-we-dont-control-the-ai-industry-it-could-end-up-controlling-us-warn-two-chilling-new-books-266067). A standing problem for this camp is that most of its arguments only hold if we assume that humanity will in fact develop superintelligence—but most fail for regular use. The problem with ASI, however, is that it is generally quite hard to define (e.g. AI that has superhuman capability in maths could be very underwhelming at planning; ASI could be a moving goalpost; etc.), and therefore it is difficult to create policies targeted at preventing the invention of ASI. This camp often ends up using proxies like compute usage at frontier labs to specify when the halt should trigger; yet (a) the threshold’s significance decays as compute efficiency increases, and (b) the industry has no incentive to obey.`,
    },

    entente: {
      title: `entente`,
      details: `This camp considers who will win the AI race to be of paramount importance in whether it will result in good outcomes (Amodei). They worry that unilateral restraint by responsible actors could lead to less responsible ones racing ahead—and that coordinated restraint is not achievable (or at least not soon enough). They see a coalition led by the US exercising greater control over supply chains and securing its technological advantage over its rivals (China) (Aschenbrenner). Critiques state that achieving technological advantage can backfire if states have no means (policies and/or institutions) to force powerful actors to use the accumulated wealth for the betterment of human societies—and mechanisms like this (beyond regular corporate taxes or reputational pressure) do not yet exist.`,
    },

    dacc: {
      title: `d/acc`,
      details: `People in this camp typically don’t expect AI development to stop: either because we can’t (e.g. coordination demands make it infeasible) or because we shouldn’t ([the cost of foregone benefits is too high](https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html)). However, they also recognise that our current technologies will not suffice to protect humanity from the harm AI can potentially create and want a future with [maximum AI benefit and least possible downside](https://defacc.substack.com/p/what-is-defacc-anyway). The strategy that follows is differential acceleration: let AI development progress (incl. at a rapid pace) but channel a growing share of effort into building resilient societies (e.g. accelerating defensive capability in cyber and bio, or developing infrastructure that contains failures instead of propagating/cascading them). In order for this strategy to work, however, it must deliver fast, and that often disqualifies coordinated, government-run or government-mediated efforts. Main critiques of this camp include: (1) the fact that many dangerous AI capabilities are dual-use, and it would be non-trivial to accelerate defensive capabilities only, (2) claims that defence is only good if diffused, and diffusion may be too slow to outpace dangerous capabilities, and (3) scepticism that defensive infrastructure developed outside frontier labs can be competitive with offensive capabilities developed on the inside.`,
    },

    buildOption: {
      title: `build the option`,
      details: `This camp sees it as prudent to build the machinery for pacing before circumstances force us into a decision to pace (and we potentially do a worse job due to being unprepared). This agreement on preparation can cut across wide differences in opinion on how and when pacing would be appropriate. The canonical statement of this position comes from the Pacing the Frontier statement signed by employees of leading AI labs. Useful preparation could be infrastructure for verifying and monitoring compute usage, international agreements on governance and triggers for pacing. A weakness of this approach is that a lack of agreement on triggers for pacing and appropriate measures means the steps taken may prove less useful when they are needed—an intervention prepared now might not meet the challenge of having the necessary impact when needed.`,
    },

    pauseNow: {
      title: `pause now`,
      details: `This camp views AI development as a disaster in the making: AI’s present and near-future impacts on many/all aspects of society are [substantial](https://pauseai.info/risks) as is, and yet it is the best it will ever be. AI is too powerful and unpredictable for anyone (incl. people who built it!) to understand or control it. This camp calls for an [immediate, global, verifiable pause on further frontier development](https://pauseai.info/). The target of this intervention is frontier developers of general-purpose AI—not small- and mid-scale developers, narrow AI applications, or safety research. On this account, [compute trackability](https://futureoflife.org/open-letter/pause-giant-ai-experiments/) makes pausing feasible, though to enforce it over time requires more [cooperation on governance](https://report2025.seismic.org/media/documents/On_the_Razors_Edge_Seismic_Report_2025.pdf) measures that may not yet exist. A weakness of an immediate blanket pause, however feasible and verifiable, is that pausing at every cost doesn’t guarantee that the time will be used wisely and/or that there will be any improvements after the pause’s end. Furthermore, compute is just a proxy for capability, which may decay over time as compute efficiency improves or fail from the outset due to existing latent capabilities.`,
    },

    coordinatedDelay: {
      title: `coordinated delay`,
      details: `On the one hand, this camp’s main premise is that it is in no one’s best interest to [race towards ASI under the current conditions](https://ai-2040.com/). On the other hand, people in this camp typically expect unilateral regulation not to be particularly helpful in preventing the race to the bottom: they create unnecessary distrust, and actors will find their way around regulations they’re unhappy with anyway. This does not mean there is no hope—merely that this hope would need to be coordinated and, by extension, difficult to secure and probably expensive (e.g. require political will, durable institutions, and infrastructure that may not be there). Because of the high expected returns, though, proponents of this camp may find the cost justified. This camp has two main weaknesses: a thin discourse (few concrete proposals for how coordination would work are on the table, some of which we’re hoping to address through our work), and, more pragmatically, the absence of infrastructure to enforce compliance (or timely plans to build it).`,
    },

    tripwires: {
      title: `if-then tripwires`,
      details: `This camp holds that there isn’t necessarily a need to universally hold off on AI R&D, but some exceptionally dangerous capabilities call for (and justify) exceptionally strong interventions. Such interventions (a.k.a. tripwires) must be specified now, for a couple of reasons: (a) harm from advanced AI may be too large and arrive too fast for reactive interventions to matter, and (b) pre-agreed interventions are actionable even in crises (e.g. during chaos or disagreement). Tripwires also answer the sceptics’ concern that top-down interventions are too intrusive, for they never trigger unless a pre-agreed concern becomes real. Furthermore, because tripwires restrict particular activities at particular companies—rather than blanket-constrain all actors—they may attract trailing competitors: the rules slow their faster rivals and give them room to close the gap. Tripwires' major weakness is that they only guard against harm we could imagine, arriving by routes we could imagine, potentially yielding many false negatives; and that they rely on proxies for danger (eval scores, [compute thresholds](https://metr.org/blog/2023-09-26-rsp/)) rather than danger itself, potentially yielding many false positives (each weakening the will to maintain them). Additionally, tripwires today exist only as voluntary frameworks, self-monitored by frontier developers, and a path to making compliance mandatory remains unspecified.`,
    },
  },
};
