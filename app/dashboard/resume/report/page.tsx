import { createClient } from "@/lib/supabase/server";

import Link from "next/link";

interface Props {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function ResumeReportPage({
  searchParams,
}: Props) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="p-10 text-center text-red-500">
        Resume not found.
      </div>
    );
  }

  const supabase = await createClient();

  const { data: resume } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", id)
    .single();

  const { data: analysis } = await supabase
    .from("resume_analysis")
    .select("*")
    .eq("resume_id", id)
    .single();

  if (!resume || !analysis) {
    return (
      <div className="p-10 text-center text-red-500">
        Report not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Resume Intelligence Report
      </h1>

      {/* ATS */}

      <div className="mb-8 rounded-3xl border border-pink-500/20 bg-white/[0.04] p-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              {resume.role}
            </h2>

            <p className="mt-2 text-zinc-400">
              {resume.target_company || "General Interview"}
            </p>

          </div>

          <div className="text-right">

            <p className="text-zinc-400">
              ATS Score
            </p>

            <h1 className="text-6xl font-bold text-pink-400">
              {resume.ats_score}
            </h1>

          </div>

        </div>

      </div>

      {/* Summary */}

      <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

        <h2 className="mb-4 text-2xl font-bold text-white">
          Summary
        </h2>

        <p className="leading-8 text-zinc-300">
          {resume.summary}
        </p>

      </div>

      {/* Strengths */}

      <div className="mb-8 rounded-3xl border border-green-500/20 bg-green-500/5 p-8">

        <h2 className="mb-5 text-2xl font-bold text-green-400">
          Strengths
        </h2>

        <ul className="space-y-3">

          {analysis.strengths.map(
            (item: string, index: number) => (
              <li key={index}>
                ✅ {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Weaknesses */}

      <div className="mb-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-8">

        <h2 className="mb-5 text-2xl font-bold text-red-400">
          Weaknesses
        </h2>

        <ul className="space-y-3">

          {analysis.weaknesses.map(
            (item: string, index: number) => (
              <li key={index}>
                ⚠️ {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Missing Skills */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

        <h2 className="mb-5 text-2xl font-bold text-white">
          Missing Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {analysis.missing_skills.map(
            (item: string, index: number) => (
              <span
                key={index}
                className="rounded-full bg-pink-500/10 px-4 py-2 text-pink-300"
              >
                {item}
              </span>
            )
          )}

        </div>

      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
            href="/dashboard/resume/history"
            className="
            rounded-xl
            border
            border-white/10
            px-6
            py-3
            text-white
            hover:bg-white/5
            "
        >
            ← Back to History
        </Link>  

      </div>

    </main>
  );
}