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
    title: "Resume Review",
    icon: FileText,
  },
  {
    title: "Interview Coach",
    icon: Mic,
  },
  {
    title: "Improve ATS",
    icon: TrendingUp,
  },
  {
    title: "Learning Roadmap",
    icon: GraduationCap,
  },
  {
    title: "Company Prep",
    icon: Briefcase,
  },
  {
    title: "Ask Anything",
    icon: Sparkles,
  },
];

export default function SageWelcome() {
  return (
    <section className="mb-10">
      <div className="mx-auto max-w-4xl text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10 border border-pink-500/20">
          <Sparkles className="h-10 w-10 text-pink-400" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Hello! I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            Sage
          </span>{" "}
          👋
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400 leading-8">
          I already understand your resume, interview performance and career
          goal. Choose an action below or ask me anything.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                  group
                  rounded-2xl
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
                <Icon className="mb-5 h-7 w-7 text-pink-400 transition group-hover:scale-110" />

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}