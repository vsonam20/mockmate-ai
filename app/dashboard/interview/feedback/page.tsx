import { createClient } from "@/lib/supabase/server";

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

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Interview Feedback
      </h1>

      <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-pink-400">
          {interview?.role}
        </h2>

        <p className="mt-3 text-zinc-400">
          Status: {interview?.status}
        </p>
      </div>

      <div className="space-y-8">
        {answers?.map((item: any, index: number) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold text-pink-400">
              Question {index + 1}
            </h3>

            <p className="mt-3 text-white">
              {item.interview_questions.question}
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-zinc-300">
                Your Answer
              </h4>

              <p className="mt-2 text-zinc-400">
                {item.answer}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-zinc-300">
                AI Score
              </h4>

              <p className="mt-2 text-pink-400 text-xl">
                {item.score}/100
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-zinc-300">
                AI Feedback
              </h4>

              <p className="mt-2 text-zinc-400">
                {item.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}