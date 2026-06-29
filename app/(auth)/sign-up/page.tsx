"use client";

import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import GoogleButton from "@/components/auth/GoogleButton";
import Divider from "@/components/auth/Divider";

export default function SignUpPage() {

  return (
    <AuthLayout>
      <AuthCard>
        <div className="mb-8 text-center">
          <Link href="/">
            <h1 className="cursor-pointer text-4xl font-black tracking-tight text-white">
              Mock<span className="text-pink-500">Mate</span>AI
            </h1>
          </Link>

          <h2 className="mt-8 text-3xl font-bold text-white">
            Create your account
          </h2>

          <p className="mt-3 text-zinc-400">
            Start practicing AI-powered interviews.
          </p>
        </div>

        <div className="space-y-6">
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
            placeholder="Re-enter your password"
        
          />

          <button
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
            Create Account
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
        </div>
      </AuthCard>
    </AuthLayout>
  );
}