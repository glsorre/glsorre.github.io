import { defineCollection } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const links = defineCollection({
    loader: glob({ pattern: '**/*.yml', base: "./links" }),
    schema: z.object({
        title: z.string(),
        tags: z.string().transform(str => str.split(' ')),
        label: z.string(),
        anchor: z.string().url(),
        date: z.coerce.date(),
        desc: z.string(),
    }),
});

const experiences = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./experiences" }),
    schema: z.object({
        title: z.string(),
        start_year: z.number().int().min(1900).max(new Date().getFullYear()),
        end_year: z.union([z.number().int().min(1900).max(new Date().getFullYear()), z.literal('Present')]),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./projects" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { links, experiences, projects };
