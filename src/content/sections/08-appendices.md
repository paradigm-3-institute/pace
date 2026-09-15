---
title: "Appendices"
order: 8
---

### 8.1 Appendix: All open questions

#### 2: Why pace?

* **What are the bottlenecks on adaptation to different AI risks?** How much of a head start can we plausibly get, and in what sense is time the bottleneck?  
* **How might pacing become more or less difficult over time?** What investments can be made now to preserve optionality over pacing in the future? In particular, under what circumstances does pacing now make future pacing more or less feasible?  
* **How do actors in this space make decisions about pacing?** What evidence do they currently consider and what assumptions do they currently make? What methods exist for external research to inform such decisions, e.g. in government or lab leadership?  
* **Where do different dangerous capabilities sit on the offense/defense balance, and how should we expect that to change over time?**  
* **How does transparency affect coordination?** When does common knowledge of research progress intensify or weaken race dynamics, for example by revealing that a rival is close behind or that progress is possible?

#### 3: Pace what?

* **How should hazards be translated into covered activity?** Hazards such as uncontrolled automated AI R\&D and bioweapon uplift can arise at several points in the process; they will emerge at some point in training, and we may want to avoid such a point being reached, or we may care more about wider deployment (especially if capabilities have positive use cases we want to preserve). Research should compare candidate boundaries and weigh the pros and cons of each.  
* **How should related work count together?** Aggregation rules must handle projects divided across multiple training runs, or across different corporate entities. Testing should identify rules that detect deliberate fragmentation without sweeping in unrelated work.  
* **What practical coverage is sufficient?** Compare the reach available through company control, infrastructure providers and national rules, including their supply-chain effects. Estimate when activity by outsiders is large enough to defeat the intervention.  
* **Once some diffusion of dangerous capabilities has occurred, which restrictions lose their teeth entirely, and which continue to meaningfully reduce risks?** While some loss-of-control scenarios are presented as all-or-nothing, in many cases ease of access to dangerous capabilities will continue to meaningfully influence the net harm done. Needing to spend hours jailbreaking a model to get useful outputs from it is meaningfully more friction than having it readily assist with harmful endeavors.  
* **How can we make a rule which permits exceptions to preserve useful work, which is not so permeable that it makes the rule useless?** In the case of compute controls, it seems technologically feasible to identify what uses a GPU is being put to on some levels. The more we can do this, the less an intervention will need to be a blunt instrument versus being narrowly scoped.  
* **What are the tradeoffs between quality of verification and degree of invasiveness for different interventions, and how can we push forward the frontier?**  
* **What family of potential tech trees can we be robust over, and how dependent upon getting them right do our interventions need to be?**

#### 4: Pace how?

