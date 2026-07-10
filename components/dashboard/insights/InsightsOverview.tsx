import { createClient } from "@/lib/supabase/server";

import StatsSection from "./StatsSection";
import AnalyticsSection from "./AnalyticsSection";
import SageRecommendations from "./SageRecommendations";

export default async function InsightsOverview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Total Interviews
  const { count: interviewCount } = await supabase
    .from("interviews")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", user.id);

  // Total Resumes
  const { count: resumeCount } = await supabase
    .from("resumes")
    .select("*", {
      count: "exact",
      head: true,
    })
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

  // Analytics Data
  const { data: interviews } = await supabase
    .from("interviews")
    .select("role, difficulty, interview_type")
    .eq("user_id", user.id);

  const xp = (interviewCount ?? 0) * 50;

  // Most Practiced Role
  const roleMap: Record<string, number> = {};

  interviews?.forEach((item) => {
    roleMap[item.role] = (roleMap[item.role] ?? 0) + 1;
  });

  const topRole =
    Object.entries(roleMap).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "--";

  // Preferred Difficulty
  const difficultyMap: Record<string, number> = {};

  interviews?.forEach((item) => {
    difficultyMap[item.difficulty] =
      (difficultyMap[item.difficulty] ?? 0) + 1;
  });

  const topDifficulty =
    Object.entries(difficultyMap).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "--";

  // Interview Type
  const typeMap: Record<string, number> = {};

  interviews?.forEach((item) => {
    typeMap[item.interview_type] =
      (typeMap[item.interview_type] ?? 0) + 1;
  });

  const topType =
    Object.entries(typeMap).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "--";

  return (
    <main className="space-y-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">
          Insights
        </h1>
        
        <p className="mt-1 text-zinc-400">
          Track your MockMate AI journey.
        </p>
      </div>

      {/* Overview */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-white">
            📊 Overview
        </h2>

        <p className="mt-1 text-zinc-400">
            Your interview performance at a glance.
        </p>
      </div>

      <StatsSection
        interviewCount={interviewCount ?? 0}
        resumeCount={resumeCount ?? 0}
        atsScore={latestResume?.ats_score ?? 0}
        xp={xp}
      />

      {/* Practice Analytics */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-white">
            📈 Practice Analytics
        </h2>

        <p className="mt-1 text-zinc-400">
            Insights from your interview history.
        </p>
      </div>

      <AnalyticsSection
        topRole={topRole}
        topDifficulty={topDifficulty}
        topType={topType}
      />

      <SageRecommendations
        atsScore={latestResume?.ats_score ?? 0}
        interviewCount={interviewCount ?? 0}
        topRole={topRole}
        topType={topType}
      />
    </main>
  );
}