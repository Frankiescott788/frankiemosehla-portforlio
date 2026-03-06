"use client";

import Image from "next/image";
import type { Award } from "@/features/awards/constants/awards";

export function AwardModal({
  award,
  onClose,
}: {
  award: Award;
  onClose: () => void;
}) {
  if ("placeholder" in award && award.placeholder) return null;

  const a = award as Award & { tags: string[]; imageSrc: string; imageAlt: string };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="award-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white shadow-xl dark:border-[#272c37] dark:bg-[#090a0d]">
        <div className="relative aspect-video w-full bg-[#f9f9f9] dark:bg-[#181c24]">
          {a.imageSrc && (
            <Image
              src={a.imageSrc}
              alt={a.imageAlt ?? a.title}
              fill
              className="object-cover object-center"
              sizes="512px"
            />
          )}
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 id="award-modal-title" className="font-sans text-xl font-bold text-[#090a0d] dark:text-white">
              {a.title}
            </h3>
            {a.place && (
              <span className="shrink-0 rounded-md border border-dashed border-[#d6d8da] bg-[#f4f4f4] px-2.5 py-1 font-sans text-xs font-medium text-[#090a0d] dark:border-[#272c37] dark:bg-[#181c24] dark:text-white">
                {a.place}
              </span>
            )}
          </div>
          {(a.date || a.team) && (
            <p className="mt-2 font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
              {[a.date, a.team].filter(Boolean).join(" · ")}
            </p>
          )}
          <p className="mt-3 font-sans text-sm leading-5 text-[#545961] dark:text-[#a6a9ae]">
            {a.description}
          </p>
          {a.tags && a.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {a.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-dashed border-[#d6d8da] bg-[#f4f4f4] px-2.5 py-1 font-sans text-xs text-[#545961] dark:border-[#272c37] dark:bg-[#181c24] dark:text-[#a6a9ae]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-dashed border-[#d6d8da] p-4 dark:border-[#272c37]">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl border border-dashed border-[#d6d8da] bg-[#090a0d] py-2 font-sans text-sm font-medium text-white dark:border-[#272c37] dark:bg-white dark:text-[#090a0d]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
