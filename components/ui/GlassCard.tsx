import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        hover:border-pink-500/20
        hover:bg-white/[0.06]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}