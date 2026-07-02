import { z } from "zod";

export const ResumeAnalysisSchema = z.object({
  atsScore: z.number(),

  summary: z.string(),

  strengths: z.array(z.string()),

  weaknesses: z.array(z.string()),

  missingSkills: z.array(z.string()),

  suggestions: z.array(z.string()),
});

export type ResumeAnalysis = z.infer<
  typeof ResumeAnalysisSchema
>;