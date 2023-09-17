import { glob } from 'glob';
import { error } from '@sveltejs/kit';

import matter from 'gray-matter';

import type { PageServerLoad } from './$types';
import type { BlogFiles } from "$lib/models/blog"

import { static_blogs_prefix } from "$lib/constants";

export const prerender = true;

export const load: PageServerLoad<BlogFiles> = async({params}) => {
  let blogs = await glob([`${static_blogs_prefix}/**/*.md`]);

  const blogs_remapped = blogs.map((blog) => {
    const frontmatter = matter.read(blog).data;
    blog = blog.replace(static_blogs_prefix, '');
    blog = blog.replace('.md', '');
    return blog;
  });
  return {
    file_names : blogs_remapped
  }
}
