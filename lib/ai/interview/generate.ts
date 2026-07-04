import { ai } from "@/lib/ai/client";
import { buildInterviewPrompt } from "./prompt";
import { InterviewSchema } from "./types";
import { extractJson } from "@/lib/utils/extract-json";

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

  const parsed = extractJson(text);

  return InterviewSchema.parse(parsed);
}