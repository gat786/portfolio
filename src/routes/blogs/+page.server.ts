import { glob } from 'glob';

import matter from 'gray-matter';

import type { PageServerLoad } from './$types';
import type { BlogList, Blog } from '$lib/models/blog';

import { static_blogs_prefix } from '$lib/constants';

export const prerender = true;

export const load: PageServerLoad<BlogList> = async () => {
	const blogs = await glob([`${static_blogs_prefix}/**/*.md`]);

	const blogs_remapped = blogs.map((blog) => {
		const file_matter = matter.read(blog);

		const { title, description, created_on, tags, authors } = file_matter.data;
		let url_postfix = blog.replace(static_blogs_prefix, '');
		url_postfix = url_postfix.replace('.md', '');
		const blog_object: Blog = {
			front_matter: {
				title,
				description,
				created_on,
				tags,
				authors,
				file_path: blog,
				url_postfix: url_postfix
			},
			content: ''
		};

		return blog_object;
	});

	const sorted_blogs = blogs_remapped.sort((a, b) => {
		return (
			new Date(b.front_matter.created_on).getTime() - new Date(a.front_matter.created_on).getTime()
		);
	});

	return {
		blogs: sorted_blogs
	};
};
