---
title: "Then What?"
order: 5
---



AI R\&D is a major industry, with huge amounts of financial and political capital invested in its trajectory. Changing the pace and emphasis of R\&D will therefore have consequences beyond the direct effects of changing pace and of its supporting activities. 

In this section we consider these impacts, because they matter in themselves and because they impact the willingness of all actors to support or resist pacing, and therefore the actual net effect of pacing. Their likely responses to rules should therefore be part of the specification, and should be modeled and elicited before any rules are fixed.

We consider these impacts radiating outward from the pacing intervention through society, and forward in time from the enactment of the pacing intervention.

![The effects of a pacing intervention radiating outward through society and forward in time.](/media/then-what.svg)

### 5.1 Covered developers

As the center of AI progress, frontier model developers are the most directly impacted by pacing interventions. Intervention changes the constraints these developers face, but not their objectives: the competitive pressures described in §2.3 persist, and developers will re-optimize against the new rules. The practical effect of an intervention is therefore the rule, *plus* developers' responses to it. But we can anticipate the form of such responses from earlier attempts to restrain arms races: for instance, when the 1922 Washington Treaty [capped](https://www.usni.org/magazines/proceedings/1926/may/washington-treaties-1922) naval cruisers at 10,000 tons and 8-inch guns, the signatories built "[treaty cruisers](https://www.globalsecurity.org/military/systems/ship/treaty-cruiser.htm)" that sat exactly at those limits.

In response to pacing, developers will likely consider:

#### Adaptation within the rule

