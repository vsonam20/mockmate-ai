"use server";

import { createClient } from "@/lib/supabase/server";

export async function updatePassword(
  currentPassword: string,
  newPassword: string
) {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return {
      success: false,
      error: "User not found.",
    };
  }

  // Verify current password
  const { error: signInError } =
    await supabase.auth.signInWithPassword({
      email: user.email,
      password: currentPassword,
    });

  if (signInError) {
    return {
      success: false,
      error: "Current password is incorrect.",
    };
  }

  // Prevent using the same password
  if (currentPassword === newPassword) {
    return {
      success: false,
      error:
        "New password must be different from the current password.",
    };
  }

  // Update password
  const { error } =
    await supabase.auth.updateUser({
      password: newPassword,
    });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
  };
}