import { createClient } from "@/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("You must be logged in.");
  }

  return {
    supabase,
    user,
  };
}

export async function getLatestResume(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getLatestResumeAnalysis(
  resumeId: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("resume_analysis")
    .select("*")
    .eq("resume_id", resumeId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getLatestInterview(
  userId: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("interviews")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function buildSageData() {
  const { user } = await getCurrentUser();

  const resume = await getLatestResume(user.id);

  const analysis = resume
    ? await getLatestResumeAnalysis(resume.id)
    : null;

  const interview = await getLatestInterview(user.id);

return {
  // User
  name:
    user.user_metadata?.full_name ??
    user.user_metadata?.name ??
    user.email?.split("@")[0] ??
    "User",

  // Career
  targetRole: resume?.role,
  targetCompany: resume?.target_company,

  // Resume
  resumeSummary: resume?.summary,
  atsScore: resume?.ats_score ?? 0,

  // Interview
  latestInterviewScore:
    interview?.overall_score ?? 0,

  // AI Context
  strengths: analysis?.strengths ?? [],
  weaknesses: analysis?.weaknesses ?? [],
  }
};