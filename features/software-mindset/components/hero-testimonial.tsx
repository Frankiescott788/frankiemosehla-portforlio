import Image from "next/image";
import { SectionChip } from "@/shared/components/section-chip";

export function HeroTestimonial() {
  return (
    <section className="px-8 py-16 text-center md:px-12 md:py-24">
      <div className="mb-6 flex justify-center">
        <SectionChip>Software mindset</SectionChip>
      </div>
      <blockquote className="mx-auto max-w-3xl font-sans text-2xl font-medium leading-relaxed text-[#090a0d] dark:text-white md:text-[2rem] md:leading-relaxed">
      Every application must have an inherent amount of complexity that cannot be removed.
      </blockquote>
      <footer className="mt-8 flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d6d8da] bg-[#e5e7eb] dark:border-[#272c37] dark:bg-[#272c37]">
          <Image
            src="/images/tesler.png"
            alt="Larry Tesler"
            width={48}
            height={48}
            className="h-12 w-12 object-cover"
          />
        </div>
        <cite className="not-italic font-sans text-base font-medium text-[#090a0d] dark:text-white">
          <a
            href="https://en.wikipedia.org/wiki/Larry_Tesler"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            Larry Tesler
          </a>
        </cite>
        <p className="font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
        Cut/copy/paste, modeless computing, Apple chief scientist
        </p>
      </footer>
    </section>
  );
}
