import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function InterviewHistoryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="p-10 text-center text-red-500">
        Unauthorized
      </div>
    );
  }

  const { data: interviews } = await supabase
    .from("interviews")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Interview History
      </h1>

      <div className="space-y-6">
        {interviews?.map((interview) => (
          <Link
            key={interview.id}
            href={`/dashboard/interview/feedback?id=${interview.id}`}
          >
            <div className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-pink-500 hover:bg-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-pink-400">
                    {interview.role}
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    {interview.interview_type} • {interview.difficulty}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-green-400">
                    {interview.status}
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    {new Date(
                      interview.created_at
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}