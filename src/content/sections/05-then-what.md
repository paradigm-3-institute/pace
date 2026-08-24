---
title: "Then What?"
order: 5
summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
---

Pacing interventions have more effects than just the imposition of a rule. Analysing them means considering the whole portfolio of consequences — in particular, the way different actors subject to the rule adapt in response, and the broader effects of the governing capacity required to enact the rule.

These considerations are important both for weighing up the benefits of any given intervention and for determining which actors would support or oppose it, which in turn can shape whether an intervention is politically viable.

### 5.1 Adaptation and redirection
Realistically, pacing is only necessary when it makes actors behave differently. Often this means the pacing stops them from directly getting something they want. When this is the case, they will naturally look for other ways of achieving it.

The easiest approach, of course, is just to ignore the rules, covertly or overtly. An intervention will largely fail unless it can actually incentivise other actors to comply. Importantly, if an actor conceals the fact that they are breaking rules, it becomes harder to monitor and intervene in other ways.

But even if actors do comply with rules, they will still find ways of adapting. For example, if pretraining scale is capped, then developers trying to create advanced models will redirect their energy towards other approaches like training efficiency, post-training, and elicitation. If advanced hardware is restricted, developers will try to find ways to train on less advanced chips.

This needn’t be a problem: often it is the primary goal of the intervention. But it is possible for this adaptation to undermine a rule or even cause it to backfire. For example, one of the objections raised against controls on exporting advanced hardware to China is that this could encourage China to develop more of a domestic industry around advanced hardware.

Relatedly, when a specific outcome is limited, this can free up the resources originally directed towards it. Right now, for example, most developers are constrained by their access to compute, so a limitation on any compute-intensive activity (e.g. training, research, deployment) will cause some substitution towards the others. The same is true of capital and researchers.

On a broader scale, almost any rule will change the balance of power among affected actors based on their relative capacities to adapt. If a rule only restrains some actors then it naturally weakens them relative to others. But even interventions which apply uniformly will affect actors to different degrees — for example, a pause on pretraining would advantage developers who have recently done large pretraining runs.

Crucially, the degree to which actors are impacted by an intervention need not be particularly related to how likely they are to contribute to the risk. This can be somewhat finessed, though: it may be possible to package an intervention in such a way that actors who are naturally more hard-hit can be otherwise compensated.
### 5.2 The effects of governing machinery
Many interventions will invest some enforcement power in a governing body. This will typically be some mix of access to private information and discretionary enforcement power, and may even involve creating specific infrastructure to support observation or verification. Even one-off interventions also serve to create a precedent for future activity. The power and infrastructure can then sometimes be used for purposes beyond the rule that justified it.

In developing a potential intervention it is useful to start with the intended goal and then back out the details, but pragmatically we ought to expect that actors will generally use power to pursue their own goals. It may well be that an intervention is needed to temporarily slow diffusion of a dangerous capability while building robustness elsewhere, and it may well be that this intervention is best executed by a national government broadly surveilling and restricting usage, but this does not mean that a national government equipped with broad surveillance and the mandate to restrict usage will necessarily use it only as intended.

In particular, it is not a given that these powers or the machinery that supports them will be dismantled at the end of an intervention, as we discuss in Section 4.4. This is not necessarily a bad thing: It might even be helpful if, for example, the systems created to enforce a domestic pretraining moratorium can then be reused in international diplomacy, or if departments created to assess model risks can feed their expertise into national strategy.

But there is a clear risk to contend with — crises can justify legitimately necessary emergency powers which then outstay their welcome. Once information has been collected, it is difficult to limit the scope of decisions it can feed into.
### 5.3 Brute costs
Restraining progress is fundamentally quite costly, in the sense that it involves at least delaying the potential benefits of progress. One crude way to measure this is in sheer economic terms: right now, AI companies and the surrounding industry have a total valuation in the trillions, mostly representing expected future value. And this expected future value likely represents a lot of tangible benefits that could be broadly accessible — including better healthcare, cheaper goods and services, wider access to high-quality education and advice.

