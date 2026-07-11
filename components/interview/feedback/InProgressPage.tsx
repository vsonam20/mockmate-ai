import Link from "next/link";

interface Props {
  interviewId: string;
}

export default function InProgressPage({
  interviewId,
}: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Interview Feedback
      </h1>

      <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-10 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 text-4xl">
          ⏳
        </div>

        <h2 className="text-3xl font-bold text-white">
          Interview In Progress
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
          You haven't completed this interview yet.
          Complete all questions to unlock your AI score,
          strengths, weaknesses and detailed feedback.
        </p>

        <Link
          href={`/dashboard/interview/session?id=${interviewId}`}
          className="
            mt-10 inline-flex
            rounded-2xl
            bg-gradient-to-r
            from-pink-500
            to-rose-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          Continue Interview
        </Link>

      </div>
    </main>
  );
}