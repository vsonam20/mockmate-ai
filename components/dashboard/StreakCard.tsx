import GlassCard from "@/components/ui/GlassCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { Flame } from "lucide-react";

interface Props {
  streak?: number;
  longestStreak?: number;
  progress?: number;
}

export default function StreakCard({
  streak = 12,
  longestStreak = 27,
  progress = 70,
}: Props) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15">
          <Flame className="text-pink-400" size={22} />
        </div>

        <div>
          <p className="text-sm text-zinc-400">
            Current Streak
          </p>

          <h3 className="text-2xl font-bold text-white">
            {streak} Days
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            Longest Streak
          </span>

          <span className="font-semibold text-white">
            {longestStreak} Days
          </span>
        </div>

        <ProgressBar value={progress} />
      </div>
    </GlassCard>
  );
}