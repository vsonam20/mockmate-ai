import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}