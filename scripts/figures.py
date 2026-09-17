#!/usr/bin/env python3
"""Generate the essay's diagram figures as SVG, in two orientations.

Each figure has a wide, left-to-right layout (public/media/<name>.svg) and a
portrait one for narrow viewports (public/media/<name>.mobile.svg); the
figure plugin swaps the portrait one in on viewports narrower than 1024px.
Both share one visual language: grid background, mono headings, serif body
text. The two causal graphs' wide versions are hand-written SVGs kept
alongside; only their portrait versions come from here.

Run:  python3 scripts/figures.py
"""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "media"

MONO = '"IBM Plex Mono", "DejaVu Sans Mono", "Courier New", Courier, monospace'
SERIF = 'Charter, "Source Serif 4", "Source Serif Pro", Georgia, "DejaVu Serif", serif'

STYLE = f"""
      .hd {{ font-family: {MONO}; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; fill: #1e2833; }}
      .hs {{ font-family: {MONO}; font-size: 11px; font-weight: 700; letter-spacing: 1px; fill: #1e2833; }}
      .lb {{ font-family: {MONO}; font-size: 10px; font-weight: 700; letter-spacing: 1px; fill: #6b7482; }}
      .ph {{ font-family: {MONO}; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; fill: #4f6a8a; }}
      .rd {{ font-family: {MONO}; font-size: 9.5px; font-weight: 700; letter-spacing: 1px; fill: #c0392b; }}
      .bl {{ font-family: {MONO}; font-size: 9.5px; font-weight: 700; letter-spacing: 1px; fill: #3f5f85; }}
      .bd {{ font-family: {SERIF}; font-size: 16px; fill: #2f3b4b; }}
      .b2 {{ font-family: {SERIF}; font-size: 14px; fill: #2f3b4b; }}
      .b3 {{ font-family: {SERIF}; font-size: 12px; fill: #2f3b4b; }}
      .bi {{ font-family: {SERIF}; font-size: 13px; font-style: italic; fill: #6b7482; }}
      .ef {{ font-family: {SERIF}; font-size: 12px; font-weight: 700; fill: #1e2833; }}
      .box {{ fill: #fdfdfe; stroke: #1e2833; stroke-width: 2.5; }}
      .box-out {{ fill: #d6e4f2; stroke: #1e2833; stroke-width: 2.5; }}
      .outline {{ fill: none; stroke: #1e2833; stroke-width: 2.5; }}
      .cell {{ stroke: #1e2833; stroke-width: 1.5; }}
      .sep {{ stroke: #1e2833; stroke-width: 2; }}
      .thin {{ stroke: #c5ccd4; stroke-width: 1; }}
      .arr {{ stroke: #1e2833; stroke-width: 3.5; fill: none; }}
      .head {{ fill: #1e2833; }}
      .fb {{ stroke: #7d8794; stroke-width: 2.5; fill: none; stroke-dasharray: 8 6; }}
      .fbhead {{ fill: #7d8794; }}
      .sm {{ stroke: #8a95a3; stroke-width: 2; fill: none; }}
      .smhead {{ fill: #8a95a3; }}
      .band {{ fill: #eef3f8; stroke: #9fb3c8; stroke-width: 1.2; }}
      .note {{ fill: #fbeae6; stroke: #d0503c; stroke-width: 1.2; }}
      .noteb {{ fill: #eaf0f6; stroke: #4a6b8f; stroke-width: 1.2; }}
      .rl {{ stroke: #d0503c; stroke-width: 1.2; fill: none; stroke-dasharray: 4 3; }}
      .bll {{ stroke: #4a6b8f; stroke-width: 1.2; fill: none; stroke-dasharray: 4 3; }}
      .dn {{ fill: #f7f9fb; stroke: #8a95a3; stroke-width: 1.5; stroke-dasharray: 5 4; }}
      .red {{ fill: #fdfdfe; stroke: #c0392b; stroke-width: 2; }}
      .redt {{ font-family: {MONO}; font-size: 11px; font-weight: 700; letter-spacing: 1px; fill: #c0392b; }}
      .redl {{ font-family: {MONO}; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; fill: #c0392b; }}
      .ghost {{ fill: #eceff2; stroke: #8a95a3; stroke-width: 1.5; stroke-dasharray: 5 4; }}
      .ghostt {{ font-family: {MONO}; font-size: 11px; font-weight: 700; letter-spacing: 1px; fill: #8a95a3; }}
      .cross {{ stroke: #b5bcc5; stroke-width: 1.2; stroke-dasharray: 4 3; }}
      .cap {{ font-family: {MONO}; font-size: 11px; letter-spacing: 0.3px; fill: #2f3b4b; }}
      .dot-b {{ fill: #5b7fa6; }}
      .dot-g {{ fill: #a9a9a9; }}
      .cons {{ fill: #dfe7ef; }}
      .open {{ fill: #ebe9e5; }}
      .line {{ stroke: #1e2833; stroke-width: 1.8; fill: none; stroke-dasharray: 6 4; }}
      .st {{ font-family: {MONO}; font-size: 9px; font-weight: 700; letter-spacing: 1px; fill: #4f6a8a; }}
      .sv {{ font-family: {SERIF}; font-size: 13px; font-weight: 700; fill: #1e2833; }}
      .th {{ font-family: {MONO}; font-size: 9px; font-weight: 700; letter-spacing: 0.5px; fill: #2b3a55; }}
      .rh {{ font-family: {SERIF}; font-size: 13px; font-weight: 700; fill: #2b3a55; }}
      .tv {{ font-family: {SERIF}; font-size: 14px; fill: #2b3a55; }}
"""


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;")


