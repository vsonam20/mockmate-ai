"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  title: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

export default function SelectionCard({
  title,
  description,
  selected,
  onClick,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-500/40
        hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]
        `,
        selected
          ? "border-pink-500 bg-pink-500/10"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      {/* Top Accent */}
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-full transition-all duration-300",
          selected
            ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent"
            : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500/60 group-hover:to-transparent"
        )}
      />

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {description}
            </p>
          )}
        </div>

        {selected && (
          <div className="rounded-full bg-pink-500 p-1">
            <Check size={16} className="text-white" />
          </div>
        )}
      </div>
    </button>
  );
}