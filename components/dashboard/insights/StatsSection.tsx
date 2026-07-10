import {
  Trophy,
  FileCheck,
  Sparkles,
  FileText,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

interface Props {
  interviewCount: number;
  resumeCount: number;
  atsScore: number;
  xp: number;
}

export default function StatsSection({
  interviewCount,
  resumeCount,
  atsScore,
  xp,
}: Props) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Interviews"
        value={String(interviewCount)}
        subtitle="Completed interviews"
        icon={Trophy}
      />

      <StatCard
        title="Resume Score"
        value={`${atsScore}%`}
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
        title="Resumes"
        value={String(resumeCount)}
        subtitle="Uploaded resumes"
        icon={FileText}
      />
    </section>
  );
}