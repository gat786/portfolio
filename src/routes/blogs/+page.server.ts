import { glob } from 'glob';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const prerender = true;

type BlogFiles = {
  file_names: string[];
}

export const load: PageServerLoad<BlogFiles> = async({params}) => {
  let static_blogs_prefix = 'static/blog_content/';
  
  let blogs = await glob([`${static_blogs_prefix}/**/*.md`]);

  const blogs_remapped = blogs.map((blog) => {
    blog = blog.replace(static_blogs_prefix, '');
    return blog;
  });
  return {
    file_names : blogs_remapped
  }
}
