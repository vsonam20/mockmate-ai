import { z } from "zod";

export const SageResponseSchema = z.object({
  response: z.string(),
  actionItems: z.array(z.string()),
  encouragement: z.string(),
});

export type SageResponse = z.infer<
  typeof SageResponseSchema
>;

export interface SageContext {
  targetRole?: string;
  targetCompany?: string;

  resumeSummary?: string;

  atsScore?: number;

  latestInterviewScore?: number;

  strengths?: string[];

  weaknesses?: string[];

  userQuestion: string;
}