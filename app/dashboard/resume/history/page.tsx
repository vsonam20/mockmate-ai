import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import StartResumeInterviewButton from "@/components/resume/StartResumeInterviewButton";

export default async function ResumeHistoryPage() {
  const supabase = await createClient();

  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="p-10 text-center text-red-500">
        Please login.
      </div>
    );
  }

  const { data: resumes } = await supabase
    .from("resumes")
    .select("*")
    .eq("status", "completed")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Resume History
      </h1>

      {(!resumes || resumes.length === 0) && (
        <div className="rounded-3xl border border-white/10 p-8 text-zinc-400">
          No resumes analyzed yet.
        </div>
      )}

      <div className="space-y-6">

        {resumes?.map((resume) => (

          <div
            key={resume.id}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  {resume.role}
                </h2>

                <p className="mt-2 text-zinc-400">
                {resume.target_company
                    ? `Target: ${resume.target_company}`
                    : "Resume Analysis"}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {new Date(
                    resume.created_at
                  ).toLocaleDateString()}
                </p>

              </div>

                <div className="flex flex-col items-end">

                <p className="text-sm text-zinc-400">
                    ATS Score
                </p>

                <p className="text-4xl font-bold text-pink-400">
                    {resume.ats_score ?? "--"}
                </p>

                </div>

                <div className="mt-6 flex items-center justify-end gap-3">

                <Link
                    href={`/dashboard/resume/report?id=${resume.id}`}
                    className="
                    flex
                    w-40
                    h-10
                    justify-center
                    items-center
                    rounded-xl
                    border
                    border-white/10
                    bg-transparent
                    px-5
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-200
                    hover:border-pink-500/40
                    hover:text-white
                    "
                >
                    View Report
                </Link>

                <StartResumeInterviewButton
                    resumeId={resume.id}
                    role={resume.role}
                />

                </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}