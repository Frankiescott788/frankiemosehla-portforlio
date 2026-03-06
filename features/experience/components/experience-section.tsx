import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineLine,
} from "@/shared/components/ui/timeline";
import { SectionChip } from "@/shared/components/section-chip";
import { experiences } from "@/features/experience/constants/experiences";

export function ExperienceSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="experience" className="px-5 py-16 md:py-24">
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
          <Timeline
            positions="left"
            className="font-sans [&_li]:grid-rows-[auto_1fr] [&_li]:gap-y-0 [&_li]:gap-x-4"
          >
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.role + exp.date}
                status="done"
                className="text-[#090a0d] dark:text-white"
              >
                <div className="col-start-3 col-end-4 row-start-1 row-end-1 mr-auto flex w-full max-w-full items-baseline justify-between gap-4 text-left">
                  <p className="min-w-0 text-lg font-bold text-[#090a0d] dark:text-white">
                    {exp.role}
                    {"company" in exp && exp.company != null && (
                      <span className="font-normal text-[#545961] dark:text-[#a6a9ae]">
                        {" "}
                        ({exp.company})
                      </span>
                    )}
                  </p>
                  <div className="shrink-0 text-right font-sans text-sm">
                    <p className="font-medium text-[#090a0d] dark:text-white">
                      {exp.date}
                    </p>
                    <p className="font-normal text-[#545961] dark:text-[#a6a9ae]">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <TimelineDot
                  status="done"
                  className="!border-[#d6d8da] !bg-[#090a0d] dark:!border-[#272c37] dark:!bg-[#272c37] [&_.lucide-check]:!text-white"
                />
                <TimelineContent
                  side="right"
                  className="!pb-10 !text-[#545961] dark:!text-[#a6a9ae]"
                >
                  {exp.description != null && (
                    <p className="font-sans text-sm leading-5">
                      {exp.description}
                    </p>
                  )}
                  {exp.bullets != null && exp.bullets.length > 0 && (
                    <ul className="mt-2 list-disc pl-4 font-sans text-sm leading-5">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="mt-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </TimelineContent>
                {i < experiences.length - 1 && (
                  <TimelineLine
                    done
                    className="!bg-[#d6d8da] dark:!bg-[#272c37]"
                  />
                )}
              </TimelineItem>
            ))}
          </Timeline>
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
