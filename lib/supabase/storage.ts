import { createClient } from "@/lib/supabase/server";

const BUCKET_NAME = "resumes";

export async function uploadResumeToStorage(
  file: File,
  userId: string
) {
  const supabase = await createClient();

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const storagePath = `${userId}/${fileName}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(storagePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (error) {
    throw new Error(error.message);
  }

  return storagePath;
}