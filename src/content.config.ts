import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

import { z } from 'astro/zod';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./posts" }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        anchor: z.string(),
        date: z.coerce.date(),
    }),
});

const experiences = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./experiences" }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        start_year: z.number().int().min(1900).max(new Date().getFullYear()),
        end_year: z.union([z.number().int().min(1900).max(new Date().getFullYear()), z.literal('Present')]),
    }),
});

export const collections = { posts, experiences };
