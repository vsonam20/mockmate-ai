import { createClient } from "@/lib/supabase/server";
import DashboardHome from "@/components/dashboard/overview/DashboardHome";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const fullName =
    user.user_metadata?.full_name ??
    user.email?.split("@")[0] ??
    "User";

  // Fetch profile (single source of truth)
  const { data: profile } = await supabase
    .from("profiles")
    .select("xp, streak")
    .eq("id", user.id)
    .single();

  const streak = profile?.streak ?? 0;

  let streakMessage = "Complete your first interview today!";

  if (streak === 1) {
    streakMessage = "Great start! Keep the momentum going.";
  } else if (streak > 1) {
    streakMessage = "You're on fire! Keep your streak alive.";
  }

  return (
    <DashboardHome
      fullName={fullName}
      streak={streak}
      streakMessage={streakMessage}
    />
  );
}