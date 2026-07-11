import { createClient } from "@/lib/supabase/server";
import { History } from "lucide-react";

import EmptyState from "@/components/ui/EmptyState";
import HistoryOverview from "@/components/dashboard/history/HistoryOverview";

export default async function HistoryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { count } = await supabase
    .from("interviews")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("user_id", user?.id);

  if ((count ?? 0) === 0) {
    return (
      <EmptyState
        icon={History}
        title="No Interview History Yet"
        description="Complete your first AI mock interview to unlock detailed interview history, scores, AI feedback and performance tracking."
        buttonText="Start Mock Interview"
        href="/dashboard/interview/setup"
      />
    );
  }

  return <HistoryOverview />;
}