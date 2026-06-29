"use client";

import { ReactNode } from "react";
import AuthBackground from "./AuthBackground";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <AuthBackground />

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </main>
  );
}