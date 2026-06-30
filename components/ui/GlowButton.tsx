import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GlowButton({
  className,
  children,
  ...props
}: GlowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `
        rounded-2xl
        bg-gradient-to-r
        from-pink-500
        to-rose-500
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_35px_rgba(255,46,126,.45)]
        active:scale-[0.98]
        `,
        className
      )}
    >
      {children}
    </button>
  );
}