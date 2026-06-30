import { ai } from "@/lib/ai/client";
import { buildInterviewPrompt } from "./prompt";
import { InterviewSchema } from "./types";

interface GenerateInterviewInput {
  role: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
}

export async function generateInterview(
  input: GenerateInterviewInput
) {
  const prompt = buildInterviewPrompt(input);

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

  return InterviewSchema.parse(parsed);
}