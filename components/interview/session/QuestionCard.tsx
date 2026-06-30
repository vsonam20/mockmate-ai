import GlassCard from "@/components/ui/GlassCard";
import { Brain } from "lucide-react";

interface Props {
  question: string;
  index: number;
  total: number;
}

export default function QuestionCard({
  question,
  index,
  total,
}: Props) {
  return (
    <GlassCard className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-pink-500/10 p-4">
            <Brain
              size={30}
              className="text-pink-400"
            />
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              AI Interview Question
            </p>

            <h2 className="text-xl font-semibold text-white">
              Think before answering
            </h2>
          </div>
        </div>

        <div className="rounded-xl bg-pink-500/10 px-4 py-2">
          <span className="text-sm font-medium text-pink-400">
            {index} / {total}
          </span>
        </div>
      </div>

      <p className="text-2xl leading-10 text-white">
        {question}
      </p>
    </GlassCard>
  );
}