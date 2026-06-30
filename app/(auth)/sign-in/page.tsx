import Link from "next/link";

import { signIn } from "@/app/actions/auth";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import GoogleButton from "@/components/auth/GoogleButton";
import Divider from "@/components/auth/Divider";

export default function SignInPage() {
  return (
    <AuthLayout>
      <AuthCard>
        {/* Logo */}

        <div className="mb-8 text-center">
          <Link href="/">
            <h1 className="cursor-pointer text-4xl font-black tracking-tight text-white">
              Mock<span className="text-pink-500">Mate</span>AI
            </h1>
          </Link>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="mt-3 text-zinc-400">
            Sign in to continue your interview preparation.
          </p>
        </div>

        {/* Form */}

        <form action={signIn} className="space-y-6">
          <AuthInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <PasswordInput
            name="password"
          />

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-pink-400 hover:text-pink-300"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
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
            "
          >
            Sign In
          </button>

          <Divider />

          <GoogleButton />

          <p className="text-center text-zinc-400">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-pink-400"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}