"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signInSchema, signUpSchema } from "@/lib/auth/schemas";

export async function signUp(formData: FormData): Promise<void> {
  const supabase = await createClient();

  const values = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
    confirmPassword:
      formData.get("confirmPassword")?.toString() ?? "",
  };
  console.log("Form Values:", values);

  const parsed = signUpSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Validation failed.");
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
    throw new Error(error.message);
  }

  redirect("/dashboard");
}

export async function signIn(formData: FormData): Promise<void> {
  const supabase = await createClient();

  const values = {
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  const parsed = signInSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Validation failed.");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/");
}