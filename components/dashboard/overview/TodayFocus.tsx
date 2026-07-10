import {
  ArrowRight,
  Brain,
  Clock3,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import { createClient } from "@/lib/supabase/server";

export default async function TodayFocus() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Latest Resume
  const { data: latestResume } = await supabase
    .from("resumes")
    .select("id, ats_score")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    })
    .limit(1)
    .single();

  // Interview Count
  const { count: interviewCount } = await supabase
    .from("interviews")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", user.id);

  let focus = {
    title: "",
    difficulty: "",
    duration: "",
    xp: "",
    description: "",
    button: "",
    href: "",
  };

  if (!latestResume) {
    focus = {
      title: "Analyze Your Resume",
      difficulty: "Beginner",
      duration: "10 min",
      xp: "+50 XP",
      description:
        "Upload your resume and receive an AI-powered ATS analysis with personalized suggestions.",
      button: "Analyze Resume",
      href: "/dashboard/resume",
    };
  } else if ((interviewCount ?? 0) === 0) {
    focus = {
      title: "Take Your First Interview",
      difficulty: "Easy",
      duration: "15 min",
      xp: "+100 XP",
      description:
        "Start your first AI mock interview and receive instant feedback.",
      button: "Start Interview",
      href: "/dashboard/interview/setup",
    };
  } else if ((latestResume.ats_score ?? 0) < 75) {
    focus = {
      title: "Improve Your Resume",
      difficulty: "Medium",
      duration: "15 min",
      xp: "+75 XP",
      description:
        "Your ATS score can be improved. Review your report and strengthen weak areas.",
      button: "View Report",
      href: "/dashboard/resume/history",
    };
  } else {
    focus = {
      title: "Practice Another Interview",
      difficulty: "Hard",
      duration: "20 min",
      xp: "+120 XP",
      description:
        "Keep improving your interview skills by attempting another AI mock interview.",
      button: "Practice Now",
      href: "/dashboard/interview/setup",
    };
  }

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          🧠 Today's Focus
        </h2>

        <p className="mt-1 text-zinc-400">
          Your AI coach recommends this challenge today.
        </p>
      </div>

      <GlassCard
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-pink-500/20
          bg-gradient-to-br
          from-pink-500/10
          via-transparent
          to-purple-500/10
          p-8
        "
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                <Brain
                  className="text-pink-400"
                  size={28}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  {focus.title}
                </h3>

                <p className="mt-1 text-zinc-400">
                  {focus.difficulty}
                </p>
              </div>
            </div>

            <Link href={focus.href}>
              <GlowButton className="shrink-0">
                {focus.button}

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </GlowButton>
            </Link>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
            {focus.description}
          </p>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock3 size={18} />

                <span>{focus.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-pink-400">
                <Sparkles size={18} />

                <span>{focus.xp}</span>
              </div>
            </div>

            <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
              🔥 Recommended Today
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}