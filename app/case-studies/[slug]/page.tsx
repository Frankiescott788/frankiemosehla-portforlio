import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- rehype-highlight types not resolved in some setups
// @ts-ignore
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Navbar } from "@/shared/components/navbar";
import { Badge } from "@/shared/components/ui/badge";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies";
import { site } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

type MDXChildren = { children?: React.ReactNode };

const markdownComponents = {
  h1: ({ children }: MDXChildren) => (
    <h1 className="mb-4 mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground first:mt-0 md:text-3xl">
      {children}
    </h1>
  ),
  h2: ({ children }: MDXChildren) => (
    <h2 className="mb-3 mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }: MDXChildren) => (
    <h3 className="mb-2 mt-6 text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: MDXChildren) => <p className="mb-4 leading-7 text-foreground">{children}</p>,
  ul: ({ children }: MDXChildren) => (
    <ul className="mb-5 ml-4 list-disc space-y-1.5 pl-1 text-foreground [&>li]:leading-7">
      {children}
    </ul>
  ),
  ol: ({ children }: MDXChildren) => (
    <ol className="mb-5 ml-4 list-decimal space-y-1.5 pl-1 text-foreground [&>li]:leading-7">
      {children}
    </ol>
  ),
  li: ({ children }: MDXChildren) => <li className="pl-0.5">{children}</li>,
  blockquote: ({ children }: MDXChildren) => (
    <blockquote className="mb-5 border-l-4 border-primary/40 bg-muted/40 py-1 pl-4 pr-2 font-sans text-base italic text-muted-foreground [&>p]:mb-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: (props: { href?: string; children?: React.ReactNode }) => (
    <Link href={props.href ?? "#"} className="text-primary underline-offset-4 hover:underline" target={props.href?.startsWith("http") ? "_blank" : undefined} rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}>
      {props.children}
    </Link>
  ),
  strong: ({ children }: MDXChildren) => <strong className="font-semibold text-foreground">{children}</strong>,
  table: ({ children }: MDXChildren) => (
    <div className="mb-6 w-full overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: MDXChildren) => <thead className="border-b border-border bg-muted/50">{children}</thead>,
  tbody: ({ children }: MDXChildren) => <tbody className="divide-y divide-border">{children}</tbody>,
  tr: ({ children }: MDXChildren) => <tr className="border-border">{children}</tr>,
  th: ({ children }: MDXChildren) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }: MDXChildren) => <td className="px-4 py-3 text-muted-foreground">{children}</td>,
  pre: ({ children }: MDXChildren) => (
    <pre className="mb-6 overflow-x-auto rounded-lg bg-[#0d1117] p-4 text-sm">
      {children}
    </pre>
  ),
  code: (props: { className?: string; children?: React.ReactNode; node?: unknown }) => {
    const isBlock = Boolean(props.className);
    if (isBlock) {
      return <code className={props.className}>{props.children}</code>;
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
        {props.children}
      </code>
    );
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="my-6 block overflow-hidden rounded-lg border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} alt={props.alt ?? ""} className="h-auto w-full object-cover" />
    </span>
  ),
};

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
  const image = meta.coverImage.startsWith("http") ? meta.coverImage : `${site.url}${meta.coverImage}`;
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

  const { meta, content } = study;

  return (
    <>
      <Navbar />
      <main className="relative mt-[7rem] min-h-screen border-t border-dashed border-[#d6d8da] dark:border-[#272c37]">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 border-t border-dashed border-[#d6d8da] dark:border-[#272c37]" aria-hidden />
        <div className="flex flex-col items-center px-3 md:px-8">
          <article className="w-full max-w-[800px] border-x border-dashed border-[#d6d8da] px-4 py-10 dark:border-[#272c37] md:px-10">
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              ← Case studies
            </Link>

            {meta.coverImage && (
              <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg border border-[#d6d8da] dark:border-[#272c37]">
                <Image
                  src={meta.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 800px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="font-geist-sans text-3xl font-semibold tracking-tight md:text-4xl">
                {meta.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{meta.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {meta.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              {(meta.liveUrl || meta.githubUrl) && (
                <div className="mt-4 flex gap-3">
                  {meta.liveUrl && (
                    <Link
                      href={meta.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      Live site
                    </Link>
                  )}
                  {meta.githubUrl && (
                    <Link
                      href={meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              )}
            </header>

            <div className="case-study-prose">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={markdownComponents as import("react-markdown").Components}
              >
                {content}
              </Markdown>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
