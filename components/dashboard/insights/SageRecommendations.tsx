interface Props {
  atsScore: number;
  interviewCount: number;
  topRole: string;
  topType: string;
}

export default function SageRecommendations({
  atsScore,
  interviewCount,
  topRole,
  topType,
}: Props) {
  const recommendations = [
    atsScore < 75
      ? "Improve your resume. Your ATS score is below 75."
      : "Great ATS score! Focus more on interview practice.",

    interviewCount < 5
      ? "Practice more interviews to improve confidence."
      : "Excellent consistency! Try a Hard interview next.",

    `Your most practiced role is ${topRole}. Continue strengthening this area.`,

    `You mainly attempt ${topType} interviews. Consider exploring other interview types.`,
  ];

  return (
    <section className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent p-8">
      <h2 className="text-2xl font-bold text-white">
        🧠 Sage AI Recommendations
      </h2>

      <div className="mt-6 space-y-4">
        {recommendations.map((text, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <span className="text-xl">✨</span>

            <p className="text-zinc-300">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}