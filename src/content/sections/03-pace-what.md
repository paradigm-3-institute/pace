---
title: "Pace What?"
order: 3
summary: "Similique sunt in culpa qui officia deserunt mollitia animi."
---

Much of the challenge in pacing AI progress is picking a specific part or parts of the AI ecosystem to intervene on. Often there will be quite a large gap between the functional target (the part of AI progress that causes some threat) and the control surface (the part which can actually be changed).

There is, for example, no direct lever to prevent rogue actors from using AI to launch cyberattacks. But there are levers on compute, on model releases, and classes of use — each of which picks out part of the threat, catching some activity that is harmless and missing some that is not, with varying costs to privacy, economic growth, and oversight.

The choice of control surfaces is therefore a central design decision for any pacing intervention, with the availability of control surfaces affecting which pacing interventions are possible to carry out.

### 3.1 Control surfaces of AI progress
Modern AI progress is an [extremely costly](https://arxiv.org/pdf/2405.21015), distributed, and ever-evolving process. On the upstream end of the arc, inputs like compute, hardware, capital, researchers, data, and accumulated knowledge feed development activity: pre-training, but also post-training, elicitation, and scaffolding. On the downstream end, that activity produces models, which can then be retained inside a developer, offered through a controlled service, or released as weights that can in turn be copied, modified, and rehosted without limit.

All of these are plausible control surfaces — indeed, it is hard to give a comprehensive list, partly because it is likely that in future new control surfaces will emerge just as others lose purchase. Furthermore, many other forces affect AI progress strongly but indirectly, like immigration laws.

One crucial distinction in the arc is that part way through the resources shift in nature. Upstream, it is mainly *rival* goods: resources which can only be used by one actor at a time. Compute, capital, and researcher time are scarce, are concentrated within a small number of identifiable organisations, and can be redirected. Downstream, it is mainly non-rival ones, which can be replicated for essentially no cost. Weights, methods, and ideas can be easily copied, so the set of holders only grows. The correspondence between rivalry and position in the process is not quite perfect though — training data, for instance, is upstream but nonrival.

These components allow for quite different kinds of intervention. The rival components have locations and quantities — they can be monitored, taxed, and redirected, and it is possible to mostly keep track of who has them. The nonrival components tend to be more like information, and once lost, they are hard to recover. Interventions therefore have to be more conduct-based.

Once a nonrival good like model weights is proliferating, it is very difficult to destroy every copy and there is no way to verify a claim that all copies have been destroyed, so interventions on their distribution are all-or-nothing. By contrast, for a rival good like computing hardware, an oversight body might more reasonably believe it was tracking a known proportion, and this would still be valuable because it would give a bound on the potential harm.

### 3.2 Targeting and trade-offs
Every pacing intervention divides activity in two. Some of it stops, slows or proceeds under different conditions. The rest continues unaffected. Whatever else it does, a pacing intervention selects, and we can judge it by what its selection catches and misses.

The selection can fail in two directions. A false negative is activity which contributes to the threat, but which is not caught by the intervention. A false positive is an activity caught by the intervention, but which does not contribute to the threat. Both errors can occur simultaneously: A classifier that aims to flag nefarious research related to manufacturing biological weapons, for example, may be triggered by the innocent questions of a biology student. At the same time, the classifier may fail to catch carefully designed questions that split up a dangerous avenue of inquiry into unassuming parts.

The central issue in choosing a control surface is that the most useful information comes too late in the process of model creation. As development progresses — from training to evaluation to deployment — a greater quantity of useful information about the capabilities and risks becomes available. The problem is that the ability to respond effectively diminishes as the model progresses along the development chain — once a model nears deployment, the energy, resources, and capital that brought it to this stage likely acquire an interest in seeing it rolled out; and once the model is deployed, it is much harder to recall. Moreover, the rival inputs to the early stage of development are far more controllable than the resulting model weights or tokens.


So, as a very basic starting point, interventions higher up in the arc will have more false positives and fewer false negatives — in the limit, halting all AI development forever would indeed prevent all harms, but it would also prevent all benefits.
One reason this remains true along the arc is that, for most threats, there are multiple distinct pathways. A capability advance can come from more training compute, better algorithms, [more elaborate post-training](https://arxiv.org/abs/2310.06452), or better elicitation of a model’s existing latent capabilities. An intervention which targets one route leaves but leaves the others open, still allows some threat-relevant activity to continue even if the intervention is perfectly enforced.

The quality of selection also changes over time. This is partly because actors adapt in response to interventions, as we discuss in Section 5. But even beyond that, the effectiveness of an intervention depends on empirical assumptions about the relationship between the control surface and the functional target. These assumptions may be changed by later progress.

For example, one very conservative way to prevent the emergence of a dangerous advanced capability is to cap the number of FLOPs that can be used in training a model, but even this intervention depends on assumptions about [training efficiency](https://arxiv.org/pdf/2511.23455) or [elicitation](https://arxiv.org/pdf/2005.14165) [methods](https://arxiv.org/pdf/2201.11903) which might change with future progress. Generally this will push towards more false negatives, as the intervention becomes outdated.

More generally, AI progress is recursive. At a very basic level, frontier developers use their models to make money to make more models and hire more researchers. Increasingly, they also use their models to improve the quality of their research. This means that constraints at one point in the process can ripple out and have complex indirect effects.
For a given control surface, there will often be a three-way tradeoff between false positives, false negatives, and intrusiveness or oversight. Simply put, one can make an imperfect rule more or less conservative, or one can invest in making the rule more accurate, by some mix of investing more energy in scrutinising individual cases and requiring more access to information about those cases, some of which might otherwise be private.

<figure>
  <img src="/media/draw-the-line.png"/>
  <figcaption> 
    Broader rules, which capture a higher fraction of threat relevant activity, carry with them greater economic costs, while narrower rules may be easier to circumvent and thus have fewer safety benefits. 
</figcaption>
</figure>
    

Alongside interventions which directly cap or limit some resources, it is possible to intervene indirectly — to change an incentive and let the selection be performed by the actors themselves. This includes buying out or taxing specific resources, or applying liability to outcomes. These approaches can effectively draw on private information no regulator could extract: private plans, valuations, and alternatives. Ultimately this means indirect selection needs no surveillance to operate. However, these interventions will still generally lead to false positives and negatives.
The correct balance between these three constraints will depend on the goals of the intervention and the resources available. One critical point to bear in mind, though, is that for many interventions, the function is to buy time for some complementary activity which in some cases may risk being caught in the filter. For example, a filter which blocks requests that enable cybercrime may also prevent requests related to the testing and evaluation of dangerous cybercapabilities, undermining the nominal aim of mitigating the risk of cyberattacks. That is to say, it is difficult to target only ill-intentioned activity while admitting related safety research when they often draw on the same capabilities.

Since essentially all control surfaces suffer from these tradeoffs, often the best route to a given outcome will involve several different control surfaces working in parallel — for example, a cheap intervention with few false positives and many false negatives, coupled with a more demanding one that can catch some of the false negatives which slip through the previous one. Relatedly, in fast-moving situations it may be preferable to quickly enforce conservative interventions with many false positives, and use the breathing room to implement more careful and calibrated ones.

### 3.3 Coordinated interventions

Pacing frontier AI R&D is in many cases a coordination problem, typically involving a subset of the following actors:
1. **States:** a large actor with a responsibility to the public, bearing a lot of power (esp. over upstream inputs) but also a lot of bureaucracy resulting in slow response rate;
2. **R&D labs:** a high-momentum actor with the power to make calls about their own R&D faster than other actors but is incentivised by domestic or international competition;
3. **Independent tech teams:** a third-party actor with the capacity to generate objective evidence and less race-driven motivations but at the cost of no decision-making power.

(Other relevant parties may involve emergency authorities and the public.)
When an intervention must be coordinated between several parties, it also needs to be legible to all parties. Coarse, numeric thresholds like FLOP counts are easier to agree on than holistic appraisals like bio uplift capacity, and so it is easier to coordinate around them as interventions.

Unfortunately, information in general accumulates steeply along the arc, but coordination-grade information does not. The information that can be gained about a system nearing deployment is often externally indecipherable; upstream, however, information on rival goods can be easily legible and shared, making coordination easier. As a result, coordinating actors will tend to select upstream control surfaces: the crude and high-false-positive side of the arc provides a source of surfaces better suited to coordination.

### 3.4 Worked Example: Frontier pre-training
Suppose the concern is that AI systems may substantially accelerate or automate AI R&D before adequate means of control exist. The functional target is a transition towards AI-driven development.

**Control surface:** Pre-training compute is an early, rival input into this process, and therefore represents an attractive control surface for this problem.
“Capping pre-training compute” still requires further specification of the control surface, however. How should experimentation and post-training compute spend count towards this, if at all? If novel methods involve combining the results of multiple training runs into a larger model, will this still fall in scope? How does one deal with the problem that further algorithmic progress will allow a given level of capabilities to be achieved with less compute as time goes on?

**Targeting and trade-offs:** A compute ceiling only bears on one aspect of the problem, and does not address capability gains from other routes, such as better data or RL environments, post training compute spend, or increasing test-time compute usage. It may also be too broad, and stop some benign or benevolent work.

There is also the risk of a “capabilities overhang” where artificially capping one input could lead to a sudden jump in capabilities if the restriction is lifted or if one actor defects, which could mean the incentive to defect and take advantage of this overhang increases over time, leading to an unstable equilibrium in the shape of a classic prisoners’ dilemma.

**Coordination:** Compute usage is a comparatively legible surface, if actors can be required to share records. [Many](https://arxiv.org/abs/2604.04712) proposals for governing compute usage and tracking chips exist; it appears the technical problems involved are feasible to solve. The coordination required involves figuring out who has authority over verifying compliance, who is included under the scope of the policy (which individual developers, and which nations), and how to respond to capability gains by non-participants so that continued participation remains preferable to defection.

### 3.5 Worked Example: Biological capability
Suppose instead that the concern is the diffusion of AI assistance that materially increases users’ ability to develop biological weapons. Here the functional target is more about access and usage than training.

**Control surfaces:** Model deployment and access, gated by capability evaluations and subsequent restrictions. Post-trained or API side restrictions, such as refusing prohibited requests, are one potential approach, while another is attempting to train the model not to be capable of fulfilling such requests in the first place, perhaps by ablating training data to remove biological knowledge. The latter, if successful, also has the advantage of being somewhat more robust to open weight models having their restrictions lifted with further post-training, which is a significant risk in the former case.

**Targeting and trade-offs:** Attempting to make the model refuse noncompliant requests faces three main issues — over refusals, under refusals and jailbreaking. Decisions must be made on how jailbreak resistant the model needs to be, and how much refusing of benign requests is tolerable. The capabilities evaluations themselves must also be sufficiently comprehensive to make sure paths to dangerous capabilities are well guarded.
There is also the question of whether it is desirable for specific actors, such as those expected to use models defensively, to have access to versions with lighter restrictions, and how to gate this access reliably.

In cases where usage restriction is the target, there are more obviously tangible benefits to even imperfect restrictions. The more effort and technical capability it takes to circumvent guardrails and do something dangerous, the less often you’d expect harmful behaviours to occur.

**Coordination:** The control surface here is less widely legible than in the compute cap example, and relies upon the existence of a trustworthy evaluator with sufficient expertise to make determinations. In a legislative case, this could be an independent or government body. In the case of voluntary lab compliance, this could be the labs themselves. Difficulties again arise with what to do about non-covered actors, though in the case of narrow restrictions on usage compliance is less costly for model providers than with broad restrictions, since the majority of their customers might see limited gains from access to these capabilities anyway, and exceptions could plausibly be tailored for legitimate cases.

There is also a risk that, once an open model with a given level of capabilities exists, subsequently attempting to control it may achieve little, so the policy may be brittle in the long run.


### 3.6 Open Research Questions
* **How should functional targets be translated into covered activity?** Functional targets such as automated AI R&D and bioweapon uplift can arise at several points in the process - they will emerge at some point in training, and we may want to avoid such a point being reached, or we may care more about wider deployment (especially if capabilities have positive use-cases we want to preserve). Research should compare candidate boundaries and weigh the pros and cons of each.
* **How well does a control surface track the target?** Aggregate training compute and capability evaluations each capture a different part of the process. Comparative work should estimate the effect of constraining each surface and identify the relevant activity outside it.
* **Which interventions will remain useful as technology changes and which will become irrelevant?** An intervention which is specific to a particular mode of operation or model architecture which could be superseded may lose its teeth.
* **How should related work count together?** Aggregation rules must handle projects divided across multiple training runs, or across different corporate entities. Testing should identify rules that identify deliberate fragmentation without sweeping in unrelated work.
* **What practical coverage is sufficient?** Compare the reach available through company control, infrastructure providers and national rules, including their supply-chain effects. Estimate when activity by outsiders is large enough to defeat the intervention.
* **How can we make a rule which permits exceptions to preserve useful work, which is not so permeable that it makes the rule useless?** In the case of compute controls, it seems technologically feasible to identify what uses a GPU is being put to on some levels. The more we can do this, the less an intervention will need to be a blunt instrument versus being narrowly scoped.
