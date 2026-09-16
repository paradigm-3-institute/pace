import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/* Relative to the working directory rather than this file: Astro bundles the
   config and its plugins into a temporary module, so import.meta.url does not
   point back here. */
const PUBLIC_DIR = resolve("public");

/**
 * Add safe loading hints to images authored in Markdown.
 *
 * The article is long and its diagrams are below the initial viewport, so
 * browsers should not fetch every image during the first render. Local SVGs
 * also get their intrinsic size, so the layout does not shift as they load.
 */
export default function rehypeImagePerformance() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "element" && node.tagName === "img") {
        node.properties ??= {};
        node.properties.loading ??= "lazy";
        node.properties.decoding ??= "async";

        const dimensions = svgDimensions(String(node.properties.src ?? ""));
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

function svgDimensions(src) {
  if (!src.startsWith("/") || !src.endsWith(".svg")) return null;
  const file = resolve(PUBLIC_DIR, src.slice(1));
  if (!existsSync(file)) return null;
  const head = readFileSync(file, "utf8").slice(0, 400);
  const width = head.match(/\swidth="(\d+)"/)?.[1];
  const height = head.match(/\sheight="(\d+)"/)?.[1];
  return width && height ? [Number(width), Number(height)] : null;
}
