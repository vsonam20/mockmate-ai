"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import {
  signInSchema,
  signUpSchema,
} from "@/lib/auth/schemas";

export async function signUp(
  _: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const supabase = await createClient();

  const values = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    confirmPassword:
      formData.get("confirmPassword")?.toString() ?? "",
  };

  const parsed = signUpSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message:
        parsed.error.issues[0]?.message ?? "Validation failed.",
    };
  }

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        full_name: values.name,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/dashboard");
}

export async function signIn(
  _: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const supabase = await createClient();

  const values = {
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  const parsed = signInSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message:
        parsed.error.issues[0]?.message ?? "Validation failed.",
    };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return;
  }

  redirect("/");
}