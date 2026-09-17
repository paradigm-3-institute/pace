#!/usr/bin/env python3
"""Shorten only body paragraphs in the original figures 8 and 9.

Run: python3 -B scripts/figures_v2.py

Writes four separate *-v2 SVGs. Original geometry, headings, effect bands,
timing labels and callouts remain unchanged. Paragraphs are centred in their
existing space. Figure 8 uses a half-pixel increase in its text sizes.
"""

import re
import xml.etree.ElementTree as ET

from figures import MACHINERY, MODES, OUT, STAGES, tlines, wrap


COPY = {
    "then-what": [
        "The pacing rule: scope, trigger, control surface and exit.",
        "Developers retain their objectives, adapting within the rule, working "
        "around it, or seeking to change it.",
        "Governments, non-covered developers and adversaries exploit, absorb or "
        "evade pacing's opportunities and constraints.",
        "Pacing creates governance machinery with powers to inspect and enforce, "
        "making it a target for capture and distortion.",
        "Valuations reprice before capabilities change; leveraged projects may "
        "strand, and restrained actors seek compensation.",
        " ".join(STAGES[5][1]),
    ],
    "failure-modes": [
        MACHINERY,
        "Actors pursue their own goals. Access to private information and power "
        "to restrict others invite influence: firms lobby for exemptions, "
        "agencies compete for jurisdiction, and governments push shifting "
        "political priorities.",
        "Surveillance, leaks and misinterpretation can deter reputationally "
        "risky research without deliberate abuse. Easily audited or publicly "
        "salient measures attract effort, even when they poorly track the "
        "underlying risk.",
        " ".join(MODES[2][1]).replace(
            "however imperfectly suited it is to the new task.",
            "even when it is poorly suited to new tasks.",
        ),
    ],
}

# The original generator emits each paragraph as consecutive b2 text lines.
# Replace only these spans, preserving every other byte of the original SVG.
PARAGRAPH = re.compile(r'(?:  <text class="b2"[^>]*>[^\n]*</text>\n)+')

FIGURE_8_TYPE = """
      .hd { font-size: 13.5px; }
      .b2 { font-size: 14.5px; }
      .ef { font-size: 12.5px; }
      .lb, .ph { font-size: 10.5px; }
"""


def generate(stem, mobile=False):
    suffix = ".mobile" if mobile else ""
    source = (OUT / f"{stem}{suffix}.svg").read_text()
    spans = list(PARAGRAPH.finditer(source))
    if len(spans) != len(COPY[stem]):
        raise ValueError(f"Unexpected paragraph count in {stem}{suffix}.svg")
    paragraphs = iter(COPY[stem])
    width = 26 if stem == "then-what" and not mobile else 42

    def replace(match):
        nodes = list(ET.fromstring("<g>" + match.group() + "</g>"))
        paragraph = next(paragraphs)
        if paragraph == " ".join(node.text or "" for node in nodes):
            return match.group()
        wrap_width = max(len(node.text or "") for node in nodes) if mobile else width
        lines = wrap(paragraph, wrap_width)
        if len(lines) > len(nodes):
            raise ValueError(f"Shortened paragraph exceeds original space: {stem}{suffix}")
        x = float(nodes[0].attrib["x"])
        centre = (float(nodes[0].attrib["y"]) + float(nodes[-1].attrib["y"])) / 2
        return tlines(x, centre, lines, "b2", 19)

    candidate = PARAGRAPH.sub(replace, source)
    if stem == "then-what":
        candidate = candidate.replace("    </style>", FIGURE_8_TYPE + "    </style>")
    return candidate


if __name__ == "__main__":
    for stem in COPY:
        for mobile in (False, True):
            suffix = ".mobile" if mobile else ""
            output = OUT / f"{stem}-v2{suffix}.svg"
            output.write_text(generate(stem, mobile))
            print("wrote", output.name)
