import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";

import {
  Briefcase,
  CalendarDays,
  CircleCheck,
  FileQuestion,
  ArrowRight,
} from "lucide-react";

interface Props {
  interview: {
    id: string;
    role: string;
    interview_type: string;
    difficulty: string;
    total_questions: number;
    status: string;
    created_at: string;
  };
}

export default function HistoryCard({
  interview,
}: Props) {
  const date = new Date(
    interview.created_at
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <GlassCard
      className="
        group
        relative
        overflow-hidden
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-pink-500/40
        hover:shadow-[0_0_35px_rgba(236,72,153,0.18)]
      "
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent opacity-70" />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-pink-500/10 p-3">
              <Briefcase
                className="text-pink-400"
                size={22}
              />
            </div>

            <div>

              <h3 className="text-2xl font-bold text-white">
                {interview.role}
              </h3>

              <p className="text-zinc-400 capitalize">
                {interview.interview_type} Interview
              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-5 text-sm">

            <div className="flex items-center gap-2 text-zinc-400">
              <CalendarDays size={16} />

              {date}
            </div>

            <div className="flex items-center gap-2 text-pink-400 capitalize">
              <CircleCheck size={16} />

              {interview.status}
            </div>

            <div className="flex items-center gap-2 text-zinc-400 capitalize">
              <FileQuestion size={16} />

              {interview.difficulty}
            </div>

            <div className="text-zinc-400">
              {interview.total_questions} Questions
            </div>

          </div>

        </div>

        {/* Right */}

        <Link
          href={`/dashboard/interview/feedback?id=${interview.id}`}
        >
          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-fuchsia-500
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            View Feedback

            <ArrowRight size={18} />
          </button>
        </Link>

      </div>
    </GlassCard>
  );
}