def svg(w, h, title, desc, body):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-labelledby="ttl dsc">
  <title id="ttl">{esc(title)}</title>
  <desc id="dsc">{esc(desc)}</desc>
  <defs>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8ee" stroke-width="1"/>
    </pattern>
    <style>{STYLE}    </style>
  </defs>
  <rect width="{w}" height="{h}" fill="#f3f6f9"/>
  <rect width="{w}" height="{h}" fill="url(#grid)"/>
{body}
</svg>
"""


def rect(x, y, w, h, cls="box", extra=""):
    return f'  <rect class="{cls}" x="{x}" y="{y}" width="{w}" height="{h}" {extra}/>\n'


def line(x1, y1, x2, y2, cls="sep"):
    return f'  <line class="{cls}" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}"/>\n'


def text(x, y, s, cls, anchor="middle", extra=""):
    return (
        f'  <text class="{cls}" x="{x}" y="{y}" text-anchor="{anchor}" '
        f'dominant-baseline="central" {extra}>{esc(s)}</text>\n'
    )


def tlines(x, y, lines, cls, lh, anchor="middle"):
    """Lines of text whose block is vertically centred on y."""
    top = y - lh * (len(lines) - 1) / 2
    return "".join(text(x, top + i * lh, s, cls, anchor) for i, s in enumerate(lines))


def head(x, y, d, cls="head", L=14, hw=8):
    """Arrowhead with its tip at (x, y), pointing in direction d."""
    if d == "down":
        pts = f"{x - hw},{y - L} {x + hw},{y - L} {x},{y}"
    elif d == "up":
        pts = f"{x - hw},{y + L} {x + hw},{y + L} {x},{y}"
    elif d == "right":
        pts = f"{x - L},{y - hw} {x - L},{y + hw} {x},{y}"
    else:
        pts = f"{x + L},{y - hw} {x + L},{y + hw} {x},{y}"
    return f'  <polygon class="{cls}" points="{pts}"/>\n'


def varrow(x, y1, y2, cls="arr", hcls="head"):
    return line(x, y1, x, y2 - 12, cls) + head(x, y2, "down", hcls)


def harrow(y, x1, x2, cls="arr", hcls="head"):
    d = "right" if x2 > x1 else "left"
    end = x2 - 12 if d == "right" else x2 + 12
    return line(x1, y, end, y, cls) + head(x2, y, d, hcls)


def path(d, cls="arr"):
    return f'  <path class="{cls}" d="{d}"/>\n'


def node(x, y, w, h, heading, body, cls="box", sep_at=36, hd_cls="hd", bd_cls="bd"):
    """A titled box: heading band over a separator, body text below."""
    heading = [heading] if isinstance(heading, str) else heading
    body = [body] if isinstance(body, str) else body
    if len(heading) > 1:
        sep_at = 50
    out = rect(x, y, w, h, cls)
    out += line(x, y + sep_at, x + w, y + sep_at)
    out += tlines(x + w / 2, y + sep_at / 2, heading, hd_cls, 18)
    out += tlines(x + w / 2, y + sep_at + (h - sep_at) / 2, body, bd_cls, 21)
    return out


def stall(cx, y, lines, cls="note", tcls="rd", w=None, h=None):
    """A small dashed-bordered note with mono text, centred on cx."""
    w = w or 260
    h = h or (24 + 12 * len(lines))
    return rect(cx - w / 2, y, w, h, cls) + tlines(cx, y + h / 2, lines, tcls, 12)


def marker(cx, cy, kind="x", cls="note", stroke="#d0503c"):
    """The circled × or + that marks a stall or spillover on a connector."""
    out = f'  <circle class="{cls}" cx="{cx}" cy="{cy}" r="9"/>\n'
    if kind == "x":
        out += f'  <path d="M{cx - 4} {cy - 4} L{cx + 4} {cy + 4} M{cx + 4} {cy - 4} L{cx - 4} {cy + 4}" stroke="{stroke}" stroke-width="1.6"/>\n'
    else:
        out += f'  <path d="M{cx} {cy - 5} V{cy + 5} M{cx - 5} {cy} H{cx + 5}" stroke="{stroke}" stroke-width="1.6"/>\n'
    return out


def write(name, content, wide=False):
    file = OUT / (f"{name}.svg" if wide else f"{name}.mobile.svg")
    file.write_text(content)
    print("wrote", file.name)


def wrap(text, width):
    """Greedy word wrap to at most `width` characters per line."""
    lines, cur = [], ""
    for word in text.split():
        if cur and len(cur) + 1 + len(word) > width:
            lines.append(cur)
            cur = word
        else:
            cur = f"{cur} {word}".strip()
    if cur:
        lines.append(cur)
    return lines


# ---------------------------------------------------------------------------
# Figure 1: simple causal graph
# ---------------------------------------------------------------------------

def causal_graph_1():
    W, H = 510, 630
    mx, mw, mc = 24, 250, 149
    sx, sw, sc = 300, 170, 385
    b = ""
    b += node(mx, 40, mw, 100, "PACING INTERVENTION", "caps · monitors · rules")
    b += node(mx, 190, mw, 100, "RESPONSE", "actors re-optimize")
    b += node(mx, 340, mw, 100, "AI SLOWDOWN", "net of substitution")
    b += node(mx, 490, mw, 100, "RISK MITIGATION", "less threat", "box-out")
    b += node(sx, 150, sw, 100, "SAFETY PROGRESS", ["defenses and", "diffusion"])
    b += node(sx, 340, sw, 100, "DELAYED BENEFITS", "growth · science", "box-out")
    for y in (140, 290, 440):
        b += varrow(mc, y, y + 50)
    # intervention -> safety progress
    b += path(f"M{mx + mw} 90 H{sc - 12} Q{sc} 90 {sc} 102 V138")
    b += head(sc, 150, "down")
    # safety progress -> risk mitigation, bypassing the chain
    b += path(f"M{sc} 250 V268 Q{sc} 280 {sc + 12} 280 H478 Q490 280 490 292 V528 Q490 540 478 540 H{mx + mw + 12}")
    b += head(mx + mw, 540, "left")
    b += harrow(390, mx + mw, sx)
    return svg(
        W, H, "Causal graph of a pacing intervention",
        "Pacing intervention causes a response, which causes AI slowdown, which causes risk mitigation. "
        "Pacing intervention also causes safety progress, which causes risk mitigation without going "
        "through slowdown. AI slowdown also delays benefits.", b,
    )


# ---------------------------------------------------------------------------
# Figure 2: full causal graph
# ---------------------------------------------------------------------------

def causal_graph_2():
    W, H = 520, 980
    mx, mw, mc = 24, 240, 144
    sx, sw, sc = 300, 170, 385
    L = [40 + 160 * i for i in range(6)]
    b = ""
    b += node(mx, L[0], mw, 100, "PACING INTERVENTION", "caps · monitors · rules")
    b += node(mx, L[1], mw, 100, "RESPONSE", "actors re-optimize")
    b += node(mx, L[2], mw, 100, "AI SLOWDOWN", "net of substitution")
    b += node(mx, L[3], mw, 100, "TIME & RESOURCES", ["time to act", "freed compute"])
    b += node(mx, L[4], mw, 100, "COMPLEMENTARY ACTIVITY", ["safety research", "evals · oversight"])
    b += node(mx, L[5], mw, 100, "RISK MITIGATION", "less threat", "box-out")
    b += node(sx, L[0], sw, 100, "SAFETY PROGRESS", ["defenses and", "diffusion"])
    b += node(sx, L[1], sw, 100, ["COORDINATION &", "VERIFICATION"], ["rivals bound", "defection visible"])
    b += node(sx, L[2], sw, 100, "DELAYED BENEFITS", "growth · science", "box-out")
    b += node(sx, L[3], sw, 100, ["CAPABILITY", "OVERHANG"], ["headroom builds", "incentive to defect"])
    for y in L[:-1]:
        b += varrow(mc, y + 100, y + 160)
    b += harrow(L[0] + 50, mx + mw, sx)            # intervention -> safety progress
    b += harrow(L[1] + 50, sx, mx + mw)            # coordination -> response
    b += harrow(L[2] + 50, mx + mw, sx)            # slowdown -> delayed benefits
    # slowdown -> capability overhang, via the gutter
    b += path(f"M{mx + mw} {L[2] + 80} H274 Q282 {L[2] + 80} 282 {L[2] + 88} V{L[3] + 42} Q282 {L[3] + 50} 290 {L[3] + 50} H{sx - 12}")
    b += head(sx, L[3] + 50, "right")
    # overhang feeds back into response (dashed)
    b += path(f"M{sx + sw} {L[3] + 30} H478 Q486 {L[3] + 30} 486 {L[3] + 22} V188 Q486 180 478 180 H258 Q250 180 250 188 V{L[1] - 12}", "fb")
    b += head(250, L[1], "down", "fbhead")
    # overhang -> risk mitigation: burst at exit or violation
    b += path(f"M{sc} {L[3] + 100} V{L[5] + 18} Q{sc} {L[5] + 30} {sc - 12} {L[5] + 30} H{mx + mw + 12}")
    b += head(mx + mw, L[5] + 30, "left")
    b += tlines(sc + 12, L[4] + 50, ["BURST AT EXIT", "OR VIOLATION"], "lb", 14, "start")
    # safety progress -> risk mitigation, down the far lane
    b += path(f"M{sx + sw} {L[0] + 50} H492 Q500 {L[0] + 50} 500 {L[0] + 58} V{L[5] + 62} Q500 {L[5] + 70} 492 {L[5] + 70} H{mx + mw + 12}")
    b += head(mx + mw, L[5] + 70, "left")
    return svg(
        W, H, "Causal graph of a pacing intervention (intermediate)",
        "A pacing intervention, moderated by coordination and verification, shapes actors' responses, "
        "which set the net AI slowdown. Slowdown buys time and resources for complementary activity that "
        "mitigates risk, but also delays benefits and builds a capability overhang that raises the "
        "incentive to defect and risks a burst of progress at exit or violation. The intervention also "
        "drives safety progress directly, bypassing slowdown.", b,
    )


# ---------------------------------------------------------------------------
# Figure 3: R&D production lifecycle
# ---------------------------------------------------------------------------

def rd_feedback():
    W, H = 480, 830
    x, w, cx = 30, 380, 220
    b = ""

    def stage(y, title, rows, shaded_last=False):
        h = 40 + 66 * len(rows)
        out = rect(x, y, w, h)
        if shaded_last:
            out += rect(x, y + h - 66, w, 66, "", 'fill="#d6e4f2"')
        out += rect(x, y, w, h, "outline")
        out += line(x, y + 40, x + w, y + 40)
        out += text(cx, y + 20, title, "hd")
        for i, (hd, bd) in enumerate(rows):
            ry = y + 40 + 66 * i
            if i:
                out += line(x, ry, x + w, ry)
                out += line(392, ry - 10, 392, ry + 2, "sm") + head(392, ry + 10, "down", "smhead", 8, 5)
            out += text(cx, ry + 20, hd, "hs")
            cls = "bi" if bd == "output" else "bd"
            out += text(cx, ry + 45, bd, cls)
        return out, y + h

    b += node(x, 30, w, 110, "INPUTS & INFRASTRUCTURE", ["compute · data · power", "capital · researchers"], sep_at=40)
    b += varrow(cx, 140, 190)
    s, y = stage(190, "CAPABILITY DEVELOPMENT", [
        ("ALGORITHMIC R&D", "algorithms · experiments"),
        ("PRE-TRAINING", "training runs"),
        ("POST-TRAINING", "fine-tuning · elicitation"),
        ("MODEL / WEIGHTS", "output"),
    ], shaded_last=True)
    b += s
    b += varrow(cx, y, y + 50)
    s, y2 = stage(y + 50, "USE & DISTRIBUTION", [
        ("INTERNAL USE", "research · operation"),
        ("DEPLOYMENT", "models · services"),
        ("ACCESS & DIFFUSION", "release · downstream use"),
    ])
    b += s
    # feedback from use back into algorithmic R&D
    b += path(f"M{x + w} {y + 116} H432 Q440 {y + 116} 440 {y + 108} V271 Q440 263 432 263 H{x + w + 12}", "fb")
    b += head(x + w, 263, "left", "fbhead")
    b += text(458, 440, "AI-ASSISTED R&D FEEDBACK", "lb", extra='transform="rotate(-90 458 440)"')
    return svg(
        W, H, "AI R&D production lifecycle",
        "Inputs and infrastructure feed capability development (algorithmic R&D, pre-training, "
        "post-training, producing model weights), which feeds use and distribution (internal use, "
        "deployment, access and diffusion). Use feeds back into algorithmic R&D as AI-assisted "
        "R&D feedback.", b,
    )


# ---------------------------------------------------------------------------
# Figure 4: ranking of control surfaces (table split into two halves)
# ---------------------------------------------------------------------------

SURFACES = [
    ("Chip supply", "Low Medium Low High High High Medium High"),
    ("Compute access", "Medium High Medium High High High High High"),
    ("Training runs", "High High Medium High Medium High Medium High"),
    ("Training data", "Medium Low Medium Low Low Medium Low High"),
    ("Research methods", "Medium Medium Low Low Low Medium Low High"),
    ("Model weights", "High Medium Medium Medium Medium Medium Low Medium"),
    ("Model access", "High High High High High High Medium Medium"),
    ("Deployment", "High Medium High Medium Medium Low Medium Low"),
]
CRITERIA = [
    ["RISK", "LINKAGE"], ["RISK", "COVERAGE"], ["TARGETING", "PRECISION"], ["EASE OF", "MEASURE-", "MENT"],
    ["EXTERNAL", "VERIFI-", "ABILITY"], ["ACTOR", "CONCEN-", "TRATION"], ["CIRCUM-", "VENTION", "RESISTANCE"],
    ["INTERVENTION", "LEAD TIME"],
]
GRADE_FILL = {"High": "#d8e6dc", "Medium": "#e8e6e1", "Low": "#f6dfda"}


def control_surfaces():
    W = 512
    x0, hw, cw = 14, 142, 86
    hh, rh = 64, 52
    b = ""

    def table(y, cols):
        out = ""
        out += rect(x0, y, hw, hh, "cell", 'fill="#f7f9fb"')
        out += tlines(x0 + hw / 2, y + hh / 2, ["CONTROL", "SURFACE"], "th", 12)
        for j, c in enumerate(cols):
            cx = x0 + hw + cw * j
            out += rect(cx, y, cw, hh, "cell", 'fill="#f7f9fb"')
            out += tlines(cx + cw / 2, y + hh / 2, CRITERIA[c], "th", 12)
        for i, (name, grades) in enumerate(SURFACES):
            ry = y + hh + rh * i
            out += rect(x0, ry, hw, rh, "cell", 'fill="#f7f9fb"')
            out += text(x0 + hw / 2, ry + rh / 2, name, "rh")
            g = grades.split()
            for j, c in enumerate(cols):
                cx = x0 + hw + cw * j
                out += rect(cx, ry, cw, rh, "cell", f'fill="{GRADE_FILL[g[c]]}"')
                out += text(cx + cw / 2, ry + rh / 2, g[c], "tv")
        return out, y + hh + rh * len(SURFACES)

    t, y = table(20, [0, 1, 2, 3])
    b += t
    t, y = table(y + 30, [4, 5, 6, 7])
    b += t
    H = y + 20
    return svg(
        W, H, "Ranking of AI control surfaces",
        "A table grading eight control surfaces (chip supply, compute access, training runs, training "
        "data, research methods, model weights, model access, deployment) as high, medium or low on "
        "risk linkage, risk coverage, targeting precision, ease of measurement, external verifiability, "
        "actor concentration, circumvention resistance and intervention lead time.", b,
    )


# ---------------------------------------------------------------------------
# Figure 5: targeted intervention, before and after
# ---------------------------------------------------------------------------

def intervention():
    W = 480
    px, pw = 20, 440
    lx, rx, nw, nh = 40, 270, 170, 56
    la, ra = 90, 285           # x of the two vertical arrows
    cap_x, cap_w = 60, 360

    def small(x, y, lines, cls="box", tcls="hs"):
        return rect(x, y, nw, nh, cls) + tlines(x + nw / 2, y + nh / 2, lines, tcls, 15)

    def ghost(x, y, lines):
        out = small(x, y, lines, "ghost", "ghostt")
        out += line(x, y, x + nw, y + nh, "cross") + line(x + nw, y, x, y + nh, "cross")
        return out

    def panel(y, title, after):
        r1, r2, r3 = y + 70, y + 150, y + 230
        r4 = y + 310                          # note row (after only)
        rc = y + 390 if after else y + 320    # capability row
        h = (rc + nh + 70) - y
        out = rect(px, y, pw, h)
        out += line(px, y + 40, px + pw, y + 40)
        out += text(px + pw / 2, y + 20, title, "hd")
        out += small(lx, r1, ["pathway A"]) + small(rx, r1, ["pathway B"])
        out += small(rx, r2, ["alternate route"])
        out += varrow(la, r1 + nh, r2)
        out += rect(cap_x, rc, cap_w, nh) + text(cap_x + cap_w / 2, rc + nh / 2, "capability", "hs")
        out += varrow(ra, r2 + nh, rc)
        if not after:
            out += small(lx, r2, ["targeted step"], "red", "redt")
            out += small(lx, r3, ["route-specific", "effect"])
            out += varrow(la, r2 + nh, r3)
            out += varrow(la, r3 + nh, rc)
            out += tlines(px + pw / 2, rc + nh + 36, ["Two different pathways can lead", "to the same capability."], "cap", 14)
        else:
            out += rect(lx, r2, nw, nh, "ghost")
            out += line(lx, r2, lx + nw, r2 + nh, "cross") + line(lx + nw, r2, lx, r2 + nh, "cross")
            out += rect(lx, r2, nw, nh, "red", 'fill="none" stroke-dasharray="5 4"')
            out += text(lx + nw / 2, r2 + nh / 2, "targeted step", "redt")
            out += ghost(lx, r3, ["route-specific", "effect"])
            out += varrow(la, r2 + nh, r3, "fb", "fbhead")
            out += varrow(la, r3 + nh, rc, "fb", "fbhead")
            # intervention marker on the targeted step
            mx, my = lx + nw - 92, r2 - 12
            out += f'  <circle cx="{mx}" cy="{my}" r="6" fill="none" stroke="#c0392b" stroke-width="1.5"/>\n'
            out += f'  <path d="M{mx} {my - 9} V{my + 9} M{mx - 9} {my} H{mx + 9}" stroke="#c0392b" stroke-width="1.2"/>\n'
            out += text(lx + nw, my, "intervention", "redl", "end")
            # annotations
            out += line(la, r4 + 20, la + 12, r4 + 20, "cross")
            out += rect(la + 12, r4, 100, 40, "dn") + tlines(la + 62, r4 + 20, ["this route", "is blocked"], "bi", 15)
            out += line(ra, r3 + 28, ra + 12, r3 + 28, "cross")
            out += rect(ra + 12, r3 + 6, 128, 44, "dn") + tlines(ra + 76, r3 + 28, ["alternate route", "still works"], "bi", 15)
            out += tlines(px + pw / 2, rc + nh + 36, ["Blocking one step can remove one route", "without removing the capability."], "cap", 14)
        return out, y + h

    b, y = panel(20, "BEFORE INTERVENTION", False)
    p, y = panel(y + 30, "AFTER BLOCKING THE TARGETED STEP", True)
    b += p
    return svg(
        W, y + 20, "Effect of blocking a targeted step",
        "Before intervention, pathway A runs through a targeted step and a route-specific effect to a "
        "capability, and pathway B reaches the same capability through an alternate route. After "
        "blocking the targeted step, that route is blocked but the alternate route still works: "
        "blocking one step can remove one route without removing the capability.", b,
    )


# ---------------------------------------------------------------------------
# Figure 6: how you draw the line
# ---------------------------------------------------------------------------

BLUE = [(0.18, 0.18), (0.25, 0.28), (0.32, 0.12), (0.38, 0.22), (0.45, 0.10), (0.52, 0.18), (0.58, 0.08),
        (0.62, 0.20), (0.70, 0.15), (0.78, 0.25), (0.85, 0.12), (0.90, 0.30), (0.22, 0.38), (0.40, 0.42),
        (0.48, 0.35), (0.55, 0.46), (0.65, 0.40), (0.72, 0.30), (0.80, 0.45), (0.58, 0.63), (0.33, 0.30),
        (0.12, 0.30)]
GREY = [(0.10, 0.62), (0.20, 0.72), (0.30, 0.60), (0.42, 0.75), (0.50, 0.58), (0.60, 0.80), (0.68, 0.66),
        (0.78, 0.62), (0.88, 0.78), (0.95, 0.60), (0.15, 0.88), (0.35, 0.90), (0.55, 0.92), (0.75, 0.88),
        (0.90, 0.82), (0.28, 0.47), (0.47, 0.50), (0.85, 0.55)]
RULES = [
    ("BROADER RULE", "Constrains a wider range of activity.",
     [(0, 0.92), (1, 0.62)], ("FEWER", "MORE", "LOWER")),
    ("NARROWER RULE", "Constrains a narrower range of activity.",
     [(0, 0.62), (1, 0.30)], ("MORE", "FEWER", "LOWER")),
    ("MORE TARGETED RULE", "Uses more information to distinguish cases.",
     [(0, 0.52), (0.18, 0.54), (0.28, 0.44), (0.42, 0.40), (0.52, 0.42), (0.555, 0.60), (0.58, 0.72),
      (0.605, 0.60), (0.64, 0.42), (0.75, 0.40), (0.85, 0.46), (1, 0.41)], ("FEWER", "FEWER", "HIGHER")),
]


def draw_the_line():
    W = 480
    px, pw = 20, 440
    sx, sw, sh = 36, 408, 200
    b = ""
    y = 20
    for title, desc, pts, stats in RULES:
        h = 400
        b += rect(px, y, pw, h)
        b += line(px, y + 36, px + pw, y + 36)
        b += text(px + pw / 2, y + 18, title, "hd")
        b += text(px + pw / 2, y + 58, desc, "b2")
        b += f'  <circle class="dot-b" cx="{px + 90}" cy="{y + 82}" r="4"/>\n' + text(px + 100, y + 82, "threat-relevant activity", "b3", "start")
        b += f'  <circle class="dot-g" cx="{px + 250}" cy="{y + 82}" r="4"/>\n' + text(px + 260, y + 82, "other or benign activity", "b3", "start")
        sy = y + 100
        P = [(sx + u * sw, sy + v * sh) for u, v in pts]
        poly = " ".join(f"{X:.1f},{Y:.1f}" for X, Y in P)
        b += f'  <polygon class="cons" points="{sx},{sy} {poly} {sx + sw},{sy}"/>\n'
        b += f'  <polygon class="open" points="{sx},{sy + sh} {poly} {sx + sw},{sy + sh}"/>\n'
        b += f'  <polyline class="line" points="{poly}"/>\n'
        for u, v in BLUE:
            b += f'  <circle class="dot-b" cx="{sx + u * sw:.1f}" cy="{sy + v * sh:.1f}" r="4.5"/>\n'
        for u, v in GREY:
            b += f'  <circle class="dot-g" cx="{sx + u * sw:.1f}" cy="{sy + v * sh:.1f}" r="4.5"/>\n'
        b += text(sx + 8, sy + 12, "CONSTRAINED", "st", "start")
        b += text(sx + sw - 8, sy + sh - 12, "LEFT OPEN", "st", "end")
        b += line(px + 28, sy + sh + 18, px + pw - 28, sy + sh + 18, "thin")
        for i, (lab, val) in enumerate(zip(("THREAT-RELEVANT ACTIVITY MISSED", "OTHER ACTIVITY CONSTRAINED", "CASE-LEVEL INFORMATION REQUIRED"), stats)):
            ly = sy + sh + 40 + 24 * i
            b += text(px + 28, ly, lab, "st", "start")
            b += text(px + pw - 28, ly, val, "sv", "end")
        y += h + 24
    b += rect(px, y, pw, 84, "band", 'stroke-dasharray="6 4" stroke="#8a95a3" fill="#f7f9fb"')
    b += tlines(px + pw / 2, y + 42, ["Broader and narrower rules trade false positives",
                                       "against false negatives. Better targeting can reduce",
                                       "both, but requires more information and oversight."], "b2", 19)
    return svg(
        W, y + 84 + 20, "How you draw the line shapes what you catch",
        "Three panels compare a broader rule, a narrower rule and a more targeted rule on the same "
        "scatter of threat-relevant and benign activity. The broader rule misses fewer threats but "
        "constrains more other activity; the narrower rule misses more threats but constrains less; "
        "the targeted rule does well on both but requires more case-level information.", b,
    )


# ---------------------------------------------------------------------------
# Figure 7: how evidence becomes action
# ---------------------------------------------------------------------------

STEPS = [
    ("DETECT", ["Forecasts, evaluations", "or incidents"], "RECOGNIZED SIGNAL"),
    ("INTERPRET", ["Assess the signal", "against a trigger"], "DECISION BASIS"),
    ("DECIDE", ["Someone able to affect conduct", "makes a meaningful call"], "ACTIONABLE DECISION"),
    ("EXECUTE", ["Covered actors", "change conduct"], "OPERATIONAL EFFECT"),
    ("CHECK", ["Verify compliance;", "assess new evidence"], "REVIEW FINDING"),
    ("RETARGET OR EXIT", ["Continue · retarget", "Stage resumption · end"], "REVISED DIRECTION"),
]
STALLS = [
    ["NO RECOGNIZED", "RECIPIENT"], ["NO USABLE BASIS", "FOR A CALL"], ["NO ONE ABLE OR", "WILLING TO ACT"],
    ["NO OBSERVATION", "OR VERIFICATION"], ["NO REVIEW OR", "EXIT RULE"],
]
PHASES = [("BEFORE PACING", 0, 1), ("ACTIVATION", 2, 3), ("DURING / ENDING", 4, 5)]


def evidence_to_action():
    W = 480
    x, w, bh, gap = 52, 400, 118, 80
    b = ""
    tops = [20 + i * (bh + gap) for i in range(6)]
    for name, a, z in PHASES:
        y1, y2 = tops[a], tops[z] + bh
        b += rect(14, y1, 22, y2 - y1, "band")
        cy = (y1 + y2) / 2
        b += text(25, cy, name, "ph", extra=f'transform="rotate(-90 25 {cy})"')
    for i, (title, body, output) in enumerate(STEPS):
        y = tops[i]
        b += rect(x, y, w, bh)
        b += rect(x, y + bh - 34, w, 34, "", 'fill="#e4ebf2"')
        b += rect(x, y, w, bh, "outline")
        b += line(x, y + 34, x + w, y + 34)
        b += text(x + w / 2, y + 17, title, "hd")
        b += tlines(x + w / 2, y + 60, body, "b2", 18)
        b += text(x + w / 2, y + bh - 24, "OUTPUT", "lb", extra='font-size="7px"')
        b += text(x + w / 2, y + bh - 10, output, "ef")
        if i < 5:
            cy = y + bh + gap / 2
            b += varrow(110, y + bh, y + bh + gap)
            b += marker(110, cy)
            b += line(119, cy, 150, cy, "rl")
            b += stall(301, cy - 18, STALLS[i], w=302, h=36)
    return svg(
        W, tops[-1] + bh + 24, "How evidence can become action, and where it can stall",
        "Six steps from evidence to action: detect, interpret, decide, execute, check, and retarget or "
        "exit, grouped into before pacing, activation, and during or ending. Between each step the "
        "process can stall: no recognized recipient, no usable basis for a call, no one able or "
        "willing to act, no observation or verification, no review or exit rule.", b,
    )


# ---------------------------------------------------------------------------
# Shared: a box with title, paragraph and an effect band
# ---------------------------------------------------------------------------

def effect_box(x, y, w, title, body, label, effect):
    effect = [effect] if isinstance(effect, str) else effect
    eh = 52
    h = 36 + 12 + 19 * len(body) + 10 + eh
    out = rect(x, y, w, h)
    out += rect(x, y + h - eh, w, eh, "", 'fill="#e4ebf2"')
    out += rect(x, y, w, h, "outline")
    out += line(x, y + 36, x + w, y + 36)
    out += text(x + w / 2, y + 18, title, "hd")
    out += tlines(x + w / 2, y + 48 + 19 * (len(body) - 1) / 2 + 9, body, "b2", 19)
    ey = y + h - eh
    out += text(x + w / 2, ey + 12, label, "lb", extra='font-size="7px"')
    out += tlines(x + w / 2, ey + 12 + (eh - 12) / 2, effect, "ef", 15)
    return out, y + h


# ---------------------------------------------------------------------------
# Figure 8: then what
# ---------------------------------------------------------------------------

STAGES = [
    ("THE RULE", ["A pacing intervention as written: scope,", "trigger, control surface, exit."],
     "CHANGES", "CONSTRAINTS, NOT OBJECTIVES", ["WHEN IT LANDS"]),
    ("COVERED DEVELOPERS", ["New constraints, unchanged objectives:", "developers re-optimize, adapting within the",
                            "rule, working around it, or working on the", "rule itself."],
     "EFFECT · §5.1", ["THE RULE IN PRACTICE =", "RULE + BEST RESPONSE"], ["ON ENACTMENT"]),
    ("RELATIVE POWER", ["Governments, non-covered developers and", "adversaries read the pace as opportunity or",
                        "obstacle, and exploit, absorb or evade it."],
     "EFFECT · §5.2", ["FRONTIER COMMODITIZES;", "MORE ACTORS TO MONITOR"], ["FROM ENACTMENT ONWARD"]),
    ("GOVERNANCE MACHINERY", ["The main effect is to make it exist: new", "powers to inspect and enforce, which become",
                              "a target for capture and a source of", "distortion."],
     "EFFECT · §5.3", ["MAY OUTLAST THE RULE", "THAT JUSTIFIED IT"], ["AT ACTIVATION; MAY PERSIST PAST EXIT"]),
    ("INVESTMENT & MARKETS", ["Valuations reprice on the expected", "trajectory, long before any capability",
                              "effect; leveraged builds strand and the", "restrained seek compensation."],
     "EFFECT · §5.4", "LIKELY THE MOST IMMEDIATE EFFECT", ["ON EXPECTATION, BEFORE ANY DIRECT EFFECT"]),
    ("NORMS & CULTURE", ["Frontier prestige falls and talent", "self-selects; credit for prevention is",
                         "invisible while blame for harm is not."],
     "EFFECT · §5.5", ["SETS THE TERMS FOR", "THE NEXT INTERVENTION"], ["AFTERWARD; SHAPES THE", "NEXT INTERVENTION"]),
]


def then_what():
    W = 480
    x, w = 52, 400
    b = rect(x, 20, w, 34, "band") + text(x + w / 2, 37, "OUTWARD THROUGH SOCIETY", "ph")
    y = 74
    for i, (title, body, label, effect, timing) in enumerate(STAGES):
        box, y = effect_box(x, y, w, title, body, label, effect)
        b += box
        th = 22 + 12 * len(timing)
        b += rect(x, y + 8, w, th, "band") + tlines(x + w / 2, y + 8 + th / 2, timing, "ph", 12)
        y += 8 + th
        if i < len(STAGES) - 1:
            b += varrow(x + w / 2, y, y + 44)
            y += 44
    b += varrow(30, 70, y - 4)
    return svg(
        W, y + 20, "Effects of a pacing intervention, outward through society",
        "Six stages, outward through society and forward in time: the rule as written; covered developers "
        "re-optimizing; relative power shifting as others read the pace; governance machinery that may "
        "outlast the rule; investment and markets repricing on expectation; and norms and culture that set "
        "the terms for the next intervention.", b,
    )


# ---------------------------------------------------------------------------
# Figure 9: failure modes
# ---------------------------------------------------------------------------

MODES = [
    ("CONTROL, CAPTURE & MISUSE",
     ["Actors use power for their own goals. Once a", "body can inspect private information and",
      "restrict others, it becomes a target: firms", "lobby to be spared, other agencies compete",
      "for jurisdiction, and governments push it as", "political priorities shift."],
     ["USED FOR PURPOSES BEYOND", "THE RULE THAT JUSTIFIED IT"],
     [("x", ["SURVEILLANCE POWERS TURNED", "ON LAWFUL RESEARCH"])]),
    ("BEHAVIORAL DISTORTIONS",
     ["No deliberate abuse required. Being watched,", "with the risk of leaks and misreading, deters",
      "research that looks reputationally risky.", "Measures that are easy to audit or publicly",
      "salient attract the effort, even where they", "track the underlying risk only imperfectly."],
     ["OPTIMIZED FOR THE TEST,", "NOT THE UNDERLYING RISK"],
     [("x", ["PASSING TESTS DRIFTS", "FROM REDUCING RISK"])]),
    ("PERSISTENCE & PRECEDENT",
     ["Powers and machinery are not necessarily", "dismantled at exit (§4.4). Information, once",
      "collected, is hard to keep out of other", "decisions, and a remit widens simply because",
      "the body already exists, however imperfectly", "suited it is to the new task."],
     ["OUTLASTS THE RULE", "THAT CREATED IT"],
     [("x", ["EMERGENCY POWERS", "OUTSTAY THEIR WELCOME"]),
      ("+", ["USEFUL SPILLOVER: REUSE IN", "DIPLOMACY; EXPERTISE INTO", "NATIONAL STRATEGY"])]),
]


def failure_modes():
    W = 480
    x, w = 52, 400
    b = rect(x, 20, w, 30, "band") + text(x + w / 2, 35, "CREATED BY THE RULE", "ph")
    box, y = effect_box(x, 62, w, "THE MACHINERY",
                        ["Enforcement power vested in a governing body", "(§4): some mix of access to private",
                         "information, discretionary power to restrict", "other actors, and infrastructure for",
                         "observation or verification."],
                        "EFFECT", "A NEW ACTOR WITH POWER AND INFORMATION")
    b += box
    b += varrow(x + w / 2, y, y + 44)
    y += 44
    b += rect(x, y, w, 30, "band") + text(x + w / 2, y + 15, "PREDICTABLE FAILURE MODES", "ph")
    y += 50
    for title, body, effect, notes in MODES:
        box, y = effect_box(x, y, w, title, body, "EFFECT", effect)
        b += box
        n = len(notes)
        nh = 24 + 12 * max(len(l) for _, l in notes)
        for k, (kind, lines) in enumerate(notes):
            nw = w if n == 1 else (w - 20) / 2
            nx = x if n == 1 else x + k * (nw + 20)
            cx = nx + nw / 2
            red = kind == "x"
            b += line(cx, y, cx, y + 12, "rl" if red else "bll")
            b += marker(cx, y + 21, kind, "note" if red else "noteb", "#d0503c" if red else "#4a6b8f")
            b += line(cx, y + 30, cx, y + 42, "rl" if red else "bll")
            b += stall(cx, y + 42, lines, "note" if red else "noteb", "rd" if red else "bl", w=nw, h=nh)
        y += 42 + nh + 36
    return svg(
        W, y, "Failure modes in pacing governance structures",
        "The rule creates enforcement machinery: a new actor with power and information. Its predictable "
        "failure modes are control, capture and misuse (used for purposes beyond the rule that justified "
        "it, such as surveillance powers turned on lawful research); behavioral distortions (optimized "
        "for the test, not the underlying risk); and persistence and precedent (outlasting the rule that "
        "created it, with emergency powers outstaying their welcome, though sometimes with useful "
        "spillover into diplomacy and national strategy).", b,
    )


# ===========================================================================
# Wide (desktop) layouts
# ===========================================================================

def rd_feedback_wide():
    W, H = 1330, 350
    y, h = 110, 200
    b = ""
    b += node(40, y, 250, h, ["INPUTS &", "INFRASTRUCTURE"], ["compute · data · power", "capital · researchers"])
    b += harrow(y + h / 2, 290, 330)

    def stage(x, w, title, cols, shaded_last=False):
        cw = w / len(cols)
        out = rect(x, y, w, h)
        if shaded_last:
            out += rect(x + w - cw, y + 40, cw, h - 40, "", 'fill="#d6e4f2"')
        out += rect(x, y, w, h, "outline")
        out += line(x, y + 40, x + w, y + 40)
        out += text(x + w / 2, y + 20, title, "hd")
        for i, (hd, bd) in enumerate(cols):
            cx = x + cw * i
            if i:
                out += line(cx, y + 40, cx, y + h)
                out += line(cx - 16, y + h - 22, cx + 16, y + h - 22, "sm") + head(cx + 26, y + h - 22, "right", "smhead", 8, 5)
            out += tlines(cx + cw / 2, y + 66, hd, "hs", 16)
            cls = "bi" if bd == ["output"] else "bd"
            out += tlines(cx + cw / 2, y + 130, bd, cls, 22)
        return out

    b += stage(330, 520, "CAPABILITY DEVELOPMENT", [
        (["ALGORITHMIC", "R&D"], ["algorithms", "experiments"]),
        (["PRE-TRAINING"], ["training runs"]),
        (["POST-TRAINING"], ["fine-tuning", "elicitation"]),
        (["MODEL /", "WEIGHTS"], ["output"]),
    ], shaded_last=True)
    b += harrow(y + h / 2, 850, 890)
    b += stage(890, 400, "USE & DISTRIBUTION", [
        (["INTERNAL", "USE"], ["research", "operation"]),
        (["DEPLOYMENT"], ["models", "services"]),
        (["ACCESS &", "DIFFUSION"], ["release", "downstream use"]),
    ])
    # feedback from use back into algorithmic R&D
    b += path(f"M950 {y} V72 Q950 60 938 60 H407 Q395 60 395 72 V{y - 14}", "fb")
    b += head(395, y, "down", "fbhead")
    b += text(670, 48, "AI-ASSISTED R&D FEEDBACK", "lb")
    return svg(W, H, "AI R&D production lifecycle", RD_DESC, b)


RD_DESC = (
    "Inputs and infrastructure feed capability development (algorithmic R&D, pre-training, "
    "post-training, producing model weights), which feeds use and distribution (internal use, "
    "deployment, access and diffusion). Use feeds back into algorithmic R&D as AI-assisted "
    "R&D feedback."
)

CRITERIA_WIDE = [
    ["RISK", "LINKAGE"], ["RISK", "COVERAGE"], ["TARGETING", "PRECISION"], ["EASE OF", "MEASURE-", "MENT"],
    ["EXTERNAL", "VERIFIABILITY"], ["ACTOR", "CONCENTRATION"], ["CIRCUMVENTION", "RESISTANCE"],
    ["INTERVENTION", "LEAD TIME"],
]


def control_surfaces_wide():
    W = 1240
    x0, hw, cw, hh, rh = 20, 190, 126, 90, 70
    b = ""
    y = 20
    b += rect(x0, y, hw, hh, "cell", 'fill="#f7f9fb"')
    b += tlines(x0 + hw / 2, y + hh / 2, ["CONTROL", "SURFACE"], "th", 13)
    for j, crit in enumerate(CRITERIA_WIDE):
        cx = x0 + hw + cw * j
        b += rect(cx, y, cw, hh, "cell", 'fill="#f7f9fb"')
        b += tlines(cx + cw / 2, y + hh / 2, crit, "th", 13)
    for i, (name, grades) in enumerate(SURFACES):
        ry = y + hh + rh * i
        b += rect(x0, ry, hw, rh, "cell", 'fill="#f7f9fb"')
        b += text(x0 + hw / 2, ry + rh / 2, name, "rh")
        for j, g in enumerate(grades.split()):
            cx = x0 + hw + cw * j
            b += rect(cx, ry, cw, rh, "cell", f'fill="{GRADE_FILL[g]}"')
            b += text(cx + cw / 2, ry + rh / 2, g, "tv")
    return svg(W, y + hh + rh * len(SURFACES) + 20, "Ranking of AI control surfaces", CS_DESC, b)


CS_DESC = (
    "A table grading eight control surfaces (chip supply, compute access, training runs, training "
    "data, research methods, model weights, model access, deployment) as high, medium or low on "
    "risk linkage, risk coverage, targeting precision, ease of measurement, external verifiability, "
    "actor concentration, circumvention resistance and intervention lead time."
)


def intervention_wide():
    W, H = 1360, 430
    pw, ph = 640, 380
    nw, nh = 136, 56
    c1, c2, c3 = 30, 205, 380            # column offsets of the three nodes

    def small(x, y, lines, cls="box", tcls="hs"):
        return rect(x, y, nw, nh, cls) + tlines(x + nw / 2, y + nh / 2, lines, tcls, 15)

    def panel(x, title, after):
        y = 25
        ra, rb = y + 80, y + 200          # rows A and B
        cx_cap, cy_cap = x + 560, y + 168  # capability centre
        out = rect(x, y, pw, ph)
        out += line(x, y + 40, x + pw, y + 40)
        out += text(x + pw / 2, y + 20, title, "hd")
        out += small(x + c1, ra, ["pathway A"]) + small(x + c1, rb, ["pathway B"])
        out += small(x + c2, rb, ["alternate route"])
        out += rect(cx_cap - nw / 2, cy_cap - nh / 2, nw, nh) + text(cx_cap, cy_cap, "capability", "hs")
        out += harrow(ra + nh / 2, x + c1 + nw, x + c2)
        out += harrow(rb + nh / 2, x + c1 + nw, x + c2)
        # alternate route -> capability
        out += path(f"M{x + c2 + nw} {rb + nh / 2} H{cx_cap} V{cy_cap + nh / 2 + 12}")
        out += head(cx_cap, cy_cap + nh / 2, "up")
        if not after:
            out += small(x + c2, ra, ["targeted step"], "red", "redt")
            out += small(x + c3, ra, ["route-specific", "effect"])
            out += harrow(ra + nh / 2, x + c2 + nw, x + c3)
            out += path(f"M{x + c3 + nw} {ra + nh / 2} H{cx_cap} V{cy_cap - nh / 2 - 12}")
            out += head(cx_cap, cy_cap - nh / 2, "down")
            out += text(x + pw / 2, y + 345, "Two different pathways can lead to the same capability.", "cap")
        else:
            out += rect(x + c2, ra, nw, nh, "ghost")
            out += line(x + c2, ra, x + c2 + nw, ra + nh, "cross") + line(x + c2 + nw, ra, x + c2, ra + nh, "cross")
            out += rect(x + c2, ra, nw, nh, "red", 'fill="none" stroke-dasharray="5 4"')
            out += text(x + c2 + nw / 2, ra + nh / 2, "targeted step", "redt")
            out += rect(x + c3, ra, nw, nh, "ghost")
            out += line(x + c3, ra, x + c3 + nw, ra + nh, "cross") + line(x + c3 + nw, ra, x + c3, ra + nh, "cross")
            out += tlines(x + c3 + nw / 2, ra + nh / 2, ["route-specific", "effect"], "ghostt", 15)
            out += harrow(ra + nh / 2, x + c2 + nw, x + c3, "fb", "fbhead")
            out += path(f"M{x + c3 + nw} {ra + nh / 2} H{cx_cap} V{cy_cap - nh / 2 - 12}", "fb")
            out += head(cx_cap, cy_cap - nh / 2, "down", "fbhead")
            # intervention marker above the targeted step
            mx, my = x + c2 + 40, y + 52
            out += f'  <circle cx="{mx}" cy="{my}" r="6" fill="none" stroke="#c0392b" stroke-width="1.5"/>\n'
            out += f'  <path d="M{mx} {my - 9} V{my + 9} M{mx - 9} {my} H{mx + 9}" stroke="#c0392b" stroke-width="1.2"/>\n'
            out += text(mx + 14, my, "intervention", "redl", "start")
            out += line(x + c2 + nw / 2, my + 10, x + c2 + nw / 2, ra - 2, "rl")
            # annotations
            out += rect(x + 450, y + 44, 170, 34, "dn") + text(x + 535, y + 61, "this route is blocked", "bi")
            out += line(x + 535, y + 78, x + 535, ra + nh / 2 - 2, "cross")
            out += rect(x + 420, y + 290, 200, 34, "dn") + text(x + 520, y + 307, "alternate route still works", "bi")
            out += line(x + 520, y + 290, x + 520, rb + nh / 2 + 2, "cross")
            out += text(x + pw / 2, y + 345, "Blocking one step can remove one route without removing the capability.", "cap")
        return out

    b = panel(30, "BEFORE INTERVENTION", False) + panel(690, "AFTER BLOCKING THE TARGETED STEP", True)
    return svg(W, H, "Effect of blocking a targeted step", INT_DESC, b)


INT_DESC = (
    "Before intervention, pathway A runs through a targeted step and a route-specific effect to a "
    "capability, and pathway B reaches the same capability through an alternate route. After "
    "blocking the targeted step, that route is blocked but the alternate route still works: "
    "blocking one step can remove one route without removing the capability."
)


def draw_the_line_wide():
    W, H = 1300, 500
    pw, ph = 400, 366
    b = ""
    y = 20
    for k, (title, desc, pts, stats) in enumerate(RULES):
        px = 30 + k * 420
        sx, sw, sy, sh = px + 16, pw - 32, y + 100, 170
        b += rect(px, y, pw, ph)
        b += line(px, y + 36, px + pw, y + 36)
        b += text(px + pw / 2, y + 18, title, "hd")
        b += text(px + pw / 2, y + 58, desc, "b2")
        b += f'  <circle class="dot-b" cx="{px + 70}" cy="{y + 82}" r="4"/>\n' + text(px + 80, y + 82, "threat-relevant activity", "b3", "start")
        b += f'  <circle class="dot-g" cx="{px + 230}" cy="{y + 82}" r="4"/>\n' + text(px + 240, y + 82, "other or benign activity", "b3", "start")
        P = [(sx + u * sw, sy + v * sh) for u, v in pts]
        poly = " ".join(f"{X:.1f},{Y:.1f}" for X, Y in P)
        b += f'  <polygon class="cons" points="{sx},{sy} {poly} {sx + sw},{sy}"/>\n'
        b += f'  <polygon class="open" points="{sx},{sy + sh} {poly} {sx + sw},{sy + sh}"/>\n'
        b += f'  <polyline class="line" points="{poly}"/>\n'
        for u, v in BLUE:
            b += f'  <circle class="dot-b" cx="{sx + u * sw:.1f}" cy="{sy + v * sh:.1f}" r="4.5"/>\n'
        for u, v in GREY:
            b += f'  <circle class="dot-g" cx="{sx + u * sw:.1f}" cy="{sy + v * sh:.1f}" r="4.5"/>\n'
        b += text(sx + 8, sy + 12, "CONSTRAINED", "st", "start")
        b += text(sx + sw - 8, sy + sh - 12, "LEFT OPEN", "st", "end")
        b += line(px + 28, sy + sh + 14, px + pw - 28, sy + sh + 14, "thin")
        for i, (lab, val) in enumerate(zip(("THREAT-RELEVANT ACTIVITY MISSED", "OTHER ACTIVITY CONSTRAINED", "CASE-LEVEL INFORMATION REQUIRED"), stats)):
            ly = sy + sh + 32 + 20 * i
            b += text(px + 28, ly, lab, "st", "start")
            b += text(px + pw - 28, ly, val, "sv", "end")
    fy = y + ph + 24
    b += rect(30, fy, W - 60, 50, "band", 'stroke-dasharray="6 4" stroke="#8a95a3" fill="#f7f9fb"')
    b += text(W / 2, fy + 25, "Broader and narrower rules trade false positives against false negatives. "
              "Better targeting can reduce both, but requires more information and oversight.", "b2")
    return svg(W, fy + 50 + 24, "How you draw the line shapes what you catch", DTL_DESC, b)


DTL_DESC = (
    "Three panels compare a broader rule, a narrower rule and a more targeted rule on the same "
    "scatter of threat-relevant and benign activity. The broader rule misses fewer threats but "
    "constrains more other activity; the narrower rule misses more threats but constrains less; "
    "the targeted rule does well on both but requires more case-level information."
)


def evidence_to_action_wide():
    W = 1450
    sw, gap, y, bh = 210, 30, 75, 150
    b = ""
    xs = [20 + i * (sw + gap) for i in range(6)]
    for name, a, z in PHASES:
        x1, x2 = xs[a], xs[z] + sw
        b += rect(x1, 20, x2 - x1, 30, "band") + text((x1 + x2) / 2, 35, name, "ph")
    for i, (title, body, output) in enumerate(STEPS):
        x = xs[i]
        b += rect(x, y, sw, bh)
        b += rect(x, y + bh - 38, sw, 38, "", 'fill="#e4ebf2"')
        b += rect(x, y, sw, bh, "outline")
        b += line(x, y + 34, x + sw, y + 34)
        b += text(x + sw / 2, y + 17, title, "hd")
        b += tlines(x + sw / 2, y + 73, wrap(" ".join(body), 24), "b2", 17)
        b += text(x + sw / 2, y + bh - 27, "OUTPUT", "lb", extra='font-size="7px"')
        b += text(x + sw / 2, y + bh - 12, output, "ef")
        if i < 5:
            cy = y + 75
            cx = x + sw + gap / 2
            b += harrow(cy, x + sw, x + sw + gap)
            b += marker(cx, cy)
            b += line(cx, cy + 9, cx, y + bh + 30, "rl")
            b += stall(cx, y + bh + 30, STALLS[i], w=170, h=44)
    return svg(W, y + bh + 30 + 44 + 30, "How evidence can become action, and where it can stall", ETA_DESC, b)


ETA_DESC = (
    "Six steps from evidence to action: detect, interpret, decide, execute, check, and retarget or "
    "exit, grouped into before pacing, activation, and during or ending. Between each step the "
    "process can stall: no recognized recipient, no usable basis for a call, no one able or "
    "willing to act, no observation or verification, no review or exit rule."
)


def effect_box_wide(x, y, w, title, body, label, effect, nlines):
    """As effect_box, but padded to `nlines` so a row of boxes shares a height."""
    effect = wrap(" ".join([effect] if isinstance(effect, str) else effect), round(w / 9))
    eh = 52
    h = 36 + 12 + 19 * nlines + 10 + eh
    out = rect(x, y, w, h)
    out += rect(x, y + h - eh, w, eh, "", 'fill="#e4ebf2"')
    out += rect(x, y, w, h, "outline")
    out += line(x, y + 36, x + w, y + 36)
    out += text(x + w / 2, y + 18, title, "hd")
    out += tlines(x + w / 2, y + 48 + 19 * (nlines - 1) / 2 + 9, body, "b2", 19)
    ey = y + h - eh
    out += text(x + w / 2, ey + 12, label, "lb", extra='font-size="7px"')
    out += tlines(x + w / 2, ey + 12 + (eh - 12) / 2, effect, "ef", 15)
    return out, y + h


def then_what_wide():
    W = 1500
    bw, gap, y = 220, 30, 75
    bodies = [wrap(" ".join(body), 26) for _, body, *_ in STAGES]
    n = max(map(len, bodies))
    b = rect(15, 20, 300, 34, "band") + text(165, 37, "OUTWARD THROUGH SOCIETY", "ph")
    b += harrow(37, 330, 1485)
    for i, ((title, _, label, effect, timing), body) in enumerate(zip(STAGES, bodies)):
        x = 15 + i * (bw + gap)
        box, yb = effect_box_wide(x, y, bw, title, body, label, effect, n)
        b += box
        b += rect(x, yb + 16, bw, 44, "band") + tlines(x + bw / 2, yb + 38, wrap(" ".join(timing), 24), "ph", 13)
        if i < len(STAGES) - 1:
            b += harrow(y + (yb - y) / 2, x + bw, x + bw + gap)
    return svg(W, yb + 16 + 44 + 24, "Effects of a pacing intervention, outward through society", TW_DESC, b)


TW_DESC = (
    "Six stages, outward through society and forward in time: the rule as written; covered developers "
    "re-optimizing; relative power shifting as others read the pace; governance machinery that may "
    "outlast the rule; investment and markets repricing on expectation; and norms and culture that set "
    "the terms for the next intervention."
)

MACHINERY = (
    "Enforcement power vested in a governing body (§4): some mix of access to private information, "
    "discretionary power to restrict other actors, and infrastructure for observation or verification."
)


def failure_modes_wide():
    W = 1500
    bw, gap, y = 330, 40, 70
    bodies = [wrap(MACHINERY, 42)] + [wrap(" ".join(body), 42) for _, body, *_ in MODES]
    n = max(map(len, bodies))
    b = rect(30, 20, bw, 30, "band") + text(30 + bw / 2, 35, "CREATED BY THE RULE", "ph")
    b += rect(400, 20, W - 430, 30, "band") + text(400 + (W - 430) / 2, 35, "PREDICTABLE FAILURE MODES", "ph")
    box, yb = effect_box_wide(30, y, bw, "THE MACHINERY", bodies[0], "EFFECT", "A NEW ACTOR WITH POWER AND INFORMATION", n)
    b += box
    b += path(f"M360 {y + (yb - y) / 2} H372 Q380 {y + (yb - y) / 2} 380 {y + (yb - y) / 2 - 8} V43 Q380 35 388 35 H{400 - 12}")
    b += head(400, 35, "right")
    for k, ((title, _, effect, notes), body) in enumerate(zip(MODES, bodies[1:])):
        x = 400 + k * (bw + gap)
        box, yb = effect_box_wide(x, y, bw, title, body, "EFFECT", effect, n)
        b += box
        m = len(notes)
        nw = bw if m == 1 else (bw - 10) / 2
        wrapped = [(kind, wrap(" ".join(lines), 26 if m == 1 else 19)) for kind, lines in notes]
        nh = 24 + 12 * max(len(l) for _, l in wrapped)
        for j, (kind, lines) in enumerate(wrapped):
            cx = x + nw / 2 + j * (nw + 10)
            red = kind == "x"
            b += line(cx, yb, cx, yb + 12, "rl" if red else "bll")
            b += marker(cx, yb + 21, kind, "note" if red else "noteb", "#d0503c" if red else "#4a6b8f")
            b += line(cx, yb + 30, cx, yb + 42, "rl" if red else "bll")
            b += stall(cx, yb + 42, lines, "note" if red else "noteb", "rd" if red else "bl", w=nw, h=nh)
    return svg(W, yb + 42 + nh + 30, "Failure modes in pacing governance structures", FM_DESC, b)


FM_DESC = (
    "The rule creates enforcement machinery: a new actor with power and information. Its predictable "
    "failure modes are control, capture and misuse (used for purposes beyond the rule that justified "
    "it, such as surveillance powers turned on lawful research); behavioral distortions (optimized "
    "for the test, not the underlying risk); and persistence and precedent (outlasting the rule that "
    "created it, with emergency powers outstaying their welcome, though sometimes with useful "
    "spillover into diplomacy and national strategy)."
)


if __name__ == "__main__":
    write("causal_graph_1", causal_graph_1())
    write("causal_graph_2", causal_graph_2())
    for name, portrait, landscape in (
        ("rd-feedback", rd_feedback, rd_feedback_wide),
        ("control-surfaces", control_surfaces, control_surfaces_wide),
        ("intervention", intervention, intervention_wide),
        ("draw-the-line", draw_the_line, draw_the_line_wide),
        ("evidence-to-action", evidence_to_action, evidence_to_action_wide),
        ("then-what", then_what, then_what_wide),
        ("failure-modes", failure_modes, failure_modes_wide),
    ):
        write(name, portrait())
        write(name, landscape(), wide=True)
