"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ResumeInterviewDialog from "./ResumeInterviewDialog";

import { generateResumeInterviewAction } from "@/app/actions/resumeInterview";

interface Props {
  resumeId: string;
  role: string;
}

export default function StartResumeInterviewButton({
  resumeId,
  role,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleStart(settings: {
    experience: string;
    difficulty: string;
    type: string;
    questions: number;
  }) {
    try {
      setLoading(true);

    const result =
    await generateResumeInterviewAction(
        resumeId,
        {
        experience: settings.experience,
        difficulty: settings.difficulty,
        type: settings.type,
        questions: settings.questions,
        }
    );

      setOpen(false);
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
    <>
    <button
      onClick={() => setOpen(true)}
      disabled={loading}
        className="
        flex
        w-40
        h-10
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-pink-500
        px-4
        text-[13px]
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-pink-600
        disabled:cursor-not-allowed
        disabled:opacity-50
        "
    >
      {loading
        ? "Generating..."
        : "Resume Interview"}
    </button>

    <ResumeInterviewDialog
    open={open}
    role={role}
    onOpenChange={setOpen}
    onGenerate={handleStart}
    />

    </>
  );
}