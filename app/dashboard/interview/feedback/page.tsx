import { createClient } from "@/lib/supabase/server";
import FeedbackFooter from "@/components/interview/feedback/FeedbackFooter";

interface Props {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function FeedbackPage({
  searchParams,
}: Props) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="p-10 text-center text-red-500">
        Interview not found.
      </div>
    );
  }

  const supabase = await createClient();

  const { data: interview } = await supabase
    .from("interviews")
    .select("*")
    .eq("id", id)
    .single();

  const { data: answers } = await supabase
    .from("interview_answers")
    .select(`
      answer,
      score,
      feedback,
      interview_questions (
        question
      )
    `)
    .eq("interview_id", id);

    const averageScore =
  answers && answers.length > 0
    ? Math.round(
        answers.reduce(
          (sum: number, item: any) => sum + (item.score ?? 0),
          0
        ) / answers.length
      )
    : 0;

    let performance = "Needs Improvement";

    if (averageScore >= 90) {
    performance = "Excellent";
    } else if (averageScore >= 80) {
    performance = "Very Good";
    } else if (averageScore >= 70) {
    performance = "Good";
    } else if (averageScore >= 60) {
    performance = "Average";
    }

    const strengths =
  answers?.filter((item: any) => (item.score ?? 0) >= 80) ?? [];

const improvements =
  answers?.filter((item: any) => (item.score ?? 0) < 80) ?? [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Interview Feedback
      </h1>

    <div className="mb-10 rounded-3xl border border-pink-500/20 bg-white/5 p-8">
    <div className="flex items-center justify-between">
        <div>
        <p className="text-sm uppercase tracking-wider text-zinc-400">
            Interview Result
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
            {interview?.role}
        </h2>

        <div className="mt-5 inline-flex rounded-full bg-green-500/20 px-4 py-2">
            <span className="font-medium text-green-400">
            {interview?.status}
            </span>
        </div>
        </div>

        <div className="text-center">
        <p className="text-sm text-zinc-400">
            Overall Score
        </p>

        <p className="mt-4 text-lg font-semibold text-pink-300">
           {performance}
        </p>

        <h1 className="mt-2 text-6xl font-bold text-pink-400">
            {averageScore}
        </h1>

        <p className="mt-1 text-zinc-400">
            /100
        </p>
        </div>
    </div>
    </div>

<div className="mb-10 grid gap-6 md:grid-cols-2">

  <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
    <h2 className="mb-4 text-2xl font-bold text-green-400">
      💪 Strengths
    </h2>

    {strengths.length === 0 ? (
      <p className="text-zinc-400">
        No strong areas identified yet.
      </p>
    ) : (
      strengths.map((_: any, index: number) => (
        <p
          key={index}
          className="mb-2 text-zinc-300"
        >
          ✓ Question {index + 1} performed well
        </p>
      ))
    )}
  </div>

  <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
    <h2 className="mb-4 text-2xl font-bold text-yellow-400">
      📈 Areas to Improve
    </h2>

    {improvements.length === 0 ? (
      <p className="text-zinc-400">
        Excellent performance!
      </p>
    ) : (
      improvements.map((_: any, index: number) => (
        <p
          key={index}
          className="mb-2 text-zinc-300"
        >
          • Review Question {index + 1}
        </p>
      ))
    )}
  </div>

</div>

      <div className="space-y-8">
{answers?.map((item: any, index: number) => (
  <div
    key={index}
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-8
      transition-all
      duration-300
      hover:border-pink-500/30
    "
  >
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-2xl font-bold text-white">
        Question {index + 1}
      </h3>

      <div
        className="
          rounded-full
          bg-pink-500/20
          px-4
          py-2
        "
      >
        <span className="font-semibold text-pink-400">
          {item.score}/100
        </span>
      </div>
    </div>

    <div className="space-y-8">

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Question
        </p>

        <p className="text-lg leading-8 text-white">
          {item.interview_questions.question}
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Your Answer
        </p>

        <div className="rounded-2xl bg-black/20 p-5">
          <p className="leading-8 text-zinc-300">
            {item.answer}
          </p>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          AI Feedback
        </p>

        <div className="rounded-2xl bg-pink-500/10 p-5">
          <p className="leading-8 text-zinc-300">
            {item.feedback}
          </p>
        </div>
      </div>

    </div>
  </div>
))}
      </div>
      <FeedbackFooter />
    </main>
  );
}