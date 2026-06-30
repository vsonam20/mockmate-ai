"use client";

import { useState } from "react";

import {
  roles,
  experiences,
  interviewTypes,
  difficulties,
  questionCounts,
} from "@/lib/interview/options";

import OptionSelector from "./ui/OptionSelector";
import SectionTitle from "./ui/SectionTitle";
import StepBadge from "./ui/StepBadge";

export default function InterviewSetup() {
  const [interviewConfig, setInterviewConfig] = useState({
    role: "",
    experience: "",
    type: "",
    difficulty: "",
    questions: 5,
  });

  return (
    <div className="mx-auto max-w-7xl space-y-16">

      {/* Hero */}

      <section className="space-y-4">
        <h1 className="text-5xl font-bold text-white">
          🎤 Create AI Interview
        </h1>

        <p className="max-w-2xl text-lg text-zinc-400">
          Build a personalized interview session in under a minute.
        </p>
      </section>

      {/* Role */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={1} />

          <SectionTitle
            title="Select Role"
            description="Choose the job role you want to prepare for."
          />

        </div>

        <OptionSelector
          options={roles}
          selected={interviewConfig.role}
          onSelect={(value) =>
            setInterviewConfig((prev) => ({
              ...prev,
              role: value,
            }))
          }
        />

      </section>

      {/* Experience */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={2} />

          <SectionTitle
            title="Experience"
            description="Select your experience level."
          />

        </div>

        <OptionSelector
          options={experiences}
          selected={interviewConfig.experience}
          onSelect={(value) =>
            setInterviewConfig((prev) => ({
              ...prev,
              experience: value,
            }))
          }
        />

      </section>

      {/* Interview Type */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={3} />

          <SectionTitle
            title="Interview Type"
            description="Choose the interview format."
          />

        </div>

        <OptionSelector
          options={interviewTypes}
          selected={interviewConfig.type}
          onSelect={(value) =>
            setInterviewConfig((prev) => ({
              ...prev,
              type: value,
            }))
          }
        />

      </section>

      {/* Difficulty */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={4} />

          <SectionTitle
            title="Difficulty"
            description="Select the challenge level."
          />

        </div>

        <OptionSelector
          options={difficulties}
          selected={interviewConfig.difficulty}
          onSelect={(value) =>
            setInterviewConfig((prev) => ({
              ...prev,
              difficulty: value,
            }))
          }
        />

      </section>

      {/* Questions */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={5} />

          <SectionTitle
            title="Number of Questions"
            description="Choose how many interview questions you want."
          />

        </div>

        <OptionSelector
          options={questionCounts}
          selected={interviewConfig.questions}
          onSelect={(value) =>
            setInterviewConfig((prev) => ({
              ...prev,
              questions: value,
            }))
          }
        />

      </section>

      {/* Generate Button */}

      <section className="flex justify-center pt-6">

        <button
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
          "
        >
          🚀 Generate Interview
        </button>

      </section>

    </div>
  );
}