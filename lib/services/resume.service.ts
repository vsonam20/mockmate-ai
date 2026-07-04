import { createClient } from "@/lib/supabase/server";
import type { ResumeAnalysis } from "@/lib/ai/resume/types";

export interface CreateResumeInput {
  userId: string;
  role: string;
  targetCompany?: string;
  techStack?: string;

  fileName: string;
  storagePath?: string;
  mimeType?: string;
  fileSize?: number;

  status?: "uploaded" | "processing" | "completed" | "failed";
}

export async function createResume(
  data: CreateResumeInput
) {
  const supabase = await createClient();

  const { data: resume, error } = await supabase
    .from("resumes")
    .insert({
      user_id: data.userId,
      role: data.role,
      target_company: data.targetCompany,
      tech_stack: data.techStack,

      file_name: data.fileName,
      storage_path: data.storagePath,
      mime_type: data.mimeType,
      file_size: data.fileSize,

      status: data.status ?? "uploaded",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return resume;
}

export async function updateResumeStatus(
  resumeId: string,
  status: "uploaded" | "processing" | "completed" | "failed"
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("resumes")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", resumeId);

  if (error) {
    throw error;
  }
}

export async function updateResumeAnalysis(
  resumeId: string,
  analysis: ResumeAnalysis
) {
  const supabase = await createClient();

  // Update main resume record
  const { error: resumeError } = await supabase
    .from("resumes")
    .update({
      ats_score: analysis.atsScore,
      summary: analysis.summary,
      status: "completed",
      updated_at: new Date().toISOString(),
    })
    .eq("id", resumeId);

  if (resumeError) {
    throw resumeError;
  }

  // Save detailed AI analysis
  const { error: analysisError } = await supabase
    .from("resume_analysis")
    .insert({
      resume_id: resumeId,

      strengths: analysis.strengths,
      weaknesses: analysis.weaknesses,
      missing_skills: analysis.missingSkills,
      suggestions: analysis.suggestions,

      project_review: analysis.projectReview,
      experience_review: analysis.experienceReview,
      education_review: analysis.educationReview,
      career_readiness: analysis.careerReadiness,
    });

  if (analysisError) {
    throw analysisError;
  }

  return analysis;
}