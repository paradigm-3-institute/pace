/**
 * Wrap each `h3` and the content that follows it (up to the next h1/h2/h3) in a
 * `<section class="h3-section">`. This gives every `h3` its own containing block
 * so `position: sticky` headings scroll out of view instead of stacking.
 */
export default function rehypeSectionizeH3() {
  /* The collapsibles end a run too: they are peers of the h3s, not content
     belonging to the one above them. Without this they get swallowed into the
     preceding h3-section, which keeps that h3's sticky heading pinned over
     them and leaves them with no heading of their own.

     They are written as HTML in the markdown, so they arrive here as `raw`
     nodes rather than elements — the opening `<details>` and its `<summary>`
     are one node, the markdown body is parsed between it and the closing
     node. Only the opening one starts a new run. */
  const isBoundary = (node) => {
    if (node.type === "element") return ["h1", "h2", "h3"].includes(node.tagName);
    if (node.type === "raw") return /^\s*<details[\s>]/.test(node.value);
    return false;
  };

  return (tree) => {
    const out = [];

    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      if (node.type === "element" && node.tagName === "h3") {
        const section = {
          type: "element",
          tagName: "section",
          properties: { className: ["h3-section"] },
          children: [node],
        };

        while (i + 1 < tree.children.length && !isBoundary(tree.children[i + 1])) {
          section.children.push(tree.children[++i]);
        }

        out.push(section);
      } else {
        out.push(node);
      }
    }

    tree.children = out;
  };
}
