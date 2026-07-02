"use server";

import { createClient } from "@/lib/supabase/server";
import { evaluateInterview } from "@/lib/ai/interview/evaluate";

export async function finishInterviewAction(
  interviewId: string
) {
  const supabase = await createClient();

  // Verify logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Load interview answers
  const { data: answers, error } = await supabase
    .from("interview_answers")
    .select(`
      id,
      answer,
      interview_questions (
        question
      )
    `)
    .eq("interview_id", interviewId);

  if (error) {
    throw error;
  }

  if (!answers || answers.length === 0) {
    throw new Error("No answers found.");
  }

const evaluation = await evaluateInterview(
  answers.map((item: any) => ({
    question: item.interview_questions.question,
    answer: item.answer,
  }))
);

// Save score & feedback for each answer
for (let i = 0; i < answers.length; i++) {
  const result = evaluation.answers[i];

  await supabase
    .from("interview_answers")
    .update({
      score: result.score,
      feedback: result.feedback,
    })
    .eq("id", answers[i].id);
}

// Mark interview completed
await supabase
  .from("interviews")
  .update({
    status: "completed",
    updated_at: new Date().toISOString(),
  })
  .eq("id", interviewId);

return {
  success: true,
};
}