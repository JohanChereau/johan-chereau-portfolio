import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // Important: project URLs live in `projectId`. Do not use a frontmatter
  // property named `slug` here: Astro's glob loader treats it as the entry ID,
  // and the FR/EN variants intentionally share the same public project path.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    projectId: z.string(),
    locale: z.enum(['fr', 'en']),
    description: z.string(),
    year: z.number(),
    category: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    accent: z.enum(['cyan', 'violet']).default('cyan'),
    technologies: z.array(z.string()),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number().int().positive().optional(),
      height: z.number().int().positive().optional(),
    })).default([]),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
    }).optional(),
  }),
});

export const collections = { projects };
