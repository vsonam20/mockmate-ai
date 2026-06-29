"use client";

import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  questions: string;
  icon: LucideIcon;
};

export default function CategoryCard({
  title,
  subtitle,
  questions,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      p-8
      transition-all
      duration-300
      hover:border-pink-500/40
      hover:bg-pink-500/10
      hover:-translate-y-2
      hover:shadow-[0_0_50px_rgba(255,45,120,.18)]
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-gradient-to-br
        from-pink-500
        to-fuchsia-600
        flex
        items-center
        justify-center
        mb-6
        group-hover:scale-110
        transition
        "
      >
        <Icon className="text-white w-7 h-7" />
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="text-zinc-400 mt-2">
        {subtitle}
      </p>

      <div className="mt-6 text-pink-400 font-semibold">
        {questions}
      </div>
    </div>
  );
}