---
title: "Appendices"
order: 8
---

### 8.1 Appendix: All open questions

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
* **How can pacing thresholds be made specific and yet still cover distributed activity?** A pacing intervention targeting a threshold could potentially be circumvented by distributing activities or artefacts such that each sits below the threshold. How can we design aggregation rules and methods to handle cumulative risk from activities that are divided across space, time, processes and entities, without hindering low-risk activities?.   
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

* **How do the incentives of bound parties change across the lifecycle?** To what extent can different actors reliably predict the behaviour of other actors throughout the lifetime of a pacing intervention? How load-bearing are these predictions of behaviour going to be for coordination of pacing interventions?  
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
* **Which restrictions build what kinds of overhangs?** How are these overhangs likely to play out if realised, and how dangerous might they be? Can overhangs be addressed through complementary policies? Are there pacing interventions which do not build up an overhang?  
  * *Belrose (2023), [AI Pause Will Likely Backfire](https://bounded-regret.ghost.io/ai-pause-will-likely-backfire-by-nora/)*. Looks at the negative case for a training pause, where a compute overhang leads to rapid progress.  
* **Which actors gain relative power under different interventions**, and what are the expected consequences? What is the historical track record of uses and abuses of power when an activity comes under deliberate pacing intervention?  
  * *Coe & Vaynman (2015), [Collusion and the Nuclear Nonproliferation Regime](https://www.andrewjcoe.com/_files/ugd/c8f493_ad67e13e0bdd4856b3f789dc317b327e.pdf)*. Looks at how nuclear nonproliferation entrenched superpower influence.  
  * *Cassata & de Chadarevian (2025), [Asilomar Across the Atlantic](https://pmc.ncbi.nlm.nih.gov/articles/PMC12098474/).* Restrictions on recombinant-DNA research empowered certain scientific organisations.   
* **What safeguards can be deployed to guard against mission creep**, where regulators or newly empowered authorities could gain power beyond what was intended and become hard to dislodge?  
  * *Romano & Levin (2021), [Sunsetting as an Adaptive Strategy](https://pmc.ncbi.nlm.nih.gov/articles/PMC8256028/)*  
  * *Molloy (2021), [Approach with Caution: Sunset Clauses as Safeguards of Democracy?](https://researchportal.northumbria.ac.uk/en/publications/approach-with-caution-sunset-clauses-as-safeguards-of-democracy/)*

### 8.2 Appendix: longlist of pacing interventions

For concreteness, the following attempts to list the levers we have available to pace AI. Note that a lever’s inclusion here is not an argument in favour of acting on it.

One simple task for the pacing field is to have serious up-to-date research on each of the following levers, and to then model the dependencies and tensions between individual levers.

#### Compute → dangerous capabilities

1. Cap training FLOPs per run ([Heim & Koessler 2024](https://arxiv.org/abs/2405.10799); [Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress); [Scher et al 2025](https://arxiv.org/abs/2511.10783))  
2. Require pre-registration and notice for planned training runs above a threshold ([EO 14110](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence); [SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53))  
3. Aggregation rules: make multi-cluster and distributed runs count toward the cap ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Heim & Koessler 2024](https://arxiv.org/abs/2405.10799))  
4. Cap on total R\&D compute per organisation per year ([Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
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

15. Permit review threshold for datacentres ([Sanders](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/))  
16. Grid interconnect queue ([Epoch 2024](https://epoch.ai/blog/can-ai-scaling-continue-through-2030))  
17. Registry of datacentres with satellite-verified construction status ([Epoch](https://epoch.ai/data/data-centers))

#### Data → dangerous capabilities

18. Disclosure of synthetic-data share and RL environments used in frontier training ([EU AI Act](https://artificialintelligenceact.eu/article/53/))

#### Algorithms → effective compute → dangerous capabilities

19. Publication embargo on frontier algorithmic results ([Bostrom 2017](https://nickbostrom.com/papers/openness.pdf); [Shevlane & Dafoe 2020](https://arxiv.org/abs/2001.00463))  
20. Total Research Transparency: mandatory disclosure of all frontier research ([AI Futures Project 2026](https://www.planned-obsolescence.org/p/total-research-transparency-would))  
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

34. Licencing vs registration for frontier development ([Anderljung et al. 2023](https://arxiv.org/abs/2307.03718); [June 2026 EO](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/))  
35. Minimum interval between frontier releases ([FLI pause letter 2023](https://futureoflife.org/open-letter/pause-giant-ai-experiments/))  
36. Pre-deployment testing window with government access ([June 2026 EO](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/); [FRONTIER Act](https://statt.com/blog/frontier-act-federal-ai-regulation-2026/))  
37. Coordinated-pause trigger and duration across signatories ([Alaga & Schuett 2023](https://arxiv.org/abs/2310.00374))  
38. Lead-margin reporting: months between top lab and next ([Epoch](https://epoch.ai/gradient-updates/keeping-up-with-the-gpts/); [Karnofsky 2022](https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/))

#### Dangerous capabilities evals

39. Pretraining data filtering for CBRN, cyber-offence and self-replication content ([O'Brien et al. 2025](https://arxiv.org/abs/2508.06601))  
40. Verified unlearning of specified capabilities ([Li et al. 2024](https://arxiv.org/abs/2403.03218), [Feng et al 2025](https://arxiv.org/abs/2506.00688))  
41. Capability thresholds by domain ([Koessler, Schuett & Anderljung 2024](https://arxiv.org/abs/2406.14713); [the old Anthropic RSP](https://www.anthropic.com/rsp-updates))

#### Generality → dangerous capabilities

42. Separate regulatory track for narrow AI, scientific models ([Drexler 2019](https://ora.ox.ac.uk/objects/uuid:9c05427a-6390-4b42-9c55-ee45f73a26ad); [EU AIA](https://artificialintelligenceact.eu/introduction-to-code-of-practice/))  
43. Gating of long-horizon agentic post-training for general models ([Chan et al. 2023](https://arxiv.org/abs/2302.10329); [Kwa et al. 2025](https://arxiv.org/abs/2503.14499))

#### Legibility of model reasoning → control of dangerous capabilities

44. Codebase / log audits for optimisation pressure on chain-of-thought ([Korbak et al. 2025](https://arxiv.org/abs/2507.11473); [Baker et al. 2025](https://arxiv.org/abs/2503.11926))  
45. Disclosure and gating of latent reasoning architectures ([Hao et al. 2024, Coconut](https://arxiv.org/abs/2412.06769); [Korbak et al. 2025](https://arxiv.org/abs/2507.11473))  
46. Online weight updates in deployment off by default ([Greenblatt et al. 2023](https://arxiv.org/abs/2312.06942))  
47. Persistent memory scope ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))  
48. Canary-tagging or filtering of safety and eval content in training data ([Berglund et al. 2023](https://arxiv.org/abs/2309.00667); [Laine et al. 2024](https://arxiv.org/abs/2407.04694))

#### Weight security → blocking exfiltration

49. Mandatory weight security level (“SL”) by capability ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html); [Anthropic ASL-3](https://www.anthropic.com/news/activating-asl3-protections))  
50. Two-person rule and hardware keys for weight access ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
51. Insider-threat programme coverage ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
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

81. Treaty verifications: chip registry, datacentre inspections, interconnect bandwidth limits ([Scher & Thiergart 2024](https://arxiv.org/abs/2506.15867); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
82. Training-run declarations exchanged between states ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
83. Verification R\&D budget and a frontier-state incident hotline ([Future Society 2026](https://thefuturesociety.org/international-ai-verification))

### 8.3 Appendix: Bibliography

#### Recent

* Finke (2026), *International Agreements to Limit Frontier AI: Objectives and Exit.* [arXiv](https://arxiv.org/abs/2607.16224)  
* Larsen, Dean, Halstead, Lifland, Greenblatt & Kokotajlo (2026). *AI 2040: Plan A*. [AI Futures Project](https://ai-2040.com/)   
* Lifland et al (2026). *How to Pace the US Frontier*. [AI Futures Project](https://blog.aifutures.org/p/how-to-pace-the-us-frontier).  
* Fist et al (2026). *How Should the US Prepare for Increasingly Automated AI R\&D?*. [Institute for Progress](https://ifp.org/preparing-for-ai-research-automation/).  
* Koopmanschap, Barten (2026), *How to Catch a GPU: A Taxonomy of Verification and Enforcement Mechanisms for International AI Agreements.* [arXiv](https://arxiv.org/abs/2607.22619)

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

#### Economics

* Aschenbrenner (2020). *Existential Risk and Growth*. GPI Working Paper 6-2020. [leopoldaschenbrenner.github.io](https://leopoldaschenbrenner.github.io/xriskandgrowth/ExistentialRiskAndGrowth050.pdf)  
* Sandbrink, Hobbs, Swett, Dafoe & Sandberg (2022). *Differential Technology Development: An Innovation Governance Consideration for Navigating Technology Risks*. SSRN. [ssrn.com](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4213670)  
* Jones (2024). *The A.I. Dilemma: Growth versus Existential Risk*. AER: Insights 6(4). [nber.org (WP 31837\)](https://www.nber.org/papers/w31837)   
* Trammell & Aschenbrenner (2024). *Existential Risk and Growth*. GPI Working Paper 13-2024. [philiptrammell.com](https://philiptrammell.com/static/Existential_Risk_and_Growth.pdf) 

#### The pause debate

* Grace (2022). *Let's Think About Slowing Down AI*. AI Impacts / LessWrong. [lesswrong.com](https://www.lesswrong.com/posts/uFNgRumrDTpBfQGrs/let-s-think-about-slowing-down-ai)  
* Belrose (2023). [*AI Pause Will Likely Backfire*](https://forum.effectivealtruism.org/posts/JYEAL8g7ArqGoTaX6/ai-pause-will-likely-backfire).   
* Buterin (2023). *My Techno-optimizm*. [vitalik.eth.limo](https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html)  
* Tallinn (2024). *Priorities for AI Risk Reduction*. [jaan.online](https://jaan.online/priorities/)  
* Katzke & Futerman (2024). *The Manhattan Trap: Why a Race to Artificial Superintelligence Is Self-Defeating*. Convergence Analysis. [arXiv:2501.14749](https://arxiv.org/abs/2501.14749)  
* Larsen, Dean, Halstead, Lifland, Greenblatt & Kokotajlo (2026). *AI 2040: Plan A*. AI Futures Project. [ai-2040.com](https://ai-2040.com/)

#### International agreements

* Ho, Barnhart, Trager, Bengio, Brundage, Casovan, Haas, Nemitz, Sastry, Weller, Zhang & Zhang (2023). *International Institutions for Advanced AI*. [arXiv:2307.04699](https://arxiv.org/abs/2307.04699)  
* Trager, Harack, Reuel, Carnegie, Heim, Ho, Kreps, Lall, Larter, Ó hÉigeartaigh, Staffell & Villalobos (2023). *International Governance of Civilian AI: A Jurisdictional Certification Approach*. [arXiv:2308.15514](https://arxiv.org/abs/2308.15514)  
* Hausenloy, Miotti & Dennis (2023). *Multinational AGI Consortium (MAGIC): A Proposal for International Coordination on AI*. [arXiv:2310.09217](https://arxiv.org/abs/2310.09217)  
* Emery-Xu, Jordan & Trager (2025). *International Governance of Advancing Artificial Intelligence*. AI & Society 40\. [doi:10.1007/s00146-024-02050-7](https://doi.org/10.1007/s00146-024-02050-7)  
* Al Ramiah, Koopmanschap, Thorsteinson, Khan, Zhou, Noh, Meindertsma & Shafiq (2025). *Toward a Global Regime for Compute Governance: Building the Pause Button*. [arXiv:2506.20530](https://arxiv.org/abs/2506.20530)  
* Scher, Abecassis, Barnett & Abeyta (2025). *An International Agreement to Prevent the Premature Creation of Artificial Superintelligence*. [arXiv:2511.10783](https://arxiv.org/abs/2511.10783)  
* Finke (2026). *International Agreements to Limit Frontier AI: Objectives and Exit*. TAIGR @ ICML 2026\. [arXiv:2607.16224](https://arxiv.org/abs/2607.16224)

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

#### Developer commitments

* Shevlane, Farquhar, Garfinkel, Phuong, Whittlestone, Leung et al. (2023). *Model Evaluation for Extreme Risks*. [arXiv:2305.15324](https://arxiv.org/abs/2305.15324)  
* Clymer, Gabrieli, Krueger & Larsen (2024). *Safety Cases: How to Justify the Safety of Advanced AI Systems*. [arXiv:2403.10462](https://arxiv.org/abs/2403.10462)  
* Karnofsky (2024). *If-Then Commitments for AI Risk Reduction*. Carnegie Endowment. [carnegieendowment.org](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction)  
* Cârlan, Gomez, Mathew, Krishna, King, Gebauer & Smith (2024). *Dynamic Safety Cases for Frontier AI*. [arXiv:2412.17618](https://arxiv.org/abs/2412.17618)
