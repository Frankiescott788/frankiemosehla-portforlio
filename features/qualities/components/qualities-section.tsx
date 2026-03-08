import Link from "next/link";
import { SectionChip } from "@/shared/components/section-chip";
import { qualities } from "@/features/qualities/constants/qualities";
import { site } from "@/lib/site";

export function QualitiesSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="qualities" className="hero-pattern px-0 py-16 md:px-5 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Key values</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Fundamental qualities
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Strong engineering partnerships are built on fundamentals: ownership, clarity, and a bias for shipping.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((item) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col rounded-2xl border border-dashed border-[#d6d8da] bg-white p-6 font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#eaeaeb] bg-white shadow-[0_4px_8px_-4px_rgba(16,24,40,0.08)] dark:border-[#272c37] dark:bg-[#181c24]">
                <item.icon className="size-6 text-[#090a0d] dark:text-white" />
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold text-[#090a0d] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-5 text-[#545961] dark:text-[#a6a9ae]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#book"
            className="flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-[12px] border-x border-dashed border-[#d6d8da] bg-[#090a0d] px-5 py-1 font-sans text-xs text-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37]"
          >
            Book a call
          </Link>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-[12px] border border-dashed border-[#d6d8da] bg-white px-5 py-1 font-sans text-xs text-[#090a0d] shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37] dark:bg-[#181c24] dark:text-white"
          >
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
