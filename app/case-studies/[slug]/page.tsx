import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies";
import { site } from "@/lib/site";
import { CaseStudyArticle } from "@/features/case-studies/components/case-study-article";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug, false);
  if (!study) return {};
  const { meta } = study;
  const title = `${meta.title} | Case study`;
  const description = meta.summary;
  const image = meta.coverImage.startsWith("http")
    ? meta.coverImage
    : `${site.url}${meta.coverImage}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug, true);
  if (!study) notFound();

  return <CaseStudyArticle meta={study.meta} content={study.content} />;
}
