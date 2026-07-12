"use server";

import { createClient } from "@/lib/supabase/server";

export async function updateProfileName(fullName: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    data: {
      full_name: fullName,
    },
  });

  return {
    success: !error,
    error: error?.message,
  };
}