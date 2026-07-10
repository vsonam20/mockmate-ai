import { getGreeting } from "@/lib/dashboard/greeting";

interface DashboardHeaderProps {
  fullName: string;
  streak: number;
  streakMessage: string;
}

export default function DashboardHeader({
  fullName,
  streak,
  streakMessage,
}: DashboardHeaderProps) {
  const { greeting, emoji } = getGreeting();

  return (
    <section className="mb-10">
      <p className="text-sm font-medium text-zinc-400">
        {emoji} {greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
        Welcome back, {fullName}
      </h1>

      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
        Let's continue improving your interview skills.
      </p>
      
    </section>
  );
}