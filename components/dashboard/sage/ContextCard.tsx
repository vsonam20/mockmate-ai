interface Props {
  atsScore: number;
  role?: string;
  interviewScore: number;
}

export default function ContextCard({
  atsScore,
  role,
  interviewScore,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-pink-400">
        Current Context
      </p>

      <div className="space-y-3 text-zinc-300">
        <p>✅ ATS Score : {atsScore}</p>

        <p>🎯 Target Role : {role ?? "Not selected"}</p>

        <p>
          🎤 Interview :
          {interviewScore > 0
            ? ` ${interviewScore}/100`
            : " Not Attempted"}
        </p>
      </div>
    </div>
  );
}