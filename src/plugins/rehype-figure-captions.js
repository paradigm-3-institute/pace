import { existsSync } from "node:fs";
import { resolve } from "node:path";

/* Below this viewport width the article is too narrow for the wide desktop
   diagrams, so a portrait variant is served instead. Keep in step with the
   matching media query in prose.css. */
export const MOBILE_FIGURE_QUERY = "(max-width: 1023px)";

/* Relative to the working directory rather than this file: Astro bundles the
   config and its plugins into a temporary module, so import.meta.url does not
   point back here. */
const PUBLIC_DIR = resolve("public");

/**
 * Turn a Markdown image that sits alone in its paragraph into a captioned
 * figure, using the image's alt text as the caption.
 *
 * `![A diagram of X](/media/x.webp)` becomes
 * `<figure><img …><figcaption>A diagram of X</figcaption></figure>`.
 * Images with no alt text, or inline with other content, are left as they are.
 *
 * If a portrait version of the image exists at `/media/x.mobile.svg`, the
 * image is wrapped in a `<picture>` whose `<source>` serves that version on
 * narrow viewports.
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

  const stem = String(img.properties?.src ?? "").split("/").pop()?.replace(/\.[a-z0-9]+$/i, "");

  return {
    type: "element",
    tagName: "figure",
    properties: stem ? { id: `fig-${stem}` } : {},
    children: [
      withMobileSource(img),
      {
        type: "element",
        tagName: "figcaption",
        properties: {},
        children: [{ type: "text", value: caption }],
      },
    ],
  };
}

function withMobileSource(img) {
  const src = String(img.properties?.src ?? "");
  const mobile = src.replace(/\.[a-z0-9]+$/i, ".mobile.svg");
  const file = resolve(PUBLIC_DIR, mobile.slice(1));
  if (mobile === src || !src.startsWith("/") || !existsSync(file)) {
    return img;
  }

  return {
    type: "element",
    tagName: "picture",
    properties: {},
    children: [
      {
        type: "element",
        tagName: "source",
        properties: { media: MOBILE_FIGURE_QUERY, srcSet: mobile, type: "image/svg+xml" },
        children: [],
      },
      img,
    ],
  };
}
