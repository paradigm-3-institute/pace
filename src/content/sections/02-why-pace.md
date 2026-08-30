---
title: "Why Pace?"
order: 2
---


There are two broad perspectives from which arguments for and against pacing have been made: from the perspective of society as a whole — will the world be better off if AI progress is deliberately slowed down vs sped up? — and from the perspective of specific actors in the AI R\&D ecosystem — why would the actors involved seek or agree to pace?

Looking at pacing from the global perspective, the question is something like: given the current state of AI progress, our historical track record of intervening in R\&D, and our existing economic, political and institutional structures, do we think it is a good idea to attempt to pace AI progress? We start by considering arguments from this perspective, first against (2.0) and then for (2.1) increased pacing. 

More pragmatically, pacing will only happen if actors take effective pacing actions. If the actors are rational, such actions will be taken if the actors view them as having a positive impact in expectation. In (2.2) we consider the perspectives and cost-benefit calculus of different actors, noting their incentives, operating environments, high-level control over pacing, and relations to other key actors. In that section we aim to both explain why current actors are or aren't taking, or advocating for, pacing activities, and set out conditions under which we expect them to advocate for or take steps to pace in future.

The following takes stock of the facts, assumptions and dynamics pacing arguments rely on. Later sections then explore these in detail, surfacing further considerations that affect the costs and benefits of pacing. We return to a more comprehensive assessment of the benefits and costs of pacing, taking into account second-order effects of the interventions required to make pacing effective, in (5).

### 2.1 Why pace less?

#### 2.1.1 Pacing means we have to wait longer for very good things

AI progress so far has had some [highly positive](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6569938) impacts: software development is greatly sped up, access to information and advice has widened in every domain of life, and tools like machine translation and automatic paperwork filling save people vast amounts of time.

