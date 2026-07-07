import { ai } from "@/lib/ai/client";
import { extractJson } from "@/lib/utils/extract-json";

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

  try {
    const response =
      await ai.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const text =
      response.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error("Groq returned an empty response.");
    }

    const parsed = extractJson(text);

    return InterviewEvaluationSchema.parse(parsed);

  } catch (error) {
    console.error("Groq Evaluation Error:", error);
    throw error;
  }
}