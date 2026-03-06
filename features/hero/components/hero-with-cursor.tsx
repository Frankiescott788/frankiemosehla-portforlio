"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroWithCursor() {
  return (
    <section className="hero-pattern relative mt-4">
      <div
        className="absolute bottom-8 right-8 z-20 md:bottom-12 md:right-12"
        aria-hidden
      >
        <Image
          src="/icons/cursor-frankie.svg"
          alt="Frankie"
          width={111}
          height={62}
          className="h-[52px] w-auto shrink-0 md:h-[62px] pointer-events-none"
          aria-hidden
        />
      </div>

      <section
        className="flex h-[104px] flex-col items-center justify-center font-sans text-xs text-[#16a34a]"
        aria-hidden
      >
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-4 shrink-0 [&_path]:fill-current"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM16.6757 8.26285C17.0828 8.63604 17.1103 9.26861 16.7372 9.67573L11.2372 15.6757C11.0528 15.8768 10.7944 15.9938 10.5217 15.9998C10.249 16.0057 9.98576 15.9 9.79289 15.7071L7.29289 13.2071C6.90237 12.8166 6.90237 12.1834 7.29289 11.7929C7.68342 11.4024 8.31658 11.4024 8.70711 11.7929L10.4686 13.5544L15.2628 8.32428C15.636 7.91716 16.2686 7.88966 16.6757 8.26285Z"
            />
          </svg>
          <span className="font-medium uppercase tracking-wide">
            Open for new projects in Mar 2026
          </span>
        </div>
      </section>

      <section className="px-8 pb-16 text-center md:px-12">
        <h1 className="mx-auto max-w-2xl font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl lg:text-[60px]">
          The guy who ships. Software & AI Engineer.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-[#545961] dark:text-[#a6a9ae] text-[18px]">
          Imagine it on Monday. Ship it by Friday. Clean code, beautiful UI,
          built to last.
        </p>
        <Link
          href="#book"
          className="mx-auto mt-8 inline-flex h-12 shrink-0 items-center justify-center gap-4 rounded-xl border-0 bg-[#090a0d] py-2 pl-[18px] pr-[14px] font-sans text-[16px] text-white shadow-[0_6px_8px_-6px_rgba(16,24,40,0.16)] hover:bg-[#272c37] dark:hover:bg-[#181c24] [&_svg]:size-5 font-medium cursor-pointer"
        >
          Schedule a 20-minute call
          <span className="relative block h-6 w-6 shrink-0 overflow-hidden rounded-[6px] border border-white/30 bg-[#272c37] dark:bg-[#272c37] dark:border-white/20" aria-hidden>
            <Image
              src="/images/frankie.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="24px"
            />
          </span>
        </Link>
        
      </section>
    </section>
  );
}
