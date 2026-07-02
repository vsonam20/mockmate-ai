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

export const EvaluationAnswerSchema = z.object({
  question: z.string(),
  score: z.number(),
  feedback: z.string(),
});

export const InterviewEvaluationSchema = z.object({
  overallScore: z.number(),
  overallFeedback: z.string(),
  answers: z.array(EvaluationAnswerSchema),
});

export type InterviewEvaluation = z.infer<
  typeof InterviewEvaluationSchema
>;