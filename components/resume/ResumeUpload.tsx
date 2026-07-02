"use client";

import UploadCard from "./UploadCard";

export default function ResumeUpload() {
  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Resume Analyzer
        </h1>

        <p className="mt-3 text-zinc-400">
          Upload your resume and receive an AI-powered ATS analysis,
          resume score, skill gap analysis and improvement suggestions.
        </p>
      </div>

      <UploadCard />

    </div>
  );
}