import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		readingTime: z.string(),
		featured: z.boolean().default(false)
	})
});

const resources = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		readingTime: z.string(),
		featured: z.boolean().default(false)
	})
});

export const collections = { blog, resources };
