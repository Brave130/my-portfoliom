import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tech: z.array(z.string()), // Hier sagen wir: tech muss eine Liste sein!
		videoUrl: z.string().optional(),
		github: z.string().optional(),
	}),
});

export const collections = { projects };