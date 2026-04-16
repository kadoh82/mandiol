import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/** Directory containing shared offence markdown files (repo root). */
const CONTENT_DIR = path.join(process.cwd(), "..", "content", "offences");

export type OffenceFrontmatter = {
  id: string;
  title: string;
  statute: string;
  maxSentence: string;
  isCrime: boolean;
  order: number;
};

export type OffenceSummary = OffenceFrontmatter & {
  slug: string;
  /** First paragraph extracted from the "What is it?" section. */
  excerpt: string;
};

export type OffenceDetail = OffenceSummary & {
  contentHtml: string;
};

/** Return all offence slugs (filenames without .md). */
export function getOffenceSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Parse frontmatter + extract a short excerpt from the markdown body. */
function parseOffenceFile(slug: string): {
  data: OffenceFrontmatter;
  content: string;
  excerpt: string;
} {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Extract the first paragraph after "## What is it?"
  const whatIsIt = content.match(
    /## What is it\?\s*\n\n([\s\S]*?)(?=\n##|\n---|\n$)/
  );
  const excerpt = whatIsIt
    ? whatIsIt[1].trim().split("\n\n")[0]
    : content.slice(0, 200);

  return { data: data as OffenceFrontmatter, content, excerpt };
}

/** Get a sorted list of all offences with summary info. */
export function getAllOffences(): OffenceSummary[] {
  const slugs = getOffenceSlugs();
  return slugs
    .map((slug) => {
      const { data, excerpt } = parseOffenceFile(slug);
      return { ...data, slug, excerpt };
    })
    .sort((a, b) => a.order - b.order);
}

/** Get full detail for a single offence including rendered HTML. */
export async function getOffenceBySlug(
  slug: string
): Promise<OffenceDetail | null> {
  try {
    const { data, content, excerpt } = parseOffenceFile(slug);
    const result = await remark().use(html).process(content);
    return {
      ...data,
      slug,
      excerpt,
      contentHtml: result.toString(),
    };
  } catch {
    return null;
  }
}
