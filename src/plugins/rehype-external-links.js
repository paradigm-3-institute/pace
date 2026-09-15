function visit(node) {
  if (node.type === "element" && node.tagName === "a") {
    const href = node.properties?.href;

    if (typeof href === "string" && /^https?:\/\//i.test(href)) {
      node.properties.target = "_blank";
      node.properties.rel = "noopener noreferrer";
    }
  }

  for (const child of node.children ?? []) visit(child);
}

export default function rehypeExternalLinks() {
  return (tree) => visit(tree);
}
