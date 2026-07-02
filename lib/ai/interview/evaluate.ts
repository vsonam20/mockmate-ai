import { ai } from "@/lib/ai/client";
import { buildEvaluationPrompt } from "./prompt";
import {
  InterviewEvaluationSchema,
} from "./types";

interface EvaluationInput {
  question: string;
  answer: string;
}

export async function evaluateInterview(
  questions: EvaluationInput[]
) {
  const prompt = buildEvaluationPrompt(questions);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("Gemini did not return valid JSON.");
  }

  return InterviewEvaluationSchema.parse(parsed);
}