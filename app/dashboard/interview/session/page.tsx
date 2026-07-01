import { createClient } from "@/lib/supabase/server";
import InterviewSession from "@/components/interview/session/InterviewSession";

interface Props {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function SessionPage({
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

  const { data: questions, error } = await supabase
    .from("interview_questions")
    .select("*")
    .eq("interview_id", id)
    .order("question_number");

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load interview.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <InterviewSession
        interviewId={id}
        questions={questions}
      />
    </main>
  );
}