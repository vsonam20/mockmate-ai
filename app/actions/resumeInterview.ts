"use server";

import { createClient } from "@/lib/supabase/server";
import { generateInterview } from "@/lib/ai/interview/generate";

export async function generateResumeInterviewAction(
  resumeId: string,
    settings: {
    experience: string;
    difficulty: string;
    type: string;
    questions: number;
    }
) {
  const supabase = await createClient();

  // Get logged in user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  // Fetch resume
  const { data: resume, error: resumeError } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", resumeId)
    .eq("user_id", user.id)
    .single();

  if (resumeError || !resume) {
    throw new Error("Resume not found.");
  }

  const interview = await generateInterview({
    role: resume.role,
    company: "",
    techStack: resume.tech_stack ?? "",
    experience: settings.experience,
    type: settings.type,
    difficulty: settings.difficulty,
    questions: settings.questions,

    resumeText: resume.extracted_text ?? "",
  });

  // Save interview
  const { data: interviewRow, error: interviewError } = await supabase
    .from("interviews")
    .insert({
      user_id: user.id,
      role: resume.role,
      target_company: resume.target_company,
      tech_stack: resume.tech_stack,

      experience: settings.experience,
      interview_type: settings.type.toLowerCase(),
      difficulty: settings.difficulty.toLowerCase(),
      total_questions: settings.questions,
      
      status: "in_progress",
    })
    .select("id")
    .single();

  if (interviewError) {
    throw interviewError;
  }

  // Save generated questions
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
  };
}