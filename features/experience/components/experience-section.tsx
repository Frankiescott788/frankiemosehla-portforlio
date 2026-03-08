import { SectionChip } from "@/shared/components/section-chip";
import { experiences } from "@/features/experience/constants/experiences";
import { Check } from "lucide-react";

export function ExperienceSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="experience" className="px-0 py-16 md:px-5 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Résumé</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Professional experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Roles and impact so far.
        </p>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="flex flex-col">
            {experiences.map((exp, i) => (
              <li key={exp.role + exp.date} className="relative flex gap-x-4">
                {/* Left column: dot + line */}
                <div className="flex flex-col items-center lg:mt-1">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#090a0d] dark:bg-[#272c37]">
                    <Check className="size-3 text-white" />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="mt-1 w-0.5 grow bg-[#d6d8da] dark:bg-[#272c37]" />
                  )}
                </div>

                {/* Right column: content */}
                <div className="pb-10 w-full min-w-0">
                  <div className="flex w-full items-baseline justify-between gap-4">
                    <p className="text-lg font-bold text-[#090a0d] dark:text-white">
                      {exp.role}
                      {"company" in exp && exp.company != null && (
                        <span className="font-normal text-[#545961] dark:text-[#a6a9ae]">
                          {" "}({exp.company})
                        </span>
                      )}
                    </p>
                    <div className="shrink-0 text-right text-sm">
                      <p className="font-medium text-[#090a0d] dark:text-white">
                        {exp.date}
                      </p>
                      <p className="font-normal text-[#545961] dark:text-[#a6a9ae]">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.description != null && (
                    <p className="mt-1 text-sm leading-5 text-[#545961] dark:text-[#a6a9ae]">
                      {exp.description}
                    </p>
                  )}
                  {exp.bullets != null && exp.bullets.length > 0 && (
                    <ul className="mt-2 list-disc pl-4 text-sm leading-5 text-[#545961] dark:text-[#a6a9ae]">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="mt-1">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/Nkululeko_Frank_Mosehla_Resume.pdf-1.pdf"
            download
            className="flex h-10 min-w-[140px] items-center justify-center gap-2 rounded-[12px] border-x border-dashed border-[#d6d8da] bg-[#090a0d] px-5 py-1 font-sans text-xs text-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37]"
          >
            Download resume
          </a>
        </div>
      </section>
    </>
  );
}
