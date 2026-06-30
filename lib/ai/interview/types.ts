import { z } from "zod";

export const InterviewQuestionSchema = z.object({
  id: z.number(),
  question: z.string(),
});

export const InterviewSchema = z.object({
  title: z.string(),
  role: z.string(),
  difficulty: z.string(),
  questions: z.array(InterviewQuestionSchema),
});

export type Interview = z.infer<typeof InterviewSchema>;