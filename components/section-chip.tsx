import { cn } from "@/lib/utils";

type SectionChipProps = {
  children: React.ReactNode;
  className?: string;
  /** Show the dot indicator (default true). */
  showDot?: boolean;
};

export function SectionChip({
  children,
  className,
  showDot = true,
}: SectionChipProps) {
  return (
    <p
      className={cn(
        "inline-flex h-6 shrink-0 items-center justify-center gap-1.5 rounded-[24px] border border-dashed border-[#d6d8da] bg-[#f9f9f9] py-1 pl-1.5 pr-3 font-sans text-xs font-medium uppercase tracking-wide text-[#545961] dark:border-[#272c37] dark:bg-[#272c37] dark:text-[#a6a9ae]",
        className
      )}
    >
      {showDot && (
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-[#545961] dark:bg-[#a6a9ae]"
          aria-hidden
        />
      )}
      {children}
    </p>
  );
}
