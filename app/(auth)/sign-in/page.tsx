import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
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
            Welcome Back
          </h2>

          <p className="mt-3 text-zinc-400">
            Continue your AI interview preparation.
          </p>
        </div>

        <SignInForm />
      </AuthCard>
    </AuthLayout>
  );
}