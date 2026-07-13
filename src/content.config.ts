import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['wedding-planner', 'interiorismo']),
      publishDate: z.coerce.date(),
      excerpt: z.string().max(200),
      image: image(),
      author: z.string().default('Equipo Osbord'),
      featured: z.boolean().default(false),
      readingTime: z.number().int().positive().default(5),
    }),
});

export const collections = { blog };
