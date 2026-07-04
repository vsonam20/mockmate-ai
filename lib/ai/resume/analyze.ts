import { extractResumeText } from "./parser";
import { cleanResumeText } from "./cleaner";
import { generateResumeAnalysis } from "./generate";

interface AnalyzeResumeInput {
  file: File;
  role?: string;
  targetCompany?: string;
  techStack?: string;
}

export async function analyzeResume({
  file,
  role,
  targetCompany,
  techStack,
}: AnalyzeResumeInput) {
  const extractedText = await extractResumeText(file);

  const cleanedText = cleanResumeText(extractedText);

  if (!cleanedText) {
    throw new Error("Unable to extract resume text.");
  }

  const analysis = await generateResumeAnalysis({
    resumeText: cleanedText,
    role,
    targetCompany,
    techStack,
  });

  return {
    extractedText: cleanedText,
    analysis,
  };
}