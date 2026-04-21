import { getCollection } from "astro:content";

function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]) {
	return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getAllBlogPosts() {
	const posts = await getCollection("blog");
	return sortByDateDesc(posts);
}

export async function getFeaturedBlogPosts(limit = 3) {
	const posts = await getAllBlogPosts();
	return posts.filter((post) => post.data.featured).slice(0, limit);
}

export async function getAllResources() {
	const resources = await getCollection("resources");
	return sortByDateDesc(resources);
}

export async function getFeaturedResources(limit = 3) {
	const resources = await getAllResources();
	return resources.filter((resource) => resource.data.featured).slice(0, limit);
}
