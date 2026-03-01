import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  type: z.enum(['guide', 'tutorial']),
  tags: z.array(z.string()).default([]),
  category: z.string(),
  platform: z.string().optional(),
  language: z.enum(['en', 'es']).default('en'),
  publishedAt: z.coerce.date(),
});

const guides = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const tutorials = defineCollection({
  type: 'content',
  schema: articleSchema,
});

export const collections = { guides, tutorials };
