import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tag: z.string(),
    readTime: z.string(),
    icon: z.string().default('home'),
    color: z.string().default('#1d4ed8'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
