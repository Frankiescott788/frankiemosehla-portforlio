"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionChip } from "@/components/section-chip";
import { NextJs, React, JavaScript, TypeScript } from "developer-icons";
import { useCallback, useRef, useState } from "react";

const steps = [
  {
    iconSrc: "/icons/send-icon.svg",
    title: "Kickoff & specify",
    description:
      "Kick off the build, align on requirements, constraints, and timeline — then lock scope for an efficient delivery.",
  },
  {
    iconSrc: "/icons/message-icon.svg",
    title: "Communicate & deliver",
    description:
      "We will communicate frequently and deliver the complete MVP in an organized manner, as fast as possible.",
  },
  {
    iconSrc: "/icons/rocket-icon.svg",
    title: "Refine & launch",
    description:
      "Iterate on feedback, harden the edges, and ship with confidence — clean handover, docs, and next steps.",
  },
];

/** Stack item with label, category, and optional description for popover. */
type StackItem =
  | { type: "icon"; Icon: React.ComponentType<{ size?: number; className?: string }>; label: string; category: string; description: string }
  | { type: "image"; src: string; label: string; category: string; description: string };

const STACK_ROW_1: StackItem[] = [
  { type: "icon", Icon: NextJs, label: "Next.js", category: "Framework", description: "React framework for production with SSR, file-based routing, and API routes." },
  { type: "icon", Icon: React, label: "React", category: "Library", description: "Library for building user interfaces with components and a reactive data model." },
  { type: "icon", Icon: TypeScript, label: "TypeScript", category: "Language", description: "Typed superset of JavaScript that compiles to plain JS." },
  { type: "icon", Icon: JavaScript, label: "JavaScript", category: "Language", description: "The language of the web for interactive frontends and Node.js backends." },
  { type: "image", src: "/icons/vercel.svg", label: "Vercel", category: "Platform", description: "Platform for frontend frameworks and serverless functions; optimal for Next.js." },
  { type: "image", src: "/icons/github_light.svg", label: "GitHub", category: "Platform", description: "Code hosting, version control, and collaboration via Git." },
  { type: "image", src: "/icons/docker.svg", label: "Docker", category: "DevOps", description: "Containers for building, shipping, and running apps in a consistent environment." },
  { type: "image", src: "/icons/postgresql.svg", label: "PostgreSQL", category: "Database", description: "Powerful open-source relational database with strong consistency and SQL." },
  { type: "image", src: "/icons/firebase.svg", label: "Firebase", category: "Backend", description: "Google’s backend for auth, database, hosting, and serverless functions." },
  { type: "image", src: "/icons/stripe.svg", label: "Stripe", category: "Payments", description: "Payments API for subscriptions, one-time payments, and financial operations." },
];

const STACK_ROW_2: StackItem[] = [
  { type: "image", src: "/icons/prisma.svg", label: "Prisma", category: "ORM", description: "Next-generation ORM for Node.js and TypeScript with type-safe queries and migrations." },
  { type: "image", src: "/icons/redis.svg", label: "Redis", category: "Database", description: "In-memory store for caching, sessions, queues, and real-time data." },
  { type: "image", src: "/icons/shadcn-ui.svg", label: "shadcn/ui", category: "UI", description: "Re-usable components built with Radix UI and Tailwind that you own and customize." },
  { type: "image", src: "/icons/expo.svg", label: "Expo", category: "Framework", description: "Framework and platform for building and shipping React Native apps." },
  { type: "image", src: "/icons/better-auth_dark.svg", label: "Better Auth", category: "Auth", description: "Auth library for the web with sessions, OAuth, and full customization." },
  { type: "image", src: "/icons/sentry.svg", label: "Sentry", category: "Monitoring", description: "Error and performance monitoring for frontend and backend applications." },
  { type: "image", src: "/icons/clerk-icon-light.svg", label: "Clerk", category: "Auth", description: "Drop-in auth with sign-in, user management, and multi-factor auth." },
  { type: "image", src: "/icons/vscode.svg", label: "VS Code", category: "Editor", description: "Code editor by Microsoft with great JS/TS and extension support." },
  { type: "image", src: "/icons/notion.svg", label: "Notion", category: "Productivity", description: "Workspace for docs, wikis, and project management." },
  { type: "image", src: "/icons/mongodb-icon-light.svg", label: "MongoDB", category: "Database", description: "Document database for flexible schemas and horizontal scaling." },
  { type: "image", src: "/icons/linear.svg", label: "Linear", category: "Productivity", description: "Issue tracking and product development workflow tool." },
  { type: "image", src: "/icons/neon.svg", label: "Neon", category: "Database", description: "Serverless Postgres with branching and autoscaling." },
];

function StackCard({
  item,
  index,
  onHoverChange,
}: {
  item: StackItem;
  index: number;
  onHoverChange: (item: StackItem | null, anchor: DOMRect | null) => void;
}) {
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      onHoverChange(item, e.currentTarget.getBoundingClientRect());
    },
    [item, onHoverChange]
  );
  const handleMouseLeave = useCallback(() => {
    onHoverChange(null, null);
  }, [onHoverChange]);

  return (
    <div
      className="flex shrink-0 cursor-default items-center gap-3 overflow-visible rounded-xl border border-dashed border-[#d6d8da] bg-white px-3 py-2 font-sans text-xs shadow-[0_6px_8px_-6px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#181c24]"
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.type === "icon" ? (
        <item.Icon size={40} className="shrink-0 dark:filter-[invert(1)]" />
      ) : (
        <Image
          src={item.src}
          alt=""
          width={40}
          height={40}
          className="size-10 shrink-0 dark:invert dark:opacity-90"
        />
      )}
      <div>
        <p className="font-sans text-sm font-medium text-[#090a0d] dark:text-white">{item.label}</p>
        <p className="font-sans text-xs text-[#9ca3af] dark:text-[#6b7280]">{item.category}</p>
      </div>
    </div>
  );
}

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
          {/* Row 1: scrolls left — pauses on row hover or when popover is open */}
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
          {/* Row 2: scrolls right — pauses on row hover or when popover is open */}
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
        {/* Popover for stack item description */}
        {popover && (
          <div
            className="fixed z-50 max-w-[280px] rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 shadow-lg dark:border-[#374151] dark:bg-[#181c24]"
            style={{
              left: popover.anchor.left + popover.anchor.width / 2,
              top: popover.anchor.top,
              transform: "translate(-50%, -100%) translateY(-8px)",
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <p className="font-sans text-sm font-semibold text-[#090a0d] dark:text-white">
              {popover.item.label}
            </p>
            <p className="mt-0.5 font-sans text-xs text-[#6b7280] dark:text-[#9ca3af]">
              {popover.item.category}
            </p>
            <p className="mt-2 font-sans text-sm font-normal leading-snug text-[#545961] dark:text-[#a6a9ae]">
              {popover.item.description}
            </p>
          </div>
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
