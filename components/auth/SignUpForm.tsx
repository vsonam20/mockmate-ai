"use client";

import { useActionState } from "react";

import Link from "next/link";

import { signUp } from "@/app/actions/auth";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import GoogleButton from "./GoogleButton";
import Divider from "./Divider";

const initialState = {
  success: false,
  message: "",
};

export default function SignUpForm() {
  const [state, formAction, pending] =
    useActionState(signUp, initialState);

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
      <AuthInput
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
      />

      <AuthInput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <PasswordInput
        name="password"
        label="Password"
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
      />

      {state.message && (
        <div
          className="
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-4
            text-sm
            text-red-300
          "
        >
          {state.message}
        </div>
      )}

      <button
        disabled={pending}
        className="
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-pink-500
          to-rose-500
          py-4
          font-semibold
          text-white
          transition
          hover:scale-[1.02]
          disabled:opacity-50
        "
      >
        {pending
          ? "Creating Account..."
          : "Create Account"}
      </button>

      <Divider />

      <GoogleButton />

      <p className="text-center text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-pink-400"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}