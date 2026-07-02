import { createClient } from "@/lib/supabase/server";
import { generateInterview } from "@/lib/ai/interview/generate";

interface GenerateInterviewInput {
  role: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
}

export async function createInterview(
  input: GenerateInterviewInput
) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  const interview = await generateInterview(input);

  const { data: interviewRow, error: interviewError } = await supabase
    .from("interviews")
    .insert({
      user_id: user.id,
      role: input.role,
      experience: input.experience,
      interview_type: input.type.toLowerCase(),
      difficulty: input.difficulty.toLowerCase(),
      total_questions: input.questions,
      status: "in_progress",
    })
    .select("id")
    .single();

  if (interviewError) {
    throw interviewError;
  }

  const questionRows = interview.questions.map((q) => ({
    interview_id: interviewRow.id,
    question_number: q.id,
    question: q.question,
  }));

  const { error: questionError } = await supabase
    .from("interview_questions")
    .insert(questionRows);

  if (questionError) {
    throw questionError;
  }

  return {
    interviewId: interviewRow.id,
  };
}