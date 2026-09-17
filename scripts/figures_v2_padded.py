#!/usr/bin/env python3
"""Generate separate v2-padded SVGs with more space around the approved copy.

python3 -B scripts/figures_v2_padded.py
python3 -B scripts/figures_v2_padded.py --render-review

Only *-v2-padded assets and artifacts/figures-v2-padded are written. Inkscape
is needed only for optional PNG comparisons. Fonts, wording and box order
match v2; padding, line spacing, box heights and connectors are recalculated.
"""

import argparse
import base64
from dataclasses import dataclass
from html import escape
from pathlib import Path
import subprocess
import tempfile
import xml.etree.ElementTree as ET

import figures as original
from figures import harrow, head, line, marker, path, rect, tlines, varrow, wrap
from figures_v2 import COPY, FIGURE_8_TYPE


ROOT = Path(__file__).resolve().parent.parent
REVIEW = ROOT / "artifacts/figures-v2-padded"
BODY_PADDING = 22
SIDE_PADDING = 24
BODY_LEADING = 23
HEADING_LEADING = 21
EFFECT_LEADING = 19
NOTE_LEADING = 15


def joined(value):
    return value if isinstance(value, str) else " ".join(value)


def label(key, x, y, w, h, lines, cls, leading):
    """Keep each text block inside an explicit area, also used for glyph QA."""
    if isinstance(lines, str):
        lines = [lines]
    return (
        f'<g id="{key}" data-bounds="{x} {y} {w} {h}">\n'
        + tlines(x + w / 2, y + h / 2, lines, cls, leading)
        + '</g>\n'
    )


@dataclass
class Card:
    heading: list
    body: list
    effect: list
    reference: str
    heading_h: float
    body_h: float
    effect_h: float

    @property
    def height(self):
        return self.heading_h + self.body_h + self.effect_h


def card_layout(title, body, reference, effect, width, figure):
    heading_size = 13.5 if figure == 8 else 13
    body_size = 14.5 if figure == 8 else 14
    effect_size = 12.5 if figure == 8 else 12
    heading = wrap(title, int((width - 40) / (heading_size * .6 + 1.5)))
    # Conservative wrap budgets reserve side padding; rendered bounds are
    # verified with the actual fallback fonts when reviewing the output.
    body_lines = wrap(body, int((width - 2 * SIDE_PADDING) / (body_size * .53)))
    effect_lines = wrap(joined(effect), int((width - 2 * SIDE_PADDING) / (effect_size * .65)))
    return Card(
        heading, body_lines, effect_lines, reference,
        max(48, 24 + heading_size + HEADING_LEADING * (len(heading) - 1)),
        2 * BODY_PADDING + body_size + BODY_LEADING * (len(body_lines) - 1),
        60 + EFFECT_LEADING * (len(effect_lines) - 1),
    )


def align_cards(cards):
    for attr in ("heading_h", "body_h", "effect_h"):
        largest = max(getattr(card, attr) for card in cards)
        for card in cards:
            setattr(card, attr, largest)


def draw_card(key, x, y, w, card):
    ey = y + card.heading_h + card.body_h
    b = rect(x, y, w, card.height)
    b += rect(x, ey, w, card.effect_h, "", 'fill="#e4ebf2"')
    b += rect(x, y, w, card.height, "outline")
    b += line(x, y + card.heading_h, x + w, y + card.heading_h)
    b += label(key + "-heading", x + 20, y + 12, w - 40, card.heading_h - 24,
               card.heading, "hd", HEADING_LEADING)
    b += label(key + "-body", x + SIDE_PADDING, y + card.heading_h + BODY_PADDING,
               w - 2 * SIDE_PADDING, card.body_h - 2 * BODY_PADDING,
               card.body, "b2", BODY_LEADING)
    b += label(key + "-reference", x + 16, ey + 10, w - 32, 12,
               card.reference, "lb", 15)
    b += label(key + "-effect", x + SIDE_PADDING, ey + 32,
               w - 2 * SIDE_PADDING, card.effect_h - 46,
               card.effect, "ef", EFFECT_LEADING)
    return b, y + card.height


def make_svg(width, height, title, description, body, figure):
    out = original.svg(width, height, title, description, body)
    if figure == 8:
        out = out.replace("    </style>", FIGURE_8_TYPE + "    </style>")
    return out


