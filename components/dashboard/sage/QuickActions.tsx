"use client";

import {
  Briefcase,
  FileText,
  GraduationCap,
  Mic,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const actions = [
  {
    title: "Resume Review",
    subtitle: "Resume feedback",
    icon: FileText,
    prompt: "Review my resume and suggest improvements.",
  },
  {
    title: "Interview Coach",
    subtitle: "AI interviewer",
    icon: Mic,
    prompt: "Help me prepare for my interview.",
  },
  {
    title: "Improve ATS",
    subtitle: "Optimize ATS",
    icon: TrendingUp,
    prompt: "How can I improve my ATS score?",
  },
  {
    title: "Learning Roadmap",
    subtitle: "Learning plan",
    icon: GraduationCap,
    prompt: "Create my AI learning roadmap.",
  },
  {
    title: "Company Prep",
    subtitle: "Interview prep",
    icon: Briefcase,
    prompt: "Prepare me for a Google interview.",
  },
  {
    title: "Ask Anything",
    subtitle: "Career guidance",
    icon: Sparkles,
    prompt: "Hello Sage!",
  },
];

interface Props {
  onSelect: (prompt: string) => void;
}

export default function QuickActions({ onSelect }: Props) {
return (
  <div className="grid grid-cols-6 gap-4">
    {actions.map(({ title, subtitle, icon: Icon, prompt }) => (
      <button
        key={title}
        onClick={() => onSelect(prompt)}
        className="
          h-30
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-3
          text-left
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-pink-500/40
          hover:bg-pink-500/[0.04]
        "
      >
        <div className="flex h-full flex-col">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10">
          <Icon className="h-5 w-5 text-pink-400" />
        </div>

       <h3 className="text-xl font-semibold leading-6 text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-zinc-400">
          {subtitle}
        </p>
        </div>
      </button>
    ))}
  </div>
);
}