import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  techStack: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  status: "draft" | "published";
};

export type CaseStudyMeta = CaseStudyFrontmatter & {
  slug: string;
};

export type CaseStudy = {
  meta: CaseStudyMeta;
  content: string;
};

function getSlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

/**
 * Get raw file content and parsed frontmatter for a case study by slug.
 * Returns null if not found or status is not published (when requirePublished is true).
 */
export function getCaseStudyBySlug(
  slug: string,
  requirePublished = true
): CaseStudy | null {
  const p = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(p)) return null;
  const raw = fs.readFileSync(p, "utf-8");
  const { data, content } = matter(raw);
  const meta = data as unknown as CaseStudyMeta;
  meta.slug = slug;
  if (requirePublished && meta.status !== "published") return null;
  return { meta, content };
}

/**
 * All published case studies, sorted by title.
 */
export function getPublishedCaseStudies(): CaseStudyMeta[] {
  const slugs = getSlugs();
  const list: CaseStudyMeta[] = [];
  for (const slug of slugs) {
    const study = getCaseStudyBySlug(slug, true);
    if (study) list.push(study.meta);
  }
  return list.sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * All case study slugs (for generateStaticParams).
 */
export function getCaseStudySlugs(): string[] {
  return getSlugs();
}
