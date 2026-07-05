"use client";

import { Sparkles } from "lucide-react";
import QuickActions from "./QuickActions";

interface Props {
  onSelect: (prompt: string) => void;
}

export default function SageLanding({ onSelect }: Props) {
  return (
    <section className="flex flex-1 flex-col justify-center">

      <div className="mx-6 w-full max-w-6xl">

        <div className="text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10">
            <Sparkles className="h-10 w-10 text-pink-400" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-white">
            Hello! I'm{" "}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              Sage
            </span>{" "}
            👋
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
            I already understand your resume, interview performance and career
            goals. Choose an action below or ask me anything.
          </p>

        </div>

        <div className="mt-14">
          <QuickActions onSelect={onSelect} />
        </div>

      </div>

    </section>
  );
}