def then_what(mobile=False):
    width, bw = (480, 400) if mobile else (1500, 220)
    cards = [card_layout(title, body, reference, effect, bw, 8)
             for (title, _, reference, effect, _), body in zip(original.STAGES, COPY["then-what"])]
    timing_lines = [wrap(joined(stage[4]), int((bw - 28) / (10.5 * .6 + 1.5)))
                    for stage in original.STAGES]
    timing_heights = [28 + 10.5 + NOTE_LEADING * (len(lines) - 1) for lines in timing_lines]
    if not mobile:
        align_cards(cards)
        timing_heights = [max(timing_heights)] * len(cards)
    bx, band_w = (52, 400) if mobile else (15, 300)
    b = rect(bx, 20, band_w, 44, "band")
    b += label("direction", bx + 12, 32, band_w - 24, 20,
               "OUTWARDS THROUGH SOCIETY", "ph", 15)
    if not mobile:
        b += harrow(42, 330, 1485)
    y = 92
    bottom = 0
    for i, card in enumerate(cards):
        x = 52 if mobile else 15 + i * 250
        box, end = draw_card(f"stage-{i}", x, y, bw, card)
        b += box
        th = timing_heights[i]
        ty = end + 20
        b += rect(x, ty, bw, th, "band")
        b += label(f"timing-{i}", x + 14, ty + 14, bw - 28, th - 28,
                   timing_lines[i], "ph", NOTE_LEADING)
        bottom = max(bottom, ty + th)
        if i < len(cards) - 1:
            if mobile:
                b += varrow(x + bw / 2, bottom, bottom + 48)
                y = bottom + 48
            else:
                b += harrow(y + card.height / 2, x + bw, x + bw + 30)
    if mobile:
        b += varrow(30, 86, bottom - 4)
    return make_svg(width, bottom + 24,
                    "Effects of a pacing intervention, outward through society",
                    original.TW_DESC, b, 8)


def draw_notes(key, x, y, w, notes):
    n = len(notes)
    nw = w if n == 1 else (w - 20) / 2
    wrapped = [(kind, wrap(joined(lines), int((nw - 32) / (9.5 * .6 + 1))))
               for kind, lines in notes]
    nh = 32 + 9.5 + NOTE_LEADING * (max(len(lines) for _, lines in wrapped) - 1)
    b = ""
    for i, (kind, lines) in enumerate(wrapped):
        nx = x + i * (nw + 20)
        cx = nx + nw / 2
        red = kind == "x"
        connector = "rl" if red else "bll"
        cls, text_cls = ("note", "rd") if red else ("noteb", "bl")
        b += line(cx, y, cx, y + 14, connector)
        b += marker(cx, y + 25, kind, cls, "#d0503c" if red else "#4a6b8f")
        b += line(cx, y + 36, cx, y + 52, connector)
        b += rect(nx, y + 52, nw, nh, cls)
        b += label(f"{key}-{i}", nx + 16, y + 68, nw - 32, nh - 32,
                   lines, text_cls, NOTE_LEADING)
    return b, y + 52 + nh


def failure_modes(mobile=False):
    width, bw = (480, 400) if mobile else (1500, 330)
    definitions = [("THE MACHINERY", "A NEW ACTOR WITH POWER AND INFORMATION")]
    definitions += [(title, effect) for title, _, effect, _ in original.MODES]
    cards = [card_layout(title, body, "EFFECT", effect, bw, 9)
             for (title, effect), body in zip(definitions, COPY["failure-modes"])]
    if not mobile:
        align_cards(cards)
    x = 52 if mobile else 30
    b = rect(x, 20, bw, 42, "band")
    b += label("created", x + 14, 31, bw - 28, 20, "CREATED BY THE RULE", "ph", 15)
    y = 84
    box, end = draw_card("machinery", x, y, bw, cards[0])
    b += box
    if mobile:
        b += varrow(252, end, end + 48)
        y = end + 48
        b += rect(52, y, bw, 42, "band")
        b += label("failure-modes", 66, y + 11, bw - 28, 20, "PREDICTABLE FAILURE MODES", "ph", 15)
        y += 66
    else:
        b += rect(400, 20, width - 430, 42, "band")
        b += label("failure-modes", 416, 31, width - 462, 20, "PREDICTABLE FAILURE MODES", "ph", 15)
        cy = y + cards[0].height / 2
        b += path(f"M360 {cy} H372 Q380 {cy} 380 {cy-8} V49 Q380 41 388 41 H388")
        b += head(400, 41, "right")
    bottom = end
    for i, (card, (_, _, _, notes)) in enumerate(zip(cards[1:], original.MODES)):
        x = 52 if mobile else 400 + i * 370
        box, end = draw_card(f"mode-{i}", x, y, bw, card)
        b += box
        annotations, end = draw_notes(f"note-{i}", x, end, bw, notes)
        b += annotations
        bottom = max(bottom, end)
        if mobile:
            y = end + 44
    return make_svg(width, bottom + 28, "Failure modes in pacing governance structures",
                    original.FM_DESC, b, 9)


