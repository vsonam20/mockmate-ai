import { generateInterviewAction } from "@/app/actions/interview";

export default async function SessionPage() {
  const interview = await generateInterviewAction({
    role: "AI/ML Engineer",
    experience: "Fresher",
    type: "Technical",
    difficulty: "Medium",
    questions: 5,
  });

  return (
    <pre className="p-8 text-white whitespace-pre-wrap">
      {JSON.stringify(interview, null, 2)}
    </pre>
  );
}