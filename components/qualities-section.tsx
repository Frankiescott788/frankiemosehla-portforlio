import Link from "next/link";
import { SectionChip } from "@/components/section-chip";
import {
  Zap,
  LayoutGrid,
  Sparkles,
  MessageSquare,
  Cog,
  Workflow,
} from "lucide-react";

const qualities = [
  {
    icon: Zap,
    title: "Ship fast, ship right",
    description:
      "Move quickly without cutting corners, clean commits, clear scope, and quality checks that keep velocity high.",
  },
  {
    icon: LayoutGrid,
    title: "Systems thinking",
    description:
      "Design scalable architecture, sensible boundaries, and predictable patterns so the product stays easy to evolve.",
  },
  {
    icon: Sparkles,
    title: "UI/UX thinking",
    description:
      "Engineer user-friendly interfaces: clear hierarchy, sensible states, accessibility, and interactions that feel intuitive.",
  },
  {
    icon: MessageSquare,
    title: "Seamless syncing",
    description:
      "Instant communication via Slack, dedicated workspace on Linear or other project management apps.",
    linearLink: {
      href: "https://linear.app",
      label: "Linear",
      logoSrc: "/icons/linear.svg",
    },
  },
  {
    icon: Cog,
    title: "Systematic thinking",
    description:
      "Everything must have a reason to exist, the same applies with every element created inside your product.",
  },
  {
    icon: Workflow,
    title: "Direct workflows",
    description:
      "Fast & uninterrupted process from communication to final result, with nothing standing in between.",
  },
];

export function QualitiesSection() {
  return (
    <>
      <div className="w-full" aria-hidden />
      <section id="qualities" className="px-5 py-16 md:py-24">
        <div className="mb-4 flex justify-center">
          <SectionChip>Key values</SectionChip>
        </div>
        <h2 className="mx-auto max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-4xl">
          Fundamental qualities
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base font-normal leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Strong engineering partnerships are built on fundamentals: ownership, clarity, and a bias for shipping.
        </p>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((item) => (
            <article
              key={item.title}
              className="flex min-w-0 flex-col rounded-2xl border border-dashed border-[#d6d8da] bg-white p-6 font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#eaeaeb] bg-white shadow-[0_4px_8px_-4px_rgba(16,24,40,0.08)] dark:border-[#272c37] dark:bg-[#181c24]">
                <item.icon className="size-6 text-[#090a0d] dark:text-white" />
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold text-[#090a0d] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-5 text-[#545961] dark:text-[#a6a9ae]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#pricing"
            className="flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-[12px] border-x border-dashed border-[#d6d8da] bg-[#090a0d] px-5 py-1 font-sans text-xs text-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37]"
          >
            See plans
          </Link>
          <Link
            href="#book"
            className="flex h-10 min-w-[120px] items-center justify-center gap-2 rounded-[12px] border border-dashed border-[#d6d8da] bg-white px-5 py-1 font-sans text-xs text-[#090a0d] shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)] dark:border-[#272c37] dark:bg-[#181c24] dark:text-white"
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
