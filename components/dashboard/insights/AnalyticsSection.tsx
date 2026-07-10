import GlassCard from "@/components/ui/GlassCard";
import {
  Briefcase,
  Gauge,
  Layers,
} from "lucide-react";

interface Props {
  topRole: string;
  topDifficulty: string;
  topType: string;
}

export default function AnalyticsSection({
  topRole,
  topDifficulty,
  topType,
}: Props) {
  const analytics = [
    {
      title: "Most Practiced Role",
      value: topRole,
      subtitle: "Primary focus area",
      icon: Briefcase,
    },
    {
      title: "Preferred Difficulty",
      value: topDifficulty,
      subtitle: "Most attempted level",
      icon: Gauge,
    },
    {
      title: "Interview Type",
      value: topType,
      subtitle: "Practice category",
      icon: Layers,
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {analytics.map((item) => {
        const Icon = item.icon;

        return (
          <GlassCard
            key={item.title}
            className="group relative overflow-hidden p-6 transition-all duration-300
            hover:-translate-y-2
            hover:border-pink-500/40
            hover:shadow-[0_0_35px_rgba(236,72,153,0.18)]"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent opacity-70" />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-zinc-400">
                  {item.title}
                </p>

                <h3 className="mt-4 text-3xl font-bold text-pink-400 capitalize">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                    {item.subtitle}
                </p>
              </div>

              <div className="rounded-2xl bg-pink-500/10 p-3 transition-all duration-300 group-hover:scale-110">
                <Icon
                  size={24}
                  className="text-pink-400"
                />
              </div>
            </div>
          </GlassCard>
        );
      })}
    </section>
  );
}