"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth/actions";

export function useSignUp() {
  const [loading, setLoading] = useState(false);

  async function register(
    name: string,
    email: string,
    password: string
  ) {
    try {
      setLoading(true);

      return await signUp({
        name,
        email,
        password,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    register,
    loading,
  };
}