const IMAGE_DIMENSIONS = {
  "/media/rd-feedback.webp": [2048, 589],
  "/media/control-surfaces.webp": [2048, 1408],
  "/media/intervention.webp": [2048, 683],
  "/media/draw-the-line.webp": [2048, 819],
  "/media/evidence-to-action.webp": [2048, 558],
  "/media/then-what.webp": [2834, 774],
  "/media/failure-modes.webp": [2868, 832],
};

/**
 * Add safe loading hints to images authored in Markdown.
 *
 * The article is long and its diagrams are below the initial viewport, so
 * browsers should not fetch every image during the first render.
 */
export default function rehypeImagePerformance() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "element" && node.tagName === "img") {
        node.properties ??= {};
        node.properties.loading ??= "lazy";
        node.properties.decoding ??= "async";

        const src = String(node.properties.src ?? "");
        const dimensions = Object.entries(IMAGE_DIMENSIONS).find(([path]) =>
          src.endsWith(path),
        )?.[1];
        if (dimensions) {
          node.properties.width ??= dimensions[0];
          node.properties.height ??= dimensions[1];
        }
      }

      for (const child of node.children ?? []) visit(child);
    };

    visit(tree);
  };
}
