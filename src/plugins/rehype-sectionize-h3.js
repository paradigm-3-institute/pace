/**
 * Wrap each `h3` and the content that follows it (up to the next h1/h2/h3) in a
 * `<section class="h3-section">`. This gives every `h3` its own containing block
 * so `position: sticky` headings scroll out of view instead of stacking.
 */
export default function rehypeSectionizeH3() {
  const isBoundary = (node) =>
    node.type === "element" && ["h1", "h2", "h3"].includes(node.tagName);

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
