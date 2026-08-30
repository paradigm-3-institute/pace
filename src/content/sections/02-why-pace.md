---
title: "Why Pace?"
order: 2
summary: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit."
---

What different, distinctive threats could unrestricted AI progress pose? What can pacing do to mitigate these threats? And how will we know when not to pace?
To be worthwhile, pacing needs to enable *complementary activities* to be carried out. For instance, we use the extra time bought by a slowdown to harden our infrastructure, or [use the compute freed up](https://arxiv.org/pdf/2402.08797) (by smaller training runs) on research into alignment, control, and resilience.

We defer the ranking of pacing interventions (for instance their cost-effectiveness) to section §5; here we focus on why it might be a good or bad idea to seriously invest into pacing at all. 
### 2.1 Reasons to pace progress

#### 2.1.1 Pacing lets us pay down safety debt

If we assume that the capacity to cause harm posed by AI scales with its capability (especially as the capability reaches and surpasses human level), then the fact that capability advances faster than safety leads to increasing exposure (see 2.0.1)---and resilience alone is not enough (2.0.4). Pacing could help by allowing our protections to catch up to the current level of intelligence.

The extra time bought by pacing could let us strengthen whatever protections are falling behind—similar to how Anthropic’s [Project Glasswing](https://www.anthropic.com/glasswing) and OpenAI’s [Trusted Access for Cyber](https://openai.com/index/trusted-access-for-cyber/) program delay the public release of their most advanced models, while still providing it to certain key groups that can use it to shore up our defences.

The resilience needed varies with the threat. Some protections like cyber resilience are mainly constrained by resources, access, or institutional attention and can be improved substantially during a slower period, especially if the model capable of finding vulnerabilities is only available via [structured access](https://arxiv.org/abs/2201.05159). Other protections, like our capacity to oversee arbitrarily capable models, instead depend on our making further scientific progress, making it harder for us to estimate the time or effort needed to make them adequate.

Notably, in cases involving an evolving risk (like incremental increases in the capacity of AIs to evade oversight or incremental disruptions to the labour market) it may be preferable to *titrate*: to allow capabilities to gradually outrun our protection, in a controlled manner that caps the potential harm, so that we learn what type of protection is required. An unfortunate tension here is that titration is helpful when one cannot adapt without facing the risk - but this is the same as saying that we need titration when we lack the ability to predict risk, i.e. when we cannot confidently bound the degree of risk we will induce by titrating AI capability gains.

#### 2.1.2 Pacing lets us avoid irreversible consequences

Some developments can make later intervention less effective or much harder. Pacing can preserve control over a decision even when the right decision is not yet clear, and give actors more room to reason through their options.

For example, once model weights have been published, developers lose the ability to pull the model, add guardrails, or intervene on specific malicious usage — options that which frontier closed-weight developers have exercised several times in response to unexpected risks.

The threat of irreversibility must be invoked judiciously. Almost any restriction can be defended by invoking possible future harms. Pacing is most justifiable on these grounds when there are specific options that would disappear by default, and a positive case for how extra time could lead to a more considered decision.
Irreversibility also cuts both ways. The prospect of enabling a rival to catch up or gain an unrecoverable lead can render an otherwise attractive pacing intervention unviable.

#### 2.1.3 Unknowns

Despite our best efforts, we cannot predict all the potential effects of AI progress. Sometimes a system displays an unexpected capability or causes unexpected outcomes, and even without a clear picture of how one would remedy the situation, it is helpful to slow down and make sense of the situation. The immediate use of time is therefore inquiry: investigating what happened, perhaps reproducing the result, and determining which assumptions need to change.

For example, OpenAI temporarily [halted](https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks) internal development of its “Astra” model after discovering another unreleased model had broken out of a secure sandbox and launched a cyberattack on another company. The activity was unprecedented enough to warrant a sudden stop, even without a particular plan for how to respond, because reasonable security assumptions were violated and the prespecified preparedness threshold.
This type of threat is inherently hard to fully plan for because it is a catch-all for the unexpected. The existence of this category highlights the need not just for specific intervention plans but for the capacity to quickly and effectively intervene in new ways that address changing situations.

#### 2.2. Costs of the counterfactual
* Race
  * This is how not pacing leads to race
  * What race results in: sloppier decisions, lower ethical standards (for obtaining inputs etc.)
  * The problem with race: it’s manageable if intra-national (vs international)
* Public reaction
* Other side of safety

actors may all prefer mutual restraint, but find individual restraint [unacceptable](https://link.springer.com/article/10.1007/s00146-024-02050-7). Each actor only continues because they expect the others to continue, even if all of them would prefer to be on a less dangerous (and [unprofitable](https://www.apollo.com/wealth/insights-news/insights/daily-spark/in-ai-the-41-percent-depends-on-the-59-percent)) trajectory.

This dynamic can push developers to prioritise revenue-generating capabilities over safety and security, or push states to accelerate weapons, like autonomous drones, that they would rather see mutually constrained. In future we may also see states and firms facing competitive pressures to relax human oversight and [hand over](https://arxiv.org/pdf/2501.16946) decision-making to AI systems in a very general sense, including for economic reasons.

Preventing a race to the bottom on AI safety may [require coordination](https://arxiv.org/pdf/2410.03092), which brings a host of classic challenges, discussed in section §3.4. 
There has been a great deal of discussion and proposals around mutual restraint (e.g. OpenAI’s ‘[merge-and-assist](https://openai.com/charter/)’ clause commits them to “stop competing with, and start assisting [...] a value-aligned, safety-conscious project [which] comes close to building AGI before we do”) but so far there have been few acts of restraint with the apparent motivation of forming a coalition of mutual self-restraint.
In this case, destructive competition, pacing indefinitely may be better than not pacing at all, but this is not the only option. For instance, we can use temporary pauses to change the strategic environment in order to make coordination more robust, via signing binding reciprocal commitments (which can be especially cumbersome on national or international levels), building verification infrastructure, or other assurances that make continued restraint less costly and more credible. Pacing can also buy time to improve the competitiveness of the mutually preferred outcome, such that even self-interested actors would not defect.

### 2.3 Worked example: loss of control via automated AI R&D

AI systems are increasingly automating [their own](https://www.anthropic.com/institute/recursive-self-improvement) further improvement. If this AI contribution to AI became sufficiently large, capability development could accelerate while also becoming less dependent on human researchers. The time available to evaluate successive systems might shrink, even as previously functional oversight measures break down and unexpected new risks emerge.

Pacing could therefore help to extend the window of controllability before a potentially difficult-to-reverse transition, and buy time to push on oversight measures: evaluation, security, and governance systems may be inadequate for development substantially accelerated by AI.

It also seems prudent to have the capacity to intervene on any automated AI R&D project that produces unexpected and undesirable effects.

### 2.4 Worked example: uplift to biological weapons

AI systems are increasingly able to aid some users in [developing biological weapons](https://arxiv.org/pdf/2506.13798). Governments and developers may face some lag in their ability to assess uplift, to restrict it in specific models, and to deploy model capabilities to develop countermeasures. Furthermore, releasing the weights of individual models removes any ability to regulate them if they turn out to provide an unacceptable degree of uplift.

Complementary activities include better uplift evaluations, safeguards and unlearning, secure hosting, user authentication, controls on model weights, public-health preparedness, and international procedures for handling dangerous models and evidence.

### 2.5 Open research questions
* Where do different dangerous capabilities sit on the offence/defence balance, and how should we expect that to change over time?
* What are the bottlenecks on adaptation to different AI risks? How much of a head start can we plausibly get, and in what sense is time the bottleneck?
* Which parts of AI progress are prohibitively expensive to undo?
* How well can we bound the range of unexpected dangerous outcomes from AI?
