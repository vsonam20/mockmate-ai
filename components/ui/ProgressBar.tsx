import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({
  value,
  className,
}: ProgressBarProps) {
  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-white/10",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}