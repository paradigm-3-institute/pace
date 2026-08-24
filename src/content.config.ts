import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string().optional(),
  }),
});

export const collections = { sections };
