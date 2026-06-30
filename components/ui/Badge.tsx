import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        border
        border-pink-500/30
        bg-pink-500/10
        px-3
        py-1
        text-xs
        font-semibold
        text-pink-300
        `,
        className
      )}
    >
      {children}
    </span>
  );
}