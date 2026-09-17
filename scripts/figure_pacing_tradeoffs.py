#!/usr/bin/env python3
"""Generate the desktop and mobile Venn diagram for section 4.2.

Run: python3 -B scripts/figure_pacing_tradeoffs.py
"""

from figures import OUT, svg, text, tlines


STYLE = """
      .hd { font-size: 16px; letter-spacing: 1px; }
      .bd { font-size: 20px; }
      .b2 { font-size: 18px; }
      .bi { font-size: 16px; }
      .ph { font-size: 12px; letter-spacing: .6px; }
      .rd { font-size: 11px; letter-spacing: .5px; }
      .axis { stroke: #1e2833; stroke-width: 2; fill: none; }
      .trajectory { stroke: #4a6b8f; stroke-width: 4; fill: none; }
      .catchup { stroke: #d0503c; stroke-width: 4; fill: none; }
"""


def document(w, h, title, description, body):
    result = svg(w, h, title, description, body)
    return result.replace("    </style>", STYLE + "    </style>")


def tradeoffs_venn(mobile=False):
    w, h = (600, 560) if mobile else (900, 740)
    radius = 180 if mobile else 240
    circles = [(300, 195), (205, 350), (395, 350)] if mobile else [
        (450, 255), (330, 460), (570, 460)]
    body = ""
    # Translucent blue fills make intersections visible; draw all outlines
    # afterward so subsequent fills cannot soften earlier boundaries.
    for x, y in circles:
        body += (f'<circle cx="{x}" cy="{y}" r="{radius}" '
                 'fill="#9fb3c8" fill-opacity="0.16"/>')
    for x, y in circles:
        body += f'<circle cx="{x}" cy="{y}" r="{radius}" class="outline"/>'
    labels = [(300, 88, "SPEED"), (128, 385, "LEGITIMACY"), (472, 385, "PRECISION")] if mobile else [
        (450, 112, "SPEED"), (218, 508, "LEGITIMACY"), (682, 508, "PRECISION")]
    for x, y, label in labels:
        body += text(x, y, label, "hd")
    pairs = [(186, 207, ["Automatic", "triggers"], "MISTARGETING"),
             (414, 207, ["Expert", "discretion"], "OVERREACH"),
             (300, 404, ["Deliberation and", "authorization"], "SLOW RESPONSE")] if mobile else [
        (292, 287, ["Automatic", "triggers"], "MISTARGETING"),
        (608, 287, ["Expert", "discretion"], "OVERREACH"),
        (450, 550, ["Deliberation and", "authorization"], "SLOW RESPONSE")]
    for x, y, label, risk in pairs:
        body += tlines(x, y, label, "b2" if mobile else "bd", 24)
        if mobile:
            body += tlines(x, y + 44, ["RISK:", risk], "rd", 15)
        else:
            body += text(x, y + 43, "RISK: " + risk, "rd")
    body += text(w / 2, 309 if mobile else 410, "?", "hd",
                 extra='style="font-size:58px;letter-spacing:0"')
    return document(w, h, "Speed, legitimacy and precision — Venn diagram",
        "Three overlapping circles represent speed, legitimacy and precision. "
        "Speed and legitimacy overlap at automatic triggers, with a risk of "
        "mistargeting. Speed and precision overlap at expert discretion, with "
        "a risk of overreach. Legitimacy and precision overlap at deliberation "
        "and authorization, with a risk of slow response. A question mark sits "
        "in the central overlap of all three qualities.", body)


if __name__ == "__main__":
    for mobile in (False, True):
        suffix = ".mobile" if mobile else ""
        target = OUT / f"pacing-tradeoffs-venn{suffix}.svg"
        target.write_text(tradeoffs_venn(mobile))
        print("wrote", target.name)
