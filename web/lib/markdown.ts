import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_ROOT = path.join(process.cwd(), "..", "content");

export type ContentPage = {
  slug: string;
  title: string;
  contentHtml: string;
  frontmatter: Record<string, unknown>;
};

/**
 * Check if a content directory exists and list available slugs.
 * Returns an empty array if the directory doesn't exist.
 */
export function getContentSlugs(subdir: string): string[] {
  const dir = path.join(CONTENT_ROOT, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/**
 * Read and render a single markdown file from content/<subdir>/<slug>.md.
 * Returns null if the file doesn't exist.
 */
export async function getContentPage(
  subdir: string,
  slug: string
): Promise<ContentPage | null> {
  const filePath = path.join(CONTENT_ROOT, subdir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const result = await remark().use(html).process(content);

  return {
    slug,
    title: (data.title as string) || slug,
    contentHtml: result.toString(),
    frontmatter: data,
  };
}
