"use server";

import { createClient } from "@/lib/supabase/server";
import { evaluateInterview } from "@/lib/ai/interview/evaluate";

export async function finishInterviewAction(
  interviewId: string
) {
  console.log("========================================");
  console.log("finishInterviewAction CALLED");
  console.log("Interview ID:", interviewId);
  console.log("Time:", new Date().toISOString());
  console.log("========================================");

  const supabase = await createClient();

  // Verify logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  console.log("User:", user.id);

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

  if (error) throw error;

  if (!answers || answers.length === 0) {
    throw new Error("No answers found.");
  }

  console.log("Answers Loaded:", answers.length);

  // Evaluate answers
  const evaluation = await evaluateInterview(
    answers.map((item: any) => ({
      question: item.interview_questions.question,
      answer: item.answer,
    }))
  );

  // Save AI evaluation
  for (let i = 0; i < answers.length; i++) {
    const result = evaluation.answers[i];

    const { error: answerError } = await supabase
      .from("interview_answers")
      .update({
        score: result.score,
        feedback: result.feedback,
      })
      .eq("id", answers[i].id);

    if (answerError) throw answerError;
  }

  console.log("Answers Updated");

  // Mark interview completed
  const { error: interviewError } = await supabase
    .from("interviews")
    .update({
      status: "completed",
      updated_at: new Date().toISOString(),
    })
    .eq("id", interviewId);

  if (interviewError) throw interviewError;

  console.log("Interview marked completed");

  // ==========================
  // PROFILE
  // ==========================

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("xp, streak, last_interview_date")
    .eq("id", user.id)
    .single();

  if (profileError) throw profileError;

  console.log("PROFILE FROM DATABASE");
  console.log(profile);

  const currentXP = profile.xp ?? 0;
  const currentStreak = profile.streak ?? 0;

  const today = new Date().toISOString().split("T")[0];

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toISOString().split("T")[0];

  const lastInterviewDate = profile.last_interview_date;

  console.log("today =", today);
  console.log("yesterday =", yesterdayString);
  console.log("lastInterviewDate =", lastInterviewDate);

  let newStreak = currentStreak;

  if (!lastInterviewDate) {
    console.log("CASE 1 -> First Interview");
    newStreak = 1;
  } else if (lastInterviewDate === today) {
    console.log("CASE 2 -> Already interviewed today");
    newStreak = currentStreak;
  } else if (lastInterviewDate === yesterdayString) {
    console.log("CASE 3 -> Yesterday interview");
    newStreak = currentStreak + 1;
  } else {
    console.log("CASE 4 -> Streak reset");
    newStreak = 1;
  }

  console.log("Updating profile with:");
  console.log({
    currentXP,
    currentStreak,
    newXP: currentXP + 50,
    newStreak,
    last_interview_date: today,
  });

  const { data: updatedProfile, error: updateError } = await supabase
    .from("profiles")
    .update({
      xp: currentXP + 50,
      streak: newStreak,
      last_interview_date: today,
      updated_at: new Date().toISOString(),
    })
    .eq("id", user.id)
    .select();

  console.log("UPDATED PROFILE");
  console.log(updatedProfile);

  if (updateError) throw updateError;

  console.log("finishInterviewAction FINISHED");

  return {
    success: true,
  };
}