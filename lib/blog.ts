import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Files are named YYYY-MM-DD_slug.mdx. The date prefix is for filesystem
// ordering only; the URL slug is everything after the date prefix.
const FILENAME_RE = /^\d{4}-\d{2}-\d{2}_(.+)\.mdx$/;

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  updated: string;
  description: string;
  tags: string[];
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function filenameToSlug(filename: string): string {
  const match = filename.match(FILENAME_RE);
  if (!match) {
    throw new Error(`Blog file "${filename}" does not match YYYY-MM-DD_slug.mdx`);
  }
  return match[1];
}

function readPost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug: filenameToSlug(filename),
    title: data.title,
    date: data.date,
    updated: data.updated ?? data.date,
    description: data.description,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

function listMdxFilenames(): string[] {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  return listMdxFilenames()
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filename = listMdxFilenames().find((f) => filenameToSlug(f) === slug);
  return filename ? readPost(filename) : undefined;
}

export function getAllSlugs(): string[] {
  return listMdxFilenames().map(filenameToSlug);
}
