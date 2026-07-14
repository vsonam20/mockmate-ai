import { createClient } from "@/lib/supabase/server";

import StatCard from "@/components/dashboard/StatCard";

import {
  Trophy,
  FileText,
  Sparkles,
  Target,
} from "lucide-react";

export default async function StatsGrid() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Total Interviews
  const { count: interviewCount } = await supabase
    .from("interviews")
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

  // Profile (XP)
  const { data: profile } = await supabase
    .from("profiles")
    .select("xp")
    .eq("id", user.id)
    .single();

  const stats = [
    {
      title: "Mock Interviews",
      value: String(interviewCount ?? 0),
      subtitle: "Generated interviews",
      icon: Trophy,
    },
    {
      title: "Resume Score",
      value: `${latestResume?.ats_score ?? 0}%`,
      subtitle: "Latest ATS score",
      icon: FileText,
    },
    {
      title: "XP Earned",
      value: String(profile?.xp ?? 0),
      subtitle: "Experience Points",
      icon: Sparkles,
    },
    {
      title: "Success Rate",
      value: "--",
      subtitle: "Coming soon",
      icon: Target,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}