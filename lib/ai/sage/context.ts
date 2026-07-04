import { SageContext } from "./types";

interface BuildContextInput {
  userQuestion: string;

  targetRole?: string;
  targetCompany?: string;

  resumeSummary?: string;
  atsScore?: number;

  latestInterviewScore?: number;

  strengths?: string[];
  weaknesses?: string[];
}

export function buildSageContext(
  input: BuildContextInput
): SageContext {
  return {
    userQuestion: input.userQuestion,

    targetRole: input.targetRole,
    targetCompany: input.targetCompany,

    resumeSummary: input.resumeSummary,
    atsScore: input.atsScore,

    latestInterviewScore: input.latestInterviewScore,

    strengths: input.strengths ?? [],
    weaknesses: input.weaknesses ?? [],
  };
}