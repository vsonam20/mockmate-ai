"use client";

import Link from "next/link";
import { useActionState } from "react";

import { signIn } from "@/app/actions/auth";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import Divider from "./Divider";
import GoogleButton from "./GoogleButton";

const initialState = {
  success: false,
  message: "",
};

export default function SignInForm() {
  const [state, formAction, pending] = useActionState(
    signIn,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-6"
    >
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

      {state?.message && (
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
        type="submit"
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
          hover:shadow-[0_0_35px_rgba(255,60,140,.4)]
          disabled:opacity-50
        "
      >
        {pending
          ? "Signing In..."
          : "Sign In"}
      </button>

      <Divider />

      <GoogleButton />

      <p className="text-center text-zinc-400">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-pink-400"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
}