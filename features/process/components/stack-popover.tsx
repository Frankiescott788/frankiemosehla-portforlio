"use client";

import type { StackItem } from "@/features/process/constants/stack";

export function StackPopover({
  item,
  anchor,
  onMouseEnter,
  onMouseLeave,
}: {
  item: StackItem;
  anchor: DOMRect;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="fixed z-50 max-w-[280px] rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 shadow-lg dark:border-[#374151] dark:bg-[#181c24]"
      style={{
        left: anchor.left + anchor.width / 2,
        top: anchor.top,
        transform: "translate(-50%, -100%) translateY(-8px)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="font-sans text-sm font-semibold text-[#090a0d] dark:text-white">
        {item.label}
      </p>
      <p className="mt-0.5 font-sans text-xs text-[#6b7280] dark:text-[#9ca3af]">
        {item.category}
      </p>
      <p className="mt-2 font-sans text-sm font-normal leading-snug text-[#545961] dark:text-[#a6a9ae]">
        {item.description}
      </p>
    </div>
  );
}
