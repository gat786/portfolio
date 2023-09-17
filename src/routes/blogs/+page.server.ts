import { glob } from 'glob';
import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const prerender = true;

type BlogFiles = {
  file_names: string[];
}

export const load: PageServerLoad<BlogFiles> = async({params}) => {
  const blogs = await glob(['static/**/*.md']);
  return {
    file_names : blogs
  }
}
