import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/shared/components/navbar";
import { getPublishedCaseStudies } from "@/lib/case-studies";
import { SectionChip } from "@/shared/components/section-chip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "In-depth write-ups of selected projects by Frank Mosehla. Web and mobile apps, AI systems, and product engineering.",
  openGraph: {
    title: "Case studies | Frank Mosehla",
    description:
      "In-depth write-ups of selected projects by Frank Mosehla. Web and mobile apps, AI systems, and product engineering.",
    url: `${site.url}/case-studies`,
  },
  alternates: {
    canonical: `${site.url}/case-studies`,
  },
};

export default function CaseStudiesIndexPage() {
  const caseStudies = getPublishedCaseStudies();

  return (
    <>
      <Navbar />
      <main className="relative mt-[7rem] min-h-screen border-t border-dashed border-[#d6d8da] dark:border-[#272c37]">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 border-t border-dashed border-[#d6d8da] dark:border-[#272c37]" aria-hidden />
        <div className="flex flex-col items-center px-3 md:px-8">
          <div className="w-full max-w-[1280px] border-x border-dashed border-[#d6d8da] px-4 py-10 dark:border-[#272c37] md:px-10">
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to home
            </Link>
            <div className="mb-4 flex justify-center">
              <SectionChip>Portfolio</SectionChip>
            </div>
            <h1 className="text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
              Case studies
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base text-[#545961] dark:text-[#a6a9ae]">
              In-depth write-ups of selected projects.
            </p>

            <div className="mx-auto mt-12 grid max-w-[800px] grid-cols-1 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] transition-opacity hover:opacity-95 dark:border-[#272c37] dark:bg-[#090a0d]"
                >
                  <div className="relative h-[240px] w-full overflow-hidden border-b border-[#eaeaeb] bg-[#f9f9f9] dark:border-[#272c37] dark:bg-[#181c24]">
                    {study.coverImage ? (
                      <Image
                        src={study.coverImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[#545961] dark:text-[#a6a9ae]">
                        {study.title}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h2 className="font-sans text-xl font-bold text-[#090a0d] dark:text-white">
                      {study.title}
                    </h2>
                    <p className="font-sans text-sm font-normal leading-5 text-[#545961] dark:text-[#a6a9ae] line-clamp-2">
                      {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-dashed border-[#d6d8da] bg-[#f4f4f4] px-2.5 py-1 font-sans text-xs text-[#545961] dark:border-[#272c37] dark:bg-[#181c24] dark:text-[#a6a9ae]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
