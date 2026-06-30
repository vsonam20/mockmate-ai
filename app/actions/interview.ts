"use server";

import { generateInterview } from "@/lib/ai/interview/generate";

export async function generateInterviewAction(
  data: {
    role: string;
    experience: string;
    type: string;
    difficulty: string;
    questions: number;
  }
) {
  return await generateInterview(data);
}