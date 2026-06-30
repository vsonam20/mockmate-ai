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