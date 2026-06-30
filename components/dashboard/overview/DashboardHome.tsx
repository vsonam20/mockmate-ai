import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import TodayFocus from "./TodayFocus";

export default function DashboardHome() {
  return (
    <div className="space-y-12">
      <DashboardHeader />

      <StatsGrid />

      <TodayFocus />

      <QuickActions />
    </div>
  );
}