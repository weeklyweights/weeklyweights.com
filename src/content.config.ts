// Lesson front matter — mirrors the format in the private repo's CURRICULUM.md.
// `topics` must match slugs in src/data/topics.json; the gap analysis and the
// topic pages both depend on that.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    level: z.union([z.literal(101), z.literal(201), z.literal(301)]),
    topics: z.array(z.string()).min(1),
    prereqs: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']).default('draft'),
    source_signals: z.array(z.string()).default([]),
    updated: z.coerce.date(),
    summary: z.string().max(200),
  }),
});

export const collections = { lessons };
