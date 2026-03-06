import Link from "next/link";

import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Instagram", href: site.instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-dashed border-[#d6d8da] px-3 py-6 dark:border-[#272c37] md:px-5">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 font-sans text-xs text-[#545961] sm:flex-row dark:text-[#a6a9ae]">
        <p className="flex items-center gap-2">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[#16a34a]"
            aria-hidden
          />
          frankie.intech by Frankie Mosehla
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
          aria-label="Social links"
        >
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#090a0d] underline-offset-2 hover:underline dark:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
