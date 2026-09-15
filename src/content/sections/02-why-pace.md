---
title: "Why Pace?"
order: 2
---


Arguments for and against pacing come from two broad perspectives. Will society as a whole be better off if AI progress is deliberately slowed down or sped up? And why do specific actors in the AI R\&D ecosystem seek to pace?

From the global perspective, the question is: Given the current state of AI progress, the historical track record of intervening in R\&D, and the existing economic, political and institutional structures, is it a good idea to attempt to pace AI progress? We start by considering arguments from this perspective, first against (§2.1) and then for (§2.2) increased pacing. 

More pragmatically, pacing will only happen if actors make effective pacing interventions. If the actors are rational, such actions will be taken if the actors view them as having a positive impact in expectation. In §2.3, we consider the perspectives and cost-benefit calculus of different actors.

Section §5 gives a more comprehensive assessment of the benefits and costs of pacing, taking into account second-order effects of the interventions required to make pacing effective.

### **2.1 Why pace less?**

#### **2.1.1 Pacing means waiting longer for very good things**

AI progress so far has had some [highly positive](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6569938) direct impacts: software development is far  [faster](https://www.nber.org/papers/w35275) and cheaper, access to information and advice has widened in every domain of life, and tools like [machine translation](https://arxiv.org/abs/2409.02391), automatic paperwork [filling](https://www.statnews.com/2026/04/01/ai-ambient-scribes-modest-time-savings-clinical-documentation/), and [scientific assistance](https://ai.google/static/documents/AI-in-Science.pdf) save society vast amounts of time.

Many observers expect significant impacts on economic growth from future AI progress, with the median expert in [one survey](https://forecastingresearch.substack.com/p/forecasting-ai-benefits) expecting rates of growth to more than double in advanced economies by 2050 under their “rapid” scenario, which would amount to tens to hundreds of trillions of dollars annually. The largest companies in the world have been betting on this, with capital expenditures in 2026 alone expected to exceed US$1 trillion, and [various](https://www.cnbc.com/2025/10/29/nvidia-on-track-to-hit-historic-5-trillion-valuation-amid-ai-rally.html) [beneficiary](https://www.fool.com/investing/2026/07/09/broadcom-is-less-than-5-from-the-2-trillion-club-a/) [companies](https://www.cnbc.com/2026/05/26/micron-stock-trillion-market-cap.html) in the supply chain valued in the trillions of dollars. And AI already [seems](https://intuitionlabs.ai/articles/ai-discovered-drugs-clinical-trials-2026) to be speeding up life-saving technology.

Reducing the rate of frontier AI progress would delay these enormous benefits. People might well counterfactually suffer and die from [progress not happening as fast](https://nickbostrom.com/papers/the-fable-of-the-dragon-tyrant/).[^2] Thus, the case for pacing more must be weighed against this opportunity cost.

**2.1.2 Pacing can directly cause bad outcomes**

Aside from the potential value sacrificed, pacing interventions can very directly cause harm. We highlight three particularly significant risks:

**Power concentration**. Interventions often require an enforcer—for example, to monitor compute supplies, or inspect logs, or secure access to advanced models. [Such](https://www.cato.org/cato-journal/spring/summer-2021/reckoning-looms-americas-50-year-financial-surveillance-system) [bodies](https://www.brennancenter.org/our-work/research-reports/what-went-wrong-fisa-court) can then find themselves with sensitive information, privileged access to dangerous capabilities, and/or discretionary enforcement power. This naturally comes with the risk of abuse or simply of bureaucratic incompetence. We discuss this further in §5.3.

[**Overhangs**](https://aiimpacts.org/hardware-overhang/) **in AI progress.** When some part of AI progress is temporarily limited, progress can afterward resume at a *faster* pace if some resource (compute, efficiencies, ideas, etc.) has accumulated in the interim. For example, if a restriction were placed on training runs of a certain size, AI developers would likely learn to train more efficiently. If the restriction expires or someone violates it there could be a [sudden burst](https://blog.aiimpacts.org/p/are-there-examples-of-overhang-for) of progress that produces even more harm than the intervention prevented, due to the lack of time to adapt. Badly designed pacing thus converts smooth risk and predictable progress into jagged progress and lumpy risk. We discuss this further in §4.4.

[**Races**](https://link.springer.com/article/10.1007/s00146-015-0590-y) **to the bottom**. In situations involving several competing actors where pacing is competitively costly, the less cautious actors can pull ahead while the more scrupulous ones fall behind. This makes it much harder to manage risks which only depend on the least safe actor, like the proliferation of dangerous capabilities in open-weight models. Even actors who are concerned about risks have to balance immediate harms against the risk of falling behind and losing influence. We discuss this further in §2.3.

#### **2.1.3 Good pacing can get in the way of better pacing**

If different interventions rely on the same scarce resources like finite political capital or technical expertise, then aiming for the best forms of pacing becomes all the more important.

One way this manifests is that it might be very important to time pacing right. Some kinds of empirical safety work addressing risks from highly advanced AIs become easier as capabilities move closer to the point where the risks manifest: lessons learned through experiments on more advanced models are more likely to remain valid when capabilities reach the true danger zone. Slowing down preemptively [might cost political capital](https://www.alignmentforum.org/posts/dxgEaDrEBkkE96CXr/thoughts-on-responsible-scaling-policies-and-regulation) which could be better spent at a higher-leverage time. 

Indeed, AIs themselves are likely to be an important tool in addressing risks. For example, a classic motivation for slowing AI progress is to buy time for research into value alignment, oversight, and interpretability. But one of the [main current bets](https://shallowreview.ai/Make_AI_solve_it) in AI safety is developing an [automated alignment researcher](https://shallowreview.ai/Make_AI_solve_it) that can pack thousands of person-years of research into a short period. This will be far more effective as AIs themselves become more capable.

The strength of this argument depends on how feasible the better options actually are and how scarce the resources actually are. A major empirical question for pacing is how far in advance those in a position to act will see the risks and how quickly they will be able to react, as we discuss in §4.1 and §4.2.

#### **2.1.4 Pacing historically has been hard to undo**

Many technologies have been regulated in a way that slows development, ranging from germline genetic engineering and geoengineering—which have been de facto banned for decades—to nuclear power and flight. 

Consider nuclear power, which was heavily restricted from the 1980s onward, ostensibly for safety reasons. The slowed rollout of nuclear power has been hard to undo, with [substantial](https://academiccommons.columbia.edu/doi/10.7916/d8-qez9-6m49) environmental impacts. A huge amount of carbon dioxide and indeed geopolitical strife could have been avoided if all of Europe had built as many nuclear power stations per capita as France. This partly overlaps with §2.1.3, where some better mechanism might have been found.

But beyond this, it burned investor trust and disincentivized investments in nuclear power. Investors rightfully feared capricious and politicized regulation would block nuclear power plants, regardless of the underlying merits.

It is likewise possible that pacing will not have the trust of those in AI because they are correct in predicting it will be hard to undo if the risk is found to be low. 

### 

### **2.2 Why pace more?**

#### **2.2.1 AI threats take time to understand and mitigate**

As AI systems become more advanced and distributed, they create new risks which need mitigating. Sometimes the risks come faster than the mitigations, and so the relevant actors will benefit from extra time to adjust.

One concrete example of this is how Anthropic’s [Project Glasswing](https://www.anthropic.com/glasswing) and OpenAI’s [Trusted Access for Cyber](https://openai.com/index/trusted-access-for-cyber/) program delayed the public release of their most advanced models because of their potential to aid in cyberattacks, while still providing them to certain key groups that could use them to shore up their cyber defenses.

Beyond specific risk considerations, advanced AI will likely bring substantial societal upheaval, and time may be needed for citizens to collectively make decisions about what sort of changes and adaptations are desirable, before these changes are thrust upon them and become difficult to roll back. 

The range of activities that pacing can buy time for is extremely broad. It could look like building technical approaches to prevent harmful model behavior, or developing better governance frameworks for handling emerging capabilities, or simply giving society more time to adjust to fundamental disruptions. Particularly in the case of technical approaches, pacing can both buy time and free up resources to help with mitigation. For example, delaying frontier model development could make more compute and labor available for risk mitigation, while delaying the release of completed models could buy time for development of evaluations or specific resilience measures.

Beyond specific known threats, pacing can serve as a precaution that buys time to figure out whether there are major risks. For example, [most](https://guidelight.ai/blog/control-assessment-august-2026) frontier developers take time to evaluate their models for dangerous capabilities before deploying them. This is particularly relevant for parts of progress that become more difficult to reverse over time, like releasing model weights: once a set of weights has been distributed, it is essentially impossible to retroactively add more safeguards.

Even after a threat has been identified, the capacity to deal with it will vary. Sometimes it will be quite straightforward—for example, post-training a model to refuse some sufficiently high percentage of harmful requests. Here, the case for pacing is easy to evaluate: a well-scoped mitigation with a fairly predictable cost in time. But in other cases it will not be clear what mitigations are necessary or how long they would take, for example because they require novel scientific breakthroughs. This is likely to become more of a challenge as AIs become more capable of reasoning about evaluations and engaging in strategic deception. Model evaluators’ confidence in AI systems’ alignment will become weaker even as their capacity for harm increases.

In cases featuring an evolving risk (such as progressive increases in the capacity of AIs to evade oversight or incremental disruptions to the labor market) it may be preferable to [titrate](https://openai.com/safety/how-we-think-about-safety-alignment/): to allow capabilities to gradually outrun protections in a controlled manner that caps the potential harm, in order to learn what type of protection is required. A challenge with this approach is that it necessarily involves accepting risks without understanding them well enough for mitigation, on the *assumption* that it will be feasible to tolerate the harm and eventually figure out a solution despite not understanding the problem yet. 

Where the harm is potentially catastrophic and irreversible, however, there might not be an opportunity to learn from mistakes. If waiting merely postpones benefits, then there is an asymmetry between the cost of going too fast versus too slow which strengthens the case for greater precaution.

#### **2.2.2 AI threats can be sudden and unpredictable**

Predicting all the potential effects of AI progress is extremely challenging even in the short term. Sometimes a system displays an unexpected capability or causes unexpected outcomes, and even without a clear picture of how one would remedy the situation, it may be helpful to slow the activity implicated in the warning and try to make sense of the situation. This has a few benefits. Firstly, it means that capacity can be redirected toward understanding the situation and its broader implications. Secondly, it means that there is less chance of further unexpected outcomes. Thirdly, it buys time to more carefully make decisions which might otherwise be hard to reverse.

The immediate use of time is therefore inquiry: investigating what happened, perhaps reproducing the result, and determining which assumptions need to change. A benefit of progressing at a slower pace is that this becomes more feasible—some processes, such as human-led investigation and deliberation, can only be done so quickly, and if the pace of overall progress becomes too fast these may lose a lot of their effectiveness.

For example, OpenAI temporarily [halted](https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks) internal development of its “Astra” model after discovering [another unreleased model](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) had broken out of a secure sandbox, subverted OpenAI infrastructure, and launched a cyberattack on a number of other companies, and after Astra demonstrated “[critical](https://www.cnbc.com/2026/09/01/open-ai-astra-cyber-model.html)” cyberoffense capabilities. This incident was unprecedented enough to warrant a sudden stop, even without a particular plan for how to respond, because reasonable security assumptions were violated and the risk of continuing was judged too high.

Unexpected threats are hard to fully plan for. The existence of this category points to the need not just for specific intervention plans but for the capacity to quickly and effectively intervene in new ways that address changing situations.

**2.2.3 AI progress can create lose-lose situations**

Advances in AI could create situations where several parties are in competition in a way that is inherently unstable and destructive. If highly autonomous systems could conduct AI research much more quickly without humans in the loop, there would be strong pressure for developers to allow them to do so. Even those concerned about risks from the absence of oversight could find it too costly to unilaterally refrain from these speedups.

A similar problem would arise if governments could enhance their military capabilities by delegating decision-making powers to much faster-than-human AI systems. Pressure to reduce human review in order to stay competitive would increase the aggregate risks of unintended escalation. 

In such situations, the natural incentives would pull toward a lot of value being lost. Once such situations arise, they bring with them the challenge of coordinating against those incentives. But it is also possible to avoid entering those situations: to deliberately avoid creating technologies that produce these dynamics, or to delay their creation until other complementary technologies can mitigate the risk.

### **2.3. Actors and their incentives around pacing**

Beyond the reasons humanity has for favoring or opposing pacing interventions, individual actors will naturally weigh their own self-interest when considering interventions. Managing AI progress is difficult due to this tension between one’s own interests and those of the collective (e.g. when frontier labs must decide how much detail to share about internal safety incidents, or when states choose how much to automate their military).

Here we look at some of the major types of actors involved in AI progress and the factors that shape their incentives to pace or not pace. These actors’ and a broader list of actors’ incentives are discussed in more detail in §5.

#### Governments

On the international scale, the main challenge for governments in coordinating with each other is the lack of an existing higher authority to appeal to that can credibly enforce interventions. This puts them at risk of [arms-race-like](https://link.springer.com/article/10.1007/s00146-015-0590-y) dynamics which no other actor can step in to solve. In particular, governments must manage the potential for AI as a military technology.

Governments vary in their different strategic positions and degrees of leverage over different parts of AI progress, which means that they will be incentivized to support very different forms of pacing. Abstractly, those in the lead have a reason to support pacing that consolidates a lead, and those behind have an incentive to support pacing that lets them catch up. Concretely, many parts of the global AI supply chain still largely depend on single specific companies that are physically based in specific countries. As such, governments already take some unilateral actions to cement their leads by pacing their competitors, most notably by limiting the flow of hardware, model capabilities, and researcher talent.

Domestically, governments are the parties most able to solve internal coordination problems, by regulating developers, infrastructure, and wider usage. Not only do frontier developers face difficulties finding appropriate ways to coordinate with each other, but in some cases they may not be [legally allowed to](https://www.lawfaremedia.org/article/can-frontier-ai-labs-lawfully-agree-to-pause) because of antitrust regulation.

It is important to distinguish between the theoretical power available to governments and the actual opportunities available to government employees. Practically speaking, governments are heavily constrained by their own laws and precedents, and have difficulty surfacing expertise. So their ability to regulate effectively, for example, is partly limited by their ability to identify experts and allocate an appropriate amount of funding toward them \- for instance, the nominal [annual budget](https://ifp.org/funding-for-caisi/) of the US government AI evaluator is less than the salary of [some](https://www.nature.com/articles/d41586-026-02026-1) individual frontier AI researchers. But this could plausibly change very quickly in the case of a perceived emergency.

AI also has the potential to seriously disrupt the relationship between governments and their citizens. AI could massively increase the degree of leverage that governments have over their citizens, by enabling larger-scale surveillance and by reducing the degree to which governments depend on citizens for tax revenue or a security apparatus. Conversely, AI could [seriously](https://flia.org/wp-content/uploads/2017/07/A-New-Generation-of-Artificial-Intelligence-Development-Plan-1.pdf) [disrupt](https://thelegalwire.ai/cac-launches-special-campaign-to-clear-up-and-rectify-the-abuse-of-ai-technology/) governmental authority simply by moving faster than regulation can and presenting a new source of power that governments cannot easily gain a stake in. This presents an interesting problem: governments have the incentive and capacity to pace the capabilities which would make them relatively weaker, but not the ones which would make them relatively stronger.

Alongside this, governments have incentives to be seen to be acting and taking public concerns seriously. Politicians may share these concerns, and regardless will face electoral or reputational pressure to respond to them. Salient high-profile incidents or sustained public pressure could make pacing politically attractive even in cases where it conflicts with other political or commercial priorities. The most effective interventions for satisfying citizens’ concerns, however, may not coincide with the most effective interventions by other lights.

#### AI developers

AI developers are in an awkward economic position: developing a frontier AI model is [enormously](https://finance.yahoo.com/technology/ai/articles/openai-burning-12-3-billion-135516997.html) expensive, [extremely](https://www.axios.com/2026/04/13/anthropic-revenue-growth-ai) [valuable](https://epoch.ai/gradient-updates/an-update-on-ais-most-important-number), and yet the product’s commercial value [decays within months](https://arxiv.org/abs/2601.10088) as new frontier models are developed. This dynamic puts them in tight competition with each other. This competition makes it harder for them to individually prioritize safety, and also makes it harder for them to function as a cartel. Instead they are pulled toward intense R\&D investment.

Indeed, even if a developer were heavily motivated by values other than profit, it seems likely that most of the potential impact (and indeed profit) of AI is concentrated in more advanced models, so the main way to maximize individual leverage is by trying to get to the front of the pack.

Developers delaying frontier model releases to make time for safety testing is already extremely expensive because it cuts into the limited time that the model can actually be at the frontier, although there are also incentives pushing them toward this (high-profile incidents or misalignment degrading the capabilities that customers desire is not good for business).

Compared to governments, developers currently have access to a much deeper bench of technical talent and a far richer understanding of the state of their own AIs, and indeed their own future plans. In some ways this makes them better placed to reason about what type of pacing would be best. However, much like governments, developers will prefer different forms of pacing depending on their strategic position: while established institutions can more easily handle onerous compliance, frontrunners have more to lose from hard caps on model capabilities or training size, and so on.

At least for now, though, frontier developers are fiercely competitive over researcher talent, and therefore top researchers have quite a lot of leverage. Researchers at the current frontier labs display a [notable desire](https://www.pacingthefrontier.com/) for at least the *capacity* to pace frontier progress.

#### Citizens

Citizens have the least direct influence over AI progress. Their authority routes almost entirely through governments, which in turn vary in their leverage. They have a lot to lose and a lot to gain: aside from the potentially existential harms, advanced AI could plausibly cause mass labor displacement and leave citizens with negligible hard power over governments, but it could also create an enormous surplus of value and great leaps in scientific progress that could be widely distributed. Most people will not be in a good position to form a clear sense of the balance of costs and benefits.

All things being equal, we might expect citizens to dislike extremely rapid and large-scale disruptions even if the net effect looks plausibly positive, and we might expect them to advocate for pacing the parts of AI progress that seriously weaken them, like mass surveillance or military automation. But unfortunately there is a risk that citizens can be maneuvered into acting against their own long-term interest: by accepting generous income top-ups as a condition for supporting broad labor automation that will in the long run leave them without leverage.

#### Infrastructure providers

The compute supply chain—semiconductor companies like Nvidia and Micron, and major cloud providers such as Google and Amazon—have a lot of leverage over the rate of AI progress. 

Under many different plans they will have control over significant leverage points for interventions: hardware interventions, tracking compute usage, and managing various inference access points for end users. They and their investors may ultimately bear a lot of the costs of an intervention, and the opportunity cost of anything which slows down the rate of the overall datacenter buildout (see §5.4 and §3.1). 

#### What this means for a workable intervention

Rather than rely on voluntary, unilateral interventions, some contexts will require [coordinated pacing](https://arxiv.org/pdf/2511.08631). This is more onerous, because it requires coordination during the various stages of pacing, and then mechanisms to ensure the coordination persists. It is also very difficult to specify what a fair coordinated intervention would look like, because actors vary so much in their strategic positions.

It is not a given that coordinated pacing would actually be good for the world. One risk is that actors coordinate *against* the common good. Without an authority capable of constraining all relevant actors,the only ways to pace (without merely ceding power to another actor) are either to coordinate, or to have a lead you can afford to burn.

### **2.4 Case A: a cap on frontier training**

Frontier model progress has increasingly made AI systems capable of automating their own further improvement. Anthropic, for example, has [claimed](https://www.anthropic.com/institute/recursive-self-improvement) that it is producing 8x as much code per researcher since the release of Mythos 5, when compared to the pre-2025 baseline, and that its own researchers estimated they were sped up by a factor of 4x, though [Anthropic thinks](https://metr.org/notes/2026-07-08-anthropic-researcher-uplift/) that this was likely an overestimate. If this AI contribution to AI became sufficiently large, capability development could accelerate while also becoming less dependent on human researchers. The time available to evaluate successive systems might shrink, even as previously functional oversight measures break down and unexpected new risks emerge.

One direct intervention aimed at slowing down this trajectory could be a cap on the compute budgets for training frontier models. This would impede one major source of capabilities progress, and extend the window of controllability before existing methods and systems are no longer capable of adequately supervising AI progress. Evaluation, security, and governance systems may be inadequate for development substantially accelerated by AI.

Such a cap would also delay beneficial capabilities (including AI-assisted safety research). Governments and developers would be more likely to support this intervention if they knew their competitors faced similar constraints, and there was a clear path to lifting the cap given specific progress. Loopholes and adaptations that would reduce the intended effect on capabilities are [known to exist](https://epochai.substack.com/p/three-issues-undermining-compute). The case for the cap therefore is very sensitive to how credibly it will constrain competitors, and what can be achieved during its implementation.

### **2.5 Case B: restricting access to dangerous biological capabilities**

AI systems are increasingly able to aid some users in [developing biological weapons](https://arxiv.org/pdf/2506.13798). Governments and developers may face some lag in their ability to assess uplift, to restrict it in specific models, and to deploy model capabilities to develop countermeasures. Restrictions could include safeguards on publicly available models, with access to less restricted versions remaining gated (as with Anthropic’s [release](https://www.anthropic.com/news/claude-fable-5-mythos-5) of Fable 5 and Mythos 5). Furthermore, releasing the weights of individual models removes any ability to regulate them if they turn out to provide an unacceptable degree of uplift.

Pacing could buy time for better uplift evaluations, safeguards and unlearning, secure hosting, user authentication, controls on model weights, public-health preparedness, and international procedures for handling dangerous models and evidence. 

These interventions could complement controls on biological materials and laboratory infrastructure, though the value depends on how much marginal protection they add. They could also impede legitimate biological research for those without access to the less-restricted model versions.

### **2.6 Open Research Questions**

* **How much, and in what ways, would more time allow us to better manage various AI risks?** What are the bottlenecks to mitigation or adaptation of different AI risks? What factors other than time influence AI risk management? What risk management efforts can be taken now, and which can only be taken once certain AI capability or adoption thresholds are crossed?  Related work:  
  * *MacAskill & Moorhouse (2025), [Preparing for the Intelligence Explosion](https://www.forethought.org/research/preparing-for-the-intelligence-explosion)* Explicitly sorts "grand challenges" by whether they need calendar time, human deliberation, or just more AI.  
  * *Hobbhahn (2025), [What's the short timeline plan?](https://www.lesswrong.com/posts/bb5Tnjdrptu89rcyY/what-s-the-short-timeline-plan)* A concrete inventory of which safety measures are ready to deploy now, and which need years of preparation.  
* **How might pacing become more or less difficult over time?** What investments can be made now to preserve optionality over pacing in the future? In particular, under what circumstances does pacing now make future pacing more or less feasible?  Related work:  
  * *Rahman (2026), [Does Distributed Training Undermine Compute Governance?](https://arxiv.org/abs/2605.29359)*   
  * *Sastry et al. (2024), [Computing Power and the Governance of Artificial Intelligence](https://arxiv.org/abs/2402.08797).* Maps compute governance options and their readiness  
* **How do actors in this space make decisions about pacing?** What evidence do they currently consider and what assumptions do they currently make? What pathways exist for external research to inform such decisions, e.g. in government or lab leadership, and what makes that information transfer more effective?  
  * *METR (2025), [Common Elements of Frontier AI Safety Policies](https://metr.org/blog/2025-12-09-common-elements-of-frontier-ai-safety-policies/\))*  
* **Which AI risks are most likely to motivate a pacing intervention, now and in the future?** Where do different dangerous capabilities sit on the offense/defense balance, and how will that change over time?  Related work:  
  * *Garfinkel & Dafoe (2019), [How Does the Offense-Defense Balance Scale?](https://www.tandfonline.com/doi/full/10.1080/01402390.2019.1631810)*  
  * *Shevlane & Dafoe (2020), [The Offense-Defense Balance of Scientific Knowledge: Does Publishing AI Research Reduce Misuse?](https://arxiv.org/abs/2001.00463)*  
  * *Esvelt (2022), [Delay, Detect, Defend: Preparing for a Future in which Thousands Can Release New Pandemics](https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics)*  
* **How does transparency about capabilities affect coordination?** When does common knowledge of research progress intensify or weaken race dynamics, for example by revealing that a rival is close behind or that progress is possible?  Related work:  
  * *Bostrom (2017), [Strategic Implications of Openness in AI Development](https://onlinelibrary.wiley.com/doi/full/10.1111/1758-5899.12403)*  
  * Armstrong, Bostrom & Shulman (2016), [*Racing to the Precipice: a Model of Artificial Intelligence Development*](https://nickbostrom.com/papers/racing-to-the-precipice.pdf) Better information about rivals' capabilities can *increase* danger when teams are close, because it removes uncertainty that induces caution.  
* **What are the risks and benefits of titration** (“deploy it and learn the risks empirically”)? Have past release strategies from frontier labs succeeded in managing known AI risks? What might change in the future risk landscape? Given our uncertainty about the true risks, what criteria should gate the deployment of new frontier models?   
  * *Shevlane et al. (2023), [Model Evaluation for Extreme Risks](https://arxiv.org/abs/2305.15324)*.

[^2]: This opportunity cost [may even include](https://nickbostrom.com/optimal.pdf) mitigating other potential existential risks, such as biorisks and nuclear war. So even the threat of existential risk from advanced AI does not necessarily warrant pacing, depending on its relative reduction of other risks.
