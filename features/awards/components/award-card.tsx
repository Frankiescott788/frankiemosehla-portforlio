"use client";

import Image from "next/image";
import type { Award } from "@/features/awards/constants/awards";

export function AwardCard({
  award,
  index,
  onSelect,
}: {
  award: Award;
  index: number;
  onSelect: () => void;
}) {
  const isPlaceholder = "placeholder" in award && award.placeholder;

  return (
    <article
      key={award.title + index}
      role={isPlaceholder ? undefined : "button"}
      tabIndex={isPlaceholder ? undefined : 0}
      onClick={isPlaceholder ? undefined : onSelect}
      onKeyDown={
        isPlaceholder
          ? undefined
          : (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect();
              }
            }
      }
      className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d] ${isPlaceholder ? "" : "cursor-pointer"}`}
      style={
        isPlaceholder
          ? undefined
          : { cursor: 'url("/icons/pointinghand.svg") 16 8, pointer' }
      }
    >
      {isPlaceholder ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 border-b border-dashed border-[#d6d8da] bg-[#f9f9f9] p-8 dark:border-[#272c37] dark:bg-[#181c24]">
          <p className="text-center font-sans text-2xl font-bold text-[#090a0d] dark:text-white ">
            {award.title}
          </p>
          <p className="text-center font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
            {award.description}
          </p>
        </div>
      ) : (
        <>
          <div className="relative aspect-video w-full bg-[#f9f9f9] dark:bg-[#181c24]">
            <Image
              src={award.imageSrc}
              alt={award.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex flex-col gap-3 p-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-sans text-xl font-bold text-[#090a0d] dark:text-white w-[70%] line-clamp-1">
                {award.title}
              </h3>
              <span className="shrink-0 rounded-md border border-dashed border-[#d6d8da] bg-[#f4f4f4] px-2.5 py-1 font-sans text-xs font-medium text-[#090a0d] dark:border-[#272c37] dark:bg-[#181c24] dark:text-white">
                {award.place}
              </span>
            </div>
            <p className="font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
              {award.date} · {award.team}
            </p>
            <p className="line-clamp-2 font-sans text-sm leading-5 text-[#545961] dark:text-[#a6a9ae]">
              {award.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {award.tags.map((tag) => (
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
      )}
    </article>
  );
}
