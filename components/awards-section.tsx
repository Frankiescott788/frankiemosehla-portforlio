"use client";

import Image from "next/image";
import { SectionChip } from "@/components/section-chip";
import { useCallback, useState } from "react";

type Award = {
  title: string;
  place?: string;
  date?: string;
  team?: string;
  description: string;
  placeholder?: boolean;
} & (
  | {
      placeholder: true;
    }
  | {
      placeholder?: false;
      tags: string[];
      imageSrc: string;
      imageAlt: string;
    }
);

const awards: Award[] = [
  {
    title: "Telkom 10x Hackathon",
    place: "First Place",
    date: "14 September 2025",
    team: "The Engineers",
    description:
      "Won first place with our Smart Shelf system — an IoT solution with a camera, sensors, and speaker that tracks when items are removed from a shelf and updates a web app in real time. Built with Next.js frontend and Python backend for rapid development and robust performance. Incredible teamwork, late-night coding sessions, and lots of problem-solving led us to victory.",
    tags: ["Next.js", "Python", "IoT", "Real-time"],
    imageSrc: "/images/awards/telkom-hack.png",
    imageAlt: "Telkom 10x Hackathon — First Place",
  },
  {
    title: "Geekulcha Annual Hackathon",
    place: "Third Place",
    date: "06 October 2024",
    team: "The Engineers",
    description:
      "My team, The Engineers, secured 3rd place at the Geekulcha Annual Hackathon with Thuso, an innovative project designed to assist blind individuals. Thuso combines a physical navigation bot with a web app for real-time monitoring and management, enhancing safety and mobility for visually impaired users.",
    tags: ["Hardware", "Web app", "Accessibility", "Thuso"],
    imageSrc: "/images/awards/ghack-2024.jpg",
    imageAlt: "Geekulcha Annual Hackathon 2024",
  },
  {
    title: "Telkom Learn Limpopo Hackathon",
    place: "First Place",
    date: "04 September 2024",
    team: "The Engineers",
    description:
      "Created during the Telkom Learn Limpopo Hackathon, my team, The Engineers, secured 1st place with this innovative web app. It promotes digital inclusivity by connecting underserved communities with resources, gamified learning modules, and accessibility features. It includes an AI chatbot and integration with the Thuso bot to assist users, including the visually impaired, along with community forums, a resource database, and interactive digital literacy training to help bridge the digital divide.",
    tags: ["Web app", "AI chatbot", "Thuso", "Accessibility"],
    imageSrc: "/images/awards/telkom-learn.png",
    imageAlt: "Telkom Learn Limpopo Hackathon — First Place",
  },
];

export function AwardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeModal = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="awards" className="px-5 py-16 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Hackathons</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Awards & wins
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Me and my team, The Engineers, have won three hackathons.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3">
          {awards.map((award, i) => (
            <article
              key={award.title + i}
              role={award.placeholder ? undefined : "button"}
              tabIndex={award.placeholder ? undefined : 0}
              onClick={
                award.placeholder
                  ? undefined
                  : () => setOpenIndex(i)
              }
              onKeyDown={
                award.placeholder
                  ? undefined
                  : (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenIndex(i);
                      }
                    }
              }
              className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d] ${award.placeholder ? "" : "cursor-pointer"}`}
              style={
                award.placeholder
                  ? undefined
                  : { cursor: 'url("/icons/pointinghand.svg") 16 8, pointer' }
              }
            >
              {"placeholder" in award && award.placeholder ? (
                <>
                  <div className="flex flex-1 flex-col items-center justify-center gap-3 border-b border-dashed border-[#d6d8da] bg-[#f9f9f9] p-8 dark:border-[#272c37] dark:bg-[#181c24]">
                    <p className="text-center font-sans text-2xl font-bold text-[#090a0d] dark:text-white ">
                      {award.title}
                    </p>
                    <p className="text-center font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
                      {award.description}
                    </p>
                  </div>
                </>
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
          ))}
        </div>

        {/* Modal: full description */}
        {openIndex !== null && !awards[openIndex]?.placeholder && (() => {
          const a = awards[openIndex];
          if (!a || "placeholder" in a) return null;
          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="award-modal-title"
            >
              <div
                className="absolute inset-0 bg-black/50"
                onClick={closeModal}
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
                    onClick={closeModal}
                    className="w-full rounded-xl border border-dashed border-[#d6d8da] bg-[#090a0d] py-2 font-sans text-sm font-medium text-white dark:border-[#272c37] dark:bg-white dark:text-[#090a0d]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </section>
    </>
  );
}
