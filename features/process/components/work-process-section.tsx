"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionChip } from "@/shared/components/section-chip";
import { useCallback, useRef, useState } from "react";
import { steps } from "@/features/process/constants/steps";
import { STACK_ROW_1, STACK_ROW_2 } from "@/features/process/constants/stack";
import { StackCard } from "@/features/process/components/stack-card";
import { StackPopover } from "@/features/process/components/stack-popover";
import type { StackItem } from "@/features/process/constants/stack";

export function WorkProcessSection() {
  const [popover, setPopover] = useState<{ item: StackItem; anchor: DOMRect } | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStackHover = useCallback((item: StackItem | null, anchor: DOMRect | null) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (item && anchor) {
      setPopover({ item, anchor });
    } else {
      closeTimeoutRef.current = setTimeout(() => setPopover(null), 120);
    }
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setPopover(null), 120);
  }, []);

  return (
    <section id="process" className="py-16 md:py-24 px-5">
      <div>
        <div className="mb-4 flex justify-center">
          <SectionChip>Work process</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Swift steps toward product launch
        </h2>
        <p className="mt-4 font-sans text-center text-base font-normal leading-6  text-[#545961] dark:text-[#a6a9ae]">
          The work process is crafted to optimize for speedy and quality product
          outcomes.
        </p>
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex min-w-0 flex-1 flex-col items-start justify-center rounded-2xl border border-dashed border-[#d6d8da] bg-white p-5 font-sans text-xs shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#eaeaeb] bg-white shadow-[0_4px_8px_-4px_rgba(16,24,40,0.08)] dark:border-[#272c37] dark:bg-[#181c24]">
                <Image
                  src={step.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 dark:invert"
                />
              </div>
              <h3 className="mt-6 text-left font-sans text-xl font-medium leading-[30px] text-[#181c24] dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-base font-normal leading-6 text-left text-[#545961] dark:text-[#a6a9ae]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <SectionChip showDot={false}>My current tech stack</SectionChip>
        </div>
        <div className="relative mt-6 w-full overflow-hidden">
          <div className="group">
            <div
              className="flex w-max gap-4 py-2 animate-marquee-left group-hover:paused"
              style={popover ? { animationPlayState: "paused" } : undefined}
            >
              {[...STACK_ROW_1, ...STACK_ROW_1].map((item, i) => (
                <StackCard item={item} index={i} key={`row1-${i}`} onHoverChange={handleStackHover} />
              ))}
            </div>
          </div>
          <div className="group">
            <div
              className="flex w-max gap-4 py-2 animate-marquee-right group-hover:paused"
              style={popover ? { animationPlayState: "paused" } : undefined}
            >
              {[...STACK_ROW_2, ...STACK_ROW_2].map((item, i) => (
                <StackCard item={item} index={i} key={`row2-${i}`} onHoverChange={handleStackHover} />
              ))}
            </div>
          </div>
        </div>
        {popover && (
          <StackPopover
            item={popover.item}
            anchor={popover.anchor}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 my-12">
        <Link
          href="#book"
          className="flex h-10 w-[140px] shrink-0 items-center justify-center gap-2 rounded-[12px] bg-[#090a0d] px-5 py-1 font-sans text-xs text-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37]"
        >
          Book a call
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-[140px] shrink-0 items-center justify-center gap-2 rounded-[12px] border border-dashed border-[#d6d8da] bg-white px-5 py-1 font-sans text-xs text-[#090a0d] shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37] dark:bg-[#181c24] dark:text-white"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
