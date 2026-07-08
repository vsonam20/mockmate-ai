"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { generateInterviewAction } from "@/app/actions/interview";

interface GenerateButtonProps {
  config: {
    role: string;
    company: string;
    techStack: string;
    experience: string;
    type: string;
    difficulty: string;
    questions: number;
  };
}

export default function GenerateButton({
  config,
}: GenerateButtonProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const isDisabled =
    !config.role ||
    !config.experience ||
    !config.type ||
    !config.difficulty ||
    loading;

  async function handleGenerate() {
    try {
      setLoading(true);

      const result = await generateInterviewAction(config);

      router.push(
        `/dashboard/interview/session?id=${result.interviewId}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to generate interview.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleGenerate}
      className="
        rounded-2xl
        bg-gradient-to-r
        from-pink-500
        to-fuchsia-500
        px-12
        py-5
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-pink-500/30
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {loading ? "Generating Interview..." : "🚀 Generate Interview"}
    </button>
  );
}