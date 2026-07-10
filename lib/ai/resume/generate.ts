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

    const result = ResumeAnalysisSchema.parse(
      extractJson(text)
    );

    // Normalize ATS score
    if (result.atsScore <= 1) {
      result.atsScore = Math.round(result.atsScore * 100);
    } else {
      result.atsScore = Math.round(result.atsScore);
    }

    console.log("Resume Analysis:");
    console.dir(result, { depth: null });

    return result;

  } catch (error) {
    console.error("Groq Resume Error:", error);
    throw error;
  }
}