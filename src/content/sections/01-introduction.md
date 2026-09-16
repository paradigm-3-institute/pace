---
title: "Introduction"
order: 1
---


<blockquote class="mb-16!">
  <p>
    “Society at large may need the option to buy time to address emerging risks, develop security measures, and
    strengthen oversight. But each company—and country—is under intense competitive pressure not to unilaterally
    slow that acceleration. And today, the world lacks the technical and governance tools to deliberately pace
    frontier-wide progress.”
  </p>
  <cite>
    – 
    <a href="https://www.pacingthefrontier.com/" target="_blank">1,367 employees</a>
    of frontier AI companies
  </cite>
</blockquote>
        

How should AI developers balance growing the useful capabilities of their models against their [waning](https://deploymentsafety.openai.com/gpt-6-astra#monitorability) ability to oversee and control such models? How should regulators handle the spread of systems that can carry out advanced cyberattacks, or even illegally [initiate](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) them? How should governments navigate arms-race dynamics, in which each side fears that its restraint will be exploited?

We take a broad notion of pacing that encompasses any interventions that deliberately moderate the pace of frontier AI development, deployment, and diffusion. From this perspective, actors already routinely make costly [choices](https://www.theguardian.com/technology/2026/jun/13/anthropic-disable-advanced-ai-models-us-government-order) [around](https://www.axios.com/2026/08/07/openai-astra-model-delay-cybersecurity-risks) [pacing](https://ai-frontiers.org/articles/us-chip-export-controls-china-ai). Developers [delay releases](https://www.anthropic.com/research/glasswing-initial-update), [roll back deployments](https://openai.com/index/expanding-on-sycophancy/), and even [pause training](https://openai.com/index/pacing-model-development-cyber-capabilities/) in response to harms that they are not equipped to mitigate. In the coming years, these choices will become far higher-stakes, as AI systems become more advanced, more embedded in society, and [more](https://openai.com/index/ai-policy-window/) [regulated](https://www.anthropic.com/policy-on-the-ai-exponential), and as AI development takes on greater geostrategic significance.

Many of these decisions will need to be made quickly, without all the relevant information, and while balancing competing interests. So far most pacing has been unilateral, through AI developer self-pacing (e.g. [delayed releases](https://observer.co.uk/news/technology/article/anthropic-delays-ai-model-it-deems-too-powerful-for-public-use)) or governments pacing diffusion (e.g. via export controls or halts on model releases), but in future, pacing may require coordination between actors with different incentives, and potentially between adversaries. Early pacing attempts, whether successful or not, will substantially shape the precedents, institutional knowledge, and resulting evidence that will guide future decisions.

It is therefore extremely important that those in a position to pace are provided with a clear user’s manual of all the options and tradeoffs available, not just a set of [exemplar](https://ai-2040.com/) pacing proposals. Given the unpredictable nature of AI progress and its geopolitical context, the specific pacing dilemmas that come up in real life are likely to differ substantially from anything we can write down today, and may rely on private information only available to a small set of actors. If we want those decisions to be sensible, we need to provide a strategic decision-making framework ahead of time.

Mountains of research exist on specific topics relevant to pacing (e.g. [model evaluations](https://arxiv.org/abs/2305.15324), [capability forecasting](https://arxiv.org/abs/2502.15850v2), [compute monitoring](https://arxiv.org/abs/2303.11341)), and on [proposals](https://arxiv.org/pdf/2505.04592) [for](https://ai-2040.com/) [specific](https://www.narrowpath.co/) [interventions](https://arxiv.org/abs/2503.05628). But there is comparatively [little](https://blog.aifutures.org/p/how-to-pace-the-us-frontier) on the overall question: what effects pacing interventions will have in different circumstances. This piece gives a broad account of the whole area and a [list](/appendices#81-appendix-all-open-questions) of open questions to anchor a dedicated field of AI pacing.

Inquiries into pacing are naturally in danger of being politicized: indeed, hundreds of millions of dollars have already been spent on advocacy on [both](https://techcrunch.com/2026/08/31/a-group-funded-by-andreessen-horowitz-and-brockman-plan-data-center-ads-to-sway-midterms/) [sides](https://publicfirstaction.us/news/public-first-action-and-defending-our-values-pac-launch-first-ads-supporting-responsible-ai-regulation-cgpew) of the debate. But that is all the more reason to encourage dispassionate research and a shared understanding of the practical implications.

### 1.1 Structure of the piece

This piece is structured around a series of questions intended to mirror how one might develop or evaluate a given intervention:

* **Why pace?** [Section 2](/#why-pace) examines motivations for and against pacing, for humanity at large and for specific actors.  
* **Pace what?** [Section 3](/#pace-what) catalogs which parts of AI development can be paced, and the challenges in picking appropriately.  
* **Pace how?** [Section 4](/#pace-how) follows the lifecycle of an intervention from anticipation to exit, asking what it takes for each step to succeed.  
* **Then what?** [Section 5](/#then-what) considers the broader effects of interventions, including on AI R\&D, the economy, and the distribution of political power.

At the end of each section we give a list of open questions. Throughout this document we use two stylized cases to demonstrate how our analysis applies to potential interventions:

1. A coordinated cap on the compute used to train individual frontier models, intended to slow the pace of R\&D acceleration (particularly the risk of recursive self-improvement) which could outpace oversight and increase the risk of humans losing control of AI.   
2. An internationally agreed-upon set of restrictions on access to and release of AI models which materially increase users’ ability to develop biological weapons, as an example of pacing diffusion (rather than pacing capability development).

We are not trying to advocate for either proposal; these end of section examples were instead chosen to illustrate how our frameworks apply to specific plans. See [Appendix 8.2](/appendices#82-appendix-longlist-of-pacing-interventions) for a longlist of possible interventions.

A bibliography of work related to this agenda can be found [here](/appendices#83-appendix-bibliography).
