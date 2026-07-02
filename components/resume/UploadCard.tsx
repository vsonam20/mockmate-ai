"use client";

import { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";

import { uploadResumeAction } from "@/app/actions/resume";

export default function UploadCard() {
  const [loading, setLoading] = useState(false);
  const [resumeText, setResumeText] = useState("");

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const result = await uploadResumeAction(formData);

      setResumeText(result.text);
    } catch (error) {
      console.error(error);
      alert("Failed to extract resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-pink-500/30
          bg-white/[0.04]
          p-16
          text-center
        "
      >
        <div className="flex justify-center">
          <div className="rounded-full bg-pink-500/10 p-6">
            <UploadCloud
              size={42}
              className="text-pink-400"
            />
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-white">
          Upload Resume
        </h2>

        <p className="mt-4 text-zinc-400">
          Supported formats:
          <span className="text-white"> PDF</span> and
          <span className="text-white"> DOCX</span>
        </p>

        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleUpload}
          disabled={loading}
          className="mt-8 block w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white file:mr-4 file:rounded-xl file:border-0 file:bg-pink-500 file:px-5 file:py-2 file:text-white hover:file:bg-pink-600"
        />

        {loading && (
          <div className="mt-6 flex items-center justify-center gap-3 text-pink-400">
            <Loader2 className="animate-spin" size={20} />
            Extracting resume...
          </div>
        )}
      </div>

      {resumeText && (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h3 className="mb-5 text-2xl font-bold text-white">
            Extracted Resume Text
          </h3>

          <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap text-sm leading-7 text-zinc-300">
            {resumeText}
          </pre>
        </div>
      )}
    </div>
  );
}