Many observers expect far more significant impacts on economic growth from future AI progress, with the median expert in [one survey](https://forecastingresearch.substack.com/p/forecasting-ai-benefits) expecting rates of growth to more than double in advanced economies by 2050, amounting to tens to hundreds of trillions of dollars annually. And AI already [seems](https://intuitionlabs.ai/articles/ai-discovered-drugs-clinical-trials-2026) to be speeding up life-saving technology. 

Reducing the rate of frontier AI progress would at least delay these enormous benefits. People might well counterfactually die and suffer from progress not happening as fast. Thus, if we want to make the case for pacing more, we need to form a positive case which will overcome this opportunity cost.

This opportunity cost may even include mitigating other potential existential risks, such as biorisks and nuclear war. So even the threat of existential risk from advanced AI does not necessarily warrant pacing, depending on the relative reduction of other risks.

#### 2.1.2 Good pacing can get in the way of better pacing

Even if we accept that there are risks from further progress, it may be very important to aim for the best forms of pacing rather than merely good ones, if there is a limited capacity to sustain pacing, for example because of finite political capital. 

One way this manifests is that it might be very important to time pacing right: making concrete inroads on solving AI safety problems is itself easier as we move closer to the point where the risks manifest \- the models we use become more analogous to the future models we worry about, and lessons learned through experiments on more advanced models are more likely to remain valid when we get to the true danger zone. Slowing down preemptively costs political capital we ought to save for a higher-leverage time. 

Indeed, AIs themselves might be an important tool in addressing risks. For example, a classic motivation for slowing AI progress is to buy time for research into value alignment, oversight, and interpretability. But one of the [main current bets](https://shallowreview.ai/Make_AI_solve_it) in AI safety is developing an automated alignment researcher that can pack thousands of person-years of research into a short period. This will be far more effective as AIs themselves become more capable.

The strength of this argument depends on how feasible the better options actually are — a major empirical question for pacing is how far in advance we will see the risks and how quickly we will be able to react, as we discuss in (4.1-4.2).

#### 2.1.3 Pacing can directly cause bad outcomes

To be stable, some pacing interventions will require strong monitoring regimes (i.e. global compute surveillance) and sometimes require law enforcement (i.e. criminalising previously legal activities like large training runs or underground datacenters). All such centralised power has the possibility for abuse, as well as classic failure modes like government failure and failure to aggregate or heed bottom-up information. We discuss this further in (5.2).

#### 2.1.4 Pacing can create overhangs

Many proposed pacing interventions, such as constraining training runs (but not constraining algorithmic progress or hardware innovation) could mean that AI training becomes more efficient. That is, it could be that the paced field builds up the potential to rapidly scale later. Then, when the pacing breaks — via defection or a wholesale policy reversal — AI progress arrives discontinuously.

These “overhangs” could be even more dangerous than the relatively steady compute-bottlenecked situation we currently find ourselves in. Discontinuity is what we handle worst; badly designed pacing thus converts smooth risk and predictable progress into lumpy risk. Instead of seeing 3 years of progress over 3 years and allowing society to adapt, we could see 2.5 years where we only see 1 year of the expected counterfactual progress, and then suddenly 2 more years of progress in 6 months. We discuss this further in (4.4).

#### 2.1.5 Uncoordinated pacing makes the incautious win

As of writing, the leading labs are taking [costly steps](https://thenextweb.com/news/openai-20-percent-compute-overhead-safety-monitoring) in the name of model safety, and the leaders also generally [score better](https://guidelight.ai/blog/control-assessment-august-2026) on safety practices than trailing labs. Pacing interventions which place greater burdens on leading labs (sensibly, since advancing the frontier is more dangerous than catching up to it) will lead to more incautious actors catching up, and, in the case of circumventable restrictions, surpassing existing leading labs, creating greater risk than in the counterfactual where the current, more cautious, leaders retain their edge.

This is particularly biting in the case of voluntary or unilateral pacing, where one need not even appeal to the records of specific actors to see that the less cautious will have an edge.

### 2.2 Why pace more?

#### 2.2.1 Pacing lets us pay down safety debt

If we assume that the capacity to cause harm posed by AI scales with its capability (especially as the capability reaches and surpasses human level), then if capability advances faster than safety, we get increased risk, leading to a *safety debt*. Pacing could help by allowing our protections to catch up to the current level of intelligence. 

The extra time bought by pacing could let us strengthen whatever protections are falling behind — similar to how Anthropic’s [Project Glasswing](https://www.anthropic.com/glasswing) and OpenAI’s [Trusted Access for Cyber](https://openai.com/index/trusted-access-for-cyber/) program delayed the public release of their most advanced models, while still providing it to certain key groups that could use it to shore up their defences.

*Safety debt* is an umbrella term for any efforts aimed at both making models less harmful and more controllable, and making human societies harder to destabilise. In some cases, this will mean making sure a newly developed model isn’t deceptive or that agents don’t engage in scope creep. In other cases, we may want to make societies more resilient to advanced AI—for example by increasing cyber resilience or giving labour markets time to absorb AI-driven job displacement. Pacing may allow time to explore anomalous behaviours before release or free up resources (incl. man-hours or compute) to create reliable countermeasures.

Knowing what we will do with extra time makes making the case for pacing easier \- this favours cases where the bottleneck is limited resources or institutional attention, as opposed to solving issues which require unknown scientific breakthroughs, where the tradeoff between getting better AI to help solve the problem and the increased risks which accompany that are less clear.

In cases involving an evolving risk (such as incremental increases in the capacity of AIs to evade oversight or incremental disruptions to the labour market) it may be preferable to *titrate*: to allow capabilities to gradually outrun our protection, in a controlled manner that caps the potential harm, so that we learn what type of protection is required. A problem with this approach is that there is a very fine line between “building protections in response to empirically observed behaviours” and “bumbling along in the dark hoping that we’re not about to irrecoverably walk over the edge of a cliff”. In other words, titration risks mistaking unpreparedness for strategy.

#### 2.2.2 Pacing lets us avoid irreversible consequences

A well known heuristic in risk management is the precautionary principle, which holds that where an activity poses a threat of serious or irreversible harm, lack of full certainty of the extent of that harm should not be used to justify avoidance of precautionary measures. Some developments can make later intervention less effective or much harder. Pacing can preserve control over a decision even when the right decision is not yet clear, and give actors more room to reason through their options.

For example, once model weights have been published, developers lose the ability to pull that model, add guardrails, or intervene on specific malicious usage — options which frontier closed-weight developers have exercised several times in response to unexpected risks.

The threat of irreversibility must be invoked judiciously. Almost any restriction can be defended by invoking possible future harms. Pacing is most justifiable on these grounds when there are specific options that would disappear by default, and a positive case for how extra time could lead to a more considered decision.

Irreversibility also cuts both ways. The prospect of enabling less cautious actors to catch up or gain an unrecoverable lead can render an otherwise attractive pacing intervention unviable.

#### 2.2.3 Unknowns

Despite our best efforts, we cannot predict all the potential effects of AI progress. Sometimes a system displays an unexpected capability or causes unexpected outcomes, and even without a clear picture of how one would remedy the situation, it is helpful to slow down and make sense of the situation. The immediate use of time is therefore inquiry: investigating what happened, perhaps reproducing the result, and determining which assumptions need to change. A benefit of progressing at a slower pace is that this becomes more feasible \- some processes, such as human led-investigation and deliberation, can only be done so quickly, and if the pace of overall progress becomes too fast these may lose a lot of their effectiveness.

For example, OpenAI temporarily [halted](https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks) internal development of its “Astra” model after discovering another unreleased model had broken out of a secure sandbox and launched a cyberattack on another company. The activity was unprecedented enough to warrant a sudden stop, even without a particular plan for how to respond, because reasonable security assumptions were violated and the risk of continuing was judged too high.

This type of threat is inherently hard to fully plan for because it is a catch-all for the unexpected. The existence of this category highlights the need not just for specific intervention plans but for the capacity to quickly and effectively intervene in new ways that address changing situations.

### 2.3. Actors and their incentives to pace and not pace

In the real world, reasons to pace and not to pace coexist—and create tensions. Sometimes, different actors may have conflicting preferences for the outcome, and sometimes they may have different incentives to act. Here we look at incentives of various actors beyond the above which may affect their willingness to pace more.

Some generally applicable reasons that may bring actors who would not unilaterally slow down to the table include:

* **Catch-up runway:** A pacing intervention designed to cap the frontier (rather than status-quo freeze) may immediately affect more advanced actors while less advanced actors get some wiggle room to catch up.   
* **Savings:** For advanced—but also less advanced—actors, slowing development may result in more profit, as they face less pressure to spend heavily to keep up. It may also allow diversion of more time and resources to ensure public safety.  
* **Prospect of exclusion:** If one actor is in more control of the resources compared to others, they may choose to threaten to withdraw resources from those who do not cooperate with a pacing intervention. For example, NVIDIA chip access, or even more broadly, TSMC advanced-node access.  
* **Value alignment:** Actors may value the cooperative outcome above what they could gain by defecting. The bad news is that this incentive hinges on mutual trust and reliable verification infrastructure. The good news is that we’ve seen it work in real life.

#### Governments

Governments of leading AI-developing nations (AI “superpowers”) face something of a prisoners’ dilemma: even if convinced of the global benefits of pacing, their relative position may be harmed if they unilaterally introduce pacing interventions, and actors in more lax jurisdictions not party to the agreement catch up or speed ahead of them.

Given a sufficiently large lead or large imminent risk, this need not be dispositive, and they could still rationally decide to pace, but it would be much easier for them to agree to pacing if they could assure themselves it will not cost them geopolitical advantage.

Governments which are currently behind (e.g. China, the EU) may conversely see benefits from pacing if they believe this will allow them to catch up eventually. For example, China may expect to be in a relatively stronger position in the future once their domestic chip industry has a chance to catch up, and so buying time now may look attractive. 

Even without the prospect of catching up, if a faster pace of progress looks like it may lock in American hegemony in the long run, other actors may be interested in buying time and delaying this.

#### AI developers

AI developers can be split into two camps: frontier developers, and non-frontier developers. The economics of current AI strongly favour frontier developers, with frontier models commanding a significant premium over those 6 months [behind](https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber) the state-of-the-art. 

This means developers who are currently on the frontier need to be assured they will retain their competitive advantage, or achieve some other way to retain pricing power, or face significant economic harm from slowing down and allowing others to potentially catch up. 

Conditional on achieving this, they may have strong incentives to pace. If the race dynamics they are currently subject to are significantly weakened, they will face less pressure to pour all their resources into R\&D, and may even achieve sustainable profitability more quickly.

For developers who are behind the frontier have competing incentives, the opportunity to catch up if the frontier is slowed down is a feature, not a bug. 

In either case, developers will fear that their competitors may circumvent the interventions, leaving them worse off, and may try to do this themselves, so any intervention needs to make a credible case to developers that it will be reliably enforced. Developers will also bear costs from any regulation, as their resources will be required for compliance and new bureaucratic hurdles to navigate will come into being.

#### Citizens and their advocates

While the actors at the table in a given negotiation will likely primarily involve governments and companies, the former are accountable to their electorates (or, in the case of authoritarian regimes, still maintain an interest in retaining public goodwill). This means the incentives of citizens and their preferences matter in pacing considerations.

At time of writing, the citizens with the most direct path to impacting pacing  are likely US citizens. In general, US citizens are suspicious of AI and of significant changes, and individual regulatory interventions usually [poll well](https://futurerealities.org/poll/2026/findings/). Fears of labour displacement also make slowing down AI progress a reasonably easy sell. However, the greater the impact of AI on the economy, the more citizens’ jobs, wellbeing and the sustainability of tax revenues will become dependent on continued AI investment, meaning this is not guaranteed to persist.

#### What this means for a workable intervention

Rather than rely on voluntary, unilateral interventions, some contexts will require coordinated pacing. Coordination strategy adds yet another layer on top of other criteria for evaluating pacing interventions outlined in later sections: a quality intervention must justify not only why it’s worth disturbing the default trajectory in general, but also why the intervention’s design incentivises involved parties to agree and stick to it.

While domestic coordination alone may not overcome international race dynamics, it may help create the trust and infrastructure—such as verification processes—necessary to make coordination work on an international scale.

### 2.4 Applying “why pace?” Case A \- frontier training cap

Frontier model progress has increasingly made AI systems capable of automating [their own](https://www.anthropic.com/institute/recursive-self-improvement) further improvement. Anthropic, for example, claimed that it was producing 8x as much code per researcher since the release of Mythos 5, when compared to the pre-2025 baseline, and that its own researchers estimated they were sped up by a factor of 4x, though Anthropic thinks that this was likely an overestimate. If this AI contribution to AI became sufficiently large, capability development could accelerate while also becoming less dependent on human researchers. The time available to evaluate successive systems might shrink, even as previously functional oversight measures break down and unexpected new risks emerge.

One direct intervention aimed at slowing down this trajectory could be a cap on the compute budgets for training frontier models. This would impede one major source of capabilities progress, and could therefore help to extend the window of controllability before existing methods and systems are no longer capable of adequately supervising AI progress, and buy time to push on oversight measures: evaluation, security, and governance systems may be inadequate for development substantially accelerated by AI.

### 2.5 Applying “why pace?” Case B \- uplift to biological weapons

AI systems are increasingly able to aid some users in [developing biological weapons](https://arxiv.org/pdf/2506.13798). Governments and developers may face some lag in their ability to assess uplift, to restrict it in specific models, and to deploy model capabilities to develop countermeasures. Furthermore, releasing the weights of individual models removes any ability to regulate them if they turn out to provide an unacceptable degree of uplift.

Complementary activities include better uplift evaluations, safeguards and unlearning, secure hosting, user authentication, controls on model weights, public-health preparedness, and international procedures for handling dangerous models and evidence.

### 2.6 Open research questions

* How can we choose an optimal pausing point, trading off increasing risks against benefits from continued progress, and increased understanding of the risks themselves?  
* Under what assumptions about the relative difficulty of automated alignment vs automated capabilities progress does it make sense to pursue automated alignment more aggressively vs seeking to slow down? And similar questions about offense/defense balances in other domains  
* Where do different dangerous capabilities sit on the offence/defence balance, and how should we expect that to change over time?  
* What are the bottlenecks on adaptation to different AI risks? How much of a head start can we plausibly get, and in what sense is time the bottleneck?  
* Under what assumptions does pacing become more difficult over time, and what investments can be made now to preserve the option to pace in the future?  
* How do we evaluate if an intervention will be worthwhile? Quantifications of expected specific effects of interventions could help justify cases for skeptical audiences and add rigour to a domain where there is often a lack of specific claims about impacts.  
* Which avenues of progress are less dual use, and therefore better targets for differential technology development?  
* Under what assumptions does more transparency on research progress serve to enable coordination, and under what assumptions does it intensify race dynamics by revealing that a rival is close behind?
