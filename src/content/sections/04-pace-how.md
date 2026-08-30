---
title: "Pace How?"
order: 4
---


A pacing intervention is ultimately a sequence of steps; we reason about an intervention from start to end and consider its many decision points and failure points. This lets us spot the supporting work required for an actual, sustained period of restraint.

![](/media/evidence-to-action.png)

### 4.1 Before pacing

Before we pace, the main challenge is recognising where there’s a need for it and its proper timing. Intervening too late means letting the threat play out with potentially irreversible consequences; intervening too early means sacrificing potential benefits and political capital, and in some cases being less able to carry out complementary activities that depend on access to advanced AI, or to the benefits it brings like an abundance of resources.

Sources of information to draw on:

1. **Forecasting** and effective predictions provide us warning signs of when dangerous capabilities are likely to emerge. Different forecasts shed light on different parts of potential dangers: for example, trends in [training resources](https://epoch.ai/data-insights/ai-chip-production) can be used to forecast the size and nature of the resulting required physical build-outs, while [capability forecasts](https://epoch.ai/benchmarks?view=graph&tab=eci) can predict models’ future behaviour, but neither one can replace the other. 

2. **Model evaluations** provide more direct information about the capabilities and propensities of specific models in specific circumstances, and can form the basis for extrapolation. That said, the correspondence between evaluations and real-world risks can be quite fraught and [hard to predict](https://arxiv.org/abs/2511.04703): the jaggedness of AI capabilities means that individual evaluation performance often corresponds poorly to behaviour on organic tasks. Furthermore, evaluations can generally only set a [lower bound](https://www.aisi.gov.uk/blog/more-compute-more-capability-why-ai-agent-evals-need-to-account-for-test-time-compute) on capability, because of the challenges of elicitation and the risk that models alter their behaviour in response to recognising they are being evaluated. 

3. **Incident reports** provide us concrete evidence with ecological validity and lots of useful surprising detail, properties which both forecasting and evaluation often miss or fail to attempt. This is the best indicator that there is an immediate AI-induced problem, but by the time an incident has occurred, the space of possible pacing interventions has already shrunk. But even relatively harmless incidents can expose unknown unknowns and more granular details, which can in turn reveal underexplored threats. Also, compared to evaluations and forecasting, real-world incidents can be more credible and legible to a broad range of actors.

4. **Safety cases** provide [structured arguments](https://arxiv.org/abs/2403.10462) that a system will remain within some acceptable risk parameters as long as certain prior conditions are met — for example, that certain features of a deployment context guarantee that a given harmful model capability cannot be accessed. This structure therefore makes it possible to turn a discussion of potential risk into a discussion of concrete underlying properties which can be directly scrutinised. Safety cases are presently not in any meaningful sense a requirement for deploying systems, but rather a voluntary engagement where they exist at all \- changing this is itself one plausible intervention which would shift the burden of proof onto developers, where currently the burden is typically laid on those proposing a slowdown.

Forecasting, evaluations, incident reports, and safety cases perform different functions: respectively, to supply warning signs, to test certain bounded claims, to reveal models’ emerging behaviour, and to decompose threats into specific precursors. Alongside feeding into the question of whether to directly intervene, they can also feed into each other — incident reports can shape what gets evaluated, evaluations can form the basis for forecasts, and so on. Collectively they can provide a sense of how far away any given risk is, and this in turn can help actors to determine how urgently they need to prepare for costly measures.

The extent of meaningful and effective communication between actors at different stages of development suggests what kind of preparations are needed. For example, if evaluative capacity is limited, then an actor would know that advance investment may be necessary. When communication breaks down, delays occur and the landscape evolves; the alternative to preparing now is not necessarily the same decision made later under the same conditions.

Coordinated pacing comes with extra challenges: the different actors need to be able to converge on their understanding of the relevant information and what constitutes meaningful evidence, which in turn typically requires some bandwidth between them. In situations where they have competing incentives, some will also have individual incentives to withhold information — for example, frontier developers might not want to be overly restricted by governments, and so they might not want governments to have the information that would warrant such restriction. There may need to be infrastructure developed in advance to get around these dynamics.

### 4.2 Triggering and enacting pacing

The challenge in deciding to trigger a pacing intervention is negotiating the tension between speed, legitimacy, and precision. It is easy to have two but hard to have three:

* **Speed \+ Legitimacy**: Pre-registered rules that automatically trigger. Unfortunately it is hard to know what exactly the rules should be, and such commitments can misfire.

* **Legitimacy \+ Precision**: Careful deliberation between experts to form a considered judgment. Unfortunately this degree of care can take a lot of time.

* **Precision \+ Speed**: The actors with the most information and expertise choose by fiat. Unfortunately these actors will often face incentives around the pace of progress that diverge from the broader public — it would be naive to expect them to simply regulate themselves.

We can see this trilemma play out across the whole ecosystem of AI progress: governments have the coercive power to impose strong regulations but not necessarily the raw information needed to guide decisions, or the expertise to interpret such information; external evaluators can have the expertise but not the mandate; AI developers have the most information about their own progress but little reason to proactively internalise any negative externalities they produce, and a lot of other interests in how their competitors are regulated.

Again, one way to ease the tradeoffs is to work towards a portfolio of triggers. For example, we can set very crude evaluations thresholds now, beyond which we give expert groups like third-party evaluators the right to unilaterally trigger emergency interventions, on the condition that those choices then be subject to later governmental inquiry, where there is more of a mandate but less ability to rapidly deploy expertise. This approach might seem risky if one views pacing as a one-off affair, but once it becomes a repeat affair, the evaluators would have a long-term interest in using their powers in a way they could justify.

The next decision is execution: the intervention must somehow affect live systems[^1]. Implementation-wise, the key question is whether enacting the intervention merely involves announcing a rule, or whether it involves some more active steps like buying up, confiscating, or destroying key resources. The former case is more straightforward, but brings with it the extra challenge of actually enforcing the new rule.

Again, coordinated pacing comes with extra challenges. It will typically take a lot more time for several actors to form a consensus on whether an intervention should be triggered, especially if there is a range of options to choose from. One potential solution is to give several parties the ability to unilaterally trigger time-bounded interventions which can then make way for more careful discussion. Another is to spend time in advance mapping out the likely space of mutually beneficial interventions.

### 4.3 During pacing

During pacing, it can be difficult to sustain the efficacy of an intervention in an ever-evolving environment. There are four notable challenges: are the relevant parties still complying?; is the initial threat still effectively targeted?; is the threat still a threat?; and is the suspension in activity being used effectively?

We can address the first problem with monitoring, verification and enforcement systems. The second component is whether the control surface continues to track the functional target – whether people complying with the terms of the intervention actually diminishes the risk. (3) describes this relationship in terms of false positives and false negatives and gives more detailed considerations. Typically, a static rule will become less effective over time as the practical implications of the rule drift from their initial state.

The third component is whether the original reason for pacing still holds. The concerning capability may mutate, diminish, or intensify. New evidence may also undercut the rationale for designating a result as a threat. The strategic and commercial reality may evolve too. Companies may exit agreements and safety measures may strengthen, for example. Importantly, this does not bear on the effectiveness of the rule itself, but whether the threat targeted by the rule is still of concern.

The fourth component is whether the interval is being used to change the conditions which made pacing valuable, as discussed in (2). This could simply amount to some ambient societal adaptation, but typically it will involve deliberate complementary activities aimed at ensuring that the threat will be less severe after the intervention than before. Absent good enough complementary activity it is possible for an intervention to merely postpone a growing crisis.

There is a danger that pacing weakens the infrastructure it is designed to strengthen. Sweeping restrictions on AI, for example, would likely shrink the opportunities available to the actors involved in frontier systems, potentially limiting their experience and understanding of frontier models. To mitigate this outcome, a limited and select group could be permitted to continue research: a tight circle of knowledge and power limits the threat potential while maintaining expertise. The risk, of course, is that this group would gain outsized power and influence. The nature of the complementary activity to the restriction – typically, bolstering safety procedures in some form – can inform decisions related to the chosen group’s composition, focus, and oversight. When reviewing the intervention, the same considerations as in activation are in play: the tensions between speed, legitimacy and precision. 

A potential solution could be to separate retargeting by scale and reversibility. Operators could have the authority to make temporary and bounded adjustments; external reviewers could implement wider and more durable policies. Similar to the activation procedure, tradeoffs cannot be wholly eliminated, only managed across the model lifecycle. 

### 4.4 Ending pacing

There are two primary reasons we might wish to exit a particular pacing intervention: the intervention worked and has served its purpose, or the intervention is not working — having proven ineffective or become obsolete.

In the case where an intervention worked and is no longer needed, this can be because the initial goal was to build up defensive capabilities or resilience which has now been built, mitigating the risks involved. An intervention which is not working anymore could take a couple of forms: it could be addressing a redundant pathway to impact which has been routed around, it may have had a misspecified theory of impact in the first place, it may have insufficient teeth to ensure compliance from relevant actors and lack the support necessary to fix this, or it could simply have been superseded by a subsequent intervention or policy.

Which of these cases we are in determines what the goal from an exit ought to be. In the successful case, we should aim to preserve the gains we have made while reducing the costs we are imposing, while in the failure case, the goal should be to simply remove the costs while minimising potentially harmful disruption. The former case may require a more careful, gradual process than the latter, since the potential damage from getting it wrong will be higher.

The question of when to exit is important. Exiting too soon may expose us to the very risks that pacing was meant to prevent, while having burned goodwill and support for further intervention, and exiting too late means imposing costs and burdens for longer, and strengthening the relative position of noncompliant actors. Predefining a framework that governs what should qualify as evidence for resumption is useful here. 

The defaults also matter: if the intervention is set to expire after a certain period and requires renewal, it may be prematurely exited without regard to the motivations which installed it. If it is installed with no definite end point it may stagger on past the point where it is useful, with institutions and operators becoming entrenched, developing an interest in preserving their function. Both scenarios should be avoided, so active attention and governance is valuable in both cases.

There will inevitably be opportunity costs to any intervention, creating pressure to resume. The most affected actors may see their competitive position weakening, and accumulated overhang of resources and progress on permitted work may enable new and productive paths for development, intensifying the incentive for cessation of the intervention. In this scenario, a hasty exit might see unusually rapid and hard-to-manage progress, as developments which would have been spread out over a number of iterations of model releases without the overhang all arrive simultaneously, straining our ability to respond and adapt. 

In the case of a successful intervention, we can try to mitigate the dangers of an exit by staging it. This could involve continuing some forms of restrictions, and gradually relaxing requirements over time. Evidence and research as to how to proceed can thus be safely collected, while still managing the risk. Staging thus permits actors to observe incremental effects of relaxation, and make decisions about whether this is desirable or ought to be halted.

However, staging is also subject to pressures. Each step can make reversal more difficult as dependencies, investments and expectations accrue force: an initially experimental release, for example, can create the imperative to move to the next stage of release. The effectiveness of staging is therefore contingent on the relevant actor’s ability to resist pressures to proceed prematurely.

In the case where an intervention is not working, staging is less justified, and so it is important that a quick exit is achievable. Balancing these avenues and making sure the quick exit is not misappropriated in the wrong circumstance will be a governance challenge.

Ending an intervention does not need to mean dismantling it entirely \- it could make sense to retain some capacities that are slow to build – expertise, relationships, technical standards, communication channels, and so on – while lifting the biting aspects, such as invasive and exceptional powers and controls. 

| Stage | Decisions |
| :---- | :---- |
| Pre-pacing | What justifies the need to intervene? What signals of emerging risk are we tracking?  What infrastructure must exist for relevant signals to be detectable? Who watches for these signals? Who interprets signals and who do they report to? |
| At trigger | Who holds the authority to decide that a trigger condition has been met? How much error are we willing to accept in order to act quickly? What sequence of actions does triggering set in motion?  Is the developer obliged to address the triggering concern, or free to abandon the blocked path?  |
| During intervention | How is compliance observed, verified, and enforced? Who reports evidence of compliance, who audits, and who acts on discrepancies?  How is the downtime being used to respond to the threat?  Who, if anyone, may continue the restricted work, and under what oversight?  |
| At exit | How do we distinguish an intervention that has served its purpose from one that has failed/become obsolete? Should exit be immediate or staged? Who is exposed to the effects of exiting, and who bears any costs and gains? |

Table: Key Decisions per Stage of an Intervention’s Lifecycle

### 4.5 Applying “pace how?” Case A \- Frontier training

Assume we have decided to implement a cap on frontier model training compute budgets aimed at preventing labs from training models that can autonomously self-improve, and potentially lead to displacement of human operators from critical decision loops and ultimately loss of control.

**Before pacing,** we should recognise that we’re hoping to prevent the development of a certain capability, rather than addressing it after it emerges. Thus we must make judgment calls about when we are sufficiently close to the dangerous threshold to justify intervention. A problem is that the predictive tools we could use to detect relevant signals are hard to interpret: to take one scenario, some forecasts may predict imminent self improvement, while others disagree.. 

**Triggering:** A source of authority must be determined to establish when to begin intervening. Given the speed of progress currently and the uncertainty over further acceleration if a threshold of recursive self improvement is met, it seems clear that speed must be of the essence, and under our taxonomy above this suggests that one of legitimacy and precision must be deprioritised \- we can have clear rules for when to trigger, or grant a source of authority power to trigger by fiat, but we cannot afford to have a long and deliberate consultation at the point of triggering.

**During pacing,** we should verify that the developer is complying with the intervention by, again, monitoring the inputs. Continued access to compute may be contingent on the developer granting third-party evaluators visibility into every run, which can be evidenced by logs of compute usage obtained from the compute provider. Since a compute limit does not constrain every route to capability, authorities may have reason to seek visibility into research teams’ working logs, to help determine if current limits are fit for purpose or need to be adapted. 

**Ending pacing** here is uncertain. If models autonomously self improving is inevitable and this intervention serves only as an artificial speed limit on that process, then exiting may be desired once humanity has sufficient assurance that it can avoid loss of control, or that the benefits of development exceed the risks. If there is sufficient risk from external actors not party to these limits achieving capability parity or surpassing the parties to the agreement, then it may also be desirable to take the brakes off the pace of development.

However, if there does appear to be a hard capabilities threshold under a certain compute threshold, insufficient progress is made on assurance of safety, and the controls are sufficiently widely adopted, it may be that it would be desirable for these restrictions to persist indefinitely. 

### 4.6 Applying “pace how?” Case B \- uplift to biological weapons

Suppose the goal is instead a pacing intervention that prevents models from supplying meaningful uplift capabilities related to the design, acquisition, or synthesis of lethal pathogens.

**Before pacing**, labs may be required to make their models available to third-party evaluators for pre-release evaluations of potential capabilities that would provide uplift to a malign actor (e.g. to debug a failing synthesis protocol, supply the hands-on know-how that papers leave out, or piece together a dangerous method from scattered dual-use sources). A biological capability is far harder to recall once it reaches the public than to withhold beforehand, so reaching a certain threshold on the evaluations should block deployment outright. 

**Triggering** here will depend on the uni- or multi-lateral shape this intervention takes. So far, similar interventions around the US government intervening in the Mythos and GPT 5.6 releases have been somewhat ad hoc and messy, but have been enacted with speed. A more legitimised, legally grounded process would likely require a publicised framework to make clear what is in scope and better allow predictable deployments, though it seems very likely that the capacity to ad hoc prevent the release of an otherwise out-of-scope model will persist.

**During pacing,** we should audit access logs to confirm the model stays contained, and confirm that any investigation is led by independent evaluators qualified to judge biological uplift, rather than the labs themselves. Ongoing monitoring to ensure latent capabilities are not easily elicited by jailbreaking methods may also be part of this puzzle.

**Ending pacing** may not involve any form of public release. As a condition of restricted release, labs may need to prove that even where a model retains a dangerous capability, there is the capacity and will to reliably vet their users and flag suspicious activity to the authorities. 

### 4.7 Open Research Questions

1. **What does the possibility space of exit scenarios look like?** Small-scale interventions may allow for immediate release, whereas exiting interventions impacting multiple sides of the economy and society may need to be staged. Some exits may require advanced prep. We need to understand our options to pick the best one per case.   
     
2. **What is the relationship between initiation and exit triggers?** Intuitively, the exit trigger should track whatever justified the intervention in the first place. But can that link break as conditions change?   
     
3. **How do the incentives of bound parties change across the lifecycle?** Pacing is first and foremost a coordination problem. The efficacy of any intervention will depend, amongst other things, on the predictability of actors (e.g. how well they can stick to the rule). Foreseeing possible disruptions to everyone’s motivations to cooperate strengthens control over and stability of pacing.  
     
4. **Does a developer have the responsibility to follow up on the evidence if an intervention is triggered?** If an intervention conditionally prevents a developer from pursuing an R\&D interest, and the developer decides against addressing the condition, abandons this interest, and chooses to invest the resources into a different R\&D direction instead, was the intervention *successful*?  
     
5. **What information must be shared to make coordinated pacing credible, and with which actors?** How can this be kept compliant with national security considerations, commercial confidentiality, and cybersecurity? To what extent can this information sharing be kept robust to manipulation?   
     
6. **What evidence could legitimise a speedy initiation (even at the cost of this evidence being disconfirmed later on)?** As always, we expect people to agree on high-level claims (“human-hunting motivations is threat enough to intervene”) and disagree on operationalisations (“what qualifies as human-hunting motivations?”).  
     
7. **How could we design simulations (dry runs) of an intervention (and how does this help us learn about failure modes)?**  
     
8. **How can evaluations-based methods handle concerns over better elicitation being possible, and models potentially learning to sandbag evaluations?**
