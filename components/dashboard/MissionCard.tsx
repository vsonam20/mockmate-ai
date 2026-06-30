import GlassCard from "@/components/ui/GlassCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { Target } from "lucide-react";

interface Props {
  completed?: number;
  total?: number;
  progress?: number;
}

export default function MissionCard({
  completed = 2,
  total = 3,
  progress = 67,
}: Props) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
          <Target
            className="text-emerald-400"
            size={22}
          />
        </div>

        <div>
          <p className="text-sm text-zinc-400">
            Today's Mission
          </p>

          <h3 className="text-xl font-bold text-white">
            {completed} / {total} Completed
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <ProgressBar value={progress} />

        <p className="text-xs text-zinc-500">
          Complete one more interview to keep your streak alive.
        </p>
      </div>
    </GlassCard>
  );
}