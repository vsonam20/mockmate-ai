"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FeedbackFooter() {
  const router = useRouter();

  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-[#141114] p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          Interview Completed 🎉
        </h2>

        <p className="mt-3 text-zinc-400">
          Great work! Review your feedback above or start another interview to
          keep improving.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/5"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <button
          onClick={() => router.push("/dashboard/interview/setup")}
          className="flex items-center gap-2 rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
        >
          Take Another Interview
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}