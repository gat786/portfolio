export const prerender = true;

import matter from 'gray-matter';
import { marked } from 'marked';
import { static_blogs_prefix } from '$lib/constants'
import type { Blog } from '$lib/models/blog';

export const load = ({ params }) => {
  const path = params.blogpath;

  let blog_file_path = [static_blogs_prefix, path].join('');
  blog_file_path = blog_file_path + '.md';
  console.log('Reading blog: ', blog_file_path);

  const file_matter = matter.read(blog_file_path);

  const { title, description, created_on, tags, authors } = file_matter.data;

  const parsed_html = marked.parse(file_matter.content);
  let blog: Blog = {
    front_matter: { 
      title, 
      description, 
      created_on,
      tags,
      authors, 
      file_path: blog_file_path,
      url_postfix: path
    },
    content: parsed_html
  }

  return blog;
}
