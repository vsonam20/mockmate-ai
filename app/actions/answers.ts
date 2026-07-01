"use server";

import { createClient } from "@/lib/supabase/server";

interface SaveAnswerInput {
  interviewId: string;
  questionId: string;
  answer: string;
  duration: number;
}

export async function saveAnswerAction(
  data: SaveAnswerInput
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Verify interview belongs to current user
  const { data: interview } = await supabase
    .from("interviews")
    .select("id")
    .eq("id", data.interviewId)
    .eq("user_id", user.id)
    .single();

  if (!interview) {
    throw new Error("Interview not found.");
  }

  // Check if answer already exists
  const { data: existing } = await supabase
    .from("interview_answers")
    .select("id")
    .eq("question_id", data.questionId)
    .single();

  if (existing) {
    const { error } = await supabase
      .from("interview_answers")
      .update({
        answer: data.answer,
        duration_seconds: data.duration,
      })
      .eq("id", existing.id);

    if (error) throw error;
  } else {
    const { error } = await supabase
      .from("interview_answers")
      .insert({
        interview_id: data.interviewId,
        question_id: data.questionId,
        answer: data.answer,
        duration_seconds: data.duration,
      });

    if (error) throw error;
  }

  return {
    success: true,
  };
}