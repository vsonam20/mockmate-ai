import {
  FileText,
  Mic,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    icon: FileText,
    label: "Resume Review",
    prompt: "Review my resume",
  },
  {
    icon: Mic,
    label: "Interview Coach",
    prompt: "Help me prepare for interview",
  },
  {
    icon: TrendingUp,
    label: "Improve ATS",
    prompt: "How can I improve my ATS score?",
  },
  {
    icon: GraduationCap,
    label: "Learning Roadmap",
    prompt: "Create my AI roadmap",
  },
  {
    icon: Briefcase,
    label: "Company Prep",
    prompt: "Prepare me for Google interview",
  },
  {
    icon: Sparkles,
    label: "Ask Anything",
    prompt: "Hello Sage",
  },
];

interface Props {
  onSelect: (prompt: string) => void;
}

export default function QuickActions({ onSelect }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {actions.map(({ icon: Icon, label, prompt }) => (
        <button
          key={label}
          onClick={() => onSelect(prompt)}
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            text-left
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-pink-500/40
            hover:bg-pink-500/10
          "
        >
          <Icon
            className="mb-4 text-pink-400 group-hover:scale-110 transition-transform"
            size={24}
          />

          <p className="font-semibold text-white">
            {label}
          </p>
        </button>
      ))}
    </div>
  );
}