"use client";

import { SectionChip } from "@/shared/components/section-chip";
import { useCallback, useState } from "react";
import { awards } from "@/features/awards/constants/awards";
import { AwardCard } from "@/features/awards/components/award-card";
import { AwardModal } from "@/features/awards/components/award-modal";

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
            <AwardCard
              key={award.title + i}
              award={award}
              index={i}
              onSelect={() => setOpenIndex(i)}
            />
          ))}
        </div>

        {openIndex !== null && !awards[openIndex]?.placeholder && (
          <AwardModal
            award={awards[openIndex]!}
            onClose={closeModal}
          />
        )}
      </section>
    </>
  );
}