**Reallocating R\&D resources.** The appearance of new constraints [induces innovation](https://economics.mit.edu/sites/default/files/publications/directed-technical-change.pdf). Capping training compute would (further) raise the value of algorithmic efficiency, data quality, post-training, inference-time compute, and elicitation. Developers will move researchers and budget accordingly, with unclear effects on capability growth. 

Many pacing interventions would reduce the need for and ROI of holding and building massive compute assets (see §5.4). With reduced resources (or expected resources), developers could also reduce the amount of safety research they conduct in a given period. If exit is explicitly conditioned on the developer’s safety progress, then safety research becomes the developer's route back to scaling and will be prioritized accordingly. The design of exit conditions in §4.4 will therefore determine where reallocated resources actually go.

**Re-evaluating commercial strategy.** If the frontier stops moving, the basis of competition shifts. If the frontier moves less, competition moves from capability to price, latency, distribution, integration, and post-training. If roadmaps stop assuming that a new model generation will arrive every few months, the breadth and depth of deployment might increase, as there is more incentive to embed the current models everywhere. Diffusion could thus actually benefit from pacing frontier development.

**Compliance overheads.** Developers already have large compliance functions owing to existing regulations not specific to AI, but many pacing interventions impose large amounts of work on developers. They may have to document all training runs, run intense evaluations at each checkpoint, host auditors, and await legal review for deployments. This is both a burden and a source of a potential moat: the fixed cost of establishing such a function is a barrier to new entrants. The GDPR is a recent precedent: market concentration among web vendors [rose 17%](https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2023.4709) after enforcement, with the largest vendors gaining share.

**Internal power shifts.** Pacing can change the relative power of departments inside each developer. For instance, the prestige of research units could fall in favor of product-focussed units. This can strengthen safety functions, but also risks turning them into compliance functions optimized for [demonstrable](http://sunnyday.mit.edu/SafetyCases.pdf) [adherence](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/229037/1025.pdf) to the rule rather than for reduction of the underlying risk. 

**Re-evaluating partnerships.** If compute providers become enforcement points (see §4.5), a developer might opt to integrate vertically, building its own datacenters or moving to compute providers in jurisdictions where it expects favorable enforcement. 

Developer relationships with governments also change: developers may seek national champion status or exemptions for national security work (of the kind already visible in the trusted-access programs described in §2.2.1). This gives the state a stake in the developer's continued progress, and creates incentives which could blunt the state's willingness to pace it.

#### Working around the rule

**Jurisdiction shopping.** If the pacing mechanism is both legally binding and not global, then developers have discretion to move activity to less-restricted jurisdictions.

Rival, upstream inputs are hard to move: frontier compute is costly and slow to relocate, its supply chain runs through a handful of firms (see §3.1), energy and datacenter siting are slow, and export controls [already exist](https://www.forbes.com/sites/viviantoh/2026/08/31/the-ai-chip-wars-new-front-control-the-cloud-not-the-silicon/) as a counter-response from the state.

Non-rival, downstream activities are easier to move: research methods, model weights and other intellectual property can be moved easily and a model developed under one regime can be served into another. For Case B, the relevant version is a release of weights by an affiliate or partner outside the covered jurisdictions. The more an intervention targets rival goods, the less jurisdiction shopping it permits, which reinforces the pull toward upstream control surfaces noted in §3.3.

**Exploiting loopholes.** In §3.2 we cover the inevitable gaps between the control surface and the targeted activity. For instance, if the intervention involves restricting total training compute, then driving compute efficiency up becomes (even) more valuable, so that the developer can continue R\&D activity while not defecting from the letter of the intervention. Developers will systematically search for such [gaps](https://www.forbes.com/sites/viviantoh/2026/08/31/the-ai-chip-wars-new-front-control-the-cloud-not-the-silicon/), likely bringing more expertise than the regulator has. 

Firms bunch [just](https://www.aeaweb.org/articles?id=10.1257/aer.20130232) [below](https://www.law.cornell.edu/uscode/text/31/5324) regulatory thresholds wherever these exist and there is no reason to expect training runs to differ. Much of this is not bad faith but ordinary engineering under a new constraint, which is why rules based on intent are hard to enforce. The regulator typically learns of a loophole after it has been used, which is one reason §4.3 requires continual retargeting.

**Defecting from pacing.** For a variety of reasons, the developer might not pace their R\&D, or stop pacing after initially complying. This could be done openly, or secretly.

Secret defection is worse than non-participation because it corrupts every other party's picture of the state of play. The incentive to defect is not constant: for a training cap, it grows with the overhang (see §4.4), so verification needs to be strongest late in the intervention, when political attention has moved on. The choice between open and secret defection is set by the probability of being detected and the penalty for defecting (see §3.3, §4.3).

#### Working on the rule

**Policy shaping.** Developers hold the information the regulator needs and will supply it selectively. The developer is also likely to actively influence the pacing intervention through lobbying or by their direct representation in the pacing governance mechanism. This is to ease the regulatory burden on themselves or [increase](https://ideas.repec.org/a/aea/aecrev/v73y1983i2p267-71.html) the burden on their competitors. The more regulation they are subject to, the more they will be driven to spend on lobbying. 

Shaping can be prosocial: developers may plug loopholes in the monitoring mechanism which only become apparent after enforcement begins, or correct a control surface that is missing its target. But the regulator cannot easily tell this shaping from the other kind. 

**Seeking compensation.** Those who are affected by interventions may make efforts to secure compensation for losses they incur. See §5.4.2.

### 5.2 Shifts in relative power

#### National governments and international competition

Consider national governments and international organizations. Many governments see AI as a strategic technology, and a pacing activity would potentially impact them in several ways.

For nations which are currently behind in the AI race, any given pacing intervention could appear as either an opportunity to catch up, or as impeding the path by which they already expected to. A frontier-only training cap might be the former, while broader restrictions on chip supply might be an example of the latter.

Either way, they will likely seek to exploit the pace to improve their relative position, by funding activities differentially benefited by the pace, or by trying to evade the restrictions.

They may also try to slow down adversaries, whether by attempting to include them in coordinated pacing interventions, or arguing that non-parties to the agreements should be somehow constrained (e.g. by forbidding purchase of compute by actors who are not party to an agreement).

The machinery of pacing will also be vulnerable to government actors (see §5.3), where whatever machinery is required to implement the interventions may face pressure to be co-opted to serve the state’s interests.

#### Non-covered AI R\&D actors

Consider also non-covered AI R\&D actors and the broader AI research ecosystem. While many AI R\&D actors may not be carrying out activities targeted by the pacing intervention, they can also be impacted by pacing.

If pacing reduces the amount of investment and talent flowing to pushing the frontier of AI R\&D (see §5.4), then these actors will become more attractive places for talent and capital to flow. Narrow AI uses which don’t fall under the interventions’ scope will be more attractive, and thus whether particular economic value is created by the application of a broad general-purpose model vs specialized systems designed for particular tasks might change. 

Depending on who these actors are (which is a function of how broad or restrictive the pacing interventions are), this might lead to more actors reaching the current frontier, and more commoditizing of that level of capabilities. As this happens, however, it will increase the number of now-covered actors who might push the frontier by defecting or circumventing pacing restrictions and increase the burden on monitoring mechanisms. 

There may also be a chilling effect from the existence proof provided by the pacing mechanism, whereby activities which are seen as plausible targets for future pacing become relatively less attractive, and leading to differential technological progress in areas seen as safer from future regulation. By this mechanism a pacing intervention could shape the direction of progress even outside its formal scope.

#### Adversarial actors

Many interventions (e.g. our worked example on biological threats) will also have to contend with misuse: third parties who use diffused AI capabilities to ill ends, for instance by developing biological weapons or committing cybercrimes. These actors can also be expected to adapt to any intervention, though primarily by trying to circumvent it from the outside.

### 5.3 Pacing governance structures

The main effect of pacing on the new governance mechanisms is to make them exist, or to invest new powers in existing bodies.

Many interventions will vest some enforcement power in a governing body or monitoring organizations (see §4). This will typically be some mix of access to private information and discretionary enforcement power, and may even involve creating specific infrastructure to support observation or verification. The power and infrastructure can then sometimes be used for purposes beyond the rule that justified it.

Liability- or insurance-based schemes will distribute these powers across auditors and existing legal systems such as courts—similar concerns will exist around their access to information and the privacy of those subject to their scrutiny.

![Failure modes in pacing governance structures.](/media/failure-modes.svg)

#### 5.3.1 Control, regulatory capture and misuse

In developing a potential intervention it is useful to start with the intended goal and then back out the details, but pragmatically it makes sense to plan around actors using power to pursue their own goals.

Once a newly empowered organization can inspect private information and impose restrictions on other actors, it will become a tempting target to influence. Companies will lobby for their own activities to be spared or minimally interfered with; other existing agencies will compete for jurisdiction over what they see as their own turf; and governments may push the body in particular directions depending on their shifting political priorities.

For example, powers of surveillance introduced to constrain dangerous activities might be used to interfere with lawful research to serve particular interests.

#### 5.3.2 Other behavioral distortions

The existence of the machinery itself may cause shifts in behavior without any deliberate abuse. The knowledge that you are being surveilled and the potential for leaks and misinterpretations create significant compliance burdens and may discourage particular kinds of research which might be perceived as creating reputational risks.

The machinery can also change what targets participants optimize for. Measures which are easier to audit, or those which are publicly salient, may attract most of the focus, even if they only imperfectly track the underlying risk. Developers may focus on optimizing for passing these tests and drift from measures which would better serve to actually reduce the underlying risk.

#### 5.3.3 Persistence, precedent and potentially useful spillovers

Additionally, it is not a given that these powers or the machinery that supports them will be dismantled at the end of an intervention, as we discuss in §4.4. This is not necessarily a bad thing: It might even be helpful if, for example, the systems created to enforce a domestic pretraining moratorium can then be reused in international diplomacy, or if departments created to assess model risks can feed their expertise into national strategy.

But there is a clear risk to contend with: crises can justify legitimately necessary emergency powers which then outstay their welcome. Once information has been collected, it is difficult to limit the scope of decisions it can feed into. The remit of a governing body may also broaden to new domains, simply due to the convenience of it already existing, even if it is imperfectly suited to a new task. 

In general, how competently the governing machinery is run and how well received its actions are will affect its durability and popularity. The machinery should thus be thought of not just as a means of carrying out the intervention, but also as one of its effects, and predictable failure modes should be weighed against expected benefits in deciding whether to implement it. 

### 5.4 Impact on AI investment and global markets

AI capital investments are already a major factor in the global economy. Investment in the inputs to AI progress (chips, datacenter construction, power infrastructure, and the AI developers themselves) is heavily contingent on the expected benefits and usefulness of the outputs, and so anything which affects the pace of capabilities progress will bear heavily on these investment decisions, and shift their attractiveness. 

This effect can also be expected to be one of the most immediate of any intervention. Investment is a function of the expected future trajectory rather than realized changes, and these expectations could rationally shift long before any direct effects on capabilities occur.

#### 5.4.1 Repricing and capital allocation

If investors predict a slower pace of progress than the counterfactual, it seems likely they will expect revenue growth for AI companies and suppliers to slow in aggregate (since the expected usefulness of their future outputs will be less). This would lead the valuations of developers and suppliers to fall, and their financing to become more expensive. This, depending on the intervention in question, might mean a slower datacenter buildout, and more capital flowing toward companies who take advantage of current capabilities rather than those pushing the frontier. In general this means more capital to flow toward those activities which remain less regulated or differentially benefit from the intervention.

To the extent frontier developers are currently valued partially based on the prospect of winner-takes-most dynamics (where AI labs grow to dominate the global economy), any pacing intervention which weakens their lead and relative position will weaken this, and weaken their expected market power, raising the relative power and value of supply chain companies instead.

An important aspect of the financial markets’ reaction is that it will be proportional to the expected durability of the interventions. In other words, an intervention which is not seen as lasting long is likely to lead to a more muted market reaction than one which is expected to be durable. This makes markets an anti-enforcement measure: their reaction and investors’ losses will be greater for interventions expected to be more durable, incentivizing actors to push for weaker mechanisms.

Market reactions are also responsive to new information—and they do not need to wait for the intervention to take effect. This can create incentives to back out of interventions as soon as they are proposed, even before they take effect, if market reactions are unfavorable (see the April 2025 US tariffs, most of which were [paused within a week](https://www.nber.org/papers/w34299) of announcement after equities fell more than 10%).

#### 5.4.2 Leverage and stranded investment

Much of the current datacenter buildout is financed with some degree of leverage (i.e. money borrowed against the value of the project, with the investment case supported by the prospect of a long-run return). 

Changes in expectations can make these projects uneconomic or expose investors and lenders to losses, as the projects can no longer deliver the expected return. In an extreme case, a datacenter build might be abandoned partway through if the remaining cost of building it exceeds the expected value of the project.

Anticipating these effects and carefully designing rules can help minimize the damage done in these cases. It is also possible that compensation for affected actors might be part of any formal pacing agreement. The degree to which this is feasible depends on the scope of the intervention and the appetite from the parties to the negotiations.

Actors whose assets are stranded or whose expected revenue is cut will seek compensation. This could take the form of direct payments, buyout of their compute stock (see §3.2), tax treatment, government contracts, guaranteed access to restricted markets, or exemptions. Compensation reduces the incentive to defect, and could be framed as public procurement if the freed compute goes to safety or defensive research. But it has three costs: (1) it transfers public funds to the actors being restrained; (2) it creates a constituency with an interest in the intervention continuing, which bears on the exit problems in §4.4; and (3) it creates moral hazard: actors who expect compensation may invest in anticipation of a buyout.

### 5.5 Impact on norms and culture

And lastly, how does the pacing intervention reshape the norms and culture surrounding interventions in R\&D, both future interventions in frontier AI R\&D and interventions in R\&D more broadly? If an intervention yields intended and desirable outcomes, is it making it easier for future regulations to land well? In other words, are “good” interventions being normalized? How much of a risk is there that pacing interventions in AI R\&D might have a global chilling effect on growth and progress?

#### 5.5.1 Talent culture

Pacing interventions may have knock-on effects on who wants to work at a frontier lab, and why, and on what kinds of work are most prized and rewarded by those labs. Restrictions on scaling and a weakened market position may deter those motivated by advancing capabilities and those with primarily financial motivations, and credible restrictions on perceived risky activities could attract those who might previously have been opposed on those grounds. Exit conditions could also raise the relative importance of some kinds of work—if permission to resume scaling is dependent on safety progress, for example, then safety work could be expected to rise in value. The “total research transparency” direction advocated for in AI2040’s [Plan A](https://ai-2040.com/?choices=plan-a-root#why-this-much-transparency-why-not-less-or-more-open-access-in-plan-a) would likely be more appealing to the academically- or safety-minded, and less to those driven by financial gains.

On the other hand, if labs are seen as unethical actors, there could be stigma attached to working there, and this factor could lead to [departures](https://www.wsj.com/tech/ai/anthropic-researcher-quits-over-out-of-control-ai-fears-707b7628) of many current staff, and deter prospective hires. If this effect is greater on those who are most concerned about lab practices, then internal scrutiny could be weakened. Which effects dominate will depend on the specifics of the interventions, but any change in employee composition would itself probably have an impact on the pace and trajectory of progress.

Talent impacts could extend beyond lab employees. A serious attempt at a pacing intervention, especially one involving the superpowers, will involve a large number of policy makers and diplomats, and may include risk professionals and advocates. A pacing intervention broadly deemed successful could increase the prestige and relative power of those roles and professions, and may encourage pursuit of similarly-shaped victories in domains beyond AI.

Finally, we note that human talent may not remain the crucial chokepoint it currently is; OpenAI (for instance) is targeting a fully automated AI researcher in the next [18 months](https://openai.com/index/research-acceleration-view-inside-openai/). 

#### 5.5.2 Political norms and culture

The consequences on the competence of bodies governing AI are non-straightforward and boil down to whether or not any interventions adopted actually prevent risk and, if so, whether the prevention is visible to the citizens.

Unfortunately, pacing suffers from the preventer’s paradox (or “invisible-success” problem): when policy successfully averts an AI threat, the evidence of success is precisely that nothing happened—similar to counterterrorism efforts or the efforts to avert [the Y2K problem](https://en.wikipedia.org/wiki/Year_2000_problem), pacing policymakers may very well be doing their job precisely when nobody notices. This may mean that support for future interventions could hinge upon hypotheticals (while opponents of pacing have concrete capabilities to show).

Occasionally, successful interventions may be reactive (e.g. in response to an incident report) rather than proactive, in which case the citizens may in fact positively update on the government’s competence to protect public safety. Inconveniently, it would also likely take quite a significant or catastrophic incident (e.g. ransomware in public healthcare systems) for enough people to notice and attribute credit where due.

On the other hand, public attitudes toward the governments are likely to be much more unforgiving in the case of missing or ineffective interventions. If the government fails to prevent comparatively less harmful incidents (think discriminatory hiring) from AI, the public is more likely to start perceiving governments or designated authorities as slow-moving, ineffective, and less trustworthy. This may result in public apathy toward the institution of pacing (and relevant authorities) and subsequently governments having less incentive to invest in future pacing infrastructure or honor coordination treaties.

We should keep in mind that frontier AI pacing interventions would not be the first controversial tech policy area. Norms around tech policy have been shaped by the experience of industry and government policies around GMOs, civil nuclear, stem cells, and gain-of-function research, and have contributed to broader societal attitudes towards "progress" or "precaution". The viability of pacing interventions will depend on these pre-existing attitudes and the degree of politicisation, but also the impacts of a pacing intervention, successful or otherwise, could impact the narratives and relative power of these different camps in societies around the world.

<details id="sec-5.6" class="sec-anchor">
  <summary> 5.6 Case A: A cap on frontier training </summary>
  <div>

Here we again consider a coordinated ceiling on frontier training compute, applying initially to training activity by actors based in participating jurisdictions.

**Effects on covered actors:** Covered actors, with now-limited training compute per model, will face immediate incentives to economise and use their compute more efficiently. To the extent they are also newly constrained in experimental compute, they will benefit from better figuring out which experimental results generalise well from small to larger models. They will also be incentivized to prune training data, optimize algorithms, and develop architectures which best extract the most return per unit compute. 

To the extent specific domains are not covered by the restrictions, we should expect compute to differentially flow to these, and attempts at reclassifying otherwise covered activities under these labels.

They may also focus more on specific domains rather than general purpose models: if you want to make the best coding or bio model with a limited number of flops, you probably get better results if you are making a coding- or bio-specific model rather than a general purpose one. This could lead to labs releasing far more models, or there being far more specialization among labs than currently.

Safety-gated exit conditions could increase the proportion of resources devoted to safety research, though lower revenues could also reduce its absolute funding relative to the counterfactual.

Beyond this, the majority of the changed incentives discussed in §5.1 from a general capabilities slowdown apply in this case.

**Governments and international coordination.** Governments will be very keen to ensure their rivals are affected by restrictions to an equal or greater extent than they are, and that economic harms are minimized. The US and China face competing incentives: relatively compute-poor China could see this as an opportunity to catch up if it binds US developers more tightly, while the US may seek terms which better preserve its advantages. The latter will likely mean that interventions which allow the compute buildout to be maintained and repurposed for inference or divided broadly among more actors will be more appealing.

**Non-covered actors.** AI startups which are not research labs will likely benefit, as their chances of being displaced by the next model release go down. Non-frontier labs will also likely benefit for the reasons laid out above. Incumbents in non-AI domains may have more time to adapt to AI and integrate it into their business processes, reducing their risk of displacement.

**Governance mechanisms.** With greater visibility on frontier labs’ compute usage will come opportunities for espionage. Actors who are not meant to have access to the records of frontier labs’ training runs may attempt to gain access and steal trade secrets via this mechanism. 

**Investment and markets.** The relative attractiveness of frontier developer and compute investments will likely decrease. Finding ways to safely repurpose compute may smooth implementation significantly.

  </div>
</details>

<details id="sec-5.7" class="sec-anchor">
  <summary> 5.7 Case B: Restricting access to dangerous biological capabilities </summary>
  <div>

Here we again consider a red line under which models that materially uplift biological-weapons capability cannot be deployed or widely released without restrictions.

**Effects on covered actors.** Covered developers will need to implement safeguards and evaluations to judge the efficacy of these. They will also, as in case A, need to share data with third party evaluators, and thus bear increased risk from espionage.

As in the case of Anthropic’s Fable 5, they may see high rates of false positives and refusals from their models, leading to degraded user experience, pushing their users toward non-covered models and actors and hurting their relative market position. They may maintain access programs for approved actors who get to use a less-restricted model version to mitigate this.

**Government actors** will probably be relatively easy to keep invested in the continued restriction of diffusion of dangerous biological capabilities. 

**Non-covered actors**’ models will gain relative usefulness at the expense of covered actors as described above, if they provide comparable abilities with fewer restrictions.

**Adversarial actors.** The primary adaptation to be expected is using alternative, out of scope or uncovered models, and secondly jailbreaking powerful models. Enforcement over publicly released open weight models may prove difficult, and if capabilities diffuse at all via this or another route it may prove impractical to fully enforce a moratorium on these capabilities.

A further redirection is simply for actors to move away from biological capability to other threats, such as cyber or chemical weapons. 

**Governance mechanisms.** The quality of evaluations and safeguards will greatly affect the rates of false positives and negatives, and thereby influence the magnitudes of the economic effects on different actors. 

**Investment and markets.** The effects in this domain depend on the magnitude of the effects on the covered actors’ business models, but relative to other interventions this intervention seems low-impact here.

  </div>
</details>

<details id="sec-5.8" class="sec-anchor research">
  <summary> 5.8 Open Research Questions </summary>
  <div>

* **What compensation schemes could make pacing interventions more desirable for actors who stand to lose financially from them?** What are the precedents for such compensation, how could they be funded, and what secondary impacts might they have?  
  * *Srivastav & Zaehringer (2024), [The Economics of Coal Phaseouts](https://arxiv.org/abs/2406.14238)*  
  * *Jobst Heitzig, Lessman & Zou (2018) [Self-enforcing strategies to deter free-riding in the climate change mitigation game and other repeated public good games](https://www.pnas.org/doi/abs/10.1073/pnas.1106265108)*  
* **Which restrictions build what kinds of overhangs?** How are these overhangs likely to play out if realised, and how dangerous might they be? Can overhangs be addressed through complementary policies? Are there pacing interventions which do not build up an overhang?  
  * *Belrose (2023), [AI Pause Will Likely Backfire](https://bounded-regret.ghost.io/ai-pause-will-likely-backfire-by-nora/)*. Looks at the negative case for a training pause, where a compute overhang leads to rapid progress.  
* **Which actors gain relative power under different interventions**, and what are the expected consequences? What is the historical track record of uses and abuses of power when an activity comes under deliberate pacing intervention?  
  * *Coe & Vaynman (2015), [Collusion and the Nuclear Nonproliferation Regime](https://www.andrewjcoe.com/_files/ugd/c8f493_ad67e13e0bdd4856b3f789dc317b327e.pdf)*. Looks at how nuclear nonproliferation entrenched superpower influence.  
  * *Cassata & de Chadarevian (2025), [Asilomar Across the Atlantic](https://pmc.ncbi.nlm.nih.gov/articles/PMC12098474/).* Restrictions on recombinant-DNA research empowered certain scientific organisations.   
* **What safeguards can be deployed to guard against mission creep**, where regulators or newly empowered authorities could gain power beyond what was intended and become hard to dislodge?  
  * *Romano & Levin (2021), [Sunsetting as an Adaptive Strategy](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256028/)*  
  * *Molloy (2021), [Approach with Caution: Sunset Clauses as Safeguards of Democracy?](https://researchportal.northumbria.ac.uk/en/publications/approach-with-caution-sunset-clauses-as-safeguards-of-democracy/)*

  </div>
</details>
