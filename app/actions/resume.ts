"use server";

import { createClient } from "@/lib/supabase/server";
import { uploadResumeToStorage } from "@/lib/supabase/storage";

import {
  createResume,
  updateResumeAnalysis,
  updateResumeStatus,
} from "@/lib/services/resume.service";

import { analyzeResume } from "@/lib/ai/resume/analyze";

interface UploadResumeInput {
  formData: FormData;
  role: string;
  targetCompany?: string;
  techStack?: string;
}

export async function uploadResumeAction({
  formData,
  role,
  targetCompany,
  techStack,
}: UploadResumeInput) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  if (!formData) {
    throw new Error("No form data received.");
  }

  const file = formData.get("resume");

  if (!(file instanceof File)) {
    throw new Error("Please upload a valid resume.");
  }

  /* ---------------- Upload File ---------------- */

  const storagePath = await uploadResumeToStorage(
   file,
   user.id
  );

  /* ---------------- Create Resume ---------------- */

  const resume = await createResume({
    userId: user.id,
    role,
    targetCompany,
    techStack,

    fileName: file.name,
    storagePath,
    mimeType: file.type,
    fileSize: file.size,
    status: "processing",
  });

  try {
    /* ---------------- Analyze Resume ---------------- */

    const result = await analyzeResume({
      file,
      role,
      targetCompany,
      techStack,
    });

    /* ---------------- Save Analysis ---------------- */

    await updateResumeAnalysis(
      resume.id,
      result.analysis
    );

    return {
      success: true,
      resumeId: resume.id,
      extractedText: result.extractedText,
      analysis: result.analysis,
    };
  } catch (error) {
    await updateResumeStatus(
      resume.id,
      "failed"
    );

    throw error;
  }
}