import { z } from "zod";

export const ResumeAnalysisSchema = z.object({
  atsScore: z.number().min(0).max(100),

  summary: z.string(),

  strengths: z.array(z.string()),

  weaknesses: z.array(z.string()),

  missingSkills: z.array(z.string()),

  suggestions: z.array(z.string()),

  projectReview: z.string(),

  experienceReview: z.string(),

  educationReview: z.string(),

  careerReadiness: z.string(),
});

export type ResumeAnalysis = z.infer<
  typeof ResumeAnalysisSchema
>;