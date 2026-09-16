/**
 * Turn a Markdown image that sits alone in its paragraph into a captioned
 * figure, using the image's alt text as the caption.
 *
 * `![A diagram of X](/media/x.webp)` becomes
 * `<figure><img …><figcaption>A diagram of X</figcaption></figure>`.
 * Images with no alt text, or inline with other content, are left as they are.
 */
export default function rehypeFigureCaptions() {
  return (tree) => {
    const visit = (node) => {
      const children = node.children ?? [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const figure = toFigure(child);
        if (figure) {
          children[i] = figure;
        } else {
          visit(child);
        }
      }
    };

    visit(tree);
  };
}

function toFigure(node) {
  if (node.type !== "element" || node.tagName !== "p") return null;

  const content = (node.children ?? []).filter(
    (child) => !(child.type === "text" && child.value.trim() === ""),
  );
  if (content.length !== 1) return null;

  const [img] = content;
  if (img.type !== "element" || img.tagName !== "img") return null;

  const caption = String(img.properties?.alt ?? "").trim();
  if (!caption) return null;

  return {
    type: "element",
    tagName: "figure",
    properties: {},
    children: [
      img,
      {
        type: "element",
        tagName: "figcaption",
        properties: {},
        children: [{ type: "text", value: caption }],
      },
    ],
  };
}
