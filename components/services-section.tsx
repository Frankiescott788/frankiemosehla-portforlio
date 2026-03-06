import Image from "next/image";
import { SectionChip } from "@/components/section-chip";

const services = [
  {
    iconSrc: "/images/services/icons/web-app.svg",
    title: "Web Apps",
    subtitle:
      "Build and ship production-ready web apps with clean architecture, performance in mind, and maintainable code.",
    imageSrc: "/images/services/web-app.svg",
    imageAlt: "Web application interface",
  },
  {
    iconSrc: "/images/services/icons/mobile.svg",
    title: "Mobile Apps",
    subtitle:
      "Deliver cross-platform mobile apps with React Native + Expo, smooth UX, and reliable releases.",
    imageSrc: "/images/services/mobile.svg",
    imageAlt: "Mobile app screens",
  },
  {
    iconSrc: "/images/services/icons/agent.svg",
    title: "AI Powered Systems",
    subtitle:
      "Build AI-powered systems and agents that automate workflows, integrate safely, and deliver real business value.",
    imageSrc: "/images/services/agents.svg",
    imageAlt: "AI agents and automation",
  },
  {
    iconSrc: "/images/services/icons/landing.svg",
    title: "Marketing Sites",
    subtitle:
      "Ship fast, SEO-friendly marketing pages with great performance, analytics readiness, and a solid deployment pipeline.",
    imageSrc: "/images/services/landing.svg",
    imageAlt: "Marketing site",
  },
];

export function ServicesSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="services" className="px-5 py-16 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Engineering services</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          What can we build?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Product engineering focused on shipping, quality, and long-term maintainability.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[689px] min-w-0 flex-col items-center justify-center gap-10 rounded-2xl border border-dashed border-[#d6d8da] bg-white p-6 font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#eaeaeb] bg-white shadow-[0_4px_8px_-4px_rgba(16,24,40,0.08)] dark:border-[#272c37] dark:bg-[#181c24]">
                <Image
                  src={service.iconSrc}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0 dark:invert"
                />
              </div>
              <h3 className="text-center font-sans text-2xl font-bold text-[#090a0d] dark:text-white">
                {service.title}
              </h3>
              <p className="text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
                {service.subtitle}
              </p>
              <div className="relative flex h-[435px] w-full max-w-[580px] items-center justify-center overflow-hidden rounded-[12px] border border-[#eaeaeb] bg-[#f9f9f9] dark:border-[#272c37] dark:bg-[#181c24]">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={580}
                  height={435}
                  className="h-full w-full object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
