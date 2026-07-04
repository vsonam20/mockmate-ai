interface InsightCardProps {
  atsScore: number;
  interviewScore: number;
}

export default function InsightCard({
  atsScore,
  interviewScore,
}: InsightCardProps) {
  const insight =
    interviewScore === 0
      ? "Your resume is strong, but you haven't completed a mock interview yet. Practice one today to unlock deeper insights."
      : interviewScore > atsScore
      ? "Great progress! Keep refining your resume and interview skills together."
      : "Your ATS score is strong, but interview performance needs more attention. Focus on communication and behavioral questions.";

  return (
    <section className="rounded-3xl border border-pink-500/20 bg-pink-500/5 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">
        Today's Insight
      </p>

      <p className="mt-3 text-zinc-300 leading-7">
        {insight}
      </p>
    </section>
  );
}