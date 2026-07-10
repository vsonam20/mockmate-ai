import { ai } from "@/lib/ai/client";
import { extractJson } from "@/lib/utils/extract-json";

import { buildInterviewPrompt } from "./prompt";
import { InterviewSchema } from "./types";

interface GenerateInterviewInput {
  role: string;
  company: string;
  techStack: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
  resumeText?: string;
}

export async function generateInterview(
  input: GenerateInterviewInput
) {
  const prompt = buildInterviewPrompt(input);

  try {
    const response =
      await ai.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,

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

    return InterviewSchema.parse(parsed);

  } catch (error) {
    console.error("Groq Interview Error:", error);
    throw error;
  }
}