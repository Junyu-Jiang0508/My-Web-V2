import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '*.md',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    template: z.enum(['default', 'readings']).optional().default('default'),
  }),
});

export const collections = {
  blog: blogCollection,
};
