export type Author = {
  name: string;
  email: string | null;
  twitter: string | null;
  github: string | null;
  linkedin: string | null;
  website: string | null;
}

export type FrontMatter = {
  title: string;
  created_on: Date;
  file_path: string;
  url_postfix: string;
  tags: string[];
  description: string;
  authors: Author[];
}

export type Blog = {
  front_matter: FrontMatter;
  content: string;
}

export type BlogList = {
  blogs: Blog[];
}

export type BlogFiles = {
  file_names: string[];
}
