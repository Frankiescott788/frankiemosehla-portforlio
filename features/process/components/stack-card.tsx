"use client";

import Image from "next/image";
import { useCallback } from "react";
import type { StackItem } from "@/features/process/constants/stack";

export function StackCard({
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
