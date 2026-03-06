"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useSyncExternalStore } from "react";
import { Button } from "@/shared/components/ui/button";
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
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            className="size-4 shrink-0 [&_path]:fill-current"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM16.6757 8.26285C17.0828 8.63604 17.1103 9.26861 16.7372 9.67573L11.2372 15.6757C11.0528 15.8768 10.7944 15.9938 10.5217 15.9998C10.249 16.0057 9.98576 15.9 9.79289 15.7071L7.29289 13.2071C6.90237 12.8166 6.90237 12.1834 7.29289 11.7929C7.68342 11.4024 8.31658 11.4024 8.70711 11.7929L10.4686 13.5544L15.2628 8.32428C15.636 7.91716 16.2686 7.88966 16.6757 8.26285Z"
            />
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
