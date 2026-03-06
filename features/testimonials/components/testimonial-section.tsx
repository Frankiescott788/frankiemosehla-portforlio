import { SectionChip } from "@/shared/components/section-chip";
import { testimonials } from "@/features/testimonials/constants/testimonials";

export function TestimonialSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="testimonials" className="hero-pattern px-5 py-16 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Software mindset</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          What people say
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Feedback from clients and collaborators.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name + t.role}
              className="flex min-w-0 flex-col rounded-2xl border border-dashed border-[#d6d8da] bg-white p-6 font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]"
            >
              <blockquote className="flex-1 font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
                {t.quote}
              </blockquote>
              <footer className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d6d8da] bg-[#f4f4f4] font-sans text-lg font-medium text-[#545961] dark:border-[#272c37] dark:bg-[#181c24] dark:text-[#a6a9ae]">
                  {t.initial}
                </div>
                <div>
                  <cite className="not-italic font-sans text-base font-medium text-[#090a0d] dark:text-white">
                    {t.name}
                  </cite>
                  <p className="font-sans text-sm text-[#545961] dark:text-[#a6a9ae]">
                    {t.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
