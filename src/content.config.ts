import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reviews = defineCollection({
  loader: glob({ pattern: "**/**.md", base: "./src/contents/reviews/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { reviews };
