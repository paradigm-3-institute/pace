---
title: "Pace How?"
order: 4
---

A pacing intervention is ultimately a sequence of steps; we reason about an intervention from start to end and consider its many decision points and failure points. This lets us spot the supporting work required for an actual, sustained period of restraint. In this section, we consider a single intervention’s lifespan. In reality, a pacing plan may contain a portfolio of interventions, each with its own conditions and triggers.

![A diagram showing how evidence can fail to influence pacing action.](/media/evidence-to-action.svg)

### 4.1 Before pacing

The main challenge before intervening is recognizing where there’s a need to intervene and how to time it. Intervening too late means letting the threat play out with potentially irreversible consequences; intervening too early means sacrificing potential benefits and political capital, and in some cases being less able to carry out complementary activities that depend on access to advanced AI (accelerated safety research, empirical study of emerging threat models, etc.), or to the benefits from conducting the complementary activities in a setting with more talent, capital, and data from deployment settings.

The actual timing of a pacing intervention will ultimately depend on the strategic and political calculus of the actors who can bring it about, and may have more to do with political opportunity, public perception, salient incidents, or campaigning efforts.The timing ideally will be informed by evidence about technological progress, and the threat that pacing is meant to address.

Sources of information to draw on:

1. **Model evaluations**, including benchmarking, red teaming, and other tests in simulated or controlled environments, provide direct information about the capabilities and propensities of specific models in specific circumstances, and can form the basis for extrapolation. That said, the correspondence between evaluations and real-world risks can be quite fraught and [hard to predict](https://arxiv.org/abs/2511.04703): the [jaggedness](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321) of AI capabilities means that individual evaluation performance often corresponds poorly to behavior on tasks in the wild. Furthermore, evaluations can generally only set a [lower](https://arxiv.org/abs/2305.15324) [bound](https://www.aisi.gov.uk/blog/more-compute-more-capability-why-ai-agent-evals-need-to-account-for-test-time-compute) on capability, because of the challenges of elicitation and the risk that models [alter their behavior](https://arxiv.org/abs/2505.23836) in response to recognizing they are being evaluated. 

2. **Forecasting** and effective predictions provide decision-makers with aggregate expert assessments of when dangerous capabilities are likely to emerge. Forecasts can be about the threats themselves, or they can be about trends in the AI R\&D ecosystem that inform threat assessment. Different forecasts shed light on different parts of potential dangers: for example, trends in [training resources](https://epoch.ai/data-insights/ai-chip-production) can be used to forecast the size and nature of the resulting required physical build-outs, while [capability forecasts](https://epoch.ai/benchmarks?view=graph&tab=eci) can predict models’ future behavior. A major open problem here is selecting epistemic peers: efforts to use top generalist forecasters for predicting even near-term AI have a mixed record.

3. **Incident reports** provide decision-makers with concrete evidence with ecological validity and lots of useful surprising detail, properties which both forecasting and evaluation often miss or fail to attempt. This is the best indicator that there is an immediate AI-induced problem, but by the time an incident has occurred, the space of possible pacing interventions has already shrunk. But even relatively harmless incidents can expose unknown unknowns and more granular details, which can in turn reveal underexplored threats. Also, compared to evaluations and forecasting, real-world incidents can be more credible and legible to a broad range of actors, but they are [bottlenecked](https://arxiv.org/pdf/2604.21412) on [effective infrastructure](https://arxiv.org/abs/2511.05914).

4. **Safety cases** provide [structured arguments](https://arxiv.org/abs/2403.10462) that a system will remain within some acceptable risk parameters as long as certain prior conditions are met — for example, that certain features of a deployment context guarantee that a given harmful model capability cannot be accessed. This structure therefore makes it possible to turn a discussion of potential risk into a discussion of concrete underlying properties which can be directly scrutinized. In regulated safety-critical industries, safety cases are mandatory prior to large-scale engineering efforts, making them effective pacing interventions: the work cannot go ahead until the evidence is gathered and compiled into a safety case that would satisfy a regulator, and the complementary activities required to support a safety case are directly targeted at the threats the safety case addresses. Despite interest, safety cases are not mandatory in frontier AI R\&D, and [few](https://arxiv.org/pdf/2604.21964) labs have generated them voluntarily.

Evaluations, forecasting, incident reports, and safety cases perform different functions: respectively, to test certain (bounded) claims, to supply warning signs, to reveal models’ emerging behavior, and to decompose threats into specific precursors. Alongside feeding into the question of whether to directly intervene, they can also feed into each other: incident reports can shape what gets evaluated, evaluations can form the basis for forecasts, and so on. Collectively they can provide a sense of how far away any given risk is, and this in turn can help actors to determine how urgently they need to prepare for costly measures.

Coordinated pacing comes with extra challenges: the different actors need to be able to converge on their understanding of the relevant information and what constitutes meaningful evidence, which in turn typically requires some bandwidth between them. In situations where they have competing incentives, some will also have individual incentives to withhold information. For example, frontier developers might not want to be overly restricted by governments, and so they might not want governments to have the information that would warrant such restriction. Those considering pacing interventions may need to think about what infrastructure needs developing in advance to get around such dynamics.

### 4.2 Triggering and enacting pacing

The challenge in deciding to trigger a pacing intervention is negotiating the tension between speed, legitimacy, and precision. It is easy to have two but more difficult to have three:

* **Speed \+ Legitimacy**: e.g. preregistered rules that automatically trigger when a condition is met. Unfortunately it is hard to know what exactly the rules should be, and so they may end up mistargeted in unexpected situations.

* **Legitimacy \+ Precision**: e.g. careful deliberation between experts, followed by democratic authorization of agreed-upon interventions. Unfortunately the review and implementation process here can take a lot of time.

* **Precision \+ Speed**: The actors with the most information and expertise get to choose by fiat. The risks here are that actions which are difficult to explain may seem illegitimate and thus at risk of being undone more easily, and these actors will often face incentives around the pace of progress that diverge from those of the broader public, making it difficult to trust they are truly acting in citizens’ best interests.

We can see this trilemma play out across the whole ecosystem of AI progress: governments have legitimacy and means to impose strong regulations but not necessarily the raw information needed to guide decisions, or the expertise to interpret such information, leaving them lacking in precision and/or speed; [external evaluators](https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet) can have enough precision (through expert staff) but not the mandate to regulate; AI developers have the most information about their own progress but little reason to proactively internalize any negative externalities they produce, and a lot of other interests in how their competitors are regulated (we return to this in §5).

One way to ease the tradeoffs is to work toward a portfolio of triggers. For example, authorities could set very crude evaluation thresholds now, beyond which they give expert groups like third-party evaluators the right to unilaterally trigger emergency interventions, on the condition that those choices then be subject to later governmental reconsideration, where there is more of a mandate but less ability to rapidly deploy expertise. This approach might seem risky if one views intervening as a one-off affair, but once it becomes a repeat affair, the evaluators would have a long-term interest in using their powers in a way they could justify.

The next decision is execution: the intervention must somehow affect live systems. Implementation-wise, the key question is whether enacting the intervention merely involves announcing a rule, or whether it involves some more active steps like buying up, confiscating, or destroying key resources. The former case is more straightforward, but brings with it the extra challenge of enforcing the new rule.

Again, coordinated pacing comes with extra challenges. It will typically take a lot more time for several actors to form a consensus on whether an intervention should be triggered, especially if there is a range of options to choose from. One potential solution is to give several parties the ability to unilaterally trigger time-bounded interventions which can buy time for more careful discussion. Another is to spend time in advance mapping out the likely space of mutually beneficial interventions.

### 4.3 During pacing

During pacing, it can be difficult to sustain the efficacy of an intervention in an ever-evolving environment. There are four notable challenges: whether the relevant parties are still complying; whether the initial threat is still effectively targeted; whether the threat is still a threat; and whether the suspension in activity is being used effectively.

Authorities can address the first problem with monitoring, verification and enforcement systems. The second component is whether the control surface continues to track the hazard (i.e. whether complying with the terms of the intervention actually diminishes the risk). §3 describes this relationship in terms of false positives and false negatives and gives more detailed considerations. Typically, a static rule will become less effective over time as the practical implications of the rule drift from their initial state (e.g. because redirection of effort toward other avenues of achieving the same goals renders the intervention weaker).

The third component is whether the original reason for intervening still holds. The concerning capability may mutate, diminish, or intensify. New evidence may also undercut the rationale for designating a result as a threat. The strategic and commercial reality may evolve too. Companies may exit agreements and safety measures may strengthen, for example. Importantly, this does not bear on the effectiveness of the rule itself, but on whether the threat targeted by the rule is still of concern.

The fourth component is whether the interval is being used to change the conditions which made pacing valuable, as discussed in §2. This could simply amount to some ambient societal adaptation, but typically it will involve deliberate complementary activities aimed at ensuring that the threat will be less severe after the intervention than before. Absent good enough complementary activity it is possible for an intervention to merely postpone a growing crisis.

There is a danger that pacing weakens the infrastructure it is designed to strengthen. Sweeping restrictions on AI, for example, would likely shrink the opportunities available to the actors involved in frontier systems, potentially limiting their experience and understanding of frontier models. Mandatory evaluation by third parties may increase the risk of leaks and industrial espionage. To mitigate this outcome, a limited and vetted group could be permitted to continue research: a tight circle of knowledge and power may limit the threat potential while maintaining expertise. A significant risk is that this group would gain outsized power and influence, or be unaccountable and lacking in error-correcting mechanisms (see §5.3 for more discussion of this dynamic). The nature of the complementary activity to the restriction (typically bolstering safety procedures in some form) can inform decisions related to the chosen group’s composition, focus, and oversight. When reviewing the intervention, the same considerations as in activation are in play: the tensions between speed, legitimacy and precision. 

A potential solution could be to separate retargeting by scale and reversibility. Operators could have the authority to make temporary and bounded adjustments; external reviewers could implement wider and more durable policies. As in the activation procedure, tradeoffs cannot be wholly eliminated, only managed across the model lifecycle. 

### 4.4 Ending pacing

A major difficulty with any kind of temporary intervention is ending it at an appropriate time. Restrictions can become entrenched and persist past the point they are no longer justified, or can be abandoned while other actors are relying on them. So interventions which depend on precise exit conditions are less attractive than plans which are more robust to poor exit management.

There are two clear reasonsdecisionmakers might wish to exit a particular pacing intervention.Where an intervention worked and is no longer needed, this can be because its initial goal to build up defensive capabilities or resilience has now been achieved, and the risks involved are in fact mitigated. An intervention which is instead no longer working could be addressing an obsolete pathway to impact which has been routed around; it may have had a misspecified theory of impact in the first place; it may have insufficient teeth to ensure compliance from relevant actors and lack the support necessary to win enforcement; or it could simply have been superseded by a subsequent intervention.

The specifics of the case determine the best exit structure. After successful pacing, authorities should aim to reduce the costs the intervention has imposed while preserving the gains made. In the failure case, the goal might be to simply remove the costs while minimizing disruption. The former case may require a more careful, gradual process than the latter, since the potential damage from getting it wrong will be higher.

Exiting too soon may expose society to the very risks that pacing was meant to prevent, while having burned goodwill and support for further intervention. Exiting too late means imposing costs and burdens for longer, and strengthening the relative position of noncomplying actors. 

The defaults also matter: if the intervention is set to expire after a certain period and requires renewal, it may be prematurely exited without regard to the motivations which installed it. If it is installed with no definite end point it may stagger on past the point where it is useful, with institutions and operators becoming entrenched, developing an interest in preserving their function.

Expectations around the removal of interventions also shape actors’ willingness to participate in the first place. Actors may agree temporary restraint will be useful, but refuse to join an agreement if they doubt it will end when conditions are met, or expect the arbiters of exit decisions to be biased against them.

These expectations also shape behavior during the intervention. If exit is conditional on demonstrated progress in a particular domain (e.g. on demonstrating models do not suffer particular failure modes), then the incentive to work specifically on that progress is greater than for an intervention which will end simultaneously for all actors. 

Where abrupt exit from an intervention could pose a risk, authorities can try to mitigate the dangers of an exit by staging it. This could involve continuing some forms of restrictions, and gradually relaxing requirements over time. Evidence and research as to how to proceed can thus be safely collected, while still managing the risk. Staging thus permits actors to observe incremental effects of relaxation, and make decisions about whether this is desirable or ought to be halted.

Ending an intervention need not mean dismantling it entirely. It could make sense to retain some capacities that are slow to build (expertise, relationships, technical standards, communication channels, etc.) while lifting the biting aspects, such as invasive and exceptional controls. 

| Stage | Decisions |
| :---- | :---- |
| Pre-pacing | <ul><li>What justifies the need to intervene?</li><li>What signals of emerging risk are being tracked?</li><li>What infrastructure must exist for relevant signals to be detectable?</li><li>Who watches for these signals?</li><li>Who interprets signals and who do they report to?</li></ul> |
| At trigger | <ul><li>Who holds the authority to decide that a trigger condition has been met?</li><li>How much error is acceptable in order to act quickly?</li><li>What sequence of actions does triggering set in motion?</li><li>Is the developer obliged to address the triggering concern, or free to abandon the blocked path?</li></ul> |
| During intervention | <ul><li>How is compliance observed, verified, and enforced?</li><li>Who reports evidence of compliance, who audits, and who acts on discrepancies?</li><li>How is the downtime being used to respond to the threat?</li><li>Who, if anyone, may continue the restricted work, and under what oversight?</li></ul> |
| At exit | <ul><li>How do decision-makers distinguish an intervention that has served its purpose from one that has failed or become obsolete?</li><li>Should exit be immediate or staged?</li><li>Who is exposed to the effects of exiting, and who bears any costs or receives any gains?</li></ul> |

Table: Key decisions per stage of an intervention’s lifecycle

<details id="sec-4.5" class="sec-anchor">
  <summary> 4.5 Case A: A cap on frontier training </summary>
  <div>

**Before pacing,** governments should recognize that they are hoping to slow development before it outpaces developers’ and authorities’ oversight capacity. Thus they must make judgment calls about when developers are sufficiently close to the dangerous threshold to justify intervention. A problem is that the predictive tools they could use to detect relevant signals are hard to interpret: to take one scenario, some forecasts may predict imminent self improvement, while others disagree. 

**Triggering:** A source of authority must be determined in advance to establish when to begin intervening. Given the speed of progress currently and the uncertainty over further acceleration if a threshold of recursive self improvement is met, there may be little time for consultation at the point of triggering, and under our taxonomy above this suggests that either legitimacy or precision must be deprioritized — there can be clear rules for when to trigger, or a source of authority can be granted power to trigger by fiat, but a long and deliberate consultation at the point of triggering would be intolerable. Pre-agreed triggers could be used to impose emergency temporary restrictions, to allow time for more deliberative review.

**During pacing,** authorities should verify that the developer is complying with the intervention by, again, monitoring the inputs. Continued access to compute [may be contingent](https://arxiv.org/abs/2403.08501) on the developer granting third-party evaluators visibility into every run, which can be evidenced by logs of compute usage obtained from the compute provider. Since a compute limit does not constrain every route to capability, authorities may have reason to seek visibility into research teams’ working logs, to help determine if current limits are fit for purpose or need to be adapted. 

Ongoing reviews could be conducted to establish whether pacing is still warranted, and to maintain accurate working knowledge of the progress of improvements in control and safety.

**Ending pacing** here is uncertain. If the cap is buying time usefully, then exiting may be desired once humanity has sufficient assurance that it can avoid loss of control, or that the benefits of development exceed the risks. Progress by non participants may also change the calculus regarding whether persisting with restrictions is beneficial. Staged exits could be used to minimise the risks of sudden jumps caused by a capabilities overhang.

However, if there does appear to be a hard capabilities threshold under a certain compute threshold, insufficient progress is made on assurance of safety, and the controls are sufficiently widely adopted, it may be that it would be desirable for these restrictions to persist indefinitely. 

  </div>
</details>

<details id="sec-4.6" class="sec-anchor">
  <summary> 4.6 Case B: Restricting access to dangerous biological capabilities </summary>
  <div>

**Before pacing**, labs may be required to make their models available to third-party evaluators for pre-release evaluations of potential capabilities that would provide uplift to a malign actor (e.g. to debug a failing synthesis protocol, or piece together a dangerous method from scattered dual-use sources). A biological capability is far harder to recall once it reaches the public than to withhold beforehand, so reaching a certain threshold on the evaluations should block deployment outright, unless safeguards can be demonstrated to mitigate the risk. This is particularly important for open weight models, where release is difficult to reverse.

**Triggering** here will depend on the uni- or multi-lateral shape this intervention takes. So far, similar cases (such as the US government intervening in the [Fable](https://www.theguardian.com/technology/2026/jun/13/anthropic-disable-advanced-ai-models-us-government-order) and [GPT-5.6](https://www.axios.com/2026/07/08/openai-gpt-trump-ban-lifted) releases) have been ad hoc and messy, but were enacted quickly. A more legitimized, legally grounded process would likely require a publicised framework to make clear what is in scope and better allow predictable deployments and to ensure consistent standards to be applied internationally, though it seems very likely that the capacity to ad hoc prevent the release of an otherwise out-of-scope model will persist.

**During pacing,** monitoring bodies should audit access logs to confirm adherence to access restrictions, and confirm that any investigation is led by independent evaluators qualified to judge biological uplift, rather than the labs themselves. Ongoing monitoring to ensure latent capabilities are not easily elicited by jailbreaking methods may also be part of this puzzle.

**Ending pacing** may not involve any form of public release. As a condition of restricted release, labs may need to prove that even where a model retains a dangerous capability, there is the capacity and will to reliably vet their users and flag suspicious activity to the authorities. 

  </div>
</details>

<details id="sec-4.7" class="sec-anchor research">
  <summary> 4.7 Open Research Questions </summary>
  <div>

* **How do the incentives of bound parties change across the lifecycle?** To what extent can different actors reliably predict the behaviour of other actors throughout the lifetime of a pacing intervention? How load-bearing are these predictions of behaviour going to be for coordination of pacing interventions?  
  * [*Finke (2026), International Agreements to Limit Frontier AI: Objectives and Exit*](https://arxiv.org/abs/2607.16224)  
  * [*Koremenos (2005), Contracting around International Uncertainty*](https://doi.org/10.1017/S0003055405051877).  
  * [*Goldstein and Salib (2025), How to Stop an AI Arms Race*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5369439).  
* **How does information sharing impact the credibility of coordinated pacing?** Which information, in what granularity, through which channels, by which actors, matter most for credible coordinated pacing? How can this be kept compatible with national security considerations, commercial confidentiality, and cybersecurity? To what extent can this information sharing be kept robust to manipulation?   
  * [*Wasil et al. (2024), Verification Methods for International AI Agreements*](https://arxiv.org/abs/2408.16074)  
  * [*Scher et al (2025), An International Agreement to Prevent the Premature Creation of Artificial Superintelligence*](https://arxiv.org/abs/2511.10783).  
* **What evidence could legitimize a speedy initiation of pacing? What is likely to be the acceptable tolerance for unreliable evidence for different actors?**  Can scenarios and thresholds be specified in advance to a level of specificity that would garner coordinated buy-in to a rapid pacing onset? Can evidential and assessment processes be agreed on in advance?  
  * [*Karnofsky (2024), If-Then Commitments for AI Risk Reduction*](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)  
* **How could dry-run simulations inform and prepare for pacing interventions?** What aspects of simulation design, delivery and follow-up affect their effectiveness and impact? Could simulations harm or misguide pacing interventions?  
  * [*Gruetzemacher et al. (2024), Strategic Insights from Simulation Gaming of AI Race Dynamics*](https://arxiv.org/abs/2410.03092)  
  * [*Bartels (2020), Building Better Games for National Security Policy Analysis*](https://www.rand.org/pubs/rgs_dissertations/RGSD437.html)  
* **How will our reliance on different sources of information about risks, and our methods for communication and coordination, change as AIs become more capable, autonomous, or integrated?**  
  * [*Clymer et al. (2024), Safety Cases: How to Justify the Safety of Advanced AI Systems*](https://arxiv.org/abs/2403.10462)  
* **What does the space of exit scenarios look like?** For example, small-scale interventions may allow for immediate release, whereas exits from ongoing large-scale interventions impacting multiple facets of the economy and society (e.g. export controls) may need to be staged. Other than staging, what other parameters of exits exist, and how could they be tuned?   
  * [*Finke (2026), International Agreements to Limit Frontier AI: Objectives and Exit*](https://arxiv.org/abs/2607.16224)  
* **What is the relationship between initiation and exit triggers?** Intuitively, the exit trigger should track whatever justified the intervention in the first place, but what could affect that link and what other factors should be considered?  
  * [*Cârlan et al. (2024), Dynamic Safety Cases for Frontier AI*](https://arxiv.org/abs/2412.17618)  
  * [*Karnofsky (2024), If-Then Commitments for AI Risk Reduction*](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)

  </div>
</details>