These are straightforward costs — interventions that slow the pace of AI development will necessarily cut into them somewhat. Of course, it may be that the benefits are agreed to outweigh the costs, but any serious analysis needs to reckon with the extent of them.

Crucially, the perceived costliness of an outcome can vary greatly between groups: someone with a very sick loved one could coherently prefer racing forward with AI progress in pursuit of medical progress even if it comes with an enormous risk of uncontrollable catastrophes.
### 5.4 Worked example: Frontier pre-training
Here we again consider a coordinated ceiling on frontier pre-training compute, applying initially to participating developers.

**Adaptation and redirection:** we can expect that, as resources that can be devoted to pretraining runs are restricted, more will flow to unrestricted areas, such as post-training, synthetic data generation, or greater inference-time compute.
Actors may also try to circumvent the rules in some way, by spending compute on areas not strictly covered by the rule definitions but which nonetheless have the form of improving pretraining, or by simply trying to hide how much compute they spend on pretraining or doing it in jurisdictions with less oversight.

Ultimately all of this amounts to where the otherwise pretraining focused capital, compute and research talent are displaced to.
**Machinery:** machinery could include on-chip hardware tracking, or audited compute usage records. Who has access to this commercially sensitive information will likely be a point of negotiation.

**Costs and incidence:** the greatest but perhaps least legible costs here are forgone capability improvements - which general purpose capabilities will arrive later or not at all, and who they will effect. There are also the implementation costs themselves, who’s incidence is likely distributed across the value chain. Other costs include to individual actors - those with the best ability to use extra pretraining compute will be harmed more than others’ whose expertise lies elsewhere.

Actors who circumvent or are not covered by these rules will gain at the expense of the compliant, for example developers of smaller models or Chinese labs, in the case of an agreement China is not party to.

To the extent a slowdown allows less fierce racing, incumbents may relatively gain by achieving profitability sooner. Incumbent compute providers may suffer if total compute demand is reduced, or gain as entry into a now more regulated sector becomes more difficult.

**Political durability:** Incentives to defect may increase over time as overhangs become greater and non-participants catch up or pull ahead. The latter will also weaken the case for continuity. This tradeoff should be considered when setting the initial scope. To the extent progress or societal changes remain quite fast such that the slowdown is welcome this may promote durability.

### 5.5 Worked example: Biological capability
Here we again consider a red line under which models that materially uplift biological-weapons capability cannot be deployed or widely released without restrictions.
**Adaptation and redirection:** The primary adaptation to be expected is using alternative, out of scope or uncovered models, and secondly jailbreaking powerful models.
A further redirection is simply for actors to move away from biological capability to other threats, such as cyber or chemical weapons.

**Machinery:** The mechanism for capability evaluation is a key part of the machinery, as is who has final decision making authority. If selected parties are to be given access, the mechanism for choosing them and monitoring their behaviour also needs to be specified.
**Costs and incidence:** Again forgone beneficial capabilities gains, here in the form of progress in biology such as drug development, are the primary cost. There are also implementation and governance costs, and forgone revenue for model providers to account for.

If only large powerful actors have access to the most capable models, there are also costs to smaller research organisations, who may find themselves cut off from the most powerful tools in their fields and unable to make significant contributions.
**Political durability:** States will be relatively easy to keep invested in the continued restriction of diffusion of dangerous biological capabilities. Nonetheless enforcement over open models may prove difficult, and if capabilities diffuse at all via this or another route it may prove impractical to fully enforce a moratorium on these capabilities.

### 5.6 Open Research Questions
* What forms of compensation or consideration could make pacing interventions preferable to larger coalitions?
* What are the tradeoffs between quality of verification and degree of invasiveness for different interventions, and how can we push forward the frontier?
