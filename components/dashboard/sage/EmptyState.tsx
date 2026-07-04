"use client";

import {
  FileText,
  Mic,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    icon: FileText,
    title: "Resume Review",
    prompt: "Review my resume and tell me how to improve it.",
  },
  {
    icon: Mic,
    title: "Interview Coach",
    prompt: "Help me prepare for my next interview.",
  },
  {
    icon: TrendingUp,
    title: "Improve ATS",
    prompt: "How can I increase my ATS score?",
  },
  {
    icon: GraduationCap,
    title: "Learning Roadmap",
    prompt: "Create an AI/ML roadmap for me.",
  },
  {
    icon: Briefcase,
    title: "Company Prep",
    prompt: "Prepare me for a Google interview.",
  },
  {
    icon: Sparkles,
    title: "Ask Anything",
    prompt: "What should I learn next?",
  },
];

export default function EmptyState() {
  return (
    <div className="space-y-6">

      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-pink-400">
          Quick Actions
        </p>

        <p className="mt-2 text-zinc-400">
          Choose a suggestion or ask Sage anything below.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-500/40
                hover:bg-pink-500/5
              "
            >
              <Icon
                className="
                  mb-5
                  h-7
                  w-7
                  text-pink-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <h3 className="text-lg font-semibold text-white">
                {action.title}
              </h3>
            </button>
          );
        })}
      </div>

    </div>
  );
}