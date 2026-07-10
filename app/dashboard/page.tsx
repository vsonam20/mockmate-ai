import { createClient } from "@/lib/supabase/server";
import DashboardHome from "@/components/dashboard/overview/DashboardHome";
import { calculateStreak } from "@/lib/dashboard/streak";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const fullName =
    user?.user_metadata?.full_name ??
    user?.email?.split("@")[0] ??
    "User";

  // Fetch all interviews of current user
  const { data: interviews } = await supabase
    .from("interviews")
    .select("created_at")
    .eq("user_id", user?.id);

  const streakData = calculateStreak(interviews ?? []);

  return (
    <DashboardHome
      fullName={fullName}
      streak={streakData.streak}
      streakMessage={streakData.message}
    />
  );
}