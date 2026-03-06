"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroWithCursor() {
  return (
    <section className="body-pattern relative mt-4">
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
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6 shrink-0 animate-spin"
            aria-hidden
          >
            <path d="M12 2v4" />
            <path d="m16.2 7.8 2.9-2.9" />
            <path d="M18 12h4" />
            <path d="m16.2 16.2 2.9 2.9" />
            <path d="M12 18v4" />
            <path d="m4.9 19.1 2.9-2.9" />
            <path d="M2 12h4" />
            <path d="m4.9 4.9 2.9 2.9" />
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
