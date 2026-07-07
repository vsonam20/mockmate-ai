interface PromptInput {
  role: string;
  company: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
}

export function buildInterviewPrompt(data: PromptInput) {
  return `
You are a Senior Technical Interviewer.

Generate a mock interview.

Role: ${data.role}
Target Company: ${data.company || "General"}
Experience: ${data.experience}
Interview Type: ${data.type}
Difficulty: ${data.difficulty}

Instructions:

- If a target company is provided, imitate that company's interview style.
- If no company is provided, create a high-quality generic interview.
- Questions must match the selected role.
- Questions must match the selected difficulty.
- Avoid duplicate questions.
- Make questions realistic.
- Mix conceptual and practical questions.
- Do not ask the exact same question twice.

If Target Company is:

Google:
- Focus on algorithms, problem solving, ML fundamentals, system design and coding.

Amazon:
- Include Leadership Principles.
- Ask behavioral and technical questions.

Microsoft:
- Focus on practical coding, debugging, object-oriented programming and AI concepts.

Meta:
- Focus on coding, scalability and machine learning.

OpenAI:
- Focus on LLMs, Transformers, RAG, Prompt Engineering, Deep Learning and AI Ethics.

NVIDIA:
- Focus on Deep Learning, CUDA, Computer Vision and GPU programming.

Apple:
- Focus on optimization, system design and practical engineering.

TCS / Infosys / Wipro / Accenture:
- Mix aptitude, SQL, OOP, DBMS, HR and basic technical questions.

If the company is unknown,
generate a standard industry interview.



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