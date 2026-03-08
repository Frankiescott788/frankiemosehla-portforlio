import Image from "next/image";
import Link from "next/link";
import { SectionChip } from "@/shared/components/section-chip";
import { projects } from "@/features/projects/constants/projects";

const cardClass =
  "flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]";

export function ProjectsSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="projects" className="px-0 py-16 md:px-5 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Portfolio</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Selected projects
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          A few recent builds across web, mobile, and AI.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const slug = project.caseStudySlug;
            const content = (
              <>
                <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden border-b border-[#eaeaeb] bg-[#f9f9f9] px-6 py-8 dark:border-[#272c37] dark:bg-[#181c24]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={580}
                    height={220}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-sans text-xl font-bold text-[#090a0d] dark:text-white">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-5 text-[#545961] dark:text-[#a6a9ae]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-dashed border-[#d6d8da] bg-[#f4f4f4] px-2.5 py-1 font-sans text-xs text-[#545961] dark:border-[#272c37] dark:bg-[#181c24] dark:text-[#a6a9ae]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );
            if (slug) {
              return (
                <Link
                  key={project.title}
                  href={`/case-studies/${slug}`}
                  className={`${cardClass} transition-opacity hover:opacity-95`}
                >
                  {content}
                </Link>
              );
            }
            return (
              <article key={project.title} className={cardClass}>
                {content}
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#projects"
            className="flex h-10 min-w-[140px] items-center justify-center gap-2 rounded-[12px]  bg-[#090a0d] px-5 py-1 font-sans text-xs text-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37]"
          >
            View more projects
          </Link>
        </div>
      </section>
    </>
  );
}