* **What does the possibility space of exit scenarios look like?** Small-scale interventions may allow for immediate release, whereas exiting interventions impacting multiple sides of the economy and society may need to be staged. Some exits may require advanced prep. We need to understand our options to pick the best one per case.   
* **What is the relationship between initiation and exit triggers?** Intuitively, the exit trigger should track whatever justified the intervention in the first place. But can that link break as conditions change?  
* **How do the incentives of bound parties change across the lifecycle?** Pacing is first and foremost a coordination problem. The efficacy of any intervention will depend, amongst other things, on the predictability of actors (e.g. how well they can stick to the rule). Foreseeing possible disruptions to everyone’s motivations to cooperate strengthens control over and stability of pacing.  
* **What information must be shared to make coordinated pacing credible, and with which actors?** How can this be kept compliant with national security considerations, commercial confidentiality, and cybersecurity? To what extent can this information sharing be kept robust to manipulation?   
* **What evidence could legitimize a speedy initiation (even at the cost of this evidence being disconfirmed later on)?** As always, we expect people to agree on high-level claims (“a credible threat of a large-scale bioattack enough to warrant intervention”) and disagree on operationalizations (“what qualifies as a credible threat”).  
* **Which exit arrangements can prospective participants credibly rely on?** How does that affect which pacing coalitions are feasible?  
* **Do dry-run [simulations](https://arxiv.org/abs/2410.03092) of an intervention help?** Do they help us learn about failure modes?  
* **How will our reliance on different sources of information about risks change as AIs become more capable, autonomous, or integrated?**

#### 5: Then what?

* **What compensation and consideration could make pacing interventions preferable to larger coalitions?**

* **Does there exist a sufficiently large core (in the cooperative game theory sense) of stable coalitions which would consent to pacing given such compensation and consideration?**  
* **Which restrictions are more brittle, which cause more damage if they break suddenly?** Which do not build up an overhang?  
* **Which actors gain relative power under different interventions**, and what are the expected consequences?  
* **What safeguards can be deployed to guard against mission creep**, where regulators or newly empowered authorities could gain power beyond what was intended and become hard to dislodge?

### 8.2 Appendix: Longlist of pacing interventions

For concreteness, the following attempts to list the levers we have available to pace AI. Note that a lever’s inclusion here is not an argument in favour of acting on it.

One simple task for the pacing field is to have serious up-to-date research on each of the following levers, and to then model the dependencies and tensions between individual levers.

**Compute** → dangerous capabilities

1. Cap training FLOPs per run ([Heim & Koessler 2024](https://arxiv.org/abs/2405.10799); [Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
2. Require pre-registration and notice for planned training runs above a threshold ([EO 14110](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence); [SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53))  
3. Aggregation rules: make multi-cluster and distributed runs count toward the cap ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Heim & Koessler 2024](https://arxiv.org/abs/2405.10799))  
4. Cap on total R\&D compute per organisation per year ([Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
5. Cap on the RL share of total training compute ([Irpan 2024](https://www.alexirpan.com/2024/12/04/late-o1-thoughts.html))  
6. Minimum ratio of monitoring compute per inference compute ([Achiam 2026](https://x.com/jachiam0/status/2099115629626401103))   
7. Minimum ratio of safety spending per training compute  
8. Tax R\&D compute above a threshold [(Calero-Forero 2026](https://felipecalerof.substack.com/p/how-should-you-slow-down-ai-progress))  
9. Regular reporting of each lab’s compute split into final runs, experiments, internal inference, and external inference ([Epoch 2026](https://epoch.ai/gradient-updates/r-and-d-vs-training-compute); [EO 14110](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence)).

**Chips** → compute → dangerous capabilities

7. Export-control performance threshold for accelerators ([BIS AC/S rule](https://www.federalregister.gov/documents/2023/10/25/2023-23055/implementation-of-additional-export-controls-certain-advanced-computing-items-supercomputer-and))  
8. Export controls on lithography, HBM and advanced packaging ([BIS SME rule, Oct 2023](https://www.federalregister.gov/documents/2023/10/25/2023-23049/export-controls-on-semiconductor-manufacturing-items); [BIS rule 2024](https://www.federalregister.gov/documents/2024/12/05/2024-28270/foreign-produced-direct-product-rule-additions-and-refinements-to-controls-for-advanced-computing))  
9. Chip registry: serial numbers and owner of record above threshold, smuggling penalties ([Sastry et al. 2024](https://arxiv.org/abs/2402.08797); [Fist & Grunewald 2023](https://www.cnas.org/publications/reports/preventing-ai-chip-smuggling-to-china))  
10. Location verification on accelerators \[ping interval, tolerance\] ([Brass & Aarne 2024](https://www.iaps.ai/research/location-verification-for-ai-chips); [Chip Security Act, S.1705](https://www.congress.gov/bill/119th-congress/senate-bill/1705/text)  
11. Hardware-enabled mechanisms on new chips: offline licensing, metering, attestation ([Aarne, Fist & Withers 2024](https://www.cnas.org/publications/reports/secure-governable-chips); [Kulp et al. 2024](https://www.rand.org/pubs/working_papers/WRA3056-1.html); [FlexHEG 2025](https://arxiv.org/abs/2506.15093))

**Datacenters** (installed chips) → compute → dangerous capabilities

12. Permit review threshold for datacentres ([Sanders](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/))  
13. Grid interconnect queue ([Epoch 2024](https://epoch.ai/blog/can-ai-scaling-continue-through-2030))  
14. Registry of datacentres with satellite-verified construction status ([Epoch](https://epoch.ai/data/data-centers))

**Data** → dangerous capabilities

15. Text-and-data-mining default \[opt-out vs opt-in\] ([EU CDSM Directive Art. 4](https://eur-lex.europa.eu/eli/dir/2019/790/oj); [EU AI Act](https://artificialintelligenceact.eu/article/53/))  
16. Collective licence fee for training on copyrighted corpora ([US Copyright Office AI](https://www.copyright.gov/ai/))  
17. Disclosure of synthetic-data share and RL environments used in frontier training ([EU AI Act](https://artificialintelligenceact.eu/article/53/))

**Algorithms** → effective compute → dangerous capabilities

18. Publication embargo on frontier algorithmic results ([Bostrom 2017](https://nickbostrom.com/papers/openness.pdf); [Shevlane & Dafoe 2020](https://arxiv.org/abs/2001.00463))  
19. Total Research Transparency: mandatory disclosure of all frontier research ([AI Futures Project 2026](https://www.planned-obsolescence.org/p/total-research-transparency-would))  
20. Structured access to code and checkpoints via vetted institutions ([Shevlane 2022](https://arxiv.org/abs/2201.05159))  
21. Classification regime for capability-elicitation techniques ([Shevlane & Dafoe 2020](https://arxiv.org/abs/2001.00463))

**Talent →** algorithms → dangerous capabilities

22. Visa quota and processing time for frontier researchers ([Zwetsloot et al. 2019, CSET](https://cset.georgetown.edu/publication/keeping-top-ai-talent-in-the-united-states/))  
23. Vetting and cooling-off periods for staff with weight or R\&D compute access ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))

**Capital** → compute → dangerous capabilities

24. Compute tax (dollar per FLOP on training runs above a threshold) ([Calero-Forero 2026)](https://www.lesswrong.com/posts/qns9i7RZwxAAGGsjD/how-should-you-slow-down-ai-progress-if-it-becomes-necessary)  
25. Strict liability for catastrophic harms from frontier models ([Weil 2024](https://ssrn.com/abstract=4694006))  
26. Mandatory liability insurance, premiums priced by capability tier ([Trout 2024](https://arxiv.org/abs/2409.06672))  
27. Investor-facing AI risk disclosure ([SEC 2023](https://www.sec.gov/newsroom/press-releases/2023-139))

**AI R\&D capabilities** → algorithms → effective compute → dangerous capabilities

28. Fraction of R\&D compute consumed by autonomous agents \[%, reported\] ([Stix et al. 2025](https://arxiv.org/abs/2504.12170); [Charnock et al 2026\)](https://arxiv.org/abs/2604.23065)   
29.  30\. AI R\&D speed-up trigger in safety frameworks \[2× research throughput → new controls\] ([Anthropic RSP](https://www.anthropic.com/rsp-updates); [DeepMind FSF](https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/); [OpenAI Preparedness](https://openai.com/safety/preparedness)  
30. Human review ratio for AI-written research code and experiment plans ([Stix et al. 2025](https://arxiv.org/abs/2504.12170)  
31. Safety case required before internal deployment on the R\&D stack ([Clymer et al. 2024](https://arxiv.org/abs/2403.10462); [Stix et al. 2025\)](https://arxiv.org/abs/2504.12170)  
32. Monitoring coverage of internal agent actions \[% logged, % reviewed\] ([Greenblatt et al. 2023](https://arxiv.org/abs/2312.06942); [METR red-team of Anthropic's internal monitoring, 2026](https://metr.org/blog/2026-03-25-red-teaming-anthropic-agent-monitoring/)

**Actors and cadence →** race intensity → all other levers

33. Licencing vs registration for frontier development ([Anderljung et al. 2023](https://arxiv.org/abs/2307.03718); [June 2026 EO)](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/)  
34. Minimum interval between frontier releases \[months\] ([FLI pause letter 2023](https://futureoflife.org/open-letter/pause-giant-ai-experiments/))  
35. Pre-deployment testing window with government access \[90 days\] ([June 2026 EO](https://foleyhoag.com/news-and-insights/blogs/security-privacy-and-the-law/2026/june/trump-s-new-ai-frontier-the-executive-order-regulating-frontier-ai-models/); [FRONTIER Act](https://statt.com/blog/frontier-act-federal-ai-regulation-2026/))  
36. Coordinated-pause trigger and duration across signatories ([Alaga & Schuett 2023](https://arxiv.org/abs/2310.00374))  
37. Lead-margin reporting: months between top lab and next ([Epoch](https://epoch.ai/gradient-updates/keeping-up-with-the-gpts/); [Karnofsky 2022](https://www.cold-takes.com/racing-through-a-minefield-the-ai-deployment-problem/))

#### Dangerous capabilities evals

38. Pretraining data filtering for CBRN, cyber-offence and self-replication content ([O'Brien et al. 2025, Deep Ignorance](https://arxiv.org/abs/2508.06601)  
39. Verified unlearning of specified capabilities \[held-out test suite\] ([Li et al. 2024, WMDP](https://arxiv.org/abs/2403.03218)  
40. Capability thresholds by domain \[CBRN, cyber, ARA, persuasion, AI R\&D\] ([Koessler, Schuett & Anderljung 2024](https://arxiv.org/abs/2406.14713); [the old Anthropic RSP](https://www.anthropic.com/rsp-updates))  
41. Human uplift trials before deployment \[effect-size threshold\] ([Mouton et al. 2024, RAND](https://www.rand.org/pubs/research_reports/RRA2977-2.html); [OpenAI 2024](https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation/)

**Generality** → dangerous capabilities

42. Separate regulatory track for narrow AI, scientific models ([Drexler 2019,](https://ora.ox.ac.uk/objects/uuid:9c05427a-6390-4b42-9c55-ee45f73a26ad) [EU AIA](https://artificialintelligenceact.eu/introduction-to-code-of-practice/)[)](https://ora.ox.ac.uk/objects/uuid:9c05427a-6390-4b42-9c55-ee45f73a26ad)  
43.  Gating of long-horizon agentic post-training for general models ([Chan et al. 2023](https://arxiv.org/abs/2302.10329); [Kwa et al. 2025](https://arxiv.org/abs/2503.14499))

**Legibility of model reasoning** → control of dangerous capabilities

44. No optimisation pressure on chain-of-thought \[audited commitment\] ([Korbak et al. 2025](https://arxiv.org/abs/2507.11473); [Baker et al. 2025](https://arxiv.org/abs/2503.11926))  
45. Disclosure and gating of latent reasoning architectures ([Hao et al. 2024, Coconut](https://arxiv.org/abs/2412.06769); [Korbak et al. 2025\)](https://arxiv.org/abs/2507.11473)  
46. Online weight updates in deployment off by default ([Greenblatt et al. 2023](https://arxiv.org/abs/2312.06942))  
47. Persistent memory scope ([Shavit et al. 2023, OpenAI)](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf)  
48. Canary-tagging or filtering of safety and eval content in training data ([Berglund et al. 2023](https://arxiv.org/abs/2309.00667); [Laine et al. 2024](https://arxiv.org/abs/2407.04694)

**Weight security** → blocking exfiltration

49. Mandatory weight security level (“SL”) by capability ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html); [Anthropic ASL-3)](https://www.anthropic.com/news/activating-asl3-protections)  
50. Two-person rule and hardware keys for weight access ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
51. Insider-threat programme coverage \[% of privileged staff\] ([Nevo et al. 2024](https://www.rand.org/pubs/research_reports/RRA2849-1.html))  
52. Weight retention policy ([Anthropic 2025](https://www.anthropic.com/research/deprecation-commitments))

**Inference** → dangerous capabilities

53. Per-query reasoning compute cap for the most capable models ([Hooker 2024](https://arxiv.org/abs/2407.05694); [Ord 2025](https://arxiv.org/abs/2503.05705))  
54. Token tax ([Irwin 2026](https://arxiv.org/abs/2603.04555))  
55. Deployment tax by capability tier ([Calero-Forero 2026](https://www.lesswrong.com/posts/qns9i7RZwxAAGGsjD/how-should-you-slow-down-ai-progress-if-it-becomes-necessary))  
56. Liability allocation between deployer and developer for autonomous services ([Weil 2024](https://ssrn.com/abstract=4694006))

#### Autonomy

57. Agent permission tiers ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf); [Chan et al. 2024](https://arxiv.org/abs/2401.13138))  
58. Spend limits per agent and per task ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))  
59. Human approval for irreversible actions \[payments, deletion, deployment\] ([Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf); [EU AI Act](https://artificialintelligenceact.eu/article/14/))  
60. Sub-agent spawn depth and maximum unattended run length \[depth, hours\] ([Kwa et al. 2025, METR](https://arxiv.org/abs/2503.14499))  
61. Agent identifiers and action-log retention ([Chan et al. 2024](https://arxiv.org/abs/2401.13138)  
62. Kill-switch latency requirement ([Orseau & Armstrong 2016](https://intelligence.org/files/Interruptibility.pdf); [Shavit et al. 2023, OpenAI](https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf))

#### Multi-agent

63. Instance-count reporting per deployment ([Chan et al. 2024](https://arxiv.org/abs/2401.13138))  
64. Agent-to-agent communication logging with steganography checks ([Motwani et al. 2024](https://arxiv.org/abs/2402.07510))

#### Robotics

65. Certification and fleet registration for embodied agents ([EU Machinery Regulation 2023/1230](https://eur-lex.europa.eu/eli/reg/2023/1230/oj))

#### Safety research

66. Minimum fraction of total compute reserved for safety research, above a total compute threshold ([OpenAI 2023)](https://openai.com/index/introducing-superalignment/)  
67. Minimum safety headcount as a ratio of total research headcount ([AI Lab Watch](https://ailabwatch.org))  
68. External safety compute grants (minimum FLOP/year given to independent labs) ([NAIRR](https://nairrpilot.org))

#### Evaluation

69. Third-party evaluator access depth ([Casper et al. 2024](https://arxiv.org/abs/2401.14446)  
70. Elicitation budget per dangerous-capability eval \[FLOP, engineer-hours\] ([METR elicitation protocol](https://metr.github.io/autonomy-evals-guide/elicitation-protocol/); [Barnett & Thiergart 2024](https://arxiv.org/abs/2411.12820)  
71. Sandbagging detection protocol \[noise injection, fine-tuning elicitation\] ([van der Weij et al. 2024](https://arxiv.org/abs/2406.07358)

#### Transparency and audit

72. Required “AI Assurance Level” for developers in the frontier tier ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
73. Embedded auditors running regular audits with non-public access ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
74. Audit scope including internal deployment, information security and safety decision-making ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
75. Number of accredited audit providers and a standards body ([Brundage et al. 2026](https://arxiv.org/abs/2601.11699))  
76. Incident reporting deadline ([SB 53 §22757.13](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53))  
77. Statutory whistleblower channel and protection ([SB 53](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53); [Right to Warn letter 2024](https://righttowarn.ai))

#### Governance response

78. Indexing compute thresholds to measured algorithmic progress ([Heim & Koessler 2024](https://arxiv.org/abs/2405.10799); [Epoch 2025)](https://epoch.ai/blog/model-counts-compute-thresholds)  
79. Legislation with automatic clause triggers: e.g. once an eval result is shown, legal obligations come into force ([Karnofsky 2024](https://carnegieendowment.org/research/2024/09/if-then-commitments-for-ai-risk-reduction))  
80. Regulator capacity ([CAISI](https://www.nist.gov/caisi); [UK AISI](https://www.aisi.gov.uk); [IFP 2026](https://ifp.org/funding-for-caisi/))

#### Coordination

81. Treaty verifications: chip registry, datacentre inspections, interconnect bandwidth limits ([Scher & Thiergart 2024](https://arxiv.org/abs/2506.15867); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
82. Training-run declarations exchanged between states ([Shavit 2023](https://arxiv.org/abs/2303.11341); [Baker et al. 2025](https://arxiv.org/abs/2507.15916))  
83. Verification R\&D budget and a frontier-state incident hotline ([Future Society 2026](https://thefuturesociety.org/international-ai-verification); [Scher & Thiergart 2024](https://arxiv.org/abs/2506.15867))

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
