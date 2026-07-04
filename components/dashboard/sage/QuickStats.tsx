import {
  FileSearch,
  Mic,
  Target,
} from "lucide-react";

interface QuickStatsProps {
  atsScore: number;
  interviewScore: number;
  role?: string;
}

export default function QuickStats({
  atsScore,
  interviewScore,
  role,
}: QuickStatsProps) {
  const stats = [
    {
      icon: FileSearch,
      label: "ATS",
      value: atsScore,
    },
    {
      icon: Mic,
      label: "Interview",
      value: interviewScore,
    },
    {
      icon: Target,
      label: "Role",
      value: role ?? "-",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <Icon
              size={20}
              className="mb-3 text-pink-400"
            />

            <p className="text-sm text-zinc-500">
              {item.label}
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {item.value}
            </p>
          </div>
        );
      })}
    </section>
  );
}