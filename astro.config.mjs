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
});
