"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#qualities", label: "Qualities" },
  { href: "#experience", label: "Experience" },
  { href: "#awards", label: "Awards" },
  { href: "#testimonials", label: "Testimonials" },
] as const;

function ThemeToggle() {
  const dark = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof document === "undefined") return () => {};
      const observer = new MutationObserver(onStoreChange);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    },
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggle = useCallback(() => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-12 shrink-0 items-center rounded-full bg-[#090a0d] p-1"
    >
      <span
        className={cn(
          "h-6 w-6 shrink-0 rounded-full bg-white",
          dark ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={cn(
        "fixed left-1/2 top-5 z-10 flex h-16 w-full max-w-[1240px] -translate-x-1/2 items-center justify-between gap-4 overflow-visible rounded-2xl border border-dashed border-[#d6d8da] bg-white px-3 py-3 text-sm font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d] dark:text-white",
        className
      )}
    >
      {/* Mobile: theme toggle + icon + Let's talk */}
      <div className="flex w-full items-center justify-between gap-2 md:hidden">
        <ThemeToggle />
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-10 shrink-0 items-center justify-center overflow-visible rounded-xl border border-dashed border-[#d6d8da] bg-white p-1.5 font-sans text-xs no-underline shadow-[0_6px_8px_-6px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#181c24]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/github_light.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0 dark:invert dark:opacity-90"
            />
          </Link>
          <Link
            href="#book"
            className="flex h-10 cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-[#d6d8da] bg-white py-1 pl-[18px] pr-2.5 font-sans text-xs text-[#545961] no-underline shadow-[0_6px_8px_-6px_rgba(16,24,40,0.16)] hover:text-[#090a0d] dark:border-[#272c37] dark:bg-[#181c24] dark:text-[#a6a9ae] dark:hover:text-white"
          >
            Let&apos;s talk
            <span className="h-6 w-6 shrink-0 rounded-full border border-[#d6d8da] bg-[#f4f4f4] dark:border-[#272c37] dark:bg-[#272c37]" />
          </Link>
        </div>
      </div>

      {/* Desktop: full layout */}
      {/* Left: logo + status + nav links */}
      <div className="hidden flex-1 items-center justify-start gap-2 md:flex">
        <Link
          href="/"
          aria-label="Home"
          className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[12px]"
        >
          <Image
            src="/icons/logo.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </Link>
        <span className="flex items-center gap-1.5 text-[#16a34a]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0 animate-spin"
            aria-hidden
          >
            <path d="M12 2v4" />
            <path d="m16.2 7.8 2.9-2.9" />
            <path d="M18 12h4" />
            <path d="m16.2 16.2 2.9 2.9" />
            <path d="M12 18v4" />
            <path d="m4.9 19.1 2.9-2.9" />
            <path d="M2 12h4" />
            <path d="m4.9 4.9 2.9 2.9" />
          </svg>
          AVAILABLE
        </span>
        <div className="ml-4 flex items-center gap-4 border-l border-[#d6d8da] pl-4 dark:border-[#272c37]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="cursor-pointer font-sans text-sm font-medium leading-5 text-[#545961] no-underline hover:text-[#090a0d] dark:text-[#a6a9ae] dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right: CTA (desktop only) */}
      <div className="hidden items-center justify-end gap-2 md:flex">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex size-10 shrink-0 items-center justify-center overflow-visible rounded-xl border border-dashed border-[#d6d8da] bg-white p-1.5 font-sans text-xs no-underline shadow-[0_6px_8px_-6px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#181c24]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/github_light.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0 dark:invert dark:opacity-90"
          />
        </Link>
        <Button
          variant="default"
          size="default"
          className="h-10 gap-[14px] rounded-xl border-0 bg-[#090a0d] py-1 pl-[18px] pr-2.5 text-sm font-sans text-white shadow-[0_6px_8px_-6px_rgba(16,24,40,0.16)] hover:bg-[#272c37] dark:bg-white dark:text-[#090a0d] dark:hover:bg-[#eaeaeb] [&_svg]:size-4"
          asChild
        >
          <Link href="#book" className="flex items-center gap-[14px]">
            Book a 20-min call
            <span className="relative block h-6 w-6 shrink-0 overflow-hidden rounded-[6px] border border-white/30 dark:border-[#272c37]">
              <Image
                src="/images/frankie.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="24px"
              />
            </span>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
