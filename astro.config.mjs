// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import rehypeSectionizeH3 from "./src/plugins/rehype-sectionize-h3.js";
import rehypeExternalLinks from "./src/plugins/rehype-external-links.js";
import rehypeImagePerformance from "./src/plugins/rehype-image-performance.js";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://pacing.tech",

  markdown: {
    processor: unified({
      rehypePlugins: [rehypeSectionizeH3, rehypeExternalLinks, rehypeImagePerformance],
    }),
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
    {
      /* The serif for body text, on both the essay and the quiz. */
      provider: fontProviders.local(),
      name: "Gentium Plus",
      cssVariable: "--font-body-serif",
      options: {
        variants: [
          { weight: 400, style: "normal", src: ["./public/fonts/GentiumPlus-Regular.woff2"] },
          { weight: 400, style: "italic", src: ["./public/fonts/GentiumPlus-Italic.woff2"] },
          { weight: 700, style: "normal", src: ["./public/fonts/GentiumPlus-Bold.woff2"] },
          { weight: 700, style: "italic", src: ["./public/fonts/GentiumPlus-BoldItalic.woff2"] },
        ],
      },
    },
    {
      /* The quiz's map is set in IBM Plex Mono. Fetched from Google Fonts at
         build time and served from this site, like Satoshi above. */
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],

  integrations: [preact()],
});
