import { glob } from 'glob';
import { error } from '@sveltejs/kit';

import matter from 'gray-matter';

import type { PageServerLoad } from './$types';
import type { BlogFiles, BlogList, Blog } from "$lib/models/blog"

import { static_blogs_prefix } from "$lib/constants";

export const prerender = true;

export const load: PageServerLoad<BlogList> = async({params}) => {
  let blogs = await glob([`${static_blogs_prefix}/**/*.md`]);

  const blogs_remapped = blogs.map((blog) => {
    const file_matter = matter.read(blog);

    const { title, description, created_on, tags, authors } = file_matter.data;
    let url_postfix = blog.replace(static_blogs_prefix, '');
    url_postfix = url_postfix.replace('.md', '');
    let blog_object: Blog = {
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
    }

    return blog_object;
  });

  return {
    blogs: blogs_remapped
  };
}
