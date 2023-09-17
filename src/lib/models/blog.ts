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
  tags: string[];
  description: string;
  authors: Author[];
}

export type BlogFiles = {
  file_names: string[];
}
