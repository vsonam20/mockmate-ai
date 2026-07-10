import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import TodayFocus from "./TodayFocus";

interface DashboardHomeProps {
  fullName: string;
  streak: number;
  streakMessage: string;
}

export default function DashboardHome({
  fullName,
  streak,
  streakMessage,
}: DashboardHomeProps) {
  return (
    <div className="space-y-12">
      <DashboardHeader
        fullName={fullName}
        streak={streak}
        streakMessage={streakMessage}
      />

      <StatsGrid />

      <TodayFocus />

      <QuickActions />
    </div>
  );
}