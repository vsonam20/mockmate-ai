"use client";

import { useState } from "react";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import TranscriptBox from "./TranscriptBox";
import RecordingPanel from "./RecordingPanel";
import NavigationButtons from "./NavigationButtons";
import { demoQuestions } from "@/lib/interview/demoQuestions";

export default function InterviewSession() {
  const questions = demoQuestions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [isRecording, setIsRecording] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      <ProgressBar
        current={currentQuestion + 1}
        total={questions.length}
      />

      <QuestionCard
        question={questions[currentQuestion]}
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
        onToggle={() => setIsRecording((prev) => !prev)}
      />

      <NavigationButtons
        onPrevious={previousQuestion}
        onNext={nextQuestion}
        disablePrevious={currentQuestion === 0}
        isLast={currentQuestion === questions.length - 1}
      />
    </div>
  );
}