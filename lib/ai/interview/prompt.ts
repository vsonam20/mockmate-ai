interface PromptInput {
  role: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
}

export function buildInterviewPrompt(data: PromptInput) {
  return `
Generate a mock interview.

Role: ${data.role}
Experience: ${data.experience}
Interview Type: ${data.type}
Difficulty: ${data.difficulty}

Generate exactly ${data.questions} interview questions.

Return ONLY valid JSON.

Format:

{
  "title": "...",
  "role": "...",
  "difficulty": "...",
  "questions": [
    {
      "id": 1,
      "question": "..."
    }
  ]
}

Do not return markdown.
Do not use code fences.
Do not add explanations.
`;
}

export function buildEvaluationPrompt(
  questions: {
    question: string;
    answer: string;
  }[]
) {
  return `
You are a senior technical interviewer.

Evaluate each answer individually.

Return ONLY valid JSON.

Format:

{
  "overallScore": 85,
  "overallFeedback": "...",
  "answers": [
    {
      "question": "...",
      "score": 90,
      "feedback": "..."
    }
  ]
}

Questions & Answers:

${JSON.stringify(questions, null, 2)}

Do not return markdown.
Do not use code fences.
Do not explain anything.
`;
}