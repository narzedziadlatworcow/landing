import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Nikodem Rudziński"),
      tags: z.array(z.string()).default([]),
      // `image()` → optymalizowany asset przez <Image>; ścieżka względna do pliku .mdx
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
