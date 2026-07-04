import { ai } from "@/lib/ai/client";
import { buildResumePrompt } from "./prompt";
import { ResumeAnalysisSchema } from "./types";
import { extractJson } from "@/lib/utils/extract-json"; 

interface GenerateResumeInput {
  resumeText: string;
  role?: string;
  targetCompany?: string;
  techStack?: string;
}

export async function generateResumeAnalysis(
  input: GenerateResumeInput
) {
  const prompt = buildResumePrompt(input);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  const parsed = extractJson(text);

  return ResumeAnalysisSchema.parse(parsed);
}