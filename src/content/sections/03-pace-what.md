---
title: "Pace What?"
order: 3
---

A successful pacing intervention would change the rate of one or more activities that make up AI progress, but there are many activities to choose from and the choice matters for the effectiveness, cost, impacts, and desirability of the pacing intervention. It is helpful to distinguish between the *functional target* (the part of AI progress that causes some threat) and the *control surfaces* (the parts which can actually be changed), because they tend not to neatly line up. Indeed, often we will have a lot of uncertainty about what the threat even is.

There is, for example, no direct lever to prevent rogue actors from using AI to launch cyberattacks. But there are levers on compute, on model releases, and on classes of use. Each of these picks out some part of the threat, catching some activity that is harmless and missing some that is not, with varying costs to privacy, economic growth, and oversight.

So the choice of control surfaces is the first major design decision where serious costs are incurred. In general, interventions that target control surfaces earlier in the AI R\&D process (e.g. interventions on access to chips) tend to have broader impacts, have a higher likelihood of lowering risks, have a higher likelihood of harming beneficial progress, are much less able to leverage information generated in the R\&D process, and are therefore much less likely to be targeted at specific harms. Conversely, interventions that target control surfaces later in the AI R\&D process (e.g. inference-stage safeguards, model access controls) are much more able to leverage information and therefore be more targeted at specific harms, but are also more likely to be circumvented (as the harmful artefact already exists). .

### 3.1 Control surfaces of AI progress

