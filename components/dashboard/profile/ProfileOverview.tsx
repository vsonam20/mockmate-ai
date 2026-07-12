import { createClient } from "@/lib/supabase/server";

import { calculateStreak } from "@/lib/dashboard/streak";

import PageHeader from "@/components/dashboard/PageHeader";
import StatCard from "@/components/dashboard/StatCard";

import {
  Trophy,
  FileCheck,
  Sparkles,
  Flame,
} from "lucide-react";

export default async function ProfileOverview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const fullName =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "User";

  const joinedDate = new Date(
    user.created_at
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

    // Total Interviews
    const { count: interviewCount } = await supabase
      .from("interviews")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("user_id", user.id);

    // Fetch interview dates for streak calculation
    const { data: streakInterviews } = await supabase
      .from("interviews")
      .select("created_at")
      .eq("user_id", user.id);

    const streakData = calculateStreak(streakInterviews ?? []);

    // Interview Progress Data
    const { data: interviews } = await supabase
      .from("interviews")
      .select(`
        role,
        status
      `)
      .eq("user_id", user.id);

  // Latest Resume
  const { data: latestResume } = await supabase
    .from("resumes")
    .select("ats_score")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    })
    .limit(1)
    .single();

  const xp = (interviewCount ?? 0) * 50;

  const completedInterviews =
    interviews?.filter(
      (item) => item.status === "completed"
    ).length ?? 0;

  const inProgressInterviews =
    interviews?.filter(
      (item) => item.status === "in_progress"
    ).length ?? 0;

  // Favorite Role
  const roleMap: Record<string, number> = {};

  interviews?.forEach((item) => {
    roleMap[item.role] = (roleMap[item.role] ?? 0) + 1;
  });

  const favoriteRole =
    Object.entries(roleMap).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "--";

  const initials = fullName
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase();

  return (
    <main className="space-y-12">

      <PageHeader
        title="Profile"
        description="Manage your MockMate AI account and track your progress."
      />

      {/* Profile Card */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-3xl font-bold text-white">
            {initials}
          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              {fullName}
            </h2>

            <p className="mt-2 text-zinc-400">
              {user.email}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Joined {joinedDate}
            </p>

          </div>

        </div>

      </div>

      {/* Account Statistics */}

      <section>

        <h2 className="mb-6 text-2xl font-bold text-white">
          📊 Account Statistics
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Interviews"
            value={String(interviewCount ?? 0)}
            subtitle="Total interviews"
            icon={Trophy}
          />

          <StatCard
            title="Resume Score"
            value={`${latestResume?.ats_score ?? 0}%`}
            subtitle="Latest ATS score"
            icon={FileCheck}
          />

          <StatCard
            title="XP Earned"
            value={String(xp)}
            subtitle="Experience points"
            icon={Sparkles}
          />

          <StatCard
            title="Current Streak"
            value={`${streakData.streak}`}
            subtitle="Interview streak"
            icon={Flame}
          />

        </div>

      </section>

      {/* Interview Progress */}

      <section>

        <h2 className="mb-6 text-2xl font-bold text-white">
          🎯 Interview Progress
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Completed"
            value={String(completedInterviews)}
            subtitle="Finished interviews"
            icon={Trophy}
          />

          <StatCard
            title="In Progress"
            value={String(inProgressInterviews)}
            subtitle="Ongoing interviews"
            icon={Flame}
          />

          <StatCard
            title="Favorite Role"
            value={favoriteRole}
            subtitle="Most practiced role"
            icon={Sparkles}
          />

          <StatCard
            title="Success Rate"
            value={
              interviewCount && interviewCount > 0
                ? `${Math.round(
                    (completedInterviews /
                      interviewCount) *
                      100
                  )}%`
                : "0%"
            }
            subtitle="Completion rate"
            icon={FileCheck}
          />

        </div>

      </section>

    </main>
  );
}