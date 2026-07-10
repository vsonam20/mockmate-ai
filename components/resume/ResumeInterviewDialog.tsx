"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  role: string;

  onOpenChange: (open: boolean) => void;

  onGenerate: (settings: {
    experience: string;
    difficulty: string;
    type: string;
    questions: number;
  }) => void;
}

export default function ResumeInterviewDialog({
  open,
  role,
  onOpenChange,
  onGenerate,
}: Props) {
  const [experience, setExperience] = useState("Fresher");
  const [difficulty, setDifficulty] = useState("Medium");
  const [type, setType] = useState("Technical");
  const [questions, setQuestions] = useState(5);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Resume Interview
          </DialogTitle>

            <DialogDescription>

            <span className="block">
                Role: <span className="font-medium text-white">{role}</span>
            </span>

            <span className="mt-2 block">
                Configure your interview before generating it.
            </span>

            </DialogDescription>

        </DialogHeader>

        <div className="mt-8 space-y-6">

          {/* Experience */}

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Experience
            </label>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white"
            >
              <option>Fresher</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>

          </div>

          {/* Difficulty */}

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

          </div>

          {/* Interview Type */}

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Interview Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>

          </div>

          {/* Questions */}

          <div>

            <label className="mb-2 block text-sm text-zinc-400">
              Questions
            </label>

            <select
              value={questions}
              onChange={(e) =>
                setQuestions(Number(e.target.value))
              }
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>

          </div>

            <div className="mt-6 flex gap-3">

            <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="
                flex-1
                rounded-xl
                border
                border-white/10
                py-3
                font-medium
                text-zinc-300
                transition
                hover:border-pink-500/40
                hover:text-white
                "
            >
                Cancel
            </button>

            <button
                type="button"
                onClick={() =>
                onGenerate({
                    experience,
                    difficulty,
                    type,
                    questions,
                })
                }
                className="
                flex-1
                rounded-xl
                bg-pink-500
                py-3
                font-semibold
                text-white
                transition
                hover:bg-pink-600
                "
            >
                Generate Interview
            </button>

            </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}