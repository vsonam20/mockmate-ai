import StatCard from "@/components/dashboard/StatCard";
import { dashboardStats } from "@/lib/dashboard/mock-data";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
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