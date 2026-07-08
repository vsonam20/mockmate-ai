"use client";

import { useState } from "react";
import RoleSearch from "./ui/RoleSearch";

import {
  roles,
  experiences,
  interviewTypes,
  difficulties,
  questionCounts,
} from "@/lib/interview/options";

import GenerateButton from "./GenerateButton";
import OptionSelector from "./ui/OptionSelector";
import SectionTitle from "./ui/SectionTitle";
import StepBadge from "./ui/StepBadge";
import CompanySearch from "./ui/CompanySearch";
import TechStackSearch from "./ui/TechStackSearch";
const popularCompanies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Adobe",
  "OpenAI",
];

const popularTechStacks = [
  "Python",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "React",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function InterviewSetup() {
  const [interviewConfig, setInterviewConfig] = useState({
    role: "",
    company: "",
    techStack: "",
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

        <div className="space-y-6">

          <RoleSearch
            value={interviewConfig.role}
            onSelect={(value) =>
              setInterviewConfig((prev) => ({
                ...prev,
                role: value,
              }))
            }
          />

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Popular Roles
            </h3>

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
          </div>

        </div>



      </section>

      {/* Company */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={2} />

          <SectionTitle
            title="Company (Optional)"
            description="Choose a company for company-specific interview questions."
          />

        </div>

        <div className="space-y-6">

          <CompanySearch
            value={interviewConfig.company}
            onSelect={(value) =>
              setInterviewConfig((prev) => ({
                ...prev,
                company: value,
              }))
            }
          />

          <div>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Popular Companies
            </h3>

            <OptionSelector
              options={popularCompanies}
              selected={interviewConfig.company}
              onSelect={(value) =>
                setInterviewConfig((prev) => ({
                  ...prev,
                  company: value,
                }))
              }
            />

          </div>

        </div>

      </section>

      {/* Tech Stack */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={3} />

          <SectionTitle
            title="Tech Stack"
            description="Choose the primary technology you want to be interviewed on."
          />

        </div>

        <div className="space-y-6">

          <TechStackSearch
            value={interviewConfig.techStack}
            onSelect={(value) =>
              setInterviewConfig((prev) => ({
                ...prev,
                techStack: value,
              }))
            }
          />

          <div>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Popular Technologies
            </h3>

            <OptionSelector
              options={popularTechStacks}
              selected={interviewConfig.techStack}
              onSelect={(value) =>
                setInterviewConfig((prev) => ({
                  ...prev,
                  techStack: value,
                }))
              }
            />

          </div>

        </div>

      </section>


      {/* Experience */}

      <section className="space-y-6">

        <div className="flex items-center gap-4">

          <StepBadge step={4} />

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

          <StepBadge step={5} />

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

          <StepBadge step={6} />

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

          <StepBadge step={7} />

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

        <GenerateButton
          config={interviewConfig}
        />

      </section>

    </div>
  );
}