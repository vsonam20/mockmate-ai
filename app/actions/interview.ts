"use server";

import { createClient } from "@/lib/supabase/server";
import { generateInterview } from "@/lib/ai/interview/generate";

interface GenerateInterviewInput {
  role: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
}

export async function generateInterviewAction(
  data: GenerateInterviewInput
) {
  const supabase = await createClient();

  // Get logged-in user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  // Generate interview using Gemini
  const interview = await generateInterview(data);

  // Save interview
  const { data: interviewRow, error: interviewError } = await supabase
    .from("interviews")
    .insert({
      user_id: user.id,
      role: data.role,
      experience: data.experience,
      interview_type: data.type.toLowerCase(),
      difficulty: data.difficulty.toLowerCase(),
      total_questions: data.questions,
      status: "in_progress",
      
    })
    .select("id")
    .single();

  if (interviewError) {
    throw interviewError;
  }

  // Save questions
  const questions = interview.questions.map((q) => ({
    interview_id: interviewRow.id,
    question_number: q.id,
    question: q.question,
  }));

  const { error: questionError } = await supabase
    .from("interview_questions")
    .insert(questions);

  if (questionError) {
    throw questionError;
  }

  return {
    interviewId: interviewRow.id,
    interview,
  };
}