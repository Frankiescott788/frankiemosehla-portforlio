import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/shared/components/navbar";
import { Badge } from "@/shared/components/ui/badge";
import { CaseStudyMarkdown } from "@/features/case-studies/components/case-study-markdown";
import type { CaseStudyMeta } from "@/lib/case-studies";

type CaseStudyArticleProps = {
  meta: CaseStudyMeta;
  content: string;
};

export function CaseStudyArticle({ meta, content }: CaseStudyArticleProps) {
  return (
    <>
      <Navbar />
      <main className="relative mt-[7rem] min-h-screen border-t border-dashed border-[#d6d8da] dark:border-[#272c37]">
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 border-t border-dashed border-[#d6d8da] dark:border-[#272c37]"
          aria-hidden
        />
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

            <CaseStudyHeader meta={meta} />
            <CaseStudyMarkdown content={content} />
          </article>
        </div>
      </main>
    </>
  );
}

function CaseStudyHeader({ meta }: { meta: CaseStudyMeta }) {
  return (
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
  );
}
