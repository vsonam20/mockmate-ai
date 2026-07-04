import { buildSageContext } from "./context";
import { generateSageResponse } from "./generate";

interface AnalyzeSageInput {
  userQuestion: string;

  targetRole?: string;
  targetCompany?: string;

  resumeSummary?: string;
  atsScore?: number;

  latestInterviewScore?: number;

  strengths?: string[];
  weaknesses?: string[];
}

export async function analyzeWithSage(
  input: AnalyzeSageInput
) {
  const context = buildSageContext(input);

  return generateSageResponse(context);
}