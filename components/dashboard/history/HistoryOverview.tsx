import { createClient } from "@/lib/supabase/server";
import HistoryCard from "./HistoryCard";

import PageHeader from "@/components/dashboard/PageHeader";

export default async function HistoryOverview() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: interviews } = await supabase
    .from("interviews")
    .select(`
      id,
      role,
      interview_type,
      difficulty,
      total_questions,
      status,
      created_at
    `)
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="space-y-10">

      <PageHeader
        title="Interview History"
        description="Review your previous AI mock interviews and feedback."
      />

      <section className="space-y-6">

        {interviews && interviews.length > 0 ? (
          interviews.map((interview) => (
            <HistoryCard
              key={interview.id}
              interview={interview}
            />
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 p-12 text-center">
            <h3 className="text-2xl font-semibold text-white">
              No Interviews Yet
            </h3>

            <p className="mt-3 text-zinc-400">
              Start your first mock interview to see your history here.
            </p>
          </div>
        )}

      </section>

    </main>
  );
}