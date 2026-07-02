import { ai } from "@/lib/ai/client";

import { buildResumePrompt } from "./prompt";
import { ResumeAnalysisSchema } from "./types";

export async function analyzeResume(
  resumeText: string
) {
  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildResumePrompt(resumeText),
    });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned empty response.");
  }

  let parsed;

  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("Gemini returned invalid JSON.");
  }

  return ResumeAnalysisSchema.parse(parsed);
}