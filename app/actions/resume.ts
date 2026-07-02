"use server";

export async function uploadResumeAction(
  formData: FormData
) {
  const file = formData.get("resume") as File;

  if (!file) {
    throw new Error("Please upload a resume.");
  }

  return {
    success: true,
    text:
      "Resume upload pipeline will be connected to Gemini Files API in the next implementation.",
  };
}