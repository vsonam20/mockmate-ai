"use server";

import { createClient } from "@/lib/supabase/server";
import { adminClient } from "@/lib/supabase/admin";

export async function deleteAccountData() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: "User not found.",
      };
    }

    // Fetch interview IDs
    const { data: interviews, error: interviewFetchError } =
      await supabase
        .from("interviews")
        .select("id")
        .eq("user_id", user.id);

    if (interviewFetchError) {
      return {
        success: false,
        error: interviewFetchError.message,
      };
    }

    const interviewIds = interviews?.map((i) => i.id) ?? [];

    // Delete interview answers
    if (interviewIds.length > 0) {
      const { error } = await supabase
        .from("interview_answers")
        .delete()
        .in("interview_id", interviewIds);

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }
    }

    // Delete interview questions
    if (interviewIds.length > 0) {
      const { error } = await supabase
        .from("interview_questions")
        .delete()
        .in("interview_id", interviewIds);

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }
    }

    // Delete interviews
    {
      const { error } = await supabase
        .from("interviews")
        .delete()
        .eq("user_id", user.id);

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }
    }

    // Delete resumes
    // resume_analysis will be deleted automatically via CASCADE
    {
      const { error } = await supabase
        .from("resumes")
        .delete()
        .eq("user_id", user.id);

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }
    }

    // Delete profile
    {
      const { error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", user.id);

      if (error) {
        return {
          success: false,
          error: error.message,
        };
      }
    }

    // Delete Auth user
    const { error: authError } =
      await adminClient.auth.admin.deleteUser(user.id);

    if (authError) {
      return {
        success: false,
        error: authError.message,
      };
    }

    // Sign out current session
    await supabase.auth.signOut();

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Something went wrong while deleting your account.",
    };
  }
}