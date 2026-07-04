export default function WelcomeCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-semibold text-white">
        Welcome back 👋
      </h2>

      <p className="mt-3 text-zinc-400 leading-7">
        I'm Sage, your personal AI Interview Mentor.
        I've analyzed your latest resume and interview performance.
        Ask me anything about your career, interviews, resume, or learning roadmap.
      </p>
    </section>
  );
}