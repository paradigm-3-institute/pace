// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeSectionizeH3 from "./src/plugins/rehype-sectionize-h3.js";

// https://astro.build/config
export default defineConfig({
  site: "https://pacing.tech",
  markdown: {
    rehypePlugins: [rehypeSectionizeH3],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      options: {
        variants: [
          {
            weight: "300 900",
            style: "normal",
            src: ["./public/fonts/Satoshi.woff2"],
          },
        ],
      },
    },
  ],
});
