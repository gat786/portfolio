export const prerender = true;

import matter from 'gray-matter';
import { static_blogs_prefix } from '$lib/constants'
import type { Blog } from '$lib/models/blog';

export const load = ({ params }) => {
  const path = params.blogpath;

  let blog_file_path = [static_blogs_prefix, path].join('');
  blog_file_path = blog_file_path + '.md';
  console.log('Reading blog: ', blog_file_path);

  const file_matter = matter.read(blog_file_path);

  const { title, description, created_on, tags, authors } = file_matter.data;
  let blog: Blog = {
    front_matter: { title, description, created_on, tags, authors, file_path: blog_file_path },
    content: file_matter.content
  }

  return blog;
}
