---
title: "Appendices"
order: 8
---

### 8.1. Appendix: All open questions

#### 2: Why pace?

* **How much, and in what ways, would more time allow us to better manage various AI risks?** What are the bottlenecks to mitigation or adaptation of different AI risks? What factors other than time influence AI risk management? What risk management efforts can be taken now, and which can only be taken once certain AI capability or adoption thresholds are crossed?  Related work:  
  * *MacAskill & Moorhouse (2025), [Preparing for the Intelligence Explosion](https://www.forethought.org/research/preparing-for-the-intelligence-explosion)* Explicitly sorts "grand challenges" by whether they need calendar time, human deliberation, or just more AI.  
  * *Hobbhahn (2025), [What's the short timeline plan?](https://www.lesswrong.com/posts/bb5Tnjdrptu89rcyY/what-s-the-short-timeline-plan)* A concrete inventory of which safety measures are ready to deploy now, and which need years of preparation.  
* **How might pacing become more or less difficult over time?** What investments can be made now to preserve optionality over pacing in the future? In particular, under what circumstances does pacing now make future pacing more or less feasible?  Related work:  
  * *Rahman (2026), [Does Distributed Training Undermine Compute Governance?](https://arxiv.org/abs/2605.29359)*  
  * *Sastry et al. (2024), [Computing Power and the Governance of Artificial Intelligence](https://arxiv.org/abs/2402.08797).* Maps compute governance options and their readiness.  
* **How do actors in this space make decisions about pacing?** What evidence do they currently consider and what assumptions do they currently make? What pathways exist for external research to inform such decisions, e.g. in government or lab leadership, and what makes that information transfer more effective?  
  * *METR (2025), [Common Elements of Frontier AI Safety Policies](https://metr.org/blog/2025-12-09-common-elements-of-frontier-ai-safety-policies/)*  
* **Which AI risks are most likely to motivate a pacing intervention, now and in the future?** Where do different dangerous capabilities sit on the offense/defense balance, and how will that change over time?  Related work:  
  * *Garfinkel & Dafoe (2019), [How Does the Offense-Defense Balance Scale?](https://www.tandfonline.com/doi/full/10.1080/01402390.2019.1631810)*  
  * *Shevlane & Dafoe (2020), [The Offense-Defense Balance of Scientific Knowledge: Does Publishing AI Research Reduce Misuse?](https://arxiv.org/abs/2001.00463)*  
  * *Esvelt (2022), [Delay, Detect, Defend: Preparing for a Future in which Thousands Can Release New Pandemics](https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics)*  
* **How does transparency about capabilities affect coordination?** When does common knowledge of research progress intensify or weaken race dynamics, for example by revealing that a rival is close behind or that progress is possible?  Related work:  
  * *Bostrom (2017), [Strategic Implications of Openness in AI Development](https://onlinelibrary.wiley.com/doi/full/10.1111/1758-5899.12403)*  
  * Armstrong, Bostrom & Shulman (2016), [*Racing to the Precipice: a Model of Artificial Intelligence Development*](https://nickbostrom.com/papers/racing-to-the-precipice.pdf) Better information about rivals' capabilities can *increase* danger when teams are close, because it removes uncertainty that induces caution.  
* **What are the risks and benefits of titration** (“deploy it and learn the risks empirically”)? Have past release strategies from frontier labs succeeded in managing known AI risks? What might change in the future risk landscape? Given our uncertainty about the true risks, what criteria should gate the deployment of new frontier models?   
  * *Shevlane et al. (2023), [Model Evaluation for Extreme Risks](https://arxiv.org/abs/2305.15324)*.

#### 3: Pace what?

* **How should hazards be translated into covered activity for pacing interventions?** Risks we would like to target, such as uncontrolled automation of AI R\&D and bioweapon uplift, build up over various stages of AI research, development and deployment; capabilities will initially emerge at some point in training, and we may want to avoid such a point being reached, or we may care more about wider deployment (especially if capabilities have positive use cases we want to preserve). Research should compare candidate boundaries.  
  * *Shevlane et al. (2023), [Model Evaluation for Extreme Risks](https://arxiv.org/abs/2305.15324)*  
  * *Hooker (2024), [On the Limitations of Compute Thresholds as a Governance Strategy](https://arxiv.org/abs/2407.05694)*  
* **How can pacing thresholds be made specific and yet still cover distributed activity?** A pacing intervention targeting a threshold could potentially be circumvented by distributing activities or artifacts such that each sits below the threshold. How can we design aggregation rules and methods to handle cumulative risk from activities that are divided across space, time, processes and entities, without hindering low-risk activities?.   
  * *Seferis & Fist (2026), [Detecting Compute Structuring in AI Governance Is Likely Feasible](https://ojs.aaai.org/index.php/AAAI/article/view/41127)*  
  * *Rahman (2026), [Does Distributed Training Undermine Compute Governance?](https://arxiv.org/abs/2605.29359)*  
* **What practical coverage is sufficient?** If we consider the reach available through company control, infrastructure providers and national rules, including their supply-chain effects, can we estimate bounds on activities that would be effectively covered by an intervention and relevant activities that would be missed?  
  * *Koopmanschap & Barten (2026), [How to Catch a GPU](https://arxiv.org/abs/2607.22619).* Maps issues with enforcement coverage as dangerous capabilities come to require progressively less compute  
  * *Egan & Heim (2023), [Oversight for Frontier AI through a Know-Your-Customer Scheme for Compute Providers](https://arxiv.org/abs/2310.13625)*  
* **How effective are different access restrictions once a dangerous capability has been released?** How do factors such as access guardrails, alignment training, access to inference compute, ease-of-use, and tacit knowledge affect risk once diffusion has already occurred?  
  * *Tamirisa et al. (2024), [Tamper-Resistant Safeguards for Open-Weight LLMs](https://arxiv.org/abs/2408.00761)*. Identifies limitations in how reliable safeguards can be for open weight models.  
  * *Ord (2025), [Inference Scaling Reshapes AI Governance](https://arxiv.org/abs/2503.05705)*. Identifies inference scaling as a lever for released models.  
* **How can we permit exceptions to allow useful work, without being so permeable that it makes the rule useless?** In the case of compute controls, it now seems technologically feasible, to some extent, to identify what uses a GPU is being put to. What other technical advances can allow interventions to be less blunt and more narrowly scoped?  
  * *Gargiulo & Kulp (2026), [Workload Identification with Physical Side Channels for AI Governance](https://arxiv.org/abs/2609.00309)*  
* **What are the tradeoffs between verification and invasiveness for different interventions?** How can we push the frontier forward?  
  * *Scher & Thiergart (2024), [Mechanisms to Verify International Agreements About AI Development](https://arxiv.org/abs/2506.15867)*. Gives an overview of different verification mechanisms and what they require.  
  * *Petrie et al. (2025), [Flexible Hardware-Enabled Guarantees for AI Compute](https://arxiv.org/abs/2506.15093).* Proposes verifying compliance without exposing sensitive information about AI development.

#### 4: Pace how?

* **How do the incentives of bound parties change across the lifecycle?** To what extent can different actors reliably predict the behavior of other actors throughout the lifetime of a pacing intervention? How load-bearing are these predictions of behavior going to be for coordination of pacing interventions?  
  * *Finke (2026), [International Agreements to Limit Frontier AI: Objectives and Exit](https://arxiv.org/abs/2607.16224)*.  
  * *Koremenos (2005), [Contracting around International Uncertainty](https://doi.org/10.1017/S0003055405051877)*.   
  * *Goldstein and Salib (2025), [How to Stop an AI Arms Race](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5369439).*  
* **How does information sharing impact the credibility of coordinated pacing?** Which information, in what granularity, through which channels, by which actors, matter most for credible coordinated pacing? How can this be kept compatible with national security considerations, commercial confidentiality, and cybersecurity? To what extent can this information sharing be kept robust to manipulation?   
  * *Wasil et al. (2024), [Verification Methods for International AI Agreements](https://arxiv.org/abs/2408.16074).*  
  * *Scher et al (2025), [An International Agreement to Prevent the Premature Creation of Artificial Superintelligence](https://arxiv.org/abs/2511.10783).*  
* **What evidence could legitimize a speedy initiation of pacing? What is likely to be the acceptable tolerance for unreliable evidence for different actors?**  Can scenarios and thresholds be specified in advance to a level of specificity that would garner coordinated buy-in to a rapid pacing onset? Can evidential and assessment processes be agreed on in advance?  
  * *Karnofsky (2024), [If-Then Commitments for AI Risk Reduction](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)*  
* **How could dry-run simulations inform and prepare for pacing interventions?** What aspects of simulation design, delivery and follow-up affect their effectiveness and impact? Could simulations harm or misguide pacing interventions?  
  * *Gruetzemacher et al. (2024), [Strategic Insights from Simulation Gaming of AI Race Dynamics](https://arxiv.org/abs/2410.03092)*  
  * *Bartels (2020), [Building Better Games for National Security Policy Analysis](https://www.rand.org/pubs/rgs_dissertations/RGSD437.html)*  
* **How will our reliance on different sources of information about risks, and our methods for communication and coordination, change as AIs become more capable, autonomous, or integrated?**  
  * *Clymer et al. (2024), [Safety Cases: How to Justify the Safety of Advanced AI Systems](https://arxiv.org/abs/2403.10462)*  
* **What does the space of exit scenarios look like?** For example, small-scale interventions may allow for immediate release, whereas exits from ongoing large-scale interventions impacting multiple facets of the economy and society (e.g. export controls) may need to be staged. Other than staging, what other parameters of exits exist, and how could they be tuned?   
  * *Finke (2026), [International Agreements to Limit Frontier AI: Objectives and Exit](https://arxiv.org/abs/2607.16224)*  
* **What is the relationship between initiation and exit triggers?** Intuitively, the exit trigger should track whatever justified the intervention in the first place, but what could affect that link and what other factors should be considered?  
  * *Cârlan et al. (2024), [Dynamic Safety Cases for Frontier AI](https://arxiv.org/abs/2412.17618)*  
  * *Karnofsky (2024), [If-Then Commitments for AI Risk Reduction](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)*

#### 5: Then what?

* **What compensation schemes could make pacing interventions more desirable for actors who stand to lose financially from them?** What are the precedents for such compensation, how could they be funded, and what secondary impacts might they have?  
  * *Srivastav & Zaehringer (2024), [The Economics of Coal Phaseouts](https://arxiv.org/abs/2406.14238)*  
  * *Jobst Heitzig, Lessman & Zou (2018) [Self-enforcing strategies to deter free-riding in the climate change mitigation game and other repeated public good games](https://www.pnas.org/doi/abs/10.1073/pnas.1106265108)*  
* **Which restrictions build what kinds of overhangs?** How are these overhangs likely to play out if realized, and how dangerous might they be? Can overhangs be addressed through complementary policies? Are there pacing interventions which do not build up an overhang?  
  * *Belrose (2023), [AI Pause Will Likely Backfire](https://bounded-regret.ghost.io/ai-pause-will-likely-backfire-by-nora/)*. Looks at the negative case for a training pause, where a compute overhang leads to rapid progress.  
* **Which actors gain relative power under different interventions**, and what are the expected consequences? What is the historical track record of uses and abuses of power when an activity comes under deliberate pacing intervention?  
  * *Coe & Vaynman (2015), [Collusion and the Nuclear Nonproliferation Regime](https://www.andrewjcoe.com/_files/ugd/c8f493_ad67e13e0bdd4856b3f789dc317b327e.pdf)*. Looks at how nuclear nonproliferation entrenched superpower influence.  
  * *Cassata & de Chadarevian (2025), [Asilomar Across the Atlantic](https://pmc.ncbi.nlm.nih.gov/articles/PMC12098474/).* Restrictions on recombinant-DNA research empowered certain scientific organizations.   
* **What safeguards can be deployed to guard against mission creep**, where regulators or newly empowered authorities could gain power beyond what was intended and become hard to dislodge?  
  * *Romano & Levin (2021), [Sunsetting as an Adaptive Strategy](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256028/)*  
  * *Molloy (2021), [Approach with Caution: Sunset Clauses as Safeguards of Democracy?](https://researchportal.northumbria.ac.uk/en/publications/approach-with-caution-sunset-clauses-as-safeguards-of-democracy/)*

### 8.2. Appendix: longlist of pacing interventions

For concreteness, the following attempts to list the levers we have available to pace AI. Note that a lever’s inclusion here is not an argument in favor of acting on it.

One simple task for the pacing field is to have serious up-to-date research on each of the following levers, and to then model the dependencies and tensions between individual levers.

#### Compute → dangerous capabilities

1. Cap training FLOPs per run ([Heim & Koessler 2024](https://arxiv.org/abs/2405.10799); [Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress); [Scher et al 2025](https://arxiv.org/abs/2511.10783))  
2. Require pre-registration and notice for planned training runs above a threshold ([EO 14110](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence); [SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53))  
3. Aggregation rules: make multi-cluster and distributed runs count toward the cap ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Heim & Koessler 2024](https://arxiv.org/abs/2405.10799))  
4. Cap on total R\&D compute per organization per year ([Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
5. Cap on the RL share of total training compute ([Irpan 2024](https://www.alexirpan.com/2024/12/04/late-o1-thoughts.html))  
6. Minimum ratio of monitoring compute per inference compute ([AI Futures Project 2026](https://blog.aifutures.org/p/how-to-pace-the-us-frontier), [Achiam 2026](https://x.com/jachiam0/status/2099115629626401103))   
7. Minimum ratio of safety spending per training compute ([AI Futures Project 2026](https://blog.aifutures.org/p/how-to-pace-the-us-frontier))  
8. Tax R\&D compute above a threshold ([Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
9. Regular reporting of each lab’s compute split into final runs, experiments, internal inference, and external inference ([Epoch 2026](https://epoch.ai/gradient-updates/r-and-d-vs-training-compute); [EO 14110](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence)).

#### Chips → compute → dangerous capabilities

10. Export-control performance threshold for accelerators ([BIS AC/S rule](https://www.federalregister.gov/documents/2023/10/25/2023-23055/implementation-of-additional-export-controls-certain-advanced-computing-items-supercomputer-and))  
11. Export controls on lithography, HBM and advanced packaging ([BIS SME rule, Oct 2023](https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items); [BIS rule 2024](https://www.federalregister.gov/documents/2024/12/05/2024-28270/foreign-produced-direct-product-rule-additions-and-refinements-to-controls-for-advanced-computing))  
12. Chip registry: serial numbers and owner of record above threshold, smuggling penalties ([Sastry et al. 2024](https://arxiv.org/abs/2402.08797); [Fist & Grunewald 2023](https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china))  
13. Location verification on accelerators ([Brass & Aarne 2024](https://www.iaps.ai/research/location-verification-for-ai-chips); [Chip Security Act, S.1705](https://www.congress.gov/bill/119th-congress/senate-bill/1705/text))  
14. Hardware-enabled mechanisms on new chips: offline licensing, metering, attestation ([Aarne, Fist & Withers 2024](https://www.cnas.org/publications/reports/secure-governable-chips); [Kulp et al. 2024](https://www.rand.org/pubs/working_papers/WRA3056-1.html); [FlexHEG 2025](https://arxiv.org/abs/2506.15093))

#### Datacenters (installed chips) → compute → dangerous capabilities

15. Permit review threshold for datacenters ([Sanders](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/))  
16. Grid interconnect queue ([Epoch 2024](https://epoch.ai/blog/can-ai-scaling-continue-through-2030))  
17. Registry of datacenters with satellite-verified construction status ([Epoch](https://epoch.ai/data/data-centers))

#### Data → dangerous capabilities

18. Disclosure of synthetic-data share and RL environments used in frontier training ([EU AI Act](https://artificialintelligenceact.eu/article/53/))

#### Algorithms → effective compute → dangerous capabilities

19. Publication embargo on frontier algorithmic results ([Bostrom 2017](https://nickbostrom.com/papers/openness.pdf); [Shevlane & Dafoe 2020](https://arxiv.org/abs/2001.00463))  
20. Total Research Transparency: mandatory disclosure of all frontier research ([AI Futures Project 2026](https://www.planned-obsolescence.org/p/total-research-transparency-would))  
21. Internal model transparency: mandatory sharing of all internal models with researchers at other labs ([Tadepalli 2026](https://blog.karthiktadepalli.com/p/internal-model-transparency)).
21. Structured access to code and checkpoints via vetted institutions ([Shevlane 2022](https://arxiv.org/abs/2201.05159))  
22. Classification regime for capability-elicitation techniques ([Shevlane & Dafoe 2020](https://arxiv.org/abs/2001.00463))

#### Talent → algorithms → dangerous capabilities

23. Visa quota and processing time for frontier researchers ([Zwetsloot et al. 2019, CSET](https://cset.georgetown.edu/publication/keeping-top-ai-talent-in-the-united-states/))  
24. Vetting and cooling-off periods for staff with weight or R\&D compute access ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))

#### Capital → compute → dangerous capabilities

25. Compute tax (dollar per FLOP on training runs above a threshold) ([Calero-Forero 2026](https://www.lesswrong.com/posts/qns9i7RZwxAAGGsjD/how-should-you-slow-down-ai-progress-if-it-becomes-necessary))  
26. Strict liability for catastrophic harms from frontier models ([Weil 2024](https://ssrn.com/abstract=4694006))  
27. Mandatory liability insurance, premiums priced by capability tier ([Trout 2024](https://arxiv.org/abs/2409.06672))  
28. Investor-facing AI risk disclosure ([SEC 2023](https://www.sec.gov/newsroom/press-releases/2023-139))

#### AI R\&D capabilities → algorithms → effective compute → dangerous capabilities

29. Fraction of R\&D compute consumed by autonomous agents ([Stix et al. 2025](https://arxiv.org/abs/2504.12170); [Charnock et al 2026](https://arxiv.org/abs/2604.23065))   
30. AI R\&D speed-up trigger in safety frameworks ([Anthropic RSP](https://www.anthropic.com/rsp-updates); [DeepMind FSF](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/); [OpenAI Preparedness](https://openai.com/safety/preparedness))  
31. Human review ratio for AI-written research code and experiment plans ([Stix et al. 2025](https://arxiv.org/abs/2504.12170))  
32. Safety case required before internal deployment on the R\&D stack ([Clymer et al. 2024](https://arxiv.org/abs/2403.10462); [Stix et al. 2025](https://arxiv.org/abs/2504.12170))  
33. Monitoring coverage of internal agent actions ([Greenblatt et al. 2023](https://arxiv.org/abs/2312.06942); [METR red-team of Anthropic's internal monitoring, 2026](https://metr.org/blog/2026-03-25-red-teaming-anthropic-agent-monitoring/))

#### Actors and cadence → race intensity → all other levers

34. Licensing vs registration for frontier development ([Anderljung et al. 2023](https://arxiv.org/abs/2307.03718); [June 2026 EO](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/))  
35. Minimum interval between frontier releases ([FLI pause letter 2023](https://futureoflife.org/open-letter/pause-giant-ai-experiments/))  
36. Pre-deployment testing window with government access ([June 2026 EO](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/); [FRONTIER Act](https://statt.com/blog/frontier-act-federal-ai-regulation-2026/))  
37. Coordinated-pause trigger and duration across signatories ([Alaga & Schuett 2023](https://arxiv.org/abs/2310.00374))  
38. Lead-margin reporting: months between top lab and next ([Epoch](https://epoch.ai/gradient-updates/keeping-up-with-the-gpts/); [Karnofsky 2022](https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/))

#### Dangerous capabilities evals

39. Pretraining data filtering for CBRN, cyber-offense and self-replication content ([O'Brien et al. 2025](https://arxiv.org/abs/2508.06601))  
40. Verified unlearning of specified capabilities ([Li et al. 2024](https://arxiv.org/abs/2403.03218), [Feng et al 2025](https://arxiv.org/abs/2506.00688))  
41. Capability thresholds by domain ([Koessler, Schuett & Anderljung 2024](https://arxiv.org/abs/2406.14713); [the old Anthropic RSP](https://www.anthropic.com/rsp-updates))

#### Generality → dangerous capabilities

42. Separate regulatory track for narrow AI, scientific models ([Drexler 2019](https://ora.ox.ac.uk/objects/uuid:9c05427a-6390-4b42-9c55-ee45f73a26ad); [EU AIA](https://artificialintelligenceact.eu/introduction-to-code-of-practice/))  
43. Gating of long-horizon agentic post-training for general models ([Chan et al. 2023](https://arxiv.org/abs/2302.10329); [Kwa et al. 2025](https://arxiv.org/abs/2503.14499))

#### Legibility of model reasoning → control of dangerous capabilities

44. Codebase / log audits for optimization pressure on chain-of-thought ([Korbak et al. 2025](https://arxiv.org/abs/2507.11473); [Baker et al. 2025](https://arxiv.org/abs/2503.11926))  
45. Disclosure and gating of latent reasoning architectures ([Hao et al. 2024, Coconut](https://arxiv.org/abs/2412.06769); [Korbak et al. 2025](https://arxiv.org/abs/2507.11473))  
46. Online weight updates in deployment off by default ([Greenblatt et al. 2023](https://arxiv.org/abs/2312.06942))  
47. Persistent memory scope ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))  
48. Canary-tagging or filtering of safety and eval content in training data ([Berglund et al. 2023](https://arxiv.org/abs/2309.00667); [Laine et al. 2024](https://arxiv.org/abs/2407.04694))

#### Weight security → blocking exfiltration

49. Mandatory weight security level (“SL”) by capability ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html); [Anthropic ASL-3](https://www.anthropic.com/news/activating-asl3-protections))  
50. Two-person rule and hardware keys for weight access ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
51. Insider-threat program coverage ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
52. Weight retention policy ([Anthropic 2025](https://www.anthropic.com/research/deprecation-commitments))

#### Inference → dangerous capabilities

53. Per-query reasoning compute cap for the most capable models ([Hooker 2024](https://arxiv.org/abs/2407.05694); [Ord 2025](https://arxiv.org/abs/2503.05705))  
54. Token tax ([Irwin 2026](https://arxiv.org/abs/2603.04555))  
55. Deployment tax by capability tier ([Calero-Forero 2026](https://www.lesswrong.com/posts/qns9i7RZwxAAGGsjD/how-should-you-slow-down-ai-progress-if-it-becomes-necessary))  
56. Liability allocation between deployer and developer for autonomous services ([Weil 2024](https://ssrn.com/abstract=4694006))

#### Autonomy → dangerous capabilities

57. Agent permission tiers ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf); [Chan et al. 2024](https://arxiv.org/abs/2401.13138))  
58. Spend limits per agent and per task ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))  
59. Human approval for irreversible actions ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf); [EU AI Act](https://artificialintelligenceact.eu/article/14/))  
60. Sub-agent spawn depth and maximum unattended run length ([Kwa et al. 2025, METR](https://arxiv.org/abs/2503.14499))  
61. Agent identifiers and action-log retention ([Chan et al. 2024](https://arxiv.org/abs/2401.13138))  
62. Kill-switch latency requirement ([Orseau & Armstrong 2016](https://intelligence.org/files/Interruptibility.pdf); [Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))  
63. Certification and fleet registration for embodied agents ([EU Machinery Regulation 2023/1230](https://eur-lex.europa.eu/eli/reg/2023/1230/oj))

#### Multi-agent → dangerous capabilities

64. Instance-count reporting per deployment ([Chan et al. 2024](https://arxiv.org/abs/2401.13138))  
65. Agent-to-agent communication logging with steganography checks ([Motwani et al. 2024](https://arxiv.org/abs/2402.07510))

#### Safety research

66. Minimum fraction of total compute reserved for safety research, above a total compute threshold ([OpenAI 2023](https://openai.com/index/introducing-superalignment/))  
67. Minimum safety headcount as a ratio of total research headcount ([AI Lab Watch](https://ailabwatch.org))  
68. External safety compute grants (minimum FLOP/year given to independent labs) ([NAIRR](https://nairrpilot.org))

#### Evaluation

69. Third-party evaluator access depth ([Casper et al. 2024](https://arxiv.org/abs/2401.14446))  
70. Elicitation budget per dangerous-capability eval ([METR elicitation protocol](https://metr.github.io/autonomy-evals-guide/elicitation-protocol/); [Barnett & Thiergart 2024](https://arxiv.org/abs/2411.12820))  
71. Sandbagging detection protocol ([van der Weij et al. 2024](https://arxiv.org/abs/2406.07358))

#### Transparency

72. Required “AI Assurance Level” for developers in the frontier tier ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
73. Embedded auditors running regular audits with non-public access ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
74. Audit scope including internal deployment, information security and safety decision-making ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
75. Number of accredited audit providers and a standards body ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
76. Incident reporting deadline ([SB 53 §22757.13](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53))  
77. Statutory whistleblower channel and protection ([SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53); [Right to Warn letter 2024](https://righttowarn.ai))

#### Governance response

78. Indexing compute thresholds to measured algorithmic progress ([Heim & Koessler 2024](https://arxiv.org/abs/2405.10799); [Epoch 2025](https://epoch.ai/blog/model-counts-compute-thresholds))  
79. Legislation with automatic clause triggers: e.g. once an eval result is shown, legal obligations come into force ([Karnofsky 2024](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction))  
80. Regulator capacity ([CAISI](https://www.nist.gov/caisi); [UK AISI](https://www.aisi.gov.uk); [IFP 2026](https://ifp.org/funding-for-caisi/))

#### Coordination

81. Treaty verifications: chip registry, datacenter inspections, interconnect bandwidth limits ([Scher & Thiergart 2024](https://arxiv.org/abs/2506.15867); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
82. Training-run declarations exchanged between states ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
83. Verification R\&D budget and a frontier-state incident hotline ([Future Society 2026](https://thefuturesociety.org/international-ai-verification))

### 8.3. Appendix: Bibliography

#### Recent

* Finke (2026), *International Agreements to Limit Frontier AI: Objectives and Exit.* [arXiv](https://arxiv.org/abs/2607.16224)  
* Larsen, Dean, Halstead, Lifland, Greenblatt & Kokotajlo (2026). *AI 2040: Plan A*. [AI Futures Project](https://ai-2040.com/)   
* Lifland et al (2026). *How to Pace the US Frontier*. [AI Futures Project](https://blog.aifutures.org/p/how-to-pace-the-us-frontier).  
* Fist et al (2026). *How Should the US Prepare for Increasingly Automated AI R\&D?*. [Institute for Progress](https://ifp.org/preparing-for-ai-research-automation/).  
* Koopmanschap, Barten (2026), *How to Catch a GPU: A Taxonomy of Verification and Enforcement Mechanisms for International AI Agreements.* [arXiv](https://arxiv.org/abs/2607.22619)

* Institute for Progress (2026). *Funding for CAISI*. [ifp.org](https://ifp.org/funding-for-caisi/)

#### Foundations

* Bostrom (2002). *Existential Risks: Analyzing Human Extinction Scenarios and Related Hazards*. Journal of Evolution and Technology 9\. [nickbostrom.com](https://nickbostrom.com/existential/risks)  
* Shulman (2009). *Arms Control and Intelligence Explosions*. ECAP. [intelligence.org](https://intelligence.org/files/ArmsControl.pdf)  
* Marchant, Allenby & Herkert, eds. (2011). *The Growing Gap Between Emerging Technologies and Legal-Ethical Oversight: The Pacing Problem*. Springer. [doi:10.1007/978-94-007-1356-7](https://doi.org/10.1007/978-94-007-1356-7)  
* Armstrong, Bostrom & Shulman (2016). *Racing to the Precipice: A Model of Artificial Intelligence Development*. AI & Society 31\. [doi:10.1007/s00146-015-0590-y](https://doi.org/10.1007/s00146-015-0590-y)  
* Christiano (2018). *Takeoff Speeds*. [sideways-view.com](http://sideways-view.com)  
* Maas (2018). *Two Lessons from Nuclear Arms Control for the Responsible Governance of Military Artificial Intelligence.* [IOS](https://ebooks.iospress.nl/publication/50820).  
* Koessler, Schuett, Anderljung (2024). *Risk thresholds for frontier AI*. [arXiv](https://arxiv.org/abs/2406.14713).  
* Dafoe (2018). *AI Governance: A Research Agenda*. GovAI / FHI. [governance.ai](https://cdn.governance.ai/GovAI-Research-Agenda.pdf)  
* Kulveit, Douglas, Ammann, Turan, Krueger & Duvenaud (2025). *Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development*. [arXiv:2501.16946](https://arxiv.org/abs/2501.16946)  
* Barnett & Scher (2025). *AI Governance to Avoid Extinction: The Strategic Landscape and Actionable Research Questions*. MIRI Technical Governance Team. [arXiv:2505.04592](https://arxiv.org/abs/2505.04592)  
* Favaro & Clark (2026). *When AI Builds Itself*. Anthropic Institute. [anthropic.com](https://www.anthropic.com/institute/recursive-self-improvement)

* Bostrom (2017). *Strategic Implications of Openness in AI Development*. Global Policy 8(2). [wiley.com](https://onlinelibrary.wiley.com/doi/full/10.1111/1758-5899.12403), [pdf](https://nickbostrom.com/papers/openness.pdf)  
* Drexler (2019). *Reframing Superintelligence: Comprehensive AI Services as General Intelligence*. FHI. [ora.ox.ac.uk](https://ora.ox.ac.uk/objects/uuid:9c05427a-6390-4b42-9c55-ee45f73a26ad)  
* Garfinkel & Dafoe (2019). *How Does the Offense-Defense Balance Scale?* Journal of Strategic Studies 42(6). [tandfonline.com](https://www.tandfonline.com/doi/full/10.1080/01402390.2019.1631810)  
* Shevlane & Dafoe (2020). *The Offense-Defense Balance of Scientific Knowledge: Does Publishing AI Research Reduce Misuse?* [arXiv:2001.00463](https://arxiv.org/abs/2001.00463)  
* Leech et al. (2024). *Shallow Review of Technical AI Safety*: "Make AI Solve It". [shallowreview.ai](https://shallowreview.ai/Make_AI_solve_it)  
* MacAskill & Moorhouse (2025). *Preparing for the Intelligence Explosion*. Forethought. [forethought.org](https://www.forethought.org/research/preparing-for-the-intelligence-explosion)  
* Hobbhahn (2025). *What's the Short Timeline Plan?* [lesswrong.com](https://www.lesswrong.com/posts/bb5Tnjdrptu89rcyY/what-s-the-short-timeline-plan)

#### Economics

* Aschenbrenner (2020). *Existential Risk and Growth*. GPI Working Paper 6-2020. [leopoldaschenbrenner.github.io](https://leopoldaschenbrenner.github.io/xriskandgrowth/ExistentialRiskAndGrowth050.pdf)  
* Sandbrink, Hobbs, Swett, Dafoe & Sandberg (2022). *Differential Technology Development: An Innovation Governance Consideration for Navigating Technology Risks*. SSRN. [ssrn.com](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4213670)  
* Jones (2024). *The A.I. Dilemma: Growth versus Existential Risk*. AER: Insights 6(4). [nber.org (WP 31837\)](https://www.nber.org/papers/w31837)   
* Trammell & Aschenbrenner (2024). *Existential Risk and Growth*. GPI Working Paper 13-2024. [philiptrammell.com](https://philiptrammell.com/static/Existential_Risk_and_Growth.pdf) 

* Salop & Scheffman (1983). *Raising Rivals' Costs*. American Economic Review 73(2). [repec.org](https://ideas.repec.org/a/aea/aecrev/v73y1983i2p267-71.html)  
* Acemoglu (2002). *Directed Technical Change*. Review of Economic Studies 69(4). [mit.edu](https://economics.mit.edu/sites/default/files/publications/directed-technical-change.pdf)  
* Bostrom (2003). *Astronomical Waste: The Opportunity Cost of Delayed Technological Development*. Utilitas 15(3). [nickbostrom.com](https://nickbostrom.com/optimal.pdf)  
* Bostrom (2005). *The Fable of the Dragon-Tyrant*. Journal of Medical Ethics 31(5). [nickbostrom.com](https://nickbostrom.com/papers/the-fable-of-the-dragon-tyrant/)  
* Heitzig, Lessmann & Zou (2011). *Self-Enforcing Strategies to Deter Free-Riding in the Climate Change Mitigation Game and Other Repeated Public Good Games*. PNAS 108(38). [pnas.org](https://www.pnas.org/doi/abs/10.1073/pnas.1106265108)  
* Garicano, Lelarge & Van Reenen (2016). *Firm Size Distortions and the Productivity Distribution: Evidence from France*. American Economic Review 106(11). [aeaweb.org](https://www.aeaweb.org/articles?id=10.1257/aer.20130232)  
* Johnson, Shriver & Goldberg (2023). *Privacy and Market Concentration: Intended and Unintended Consequences of the GDPR*. Management Science 69(10). [informs.org](https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2023.4709)  
* Merali (2024). *Scaling Laws for Economic Productivity: Experimental Evidence in LLM-Assisted Translation*. [arXiv:2409.02391](https://arxiv.org/abs/2409.02391)  
* Srivastav & Zaehringer (2024). *The Economics of Coal Phaseouts*. [arXiv:2406.14238](https://arxiv.org/abs/2406.14238)  
* Weil (2024). *Tort Law as a Tool for Mitigating Catastrophic Risk from Artificial Intelligence*. [SSRN](https://ssrn.com/abstract=4694006)  
* Google (2024). *AI in Science*. [ai.google](https://ai.google/static/documents/AI-in-Science.pdf)  
* Tomei, Jain & Franklin (2025). *AI Governance through Markets*. [arXiv:2501.17755](https://arxiv.org/abs/2501.17755)  
* Gundlach, Lynch, Mertens & Thompson (2025). *The Price of Progress: Price Performance and the Future of AI*. [arXiv:2511.23455](https://arxiv.org/pdf/2511.23455)  
* Yan & Morck (2025). *Who's Afraid of Tariffs? The Geographic Distribution of Fear and Loss*. NBER WP 34299. [nber.org](https://www.nber.org/papers/w34299)  
* Aubakirova, Atallah, Clark, Summerville & Midha (2026). *State of AI: An Empirical 100 Trillion Token Study with OpenRouter*. [arXiv:2601.10088](https://arxiv.org/abs/2601.10088)  
* Brynjolfsson, Collis, Eggers, Kazinnik & Nguyen (2026). *What is Generative AI Worth?* [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6569938)  
* Demirer, Musolff & Yang (2026). *Writing Code vs. Shipping Code: Productivity Effects Across Generations of AI Coding Tools*. NBER WP 35275. [nber.org](https://www.nber.org/papers/w35275)  
* Forecasting Research Institute (2026). *Experts Forecast Rapid AI Progress Could Bring Health and Wealth Without Happiness*. [forecastingresearch.substack.com](https://forecastingresearch.substack.com/p/forecasting-ai-benefits)  
* IntuitionLabs (2026). *AI-Discovered Drugs in Clinical Trials*. [intuitionlabs.ai](https://intuitionlabs.ai/articles/ai-discovered-drugs-clinical-trials-2026)

* Trout (2024). *Insuring Uninsurable Risks from AI: Government as Insurer of Last Resort*. [arXiv:2409.06672](https://arxiv.org/abs/2409.06672)  
* Irwin, Wu & Barez (2026). *Position: Token Taxes Can Mitigate AI's Economic Risks*. [arXiv:2603.04555](https://arxiv.org/abs/2603.04555)

#### The pause debate

* Grace (2022). *Let's Think About Slowing Down AI*. AI Impacts / LessWrong. [lesswrong.com](https://www.lesswrong.com/posts/uFNgRumrDTpBfQGrs/let-s-think-about-slowing-down-ai)  
* Belrose (2023). [*AI Pause Will Likely Backfire*](https://forum.effectivealtruism.org/posts/JYEAL8g7ArqGoTaX6/ai-pause-will-likely-backfire).   
* Buterin (2023). *My Techno-optimizm*. [vitalik.eth.limo](https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html)  
* Tallinn (2024). *Priorities for AI Risk Reduction*. [jaan.online](https://jaan.online/priorities/)  
* Katzke & Futerman (2024). *The Manhattan Trap: Why a Race to Artificial Superintelligence Is Self-Defeating*. Convergence Analysis. [arXiv:2501.14749](https://arxiv.org/abs/2501.14749)  
* Larsen, Dean, Halstead, Lifland, Greenblatt & Kokotajlo (2026). *AI 2040: Plan A*. AI Futures Project. [ai-2040.com](https://ai-2040.com/)

* AI Impacts. *Hardware Overhang*. [aiimpacts.org](https://aiimpacts.org/hardware-overhang/)  
* AI Impacts (2023). *Are There Examples of Overhang for Other Technologies?* [blog.aiimpacts.org](https://blog.aiimpacts.org/p/are-there-examples-of-overhang-for)  
* Miotti et al. (2024). *A Narrow Path*. ControlAI. [narrowpath.co](https://www.narrowpath.co/)  
* Felstead (2025). *Enabling Frontier Lab Collaboration to Mitigate AI Safety Risks*. [arXiv:2511.08631](https://arxiv.org/pdf/2511.08631)  
* Felstead (2026). *Can Frontier AI Labs Lawfully Agree to Pause?* Lawfare. [lawfaremedia.org](https://www.lawfaremedia.org/article/can-frontier-ai-labs-lawfully-agree-to-pause)  
* Employees of frontier AI companies (2026). *Pacing the Frontier* (open statement). [pacingthefrontier.com](https://www.pacingthefrontier.com/)

* Karnofsky (2022). *Racing through a Minefield: The AI Deployment Problem*. Cold Takes. [cold-takes.com](https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/)  
* Future of Life Institute (2023). *Pause Giant AI Experiments: An Open Letter*. [futureoflife.org](https://futureoflife.org/open-letter/pause-giant-ai-experiments/)  
* Alaga & Schuett (2023). *Coordinated Pausing: An Evaluation-Based Coordination Scheme for Frontier AI Developers*. [arXiv:2310.00374](https://arxiv.org/abs/2310.00374)  
* Cotra (2026). *Total Research Transparency Would Be Nice*. Planned Obsolescence. [planned-obsolescence.org](https://www.planned-obsolescence.org/p/total-research-transparency-would)

#### International agreements

* Ho, Barnhart, Trager, Bengio, Brundage, Casovan, Haas, Nemitz, Sastry, Weller, Zhang & Zhang (2023). *International Institutions for Advanced AI*. [arXiv:2307.04699](https://arxiv.org/abs/2307.04699)  
* Trager, Harack, Reuel, Carnegie, Heim, Ho, Kreps, Lall, Larter, Ó hÉigeartaigh, Staffell & Villalobos (2023). *International Governance of Civilian AI: A Jurisdictional Certification Approach*. [arXiv:2308.15514](https://arxiv.org/abs/2308.15514)  
* Hausenloy, Miotti & Dennis (2023). *Multinational AGI Consortium (MAGIC): A Proposal for International Coordination on AI*. [arXiv:2310.09217](https://arxiv.org/abs/2310.09217)  
* Emery-Xu, Jordan & Trager (2025). *International Governance of Advancing Artificial Intelligence*. AI & Society 40\. [doi:10.1007/s00146-024-02050-7](https://doi.org/10.1007/s00146-024-02050-7)  
* Al Ramiah, Koopmanschap, Thorsteinson, Khan, Zhou, Noh, Meindertsma & Shafiq (2025). *Toward a Global Regime for Compute Governance: Building the Pause Button*. [arXiv:2506.20530](https://arxiv.org/abs/2506.20530)  
* Scher, Abecassis, Barnett & Abeyta (2025). *An International Agreement to Prevent the Premature Creation of Artificial Superintelligence*. [arXiv:2511.10783](https://arxiv.org/abs/2511.10783)  
* Finke (2026). *International Agreements to Limit Frontier AI: Objectives and Exit*. TAIGR @ ICML 2026\. [arXiv:2607.16224](https://arxiv.org/abs/2607.16224)

* Koremenos (2005). *Contracting around International Uncertainty*. American Political Science Review 99(4). [doi.org](https://doi.org/10.1017/S0003055405051877)  
* Bartels (2020). *Building Better Games for National Security Policy Analysis*. RAND. [rand.org](https://www.rand.org/pubs/rgs_dissertations/RGSD437.html)  
* Gruetzemacher et al. (2024). *Strategic Insights from Simulation Gaming of AI Race Dynamics*. [arXiv:2410.03092](https://arxiv.org/abs/2410.03092)  
* Goldstein & Salib (2025). *How to Stop an AI Arms Race*. [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5369439)

#### Deterrence

* Hendrycks, Schmidt & Wang (2025). *Superintelligence Strategy: Expert Version*. [arXiv:2503.05628](https://arxiv.org/abs/2503.05628)  
* Rehman, Mueller, Mazarr et al. (2025). *Seeking Stability in the Competition for AI Advantage*. RAND commentary. [rand.org](https://www.rand.org/pubs/commentary/2025/03/seeking-stability-in-the-competition-for-ai-advantage.html)  
* Abecassis (2025). *Refining MAIM: Identifying Changes Required to Meet Conditions for Deterrence*. MIRI. [intelligence.org](https://intelligence.org/2025/04/11/refining-maim-identifying-changes-required-to-meet-conditions-for-deterrence/)  
* Arnold (2025). *Superintelligence Deterrence Has an Observability Problem*. AI Frontiers. [ai-frontiers.org](https://ai-frontiers.org/articles/superintelligence-deterrence-has-an-observability-problem)  
* Hendrycks & Khoja (2025). *AI Deterrence Is Our Best Option*. AI Frontiers. [ai-frontiers.org](https://ai-frontiers.org/articles/ai-deterrence-is-our-best-option)  
* Delaney (2025). *Crucial Considerations in ASI Deterrence*. IAPS. [iaps.ai](https://www.iaps.ai/research/crucial-considerations-in-asi-deterrence)

#### Verification

* Brundage et al. (2020). *Toward Trustworthy AI Development: Mechanisms for Supporting Verifiable Claims*. [arXiv:2004.07213](https://arxiv.org/abs/2004.07213)  
* Baker (2023). *Nuclear Arms Control Verification and Lessons for AI Treaties*. [arXiv:2304.04123](https://arxiv.org/abs/2304.04123)  
* Scher & Thiergart (2024). *Mechanisms to Verify International Agreements About AI Development*. MIRI Technical Governance Team. [arXiv:2506.15867](https://arxiv.org/abs/2506.15867)  
* Wasil, Reed, Miller & Barnett (2024). *Verification Methods for International AI Agreements*. [arXiv:2408.16074](https://arxiv.org/abs/2408.16074)  
* Koopmanschap & Barten (2026). *How to Catch a GPU: A Taxonomy of Verification and Enforcement Mechanisms for International AI Agreements*. Existential Risk Observatory. [arXiv:2607.22619](https://arxiv.org/abs/2607.22619)  
* Choussat & Khoja (2026). *An International AI Slowdown Is Ready Whenever Politicians Are*. AI Frontiers. [ai-frontiers.org](https://ai-frontiers.org/articles/an-international-ai-slowdown-is-ready-whenever-politicians-are)

* Baker, Kulp, Marks, Brundage & Heim (2025). *Verifying International Agreements on AI: Six Layers of Verification for Rules on Large-Scale AI Development and Deployment*. [arXiv:2507.15916](https://arxiv.org/pdf/2507.15916)

* The Future Society (2026). *How To Make International AI Verification a Reality*. [thefuturesociety.org](https://thefuturesociety.org/international-ai-verification)

#### Compute governance

* Shavit (2023). *What Does It Take to Catch a Chinchilla? Verifying Rules on Large-Scale Neural Network Training via Compute Monitoring*. [arXiv:2303.11341](https://arxiv.org/abs/2303.11341)  
* Egan & Heim (2023). *Oversight for Frontier AI through a Know-Your-Customer Scheme for Compute Providers*. [arXiv:2310.13625](https://arxiv.org/abs/2310.13625)  
* Sastry, Heim, Belfield, Anderljung, Brundage, Hazell et al. (2024). *Computing Power and the Governance of Artificial Intelligence*. [arXiv:2402.08797](https://arxiv.org/abs/2402.08797)  
* Heim, Fist, Egan, Huang, Zekany, Trager, Osborne & Zilberman (2024). *Governing Through the Cloud: The Intermediary Role of Compute Providers in AI Regulation*. Oxford Martin AIGI. [oxfordmartin.ox.ac.uk](https://www.oxfordmartin.ox.ac.uk/publications/governing-through-the-cloud-the-intermediary-role-of-compute-providers-in-ai-regulation)  
* Aarne, Fist & Withers (2024). *Secure, Governable Chips*. CNAS. [cnas.org](https://www.cnas.org/publications/reports/secure-governable-chips)  
* Kulp, Gonzales, Smith, Heim, Puri, Vermeer & Winkelman (2024). *Hardware-Enabled Governance Mechanisms*. RAND WR-A3056-1. [rand.org](https://www.rand.org/pubs/working_papers/WRA3056-1.html)  
* Petrie, Aarne, Ammann & Dalrymple (2024). *Interim Report: Mechanisms for Flexible Hardware-Enabled Guarantees*. [Part I, arXiv:2506.15093](https://arxiv.org/abs/2506.15093)  
* Brass & Aarne (2024). *Location Verification for AI Chips*. IAPS. [iaps.ai](https://www.iaps.ai/research/location-verification-for-ai-chips)  
* Heim & Koessler (2024). *Training Compute Thresholds: Features and Functions in AI Regulation*. [arXiv:2405.10799](https://arxiv.org/abs/2405.10799)  
* Hooker (2024). *On the Limitations of Compute Thresholds as a Governance Strategy*. [arXiv:2407.05694](https://arxiv.org/abs/2407.05694)   
* Ord (2025). *Inference Scaling Reshapes AI Governance.* [arXiv](https://arxiv.org/abs/2503.05705)  

* USITC (2023). *Germanium and Gallium* (Executive Briefing on Trade). [usitc.gov](https://www.usitc.gov/publications/332/executive_briefings/ebot_germanium_and_gallium.pdf)  
* Ho, Besiroglu, Erdil et al. (2024). *Algorithmic Progress in Language Models*. Epoch AI. [arXiv:2403.05812](https://arxiv.org/abs/2403.05812)  
* Miller (2025). *How US Export Controls Have (and Haven't) Curbed Chinese AI*. AI Frontiers. [ai-frontiers.org](https://ai-frontiers.org/articles/us-chip-export-controls-china-ai)  
* O'Gara, Kulp, Hodgkins, Petrie et al. (2025). *Hardware-Enabled Mechanisms for Verifying Responsible AI Development*. [arXiv:2505.03742](https://arxiv.org/abs/2505.03742)  
* Somala, Ho & Krier (2025). *Three Challenges Facing Compute-Based AI Policies*. Epoch AI. [epochai.substack.com](https://epochai.substack.com/p/three-issues-undermining-compute)  
* Ansari (2026). *Hardware-Level Governance of AI Compute: A Feasibility Taxonomy for Regulatory Compliance and Treaty Verification*. [arXiv:2604.04712](https://arxiv.org/abs/2604.04712)  
* Fedasiuk & Torres (2026). *The Lithography Loophole: How China Is Printing Its Way to Chip Self-Sufficiency*. AEI. [aei.org](https://www.aei.org/research-products/report/the-lithography-loophole-how-china-is-printing-its-way-to-chip-self-sufficiency/)  
* Rahman (2026). *Does Distributed Training Undermine Compute Governance?* [arXiv:2605.29359](https://arxiv.org/abs/2605.29359)  
* Seferis & Fist (2026). *Detecting Compute Structuring in AI Governance Is Likely Feasible*. AAAI. [aaai.org](https://ojs.aaai.org/index.php/AAAI/article/view/41127)  
* Gargiulo & Kulp (2026). *Workload Identification with Physical Side Channels for AI Governance*. [arXiv:2609.00309](https://arxiv.org/abs/2609.00309)

* Fist & Grunewald (2023). *Preventing AI Chip Smuggling to China*. CNAS. [cnas.org](https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china)  
* Irpan (2024). *Late Takes on OpenAI o1*. Sorta Insightful. [alexirpan.com](https://www.alexirpan.com/2024/12/04/late-o1-thoughts.html)  
* Epoch AI (2024). *Can AI Scaling Continue Through 2030?* [epoch.ai](https://epoch.ai/blog/can-ai-scaling-continue-through-2030)  
* Cottier & Owen (2025). *How Many AI Models Will Exceed Compute Thresholds?* Epoch AI. [epoch.ai](https://epoch.ai/blog/model-counts-compute-thresholds)  
* Epoch AI. *Data on Data Centers*. [epoch.ai](https://epoch.ai/data/data-centers)  
* Denain & Wu (2026). *Final Training Runs Account for a Minority of R&D Compute Spending*. Epoch AI, Gradient Updates. [epoch.ai](https://epoch.ai/gradient-updates/r-and-d-vs-training-compute)  
* Ho (2026). *Keeping Up with the GPTs*. Epoch AI, Gradient Updates. [epoch.ai](https://epoch.ai/gradient-updates/keeping-up-with-the-gpts/)  
* Calero-Forero (2026). *How Should You Slow Down AI Progress, If It Becomes Necessary?* [lesswrong.com](https://www.lesswrong.com/posts/qns9i7RZwxAAGGsjD/how-should-you-slow-down-ai-progress-if-it-becomes-necessary), [substack](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress)  
* Achiam (2026). On monitoring-to-inference compute ratios. [x.com](https://x.com/jachiam0/status/2099115629626401103)

#### Law and regulation

* Zwetsloot, Dunham, Arnold & Huang (2019). *Keeping Top AI Talent in the United States*. CSET. [cset.georgetown.edu](https://cset.georgetown.edu/publication/keeping-top-ai-talent-in-the-united-states/)  
* European Union (2023). *Machinery Regulation (EU) 2023/1230*. [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2023/1230/oj)  
* The White House (2023). *Executive Order 14110: Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence*. Federal Register. [federalregister.gov](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence)  
* Bureau of Industry and Security (2023). *Implementation of Additional Export Controls: Certain Advanced Computing Items; Supercomputer and Semiconductor End Use*. Federal Register. [federalregister.gov](https://www.federalregister.gov/documents/2023/10/25/2023-23055/implementation-of-additional-export-controls-certain-advanced-computing-items-supercomputer-and)  
* Bureau of Industry and Security (2023). *Export Controls on Semiconductor Manufacturing Items*. Federal Register. [federalregister.gov](https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items)  
* Bureau of Industry and Security (2024). *Foreign-Produced Direct Product Rule Additions and Refinements to Controls for Advanced Computing*. Federal Register. [federalregister.gov](https://www.federalregister.gov/documents/2024/12/05/2024-28270/foreign-produced-direct-product-rule-additions-and-refinements-to-controls-for-advanced-computing)  
* SEC (2023). *SEC Adopts Rules on Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure by Public Companies*. Press release 2023-139. [sec.gov](https://www.sec.gov/newsroom/press-releases/2023-139)  
* Anderljung et al. (2023). *Frontier AI Regulation: Managing Emerging Risks to Public Safety*. [arXiv:2307.03718](https://arxiv.org/abs/2307.03718)  
* European Union (2024). *Artificial Intelligence Act*. [Article 14](https://artificialintelligenceact.eu/article/14/), [Article 53](https://artificialintelligenceact.eu/article/53/), [Code of Practice](https://artificialintelligenceact.eu/introduction-to-code-of-practice/)  
* California Legislature (2025). *SB 53: Transparency in Frontier Artificial Intelligence Act*. [leginfo.legislature.ca.gov](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53)  
* U.S. Congress (2025). *Chip Security Act, S.1705*, 119th Congress. [congress.gov](https://www.congress.gov/bill/119th-congress/senate-bill/1705/text)  
* Sanders & Ocasio-Cortez. *Sanders, Ocasio-Cortez Announce AI Data Center Moratorium Act* (press release). [sanders.senate.gov](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/)  
* NIST. *Center for AI Standards and Innovation (CAISI)*. [nist.gov](https://www.nist.gov/caisi)  
* UK AI Security Institute. [aisi.gov.uk](https://www.aisi.gov.uk)  
* National Artificial Intelligence Research Resource Pilot. [nairrpilot.org](https://nairrpilot.org)  
* Foley Hoag (2026). *Trump's New AI Frontier: The Executive Order Regulating Frontier AI Models*. [foleyhoag.com](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/)  
* Statt (2026). *The FRONTIER Act: Federal AI Regulation in 2026*. [statt.com](https://statt.com/blog/frontier-act-federal-ai-regulation-2026/)

#### Developer commitments

* Shevlane, Farquhar, Garfinkel, Phuong, Whittlestone, Leung et al. (2023). *Model Evaluation for Extreme Risks*. [arXiv:2305.15324](https://arxiv.org/abs/2305.15324)  
* Clymer, Gabrieli, Krueger & Larsen (2024). *Safety Cases: How to Justify the Safety of Advanced AI Systems*. [arXiv:2403.10462](https://arxiv.org/abs/2403.10462)  
* Karnofsky (2024). *If-Then Commitments for AI Risk Reduction*. Carnegie Endowment. [carnegieendowment.org](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)  
* Cârlan, Gomez, Mathew, Krishna, King, Gebauer & Smith (2024). *Dynamic Safety Cases for Frontier AI*. [arXiv:2412.17618](https://arxiv.org/abs/2412.17618)  
* Christiano (2023). *Thoughts on Responsible Scaling Policies and Regulation*. Alignment Forum. [alignmentforum.org](https://www.alignmentforum.org/posts/dxgEaDrEBkkE96CXr/thoughts-on-responsible-scaling-policies-and-regulation)  
* OpenAI (2025). *Expanding on What We Missed with Sycophancy*. [openai.com](https://openai.com/index/expanding-on-sycophancy/)  
* OpenAI (2025). *How We Think About Safety and Alignment*. [openai.com](https://openai.com/safety/how-we-think-about-safety-alignment/)  
* METR (2025). *Common Elements of Frontier AI Safety Policies*. [metr.org](https://metr.org/blog/2025-12-09-common-elements-of-frontier-ai-safety-policies/)  
* Anthropic (2026). *Policy on the AI Exponential*. [anthropic.com](https://www.anthropic.com/policy-on-the-ai-exponential)  
* Anthropic (2026). *Introducing Claude Fable 5 and Claude Mythos 5*. [anthropic.com](https://www.anthropic.com/news/claude-fable-5-mythos-5)  
* Anthropic (2026). *Project Glasswing*. [anthropic.com](https://www.anthropic.com/glasswing)  
* Anthropic (2026). *Project Glasswing: Initial Update*. [anthropic.com](https://www.anthropic.com/research/glasswing-initial-update)  
* OpenAI (2026). *Trusted Access for Cyber*. [openai.com](https://openai.com/index/trusted-access-for-cyber/)  
* OpenAI (2026). *Pacing Model Development for Cyber Capabilities*. [openai.com](https://openai.com/index/pacing-model-development-cyber-capabilities/)  
* OpenAI (2026). *The AI Policy Window*. [openai.com](https://openai.com/index/ai-policy-window/)  
* OpenAI (2026). *GPT-6 Astra Deployment Safety Report*: "Monitorability". [deploymentsafety.openai.com](https://deploymentsafety.openai.com/gpt-6-astra#monitorability)  
* OpenAI (2026). *Research Acceleration: A View Inside OpenAI*. [openai.com](https://openai.com/index/research-acceleration-view-inside-openai/)

* OpenAI (2023). *Introducing Superalignment*. [openai.com](https://openai.com/index/introducing-superalignment/)  
* Anthropic. *Responsible Scaling Policy* (updates). [anthropic.com](https://www.anthropic.com/rsp-updates)  
* Google DeepMind (2024). *Introducing the Frontier Safety Framework*. [deepmind.google](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/)  
* OpenAI. *Preparedness Framework*. [openai.com](https://openai.com/safety/preparedness)  
* Right to Warn (2024). *A Right to Warn about Advanced Artificial Intelligence* (open letter). [righttowarn.ai](https://righttowarn.ai)  
* Anthropic (2025). *Activating AI Safety Level 3 Protections*. [anthropic.com](https://www.anthropic.com/news/activating-asl3-protections)  
* Anthropic (2025). *Commitments on Model Deprecation and Preservation*. [anthropic.com](https://www.anthropic.com/research/deprecation-commitments)  
* Stein-Perlman. *AI Lab Watch*. [ailabwatch.org](https://ailabwatch.org)

#### Evaluations and forecasting

* Brown et al. (2020). *Language Models are Few-Shot Learners*. NeurIPS. [arXiv:2005.14165](https://arxiv.org/pdf/2005.14165)  
* Wei et al. (2022). *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*. NeurIPS. [arXiv:2201.11903](https://arxiv.org/pdf/2201.11903)  
* Dell'Acqua et al. (2023). *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality*. HBS Working Paper 24-013. [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)  
* UK AI Security Institute (2024). *Pre-Deployment Evaluation of Anthropic's Upgraded Claude 3.5 Sonnet*. [aisi.gov.uk](https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet)  
* Pimpale, Højmark, Scheurer & Hobbhahn (2025). *Forecasting Frontier Language Model Agent Capabilities*. [arXiv:2502.15850](https://arxiv.org/abs/2502.15850v2)  
* Needham, Edkins, Pimpale, Bartsch & Hobbhahn (2025). *Large Language Models Often Know When They Are Being Evaluated*. [arXiv:2505.23836](https://arxiv.org/abs/2505.23836)  
* Bean et al. (2025). *Measuring What Matters: Construct Validity in Large Language Model Benchmarks*. [arXiv:2511.04703](https://arxiv.org/abs/2511.04703)  
* Wei & Heim (2025). *Designing Incident Reporting Systems for Harms from General-Purpose AI*. AAAI. [arXiv:2511.05914](https://arxiv.org/abs/2511.05914)  
* UK AI Security Institute (2025). *More Compute, More Capability: Why AI Agent Evals Need to Account for Test-Time Compute*. [aisi.gov.uk](https://www.aisi.gov.uk/blog/more-compute-more-capability-why-ai-agent-evals-need-to-account-for-test-time-compute)  
* Epoch AI. *AI Chip Production* (data insight). [epoch.ai](https://epoch.ai/data-insights/ai-chip-production)  
* Epoch AI. *Benchmarks: Epoch Capabilities Index*. [epoch.ai](https://epoch.ai/benchmarks?view=graph&tab=eci)  
* Epoch AI (2026). *An Update on AI's Most Important Number*. Gradient Updates. [epoch.ai](https://epoch.ai/gradient-updates/an-update-on-ais-most-important-number)  
* Mengesha et al. (2026). *A Pragmatic Classification Framework for AI Incident Monitoring*. [arXiv:2604.21412](https://arxiv.org/pdf/2604.21412)  
* Barrett et al. (2026). *Lessons from External Review of DeepMind's Scheming Inability Safety Case*. [arXiv:2604.21964](https://arxiv.org/pdf/2604.21964)  
* Guidelight AI Standards (2026). *AI Control: An Assessment of Frontier Practices*. [guidelight.ai](https://guidelight.ai/blog/control-assessment-august-2026)  
* METR (2026). *Notes on Anthropic Researcher Uplift Estimates*. [metr.org](https://metr.org/notes/2026-07-08-anthropic-researcher-uplift/)

* Casper et al. (2024). *Black-Box Access Is Insufficient for Rigorous AI Audits*. [arXiv:2401.14446](https://arxiv.org/abs/2401.14446)  
* Barnett & Thiergart (2024). *Declare and Justify: Explicit Assumptions in AI Evaluations Are Necessary for Effective Regulation*. [arXiv:2411.12820](https://arxiv.org/abs/2411.12820)  
* van der Weij et al. (2024). *AI Sandbagging: Language Models Can Strategically Underperform on Evaluations*. [arXiv:2406.07358](https://arxiv.org/abs/2406.07358)  
* METR. *Guidelines for Capability Elicitation*. Autonomy Evals Guide. [metr.github.io](https://metr.github.io/autonomy-evals-guide/elicitation-protocol/)  
* Brundage et al. (2026). *Frontier AI Auditing: Toward Rigorous Third-Party Assessment of Safety and Security Practices at Leading AI Companies*. [arXiv:2601.11699](https://arxiv.org/abs/2601.11699)

#### Safeguards and model security

* Esvelt (2022). *Delay, Detect, Defend: Preparing for a Future in which Thousands Can Release New Pandemics*. GCSP. [gcsp.ch](https://www.gcsp.ch/publications/delay-detect-defend-preparing-future-which-thousands-can-release-new-pandemics)  
* Kirk et al. (2023). *Understanding the Effects of RLHF on LLM Generalisation and Diversity*. [arXiv:2310.06452](https://arxiv.org/abs/2310.06452)  
* Nevo et al. (2024). *Securing AI Model Weights*. RAND RR-A2849-1. [rand.org](https://www.rand.org/pubs/research_reports/RRA2849-1.html)  
* Tamirisa et al. (2024). *Tamper-Resistant Safeguards for Open-Weight LLMs*. [arXiv:2408.00761](https://arxiv.org/abs/2408.00761)  
* Brent & McKelvey (2025). *Contemporary AI Foundation Models Increase Biological Weapons Risk*. [arXiv:2506.13798](https://arxiv.org/pdf/2506.13798)  
* Chen, Joshi, Chen, Andriushchenko, Angell & He (2025). *Monitoring Decomposition Attacks in LLMs with Lightweight Sequential Monitors*. [arXiv:2506.10949](https://arxiv.org/abs/2506.10949)  
* Marshall et al. (2026). *BioTIER: A Refusal Benchmark for Targeted Biological Risk Mitigation*. [arXiv:2607.14479](https://arxiv.org/abs/2607.14479v1)

* Shevlane (2022). *Structured Access: An Emerging Paradigm for Safe AI Deployment*. [arXiv:2201.05159](https://arxiv.org/abs/2201.05159)  
* Li et al. (2024). *The WMDP Benchmark: Measuring and Reducing Malicious Use with Unlearning*. [arXiv:2403.03218](https://arxiv.org/abs/2403.03218)  
* O'Brien et al. (2025). *Deep Ignorance: Filtering Pretraining Data Builds Tamper-Resistant Safeguards into Open-Weight LLMs*. [arXiv:2508.06601](https://arxiv.org/abs/2508.06601)  
* Feng et al. (2025). *Existing Large Language Model Unlearning Evaluations Are Inconclusive*. [arXiv:2506.00688](https://arxiv.org/abs/2506.00688)

#### Agents, oversight and control

* Orseau & Armstrong (2016). *Safely Interruptible Agents*. UAI. [intelligence.org](https://intelligence.org/files/Interruptibility.pdf)  
* Chan et al. (2023). *Harms from Increasingly Agentic Algorithmic Systems*. FAccT. [arXiv:2302.10329](https://arxiv.org/abs/2302.10329)  
* Shavit et al. (2023). *Practices for Governing Agentic AI Systems*. OpenAI. [openai.com](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf)  
* Berglund et al. (2023). *Taken Out of Context: On Measuring Situational Awareness in LLMs*. [arXiv:2309.00667](https://arxiv.org/abs/2309.00667)  
* Greenblatt, Shlegeris, Sachan & Roger (2023). *AI Control: Improving Safety Despite Intentional Subversion*. [arXiv:2312.06942](https://arxiv.org/abs/2312.06942)  
* Chan et al. (2024). *Visibility into AI Agents*. FAccT. [arXiv:2401.13138](https://arxiv.org/abs/2401.13138)  
* Motwani et al. (2024). *Secret Collusion among AI Agents: Multi-Agent Deception via Steganography*. NeurIPS. [arXiv:2402.07510](https://arxiv.org/abs/2402.07510)  
* Laine et al. (2024). *Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs*. [arXiv:2407.04694](https://arxiv.org/abs/2407.04694)  
* Hao et al. (2024). *Training Large Language Models to Reason in a Continuous Latent Space*. [arXiv:2412.06769](https://arxiv.org/abs/2412.06769)  
* Baker et al. (2025). *Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation*. OpenAI. [arXiv:2503.11926](https://arxiv.org/abs/2503.11926)  
* Kwa et al. (2025). *Measuring AI Ability to Complete Long Tasks*. METR. [arXiv:2503.14499](https://arxiv.org/abs/2503.14499)  
* Stix et al. (2025). *AI Behind Closed Doors: A Primer on the Governance of Internal Deployment*. [arXiv:2504.12170](https://arxiv.org/abs/2504.12170)  
* Korbak et al. (2025). *Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety*. [arXiv:2507.11473](https://arxiv.org/abs/2507.11473)  
* Charnock et al. (2026). *What Should Frontier AI Developers Disclose About Internal Deployments?* [arXiv:2604.23065](https://arxiv.org/abs/2604.23065)  
* METR (2026). *Red-Teaming Anthropic's Agent Monitoring*. [metr.org](https://metr.org/blog/2026-03-25-red-teaming-anthropic-agent-monitoring/)

#### Histories and precedents of restraint

* U.S. Naval Institute (1926). *The Washington Treaties of 1922*. Proceedings 52(5). [usni.org](https://www.usni.org/magazines/proceedings/1926/may/washington-treaties-1922)  
* GlobalSecurity.org. *Treaty Cruisers*. [globalsecurity.org](https://www.globalsecurity.org/military/systems/ship/treaty-cruiser.htm)  
* Haddon-Cave (2009). *The Nimrod Review*. HC 1025. [gov.uk](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/229037/1025.pdf)  
* Leveson (2011). *The Use of Safety Cases in Certification and Regulation*. MIT. [mit.edu](http://sunnyday.mit.edu/SafetyCases.pdf)  
* Goitein & Patel (2015). *What Went Wrong with the FISA Court*. Brennan Center for Justice. [brennancenter.org](https://www.brennancenter.org/our-work/research-reports/what-went-wrong-fisa-court)  
* Coe & Vaynman (2015). *Collusion and the Nuclear Nonproliferation Regime*. Journal of Politics 77(4). [andrewjcoe.com](https://www.andrewjcoe.com/_files/ugd/c8f493_ad67e13e0bdd4856b3f789dc317b327e.pdf)  
* China State Council (2017). *A New Generation Artificial Intelligence Development Plan* (FLIA translation). [flia.org](https://flia.org/wp-content/uploads/2017/07/A-New-Generation-of-Artificial-Intelligence-Development-Plan-1.pdf)  
* Casey (2021). *A Reckoning Looms for America's 50-Year Financial Surveillance System*. Cato Journal 41. [cato.org](https://www.cato.org/cato-journal/spring/summer-2021/reckoning-looms-americas-50-year-financial-surveillance-system)  
* Molloy (2021). *Approach with Caution: Sunset Clauses as Safeguards of Democracy?* [northumbria.ac.uk](https://researchportal.northumbria.ac.uk/en/publications/approach-with-caution-sunset-clauses-as-safeguards-of-democracy/)  
* Romano & Levin (2021). *Sunsetting as an Adaptive Strategy*. PNAS. [ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256028/)  
* Maas (2022). *Paths Untaken: The History, Epistemology and Strategy of Technological Restraint, and Lessons for AI*. Verfassungsblog. [verfassungsblog.de](https://verfassungsblog.de/paths-untaken/)  
* Cassata & de Chadarevian (2025). *Asilomar Across the Atlantic*. [ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC12098474/)  
* Columbia Academic Commons. On the environmental costs of the slowed rollout of nuclear power. [doi:10.7916/d8-qez9-6m49](https://academiccommons.columbia.edu/doi/10.7916/d8-qez9-6m49)  
* 31 U.S.C. §5324. *Structuring Transactions to Evade Reporting Requirement Prohibited*. [law.cornell.edu](https://www.law.cornell.edu/uscode/text/31/5324)  
* Wikipedia. *Year 2000 Problem*. [wikipedia.org](https://en.wikipedia.org/wiki/Year_2000_problem)

#### News and incidents

* CNBC (2025). *Nvidia on Track to Hit Historic $5 Trillion Valuation amid AI Rally*. [cnbc.com](https://www.cnbc.com/2025/10/29/nvidia-on-track-to-hit-historic-5-trillion-valuation-amid-ai-rally.html)  
* The Legal Wire (2025). *CAC Launches Special Campaign to Clear Up and Rectify the Abuse of AI Technology*. [thelegalwire.ai](https://thelegalwire.ai/cac-launches-special-campaign-to-clear-up-and-rectify-the-abuse-of-ai-technology/)  
* STAT News (2026). *AI Ambient Scribes Bring Modest Time Savings in Clinical Documentation*. [statnews.com](https://www.statnews.com/2026/04/01/ai-ambient-scribes-modest-time-savings-clinical-documentation/)  
* Axios (2026). *Anthropic's Revenue Growth*. [axios.com](https://www.axios.com/2026/04/13/anthropic-revenue-growth-ai)  
* CNBC (2026). *Micron Reaches a Trillion-Dollar Market Cap*. [cnbc.com](https://www.cnbc.com/2026/05/26/micron-stock-trillion-market-cap.html)  
* The Guardian (2026). *Anthropic Disables Advanced AI Models after US Government Order*. [theguardian.com](https://www.theguardian.com/technology/2026/jun/13/anthropic-disable-advanced-ai-models-us-government-order)  
* Observer (2026). *Anthropic Delays AI Model It Deems Too Powerful for Public Use*. [observer.co.uk](https://observer.co.uk/news/technology/article/anthropic-delays-ai-model-it-deems-too-powerful-for-public-use)  
* Nature (2026). *AI Researchers Reckon with the $1.5 Million 'Academia Tax'*. [nature.com](https://www.nature.com/articles/d41586-026-02026-1)  
* The Motley Fool (2026). *Broadcom Is Less Than 5% from the $2 Trillion Club*. [fool.com](https://www.fool.com/investing/2026/07/09/broadcom-is-less-than-5-from-the-2-trillion-club-a/)  
* Axios (2026). *OpenAI's GPT-5.6 Ban Lifted*. [axios.com](https://www.axios.com/2026/07/08/openai-gpt-trump-ban-lifted)  
* Axios (2026). *OpenAI Delays Astra Model over Cybersecurity Risks*. [axios.com](https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks)  
* METR (2026). *OpenAI / Hugging Face Incident Investigation*. [metr.org](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/)  
* SANS Institute (2026). *"The Models Said No": Inside the Hugging Face Post-Mortem*. [sans.org](https://www.sans.org/blog/models-said-no-inside-hugging-face-post-mortem)  
* Toh (2026). *The AI Chip Wars' New Front: Control the Cloud, Not the Silicon*. Forbes. [forbes.com](https://www.forbes.com/sites/viviantoh/2026/08/31/the-ai-chip-wars-new-front-control-the-cloud-not-the-silicon/)  
* TechCrunch (2026). *Group Funded by Andreessen Horowitz and Brockman Plans Data Center Ads to Sway Midterms*. [techcrunch.com](https://techcrunch.com/2026/08/31/a-group-funded-by-andreessen-horowitz-and-brockman-plan-data-center-ads-to-sway-midterms/)  
* Public First Action (2026). *Public First Action and Defending Our Values PAC Launch First Ads Supporting Responsible AI Regulation*. [publicfirstaction.us](https://publicfirstaction.us/news/public-first-action-and-defending-our-values-pac-launch-first-ads-supporting-responsible-ai-regulation-cgpew)  
* CNBC (2026). *OpenAI's Astra Model Rated "Critical" for Cyber Risk*. [cnbc.com](https://www.cnbc.com/2026/09/01/open-ai-astra-cyber-model.html)  
* Yahoo Finance (2026). *OpenAI Burning $12.3 Billion*. [yahoo.com](https://finance.yahoo.com/technology/ai/articles/openai-burning-12-3-billion-135516997.html)  
* The Verge (2026). *Fable Won't Answer Basic Biology Questions*. [theverge.com](https://www.theverge.com/ai-artificial-intelligence/947973/fable-wont-answer-basic-biology-questions)  
* The Wall Street Journal (2026). *Anthropic Researcher Quits over Out-of-Control AI Fears*. [wsj.com](https://www.wsj.com/tech/ai/anthropic-researcher-quits-over-out-of-control-ai-fears-707b7628)
