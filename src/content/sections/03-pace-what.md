---
title: "Pace What?"
order: 3
---


AI progress does not have a simple speedometer or brake. Any proposal needs to identify a particular outcome or threat model it wants to influence, the activities which contribute to it, and the places where those activities can be influenced.

A successful pacing intervention would change the rate of one or more activities that make up AI progress, but there are many activities to choose from and the choice matters for the effectiveness, cost, impacts, and desirability of the pacing intervention. It is helpful to distinguish between the *hazard* (the harmful outcome the proposal seeks to prevent) and the *control surfaces* (the parts which can actually be changed), because they tend not to neatly line up.

For any particular threat model, there is rarely one lever which maps cleanly and comprehensively onto that target. But there are levers on compute, on particular algorithmic approaches, on model releases, and on classes of use. Each of these has some bearing on the ultimate target, catching some activity that is harmless and missing some that is not, with varying costs to privacy, economic growth, and oversight.

In general, interventions that target control surfaces [earlier in the AI R\&D process](https://arxiv.org/abs/2402.08797) (e.g. interventions on access to chips) tend to have broader impacts, a higher likelihood of lowering risks, a higher likelihood of harming beneficial progress, and less capacity to leverage information generated in the R\&D process. This makes them much less likely to be targeted at very specific harms. Conversely, interventions that target control surfaces later in the AI R\&D process (e.g. inference-stage “[safeguards](https://arxiv.org/abs/2403.08501)” or [access controls](https://arxiv.org/abs/2403.08501)) are much more able to leverage information and therefore be more targeted at specific harms, but are also more likely to be circumvented (as the harmful artifact already exists). 

### 3.1 Control surfaces of AI progress

#### The AI development and deployment chain

Progress at the frontier of AI development today involves a highly concentrated core of developers supported by an extensive and geographically distributed supply chain and research ecosystem. (However, the set of developers requiring oversight may expand during an intervention as other developers catch up - see §5.2.)

Various inputs are key for model development, most famously compute, but also energy, data center infrastructure, training data, research talent and engineering talent.

These inputs feed into the development process, which has many stages, from cleaning and structuring data, to running experiments, to the final process of building a frontier LLM—pretraining of a base model, and various post-training steps which transform this base model into the models which will eventually be served to users.

Once a model is developed, there is a spectrum of how broadly it can be deployed and released, from internal testing and evaluations, to internal use, external auditing or release to selected partners, and full public access via application or API. For open-weight models, a further stage is publishing the weights, which allows external actors to alter the model further.

What the model can then do when deployed depends not only on the model itself, but also on the infrastructure it is deployed on, the tools and harnesses available, the skill of its users, and the access it is given to resources such as the internet or particular data. (A pathway for potential future capabilities advances is *continual learning,* where models continue to improve after deployment based on the tasks they are working on. This would blur the line between development and deployment somewhat and could require its own solutions.)

All of these are plausible control surfaces to directly intervene on. Furthermore, they can all be affected indirectly. For example, the availability of researchers depends on immigration law, and frontier hardware depends on access to [certain critical minerals](https://www.usitc.gov/publications/332/executive_briefings/ebot_germanium_and_gallium.pdf). 

Different actors vary in their leverage over these control surfaces. Abstractly, states have the ability to enforce domestic laws, while developers have a richer understanding of many parts of the design process. More concretely, specific states and developers vary in which of these they have leverage over—and there are some remarkably narrow bottlenecks in the AI ecosystem, like the reliance on a [single Dutch corporation](https://www.aei.org/research-products/report/the-lithography-loophole-how-china-is-printing-its-way-to-chip-self-sufficiency/) for a critical part of the AI hardware manufacturing process.

![A three-part AI R\&D production lifecycle from inputs and infrastructure, through capability development, to use and distribution, with an AI-assisted R\&D feedback loop.](/media/rd-feedback.webp)

#### Considerations for choosing a control surface

One crucial distinction in the process of AI development is that partway through the resources shift in nature. Many of the early inputs are *rival* goods: resources whose use by one actor restricts their availability to others. Compute, capital, and researcher time, for example,  are scarce, are concentrated within a small number of identifiable organizations, and can be controlled or redirected. There are also non-rival inputs, which can be replicated at almost no cost, (e.g. training data), but these are insufficient by themselves.

Downstream, however, it is mostly non-rival goods, like weights, elicitation methods, and training algorithms which influence the pace of progress (the notable downstream exception to this is inference compute, which is a rival good). These can all be copied and shared at low cost, so reliably controlling their diffusion is more difficult, and after they have diffused, it can be essentially impossible to undo.

These inputs allow for different kinds of intervention. The rival components have locations and quantities. They can be monitored, taxed, or redirected, and it is possible to keep track of who has them and exclude actors from access to them—mostly. The non-rival components are more like information: once released, they are very hard to restrict access to. 

That said, actually using a model requires inference compute, which is a rival good. However, it is also extremely general and extremely widely available. Many highly capable open-weight models can even be run on consumer hardware, though near-frontier models typically require more specialized infrastructure. In a future regime where continual learning is a major consideration, there may be new mechanisms for intervention at this stage.

Once a non-rival good like a set of model weights is proliferating, it is very difficult to destroy every copy, and there is no way to verify a claim that all copies have been destroyed, so interventions on their distribution are brittle. This is true even for closed-weight models, where uncertainty over whether adequate security over model weights is maintained means that, at current levels of security and verifiability, it is [impossible to verify](https://www.rand.org/pubs/research_reports/RRA2849-1.html) that all copies of model weights are known.

By contrast, for a rival good like computing hardware, an oversight body could be [much more certain](https://arxiv.org/abs/2303.11341) of the location and use of all copies of a particular type of chip, once adequate measures are in place, since the exact number of such chips can be more reliably known. However, these upstream goods, being far removed from the final product which carries the risks, are difficult to precisely target, and so restricting them will affect harmful and beneficial activities alike.

This highlights a recurring tradeoff. Control surfaces earlier in the chain are easier to observe and constrain, but further removed from the eventual harm, forcing interventions to be blunt. Later surfaces are often more amenable to precise targeting, but can be more difficult to intervene on and less robust. 

![A diagram showing AI development control surfaces across the development and deployment chain.](/media/control-surfaces.webp)

### 3.2 Targeting and tradeoffs

Consider a pacing intervention targeting some subset of inputs to the production of dangerous AI capability. Its effects extend beyond the inputs it directly restricts. Inputs that *substitute* for the targeted one absorb the freed compute, labor and so on, and receive more investment, while inputs that *complement* it contract along with the restricted ones. Capping, e.g. frontier training runs does not slow AI development in strict proportion to the amount of training forgone; rather, it slows by that amount net of whatever the developers recover by substituting with algorithmic efficiency, data-quality and inference-time scaling. The effectiveness of an intervention therefore depends on how easily developers can substitute other inputs for those being restricted. Where those alternatives inputs are non-rival and harder to observe, an intervention may have the effect of pushing more effort towards less governable inputs.

Any intervention will restrict some harmless activity, and fail to catch all harmful activity. These are *false positives* and *false negatives*. Both errors can occur simultaneously: A classifier that aims to flag nefarious research related to manufacturing biological weapons, for example, may be triggered by the innocent questions of a [biology student](https://arxiv.org/abs/2607.14479v1). At the same time, the classifier may fail to catch carefully designed questions that [split up](https://arxiv.org/abs/2506.10949) a dangerous avenue of inquiry into unassuming parts. 

Interventions earlier in the development process can have wider-reaching downstream effects, which generally means more false positives and fewer false negatives. (In a sense, halting all AI development forever would indeed prevent all harms, but it would also prevent all benefits.) In practice, however (and in part because of this risk of being over-broad), such interventions can be subject to carveouts and selective enforcement, which can open up alternative routes to the same ends. Downstream interventions have the opportunity to be more fine-grained and selective, but making use of this capacity depends on having the time and expertise to make good choices here, and in practice we may see blunter interventions such as [excluding whole categories of use](https://www.theverge.com/ai-artificial-intelligence/947973/fable-wont-answer-basic-biology-questions).

For most threats, there are multiple distinct pathways to their realization. A capability advance can come from more training compute, better algorithms, [more elaborate post-training](https://arxiv.org/abs/2310.06452), or better elicitation of a model’s existing latent capabilities. An intervention which targets one route but leaves the others open still allows threat-relevant activity to continue even if the intervention is perfectly enforced.

![A diagram showing how a pacing intervention affects different pathways to dangerous AI capabilities.](/media/intervention.webp)

The quality of selection also changes over time. This is partly because actors adapt in response to interventions, as we discuss in §5. But even beyond that, the effectiveness of an intervention depends on empirical assumptions about the relationship between the control surface and the hazard. These assumptions may be changed by later progress. 

For example, one conservative way to prevent the emergence of a dangerous advanced capability is to cap the number of FLOPs that can be used in training a model (see [example A](#3.4-case-a:-a-cap-on-frontier-training)), but even this intervention depends on assumptions about [training efficiency](https://arxiv.org/pdf/2511.23455) or [elicitation](https://arxiv.org/pdf/2005.14165) [methods](https://arxiv.org/pdf/2201.11903) which might change with future progress and substitution into alternative inputs. Generally this will push toward more false negatives, as the intervention becomes outdated.

For a given control surface, there will often be a three-way tradeoff between false positives, false negatives, and intrusiveness or oversight. Simply put, one can make an imperfect intervention more or less broad, or one can invest in making the intervention more accurate, by some mix of investing more energy in scrutinizing individual cases and requiring more access to information about those cases, some of which might otherwise be private.  
 

![A diagram illustrating the tradeoff between false positives, false negatives, and intervention intrusiveness.](/media/draw-the-line.webp)

Broader interventions, which capture a higher fraction of threat-relevant activity, carry with them greater economic costs, while narrower interventions may be easier to circumvent and thus have fewer safety benefits.

Alongside interventions which directly cap or limit some resources, it is possible to intervene [indirectly](https://arxiv.org/abs/2501.17755): to change an incentive and let the selection be performed by the actors themselves. This includes buying out or taxing specific resources like compute, or applying [stricter liability](https://ssrn.com/abstract=4694006) for outcomes to model providers or other actors with control over capability access, such as [cloud hosts](https://arxiv.org/abs/2403.08501). These approaches can effectively draw on private information no regulator could extract: private plans, valuations, and alternatives. Ultimately this means indirect selection needs no surveillance to operate and thus is less intrusive. However, liability-based systems can suffer from other issues, such as pushing the frontier toward more risk-tolerant actors, and systematically underweighting risks where the costs are catastrophic.

The correct balance between tolerating false positives, false negatives and intrusiveness will depend on the goals of the intervention, the substitutability of inputs, and the resources (including political capital) available. The aim of an intervention is often to buy time to do work to mitigate a particular threat, which may risk being caught in the filter. For example, a filter which blocks cybercrime requests will [sometimes](https://www.sans.org/blog/models-said-no-inside-hugging-face-post-mortem) prevent evaluation requests and defensive requests, undermining the nominal aim of mitigating the risk of cyberattacks. If malign work and safety work draw on the same capabilities, it is difficult to only target the malign activity. Some routes around this problem include whitelists for trusted organizations (e.g. see Anthropic’s Project Glasswing, where access to Mythos Preview was gated to selected partner organizations only), but these carry other concerns, such as unfair distribution of access.

Since essentially all control surfaces suffer from these tradeoffs, often the best route to a given outcome will involve several different control surfaces working in parallel, such as a cheap intervention with few false positives and many false negatives, coupled with a more demanding one that can catch some of the false negatives which slip through the previous one. Relatedly, in fast-moving situations it may be preferable to quickly enforce conservative interventions with many false positives, and use the breathing room to implement more careful and calibrated ones.

### 3.3 Coordinated interventions

In cases where an intervention requires coordination among multiple actors, some control surfaces and interventions make this easier than others.

Interventions and actions [must](https://arxiv.org/pdf/2507.15916) be agreed upon by parties to the agreement, and they must have a shared understanding of which actors and activities are covered, so that they know what they are agreeing to, and how compliance will be verified as well as the consequences of noncompliance. In some cases agreements may cover actors who are not party to the agreement—for example, a chip export control rule agreed by the US and Taiwanese governments would likely have significant effects on Chinese developers who are not party to it. 

Coordination is more sustainable when compliance can be checked without needing to rely on participants’ goodwill. This makes control surfaces which enable third-party verification especially desirable. Coarse, numeric thresholds like [FLOP counts](https://arxiv.org/abs/2405.10799) are easier to evaluate than holistic appraisals like bio uplift capacity, and so it may be easier to coordinate around them as interventions.

Unfortunately, while information about model capabilities and threat models accumulates steeply along the arc of model development, coordination can become more difficult. The information that can be gained about a system nearing deployment is often nonstandardized and difficult to make legible (i.e. the internal testing protocols and mitigation mechanisms at one lab may not look the same as at another, even if they point at the same targets). Upstream, however, information on goods like compute, which are produced by very few companies in relatively few places, can be easily [made legible, verified and shared](https://arxiv.org/abs/2408.16074), making coordination easier. As a result, coordinating actors will tend to select upstream control surfaces: the crude and high-false-positive side of the arc provides a source of surfaces better suited to coordination.

<details id="sec-3.4" class="sec-anchor">
  <summary> 3.4 Case A: A cap on frontier training </summary>
  <div>

Suppose the concern is that AI systems may substantially accelerate or automate AI R\&D before adequate means of control exist. The hazard is a transition toward AI-driven development which outpaces developers’ ability to control it. 

**Control surface:** Training compute is an early, rival input into this process, and therefore represents an attractive control surface for this problem. 

Here we choose a per-model cap covering pretraining and post-training. Developers’ aggregate research compute remains uncapped.

“Capping training compute” still requires further specification of the control surface, however. How should experimentation count toward this, if at all? If novel methods involve combining the results of multiple training runs into a larger model, will this still fall in scope? How does one deal with the problem that [further algorithmic progress](https://arxiv.org/abs/2403.05812) and substitution of inputs will allow a given level of capabilities to be achieved with less compute as time goes on?

**Targeting and tradeoffs:** A compute ceiling only bears on one aspect of the problem, and does not address capability gains from other routes, such as better data or RL environments, or increasing test-time compute usage. It may also be too broad, and stop some benign or benevolent work. 

**Coordination:** Compute usage is a comparatively legible surface, if actors can be required to share records. [Many](https://arxiv.org/abs/2604.04712) [proposals](https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/CNAS-Report-Tech-Secure-Chips-Jan-24-finalb.pdf) for governing compute usage and tracking chips [exist](https://arxiv.org/abs/2505.03742); it appears the technical problems involved are feasible to solve, but more work is still needed before this can be implemented. The coordination required involves figuring out who has authority over verifying compliance, who is included under the scope of the policy (which individual developers, and which nations), and how to respond to capability gains by non-participants so that continued participation remains preferable to defection.

  </div>
</details>


<details id="sec-3.5" class="sec-anchor">
  <summary> 3.5 Case B: Restricting access to dangerous biological capabilities </summary>
  <div>

Suppose instead that the concern is the diffusion of AI assistance that materially increases users’ ability to develop biological weapons. Here the hazard is more about access and usage than training. 

**Control surfaces:** Model deployment and access, gated by capability evaluations and subsequent restrictions. Post-trained or API side restrictions, such as refusing prohibited requests, are one potential approach, while another is attempting to train the model not to be capable of fulfilling such requests in the first place, perhaps by ablating training data to remove biological knowledge. The latter, if successful, also has the advantage of being somewhat more robust to open-weight models having their restrictions lifted with further post-training, which is a significant risk in the former case.

**Targeting and tradeoffs:** Attempting to make the model refuse noncompliant requests faces three main issues — over-refusals, under-refusals and jailbreaking. Decisions must be made on how jailbreak-resistant the model needs to be, and how much refusing of benign requests is tolerable. The capabilities evaluations themselves must also be sufficiently comprehensive to make sure paths to dangerous capabilities are well guarded.

There is also the question of whether it is desirable for specific actors, such as those expected to use models defensively, to have access to versions with lighter restrictions, and how to gate this access reliably. This may improve targeting, but also imposes some compliance and privacy costs.

In cases where usage restriction is the target, there are more obviously tangible benefits to even imperfect restrictions. The more effort and technical capability it takes to circumvent guardrails and do something dangerous, the less often you’d expect harmful behaviors to occur.

**Coordination:** The control surface here is less widely legible than in the compute cap example, and relies upon the existence of a trustworthy evaluator with sufficient expertise to make determinations. Participating governments would need to agree on evaluation standards, and recognize qualified evaluators. Difficulties again arise with what to do about non-covered actors, though in the case of narrow restrictions on usage compliance may be less costly for model providers than with broad restrictions, since the majority of their customers might see limited gains from access to these capabilities anyway, and exceptions could plausibly be tailored for legitimate cases.

There is also a risk that, once an open model with a given level of capabilities exists, subsequently attempting to control it may achieve substantially less and may not justify ongoing costs, so the policy may be brittle in the long run.

  </div>
</details>

<details id="sec-3.6" class="sec-anchor research">
  <summary> 3.6 Open Research Questions </summary>
  <div>

* **How should hazards be translated into covered activity for pacing interventions?** Risks we would like to target, such as uncontrolled automation of AI R\&D and bioweapon uplift, build up over various stages of AI research, development and deployment; capabilities will initially emerge at some point in training, and we may want to avoid such a point being reached, or we may care more about wider deployment (especially if capabilities have positive use cases we want to preserve). Research should compare candidate boundaries.  
  * [*Shevlane et al. (2023), Model Evaluation for Extreme Risks*](https://arxiv.org/abs/2305.15324)  
  * [*Hooker (2024), On the Limitations of Compute Thresholds as a Governance Strategy*](https://arxiv.org/abs/2407.05694)  
* **How can pacing thresholds be made specific and yet still cover distributed activity?** A pacing intervention targeting a threshold could potentially be circumvented by distributing activities or artefacts such that each sits below the threshold. How can we design aggregation rules and methods to handle cumulative risk from activities that are divided across space, time, processes and entities, without hindering low-risk activities?.   
  * [*Seferis & Fist (2026), Detecting Compute Structuring in AI Governance Is Likely Feasible*](https://ojs.aaai.org/index.php/AAAI/article/view/41127)  
  * [*Rahman (2026), Does Distributed Training Undermine Compute Governance?*](https://arxiv.org/abs/2605.29359)  
* **What practical coverage is sufficient?** If we consider the reach available through company control, infrastructure providers and national rules, including their supply-chain effects, can we estimate bounds on activities that would be effectively covered by an intervention and relevant activities that would be missed?  
  * [*Koopmanschap & Barten (2026), How to Catch a GPU*](https://arxiv.org/abs/2607.22619)*.* Maps issues with enforcement coverage as dangerous capabilities come to require progressively less compute  
  * [*Egan & Heim (2023), Oversight for Frontier AI through a Know-Your-Customer Scheme for Compute Providers*](https://arxiv.org/abs/2310.13625)  
* **How effective are different access restrictions once a dangerous capability has been released?** How do factors such as access guardrails, alignment training, access to inference compute, ease-of-use, and tacit knowledge affect risk once diffusion has already occurred?
  * [*Tamirisa et al. (2024), Tamper-Resistant Safeguards for Open-Weight LLMs*](https://arxiv.org/abs/2408.00761). Identifies limitations in how reliable safeguards can be for open weight models.  
  * [*Ord (2025), Inference Scaling Reshapes AI Governance*](https://arxiv.org/abs/2503.05705). Identifies inference scaling as a lever for released models.  
* **How can we permit exceptions to allow useful work, without being so permeable that it makes the rule useless?** In the case of compute controls, it now seems technologically feasible, to some extent, to identify what uses a GPU is being put to. What other technical advances can allow interventions to be less blunt and more narrowly scoped?  
  * [*Gargiulo & Kulp (2026), Workload Identification with Physical Side Channels for AI Governance*](https://arxiv.org/abs/2609.00309)  
* **What are the tradeoffs between verification and invasiveness for different interventions?** How can we push the frontier forward?  
  * [*Scher & Thiergart (2025), Mechanisms to Verify International Agreements About AI Development*](https://arxiv.org/abs/2506.15867)  
  * We believe the proposal would be technically sufficient to forestall the development of ASI if implemented today, but advancements in AI capabilities or development methods could hurt its efficacy. Additionally, there does not yet exist the political will to put such an agreement in place. Despite these challenges, we hope this agreement can provide direction for AI governance research and policy.  
  * [*Petrie et al. (2025), Flexible Hardware-Enabled Guarantees for AI Compute*](https://arxiv.org/abs/2506.15093)*.* Proposes verifying compliance without exposing sensitive information about AI development.

  </div>
</details>
