"use client";

import UploadCard from "./UploadCard";
import Link from "next/link";
import { History } from "lucide-react";

export default function ResumeUpload() {
  return (
    <div className="space-y-10">

      <div className="flex items-center justify-between gap-3">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Resume Analyzer
          </h1>

          <p className="mt-3 text-zinc-400">
            Upload your resume and receive an AI-powered ATS analysis,
            resume score, skill gap analysis and improvement suggestions.
          </p>
        </div>

        <Link
          href="/dashboard/resume/history"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            px-5
            py-3
            text-sm
            font-medium
            text-zinc-300
            transition-all
            hover:border-pink-500/40
            hover:text-white
          "
        >
          <History size={16} />
          <span>Resume History</span>
        </Link>

      </div>

      <UploadCard />

    </div>
  );
}