GENERATORS = {"then-what": then_what, "failure-modes": failure_modes}


def review_pages():
    REVIEW.mkdir(parents=True, exist_ok=True)
    parts = []
    md = ["# Figures 8 and 9: v2 padded", "",
          "The approved v2 copy and design, with larger internal padding, more line spacing, "
          "and taller boxes. The article uses these padded figures; unpadded v2s remain available for comparison.", "",
          "Comparisons use equal widths: v2 above padded on desktop, v2 left of padded on mobile.", ""]
    for number, stem in [(8, "then-what"), (9, "failure-modes")]:
        md += [f"## Figure {number}", ""]
        for mobile in (False, True):
            mode, suffix = ("mobile", ".mobile") if mobile else ("desktop", "")
            src = f"../../public/media/{stem}-v2-padded{suffix}.svg"
            png = f"figure-{number}-{mode}-comparison.png"
            md += [f"### {mode.capitalize()}", "", f"[Padded SVG]({src})", "",
                   f"![Figure {number}: v2 and v2 padded, {mode}]({png})", ""]
            parts.append(f'<section><h2>Figure {number} · {mode}</h2><p><a href="{src}">Open padded SVG</a> · <a href="{png}">Open full-size comparison</a></p><img src="{png}" alt="Figure {number}: v2 compared with v2 padded, {mode}"></section>')
    md += ["Regenerate: `python3 -B scripts/figures_v2_padded.py`. Add `--render-review` to render the comparison PNGs with Inkscape.", ""]
    (REVIEW / "README.md").write_text("\n".join(md))
    (REVIEW / "index.html").write_text('''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Figures 8 and 9 — v2 padded</title>
<style>body{margin:32px auto;padding:0 24px;max-width:1540px;font:16px/1.5 system-ui;color:#1e2833}h1{font-size:28px}h2{font-size:21px}section{margin:40px 0}a{color:#3f5f85}img{display:block;max-width:100%;height:auto;border:1px solid #e2e8ee}</style>
</head><body><h1>Figures 8 and 9 — v2 padded</h1><p>The approved v2 copy and design with more breathing room. Desktop pairs are stacked; mobile pairs are side by side. Each pair uses equal display widths.</p>
''' + "\n".join(parts) + '</body></html>\n')


def render_comparisons():
    with tempfile.TemporaryDirectory(prefix="pace-padded-") as temporary:
        for number, stem in [(8, "then-what"), (9, "failure-modes")]:
            for mobile in (False, True):
                width = 480 if mobile else 1500
                suffix = ".mobile" if mobile else ""
                x, y, bottom, parts = 20, 56, 0, []
                for version, title in [("v2", "v2"), ("v2-padded", "v2 padded")]:
                    file = original.OUT / f"{stem}-{version}{suffix}.svg"
                    root = ET.parse(file).getroot()
                    height = float(root.attrib["height"]) * width / float(root.attrib["width"])
                    data = base64.b64encode(file.read_bytes()).decode()
                    parts.append(f'<text x="{x}" y="{y-24}" font-family="sans-serif" font-size="18" fill="#1e2833">Figure {number} · {title}</text>')
                    parts.append(f'<image x="{x}" y="{y}" width="{width}" height="{height}" href="data:image/svg+xml;base64,{data}"/>')
                    bottom = max(bottom, y + height + 20)
                    if mobile:
                        x += width + 20
                    else:
                        y += height + 60
                canvas_w = 1020 if mobile else 1540
                canvas = f'<svg xmlns="http://www.w3.org/2000/svg" width="{canvas_w}" height="{bottom}"><rect width="100%" height="100%" fill="white"/>{"".join(parts)}</svg>'
                source = Path(temporary) / "comparison.svg"
                source.write_text(canvas)
                mode = "mobile" if mobile else "desktop"
                target = REVIEW / f"figure-{number}-{mode}-comparison.png"
                subprocess.run(["inkscape", str(source), f"--export-filename={target}"], check=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--render-review", action="store_true", help="render comparison PNGs with Inkscape")
    args = parser.parse_args()
    for stem, generate in GENERATORS.items():
        for mobile in (False, True):
            suffix = ".mobile" if mobile else ""
            file = original.OUT / f"{stem}-v2-padded{suffix}.svg"
            file.write_text(generate(mobile))
            print("wrote", file.name)
    review_pages()
    if args.render_review:
        render_comparisons()


if __name__ == "__main__":
    main()
