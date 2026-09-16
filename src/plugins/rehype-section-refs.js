/**
 * Cross-references by section number.
 *
 * Two things, so that "see §5.3" in the text takes the reader to 5.3:
 *
 *  1. Every heading that starts with a number — "5.3 Talent culture" —
 *     gets a stable anchor from that number (`sec-5.3`), placed inside the
 *     heading. The heading's own id stays as it is; that one comes from
 *     the title and changes whenever the title does, which is exactly why
 *     it can't be the link target.
 *
 *  2. Every "§5.3" in running text becomes a link to that anchor. A bare
 *     "§5" links to the section itself, whose id and page come from
 *     sections.ts. References inside existing links are left alone, and so
 *     is any number that doesn't match a heading anywhere in the essay —
 *     "SB 53 §22757.13" is a statute, not a section.
 *
 * Because each markdown file is processed on its own, the set of valid
 * numbers is read once from every section file up front.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SECTIONS_DIR = join(process.cwd(), "src", "content", "sections");
const HEADING = /^#{2,6}\s+(\d+(?:\.\d+)*)\b/gm;
const REF = /§\s?(\d+(?:\.\d+)*)/g;

function numberedHeadings() {
  const numbers = new Set();
  for (const file of readdirSync(SECTIONS_DIR)) {
    if (!file.endsWith(".md")) continue;
    const text = readFileSync(join(SECTIONS_DIR, file), "utf8");
    for (const m of text.matchAll(HEADING)) numbers.add(m[1]);
  }
  return numbers;
}

const text = (node) =>
  node.type === "text"
    ? node.value
    : (node.children || []).map(text).join("");

export default function rehypeSectionRefs({ sections = [] } = {}) {
  const known = numberedHeadings();

  /* "5" -> the section's page and id, from sections.ts; "5.3" -> that
     section's page and the number anchor. Null if it isn't a section. */
  const target = (number) => {
    const top = Number(number.split(".")[0]);
    const section = sections[top - 1];
    if (!section) return null;
    if (!number.includes(".")) return `${section.page}#${section.id}`;
    if (!known.has(number)) return null;
    return `${section.page}#sec-${number}`;
  };

  return (tree) => {
    (function visit(node, insideLink) {
      if (node.type !== "element" && node.type !== "root") return;

      /* 1. anchors on numbered headings */
      if (/^h[2-6]$/.test(node.tagName)) {
        const m = text(node).match(/^\s*(\d+(?:\.\d+)*)\b/);
        if (m) {
          node.children.unshift({
            type: "element",
            tagName: "span",
            properties: { id: `sec-${m[1]}`, className: ["sec-anchor"] },
            children: [],
          });
        }
        return;
      }

      /* 2. links in running text */
      const link = insideLink || node.tagName === "a";
      const next = [];
      for (const child of node.children || []) {
        if (child.type !== "text" || link || !REF.test(child.value)) {
          REF.lastIndex = 0;
          visit(child, link);
          next.push(child);
          continue;
        }
        REF.lastIndex = 0;
        let at = 0;
        for (const m of child.value.matchAll(REF)) {
          const href = target(m[1]);
          if (!href) continue;
          if (m.index > at) next.push({ type: "text", value: child.value.slice(at, m.index) });
          next.push({
            type: "element",
            tagName: "a",
            properties: { href, className: ["sec-ref"] },
            children: [{ type: "text", value: m[0] }],
          });
          at = m.index + m[0].length;
        }
        if (at < child.value.length) next.push({ type: "text", value: child.value.slice(at) });
      }
      if (node.children) node.children = next;
    })(tree, false);
  };
}