Modern AI progress is an [extremely costly](https://arxiv.org/pdf/2405.21015), distributed, and ever-evolving process. It begins with inputs like compute, hardware, capital, researchers, data, and accumulated knowledge. These feed development activity: pre-training, but also post-training, algorithmic progress, and broader machine learning research. Collectively, this produces models, which can then be retained inside a developer, offered through a controlled service, or released as weights that can in turn be copied, modified, and rehosted without limit. Outputs depend on the model, the overall elicitation capacity, and a supply of compute on which the model can run.

All of these are plausible control surfaces to directly intervene on. Furthermore, they can all be affected indirectly. For example, the availability of researchers depends on immigration law, and frontier hardware depends on access to certain critical minerals. 

Different actors vary in their leverage over these control surfaces. Abstractly, states have the ability to enforce domestic laws, while developers have a richer understanding of many parts of the design process. More concretely, specific states and developers vary in which of these they have leverage over — there are some remarkably narrow bottlenecks in the AI ecosystem, like the reliance on a single Dutch multinational corporation for a critical part of the AI hardware manufacturing process.

![A three-part AI R\&D production lifecycle from inputs and infrastructure, through capability development, to use and distribution, with an AI-assisted R\&D feedback loop.][image1]

One crucial distinction in the process of AI development is that part way through the resources shift in nature. Many of the early inputs are *rival* goods: resources which can only be used by one actor at a time. Compute, capital, and researcher time are scarce, are concentrated within a small number of identifiable organisations, and can be redirected. There are also non-rival goods which can be replicated at almost no cost, like training data, but they are not sufficient to make progress. Downstream, however, it is mostly non-rival goods, like weights, elicitation methods, and training algorithms (the notable downstream exception to this is inference compute, which is a rival good). These can all be easily copied, so the set of holders only grows.

These components allow for quite different kinds of intervention. The rival components have locations and quantities — they can be monitored, taxed, and redirected, and it is possible to mostly keep track of who has them. The nonrival components tend to be more like information, and once released, are very hard to restrict access to. Interventions therefore have to be more conduct-based.

That said, actually using a model requires inference compute, which is a rival good. However, it is also extremely general and extremely widely available — many highly capable open-weight models can even be run on consumer hardware, though near-frontier models typically require more specialised infrastructure..

Once a nonrival good like model weights is proliferating, it is very difficult to destroy every copy and there is no way to verify a claim that all copies have been destroyed, so interventions on their distribution are all-or-nothing. This is true even for closed-weight models, where uncertainty over whether adequate security over model weights is maintained means that, at current levels of security and verifiability, it is impossible to verify that all copies of model weights are known.

By contrast, for a rival good like computing hardware, an oversight body might be able to be much more certain of the location and use of all copies of a particular type of chip, once adequate measures are in place, since the exact number of such chips can be more reliably known.

Part of why this matters is that many interventions will be imperfect and leaky. They can still be effective if the amount that they leak over their entire lifespan is low enough, but this looks very different for rival and nonrival goods. For example, imagine an intervention aimed at preventing broad access to models above some capability level, either by limiting the supply of training hardware or by limiting access to the weights of such models. If 90% of the hardware could be secured, it would be possible to roughly bound the scale of covert model training. But if the model access were successfully limited in 99% of cases, it would not be possible to bound how far the weights could proliferate — a single stolen copy could then be copied at will.

The central issue in choosing a control surface is that a lot of the most useful information comes too late in the process of model creation. As development progresses — from training to evaluation to deployment — a greater quantity of useful information about the capabilities and risks becomes available. The problem is that the ability to respond effectively diminishes as the model progresses along the development chain, as many of the control surfaces cease to be available. Once a model has been trained, there is little to gain from restricting the algorithms used to train it. In particular, most of the rival components appear fairly early in the development process, so beyond a certain point there stop being rival places to intervene other than inference compute, which is unfortunately already very widely distributed.

![][image2]

### 3.2 Targeting and trade-offs

Every pacing intervention divides activity in two. Some of it stops, slows or proceeds under different conditions. The rest continues unaffected. Any pacing intervention will thus, either explicitly or implicitly, select which activities belong in which of these clusters.

The selection can fail in two directions. A *false negative* is activity which contributes to the threat, but which is not caught by the intervention. A *false positive* is an activity caught by the intervention, but which does not contribute to the threat . Both errors can occur simultaneously: A classifier that aims to flag nefarious research related to manufacturing biological weapons, for example, may be triggered by the innocent questions of a biology student. At the same time, the classifier may fail to catch carefully designed questions that split up a dangerous avenue of inquiry into unassuming parts. 

![][image3]

Interventions earlier in the development process will have wider-reaching effects, which generally means more false positives and fewer false negatives — in the limit, halting all AI development forever would indeed prevent all harms, but it would also prevent all benefits.

For most threats, there are multiple distinct pathways to their realisation. A capability advance can come from more training compute, better algorithms, [more elaborate post-training](https://arxiv.org/abs/2310.06452), or better elicitation of a model’s existing latent capabilities. An intervention which targets one route but leaves the others open still allows some threat-relevant activity to continue even if the intervention is perfectly enforced.

![][image4]

The quality of selection also changes over time. This is partly because actors adapt in response to interventions, as we discuss in (5). But even beyond that, the effectiveness of an intervention depends on empirical assumptions about the relationship between the control surface and the functional target. These assumptions may be changed by later progress. 

For example, one very conservative way to prevent the emergence of a dangerous advanced capability is to cap the number of FLOPs that can be used in training a model, but even this intervention depends on assumptions about [training efficiency](https://arxiv.org/pdf/2511.23455) or [elicitation](https://arxiv.org/pdf/2005.14165) [methods](https://arxiv.org/pdf/2201.11903) which might change with future progress. Generally this will push towards more false negatives, as the intervention becomes outdated.

More generally, AI progress has complex feedback loops. At a very basic level, frontier developers use their models to make money, which they [invest](https://epoch.ai/data-insights/company-spending-breakdown) in creating smarter models and hiring more researchers. Increasingly, they also use their models to improve the quality of their research. This means that constraints at one point in the process can ripple out and have complex indirect effects.

For a given control surface, there will often be a three-way tradeoff between false positives, false negatives, and intrusiveness or oversight. Simply put, one can make an imperfect rule more or less broad, or one can invest in making the rule more accurate, by some mix of investing more energy in scrutinising individual cases and requiring more access to information about those cases, some of which might otherwise be private.  
 

![][image5]Broader rules, which capture a higher fraction of threat relevant activity, carry with them greater economic costs, while narrower rules may be easier to circumvent and thus have fewer safety benefits.

Alongside interventions which directly cap or limit some resources, it is possible to intervene [indirectly](https://arxiv.org/abs/2501.17755)—to change an incentive and let the selection be performed by the actors themselves. This includes buying out or taxing specific resources like compute, or applying stricter liability for outcomes to model providers or other actors with control over capability access, such as cloud hosting services. These approaches can effectively draw on private information no regulator could extract: private plans, valuations, and alternatives. Ultimately this means indirect selection needs no surveillance to operate and thus is less intrusive. However, these interventions will still generally lead to false positives and negatives.

The correct balance between these three constraints will depend on the goals of the intervention and the resources available. One critical point to bear in mind, though, is that for many interventions, the function is to buy time for some complementary activity which in some cases may risk being caught in the filter. For example, a filter which blocks requests that enable cybercrime may also prevent requests related to the testing and evaluation of dangerous cybercapabilities, undermining the nominal aim of mitigating the risk of cyberattacks. That is to say, it is difficult to target only ill-intentioned activity while admitting related safety work when they often draw on the same capabilities.

Since essentially all control surfaces suffer from these tradeoffs, often the best route to a given outcome will involve several different control surfaces working in parallel — for example, a cheap intervention with few false positives and many false negatives, coupled with a more demanding one that can catch some of the false negatives which slip through the previous one. Relatedly, in fast-moving situations it may be preferable to quickly enforce conservative interventions with many false positives, and use the breathing room to implement more careful and calibrated ones.

### 3.3 Coordinated interventions

In cases where an intervention requires coordination among multiple actors, there are some additional properties which need to be satisfied. 

Interventions and actions [must](https://arxiv.org/pdf/2507.15916) be legible to all parties. Thus, more detailed proposals are likely necessary than in unilateral cases, to pin down which actors are committing to which actions, and what the consequences of noncompliance will be.

These consequences themselves must also be devised — in the simplest cases, actors mutually benefit from everyone adhering to the rules, and a penalty for defection is simply other actors also defecting, but other mechanisms seem plausible, such as withholding licenses to purchase chips, or to offer AI services legally in certain jurisdictions. 

[The history](https://arxiv.org/pdf/2304.04123) of arms-control suggests that agreements between rivals are easier to reach when compliance can be independently verified without trust, making control surfaces which enable trustless verification especially desirable. Coarse, numeric thresholds like FLOP counts are easier to evaluate than holistic appraisals like bio uplift capacity, and so it may be easier to coordinate around them as interventions.

Unfortunately, while information about model capabilities and threat models accumulate steeply along the arc of model development, coordination-grade information does not. The information that can be gained about a system nearing deployment is often nonstandardised and difficult to make legible—the internal testing protocols and mitigation mechanisms at one lab may not look the same as at another, even if they point at the same targets. Upstream, however, information on rival goods can be easily legible and shared, making coordination easier. As a result, coordinating actors will tend to select upstream control surfaces: the crude and high-false-positive side of the arc provides a source of surfaces better suited to coordination.

### 3.4 Applying “pace what?” Case A \- Frontier training cap

Suppose the concern is that AI systems may substantially accelerate or automate AI R\&D before adequate means of control exist. The functional target is a transition towards AI-driven development. 

**Control surface:** Training compute is an early, rival input into this process, and therefore represents an attractive control surface for this problem. 

“Capping training compute” still requires further specification of the control surface, however. How should experimentation and post-training compute spend count towards this, if at all? If novel methods involve combining the results of multiple training runs into a larger model, will this still fall in scope? How does one deal with the problem that further algorithmic progress will allow a given level of capabilities to be achieved with less compute as time goes on?

**Targeting and trade-offs:** A compute ceiling only bears on one aspect of the problem, and does not address capability gains from other routes, such as better data or RL environments, post training compute spend, or increasing test-time compute usage. It may also be too broad, and stop some benign or benevolent work. 

There is also the risk of a “capabilities overhang” where artificially capping one input could lead to a sudden jump in capabilities if the restriction is lifted or if one actor defects, which could mean the incentive to defect and take advantage of this overhang increases over time, leading to an unstable equilibrium in the shape of a classic prisoners’ dilemma.

**Coordination:** Compute usage is a comparatively legible surface, if actors can be required to share records. [Many](https://arxiv.org/abs/2604.04712) proposals for governing compute usage and tracking chips exist; it appears the technical problems involved are feasible to solve. The coordination required involves figuring out who has authority over verifying compliance, who is included under the scope of the policy (which individual developers, and which nations), and how to respond to capability gains by non-participants so that continued participation remains preferable to defection.

### 3.5 Applying “pace what?” Case B \- Uplift to biological weapons*

Suppose instead that the concern is the diffusion of AI assistance that materially increases users’ ability to develop biological weapons. Here the functional target is more about access and usage than training. 

**Control surfaces:** Model deployment and access, gated by capability evaluations and subsequent restrictions. Post-trained or API side restrictions, such as refusing prohibited requests, are one potential approach, while another is attempting to train the model not to be capable of fulfilling such requests in the first place, perhaps by ablating training data to remove biological knowledge. The latter, if successful, also has the advantage of being somewhat more robust to open weight models having their restrictions lifted with further post-training, which is a significant risk in the former case.

**Targeting and trade-offs:** Attempting to make the model refuse noncompliant requests faces three main issues — over refusals, under refusals and jailbreaking. Decisions must be made on how jailbreak resistant the model needs to be, and how much refusing of benign requests is tolerable. The capabilities evaluations themselves must also be sufficiently comprehensive to make sure paths to dangerous capabilities are well guarded.

There is also the question of whether it is desirable for specific actors, such as those expected to use models defensively, to have access to versions with lighter restrictions, and how to gate this access reliably.

In cases where usage restriction is the target, there are more obviously tangible benefits to even imperfect restrictions. The more effort and technical capability it takes to circumvent guardrails and do something dangerous, the less often you’d expect harmful behaviours to occur.

**Coordination:** The control surface here is less widely legible than in the compute cap example, and relies upon the existence of a trustworthy evaluator with sufficient expertise to make determinations. In a legislative case, this could be an independent, government, or international body. In the case of voluntary lab compliance, this could be the labs themselves, or a trusted third party to mitigate mistrust between racing labs. Difficulties again arise with what to do about non-covered actors, though in the case of narrow restrictions on usage compliance is less costly for model providers than with broad restrictions, since the majority of their customers might see limited gains from access to these capabilities anyway, and exceptions could plausibly be tailored for legitimate cases.

There is also a risk that, once an open model with a given level of capabilities exists, subsequently attempting to control it may achieve substantially less and may not justify ongoing costs, so the policy may be brittle in the long run.

### 3.6 Open Research Questions

* **How should functional targets be translated into covered activity?** Functional targets such as automated AI R\&D and bioweapon uplift can arise at several points in the process \- they will emerge at some point in training, and we may want to avoid such a point being reached, or we may care more about wider deployment (especially if capabilities have positive use-cases we want to preserve). Research should compare candidate boundaries and weigh the pros and cons of each.

* **What multidimensional measures best track progress toward AI-led R\&D?,** such that we can choose a good target and expect it to remain a good target as time goes on?

* **How well does a control surface track the target?** Aggregate training compute and capability evaluations each capture a different part of the process. Comparative work should estimate the effect of constraining each surface and identify the relevant activity outside it.

* **Which interventions will remain useful as technology changes and which will become irrelevant?** An intervention which is specific to a particular mode of operation or model architecture which could be superseded may lose its teeth.

* **How should related work count together?** Aggregation rules must handle projects divided across multiple training runs, or across different corporate entities. Testing should identify rules that identify deliberate fragmentation without sweeping in unrelated work.

* **What practical coverage is sufficient?** Compare the reach available through company control, infrastructure providers and national rules, including their supply-chain effects. Estimate when activity by outsiders is large enough to defeat the intervention.

* **Once some diffusion of dangerous capabilities has occurred, which restrictions lose their teeth entirely, and which continue to meaningfully reduce risks?** While some loss-of-control scenarios are presented as all-or-nothing, in many cases ease of access to dangerous capabilities will continue to meaningfully influence the net harm done. Needing to spend hours jailbreaking a model to get useful outputs from them is meaningfully more friction than having them readily assist with harmful endeavours straight away when asked.

* **How can we make a rule which permits exceptions to preserve useful work, which is not so permeable that it makes the rule useless?** In the case of compute controls, it seems technologically feasible to identify what uses a GPU is being put to on some levels. The more we can do this, the less an intervention will need to be a blunt instrument versus being narrowly scoped.
