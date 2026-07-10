"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { saveAnswerAction } from "@/app/actions/answers";
import { finishInterviewAction } from "@/app/actions/finishInterview";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import TranscriptBox from "./TranscriptBox";
import RecordingPanel from "./RecordingPanel";
import NavigationButtons from "./NavigationButtons";

interface Question {
  id: string;
  question: string;
  question_number: number;
}

interface Props {
  interviewId: string;

  interview: {
    role: string;
    target_company: string | null;
    tech_stack: string | null;
    difficulty: string;
    interview_type: string;
  };

  questions: Question[];
}

export default function InterviewSession({
  interviewId,
  interview,
  questions,
}: Props) {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const [isRecording, setIsRecording] = useState(false);

  const [saving, setSaving] = useState(false);

  async function nextQuestion() {
    try {
      setSaving(true);

      // Save current answer
      await saveAnswerAction({
        interviewId,
        questionId: questions[currentQuestion].id,
        answer: answers[currentQuestion],
        duration: 0,
      });

      // Go to next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        return;
      }

      // Last question → Finish interview
      await finishInterviewAction(interviewId);

      router.push(
        `/dashboard/interview/feedback?id=${interviewId}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to finish interview.");
    } finally {
      setSaving(false);
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

        <h1 className="text-3xl font-bold text-white">
          AI Interview
        </h1>

        <p className="mt-3 text-xl text-pink-400">
          {interview.role}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">

          {interview.target_company && (
            <span className="rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
              {interview.target_company}
            </span>
          )}

          {interview.tech_stack && (
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
              {interview.tech_stack}
            </span>
          )}

          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
            {interview.interview_type}
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
            {interview.difficulty}
          </span>

        </div>

      </div>

      <ProgressBar
        current={currentQuestion + 1}
        total={questions.length}
      />

      <QuestionCard
        question={questions[currentQuestion].question}
        index={currentQuestion + 1}
        total={questions.length}
      />

      <TranscriptBox
        value={answers[currentQuestion]}
        onChange={(value) => {
          const updated = [...answers];
          updated[currentQuestion] = value;
          setAnswers(updated);
        }}
      />

      <RecordingPanel
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        transcript={answers[currentQuestion]}
        setTranscript={(value) => {
          setAnswers((prev) => {
            const updated = [...prev];

            updated[currentQuestion] =
              typeof value === "function"
                ? value(updated[currentQuestion])
                : value;

            return updated;
          });
        }}
      />

      <NavigationButtons
        onPrevious={previousQuestion}
        onNext={nextQuestion}
        disablePrevious={currentQuestion === 0 || saving}
        isLast={currentQuestion === questions.length - 1}
      />
    </div>
  );
}