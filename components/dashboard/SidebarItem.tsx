"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function SidebarItem({
  href,
  label,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
        active
          ? "bg-gradient-to-r from-pink-500/20 to-rose-500/10 border border-pink-500/20"
          : "hover:bg-white/5"
      )}
    >
      <Icon
        size={20}
        className={cn(
          "transition-colors duration-300",
          active
            ? "text-pink-400"
            : "text-zinc-400 group-hover:text-white"
        )}
      />

      <span
        className={cn(
          "font-medium transition-colors duration-300",
          active
            ? "text-white"
            : "text-zinc-400 group-hover:text-white"
        )}
      >
        {label}
      </span>
    </Link>
  );
}