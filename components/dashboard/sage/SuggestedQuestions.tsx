const questions = [
  "How can I improve my resume?",
  "Am I ready for Google?",
  "What should I learn next?",
  "Analyze my interview performance.",
];

export default function SuggestedQuestions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">
        Suggested Questions
      </h3>

      <div className="flex flex-wrap gap-3">
        {questions.map((question) => (
          <button
            key={question}
            className="rounded-full border border-pink-500/30 px-4 py-2 text-sm text-pink-300 transition hover:bg-pink-500/10"
          >
            {question}
          </button>
        ))}
      </div>
    </section>
  );
}