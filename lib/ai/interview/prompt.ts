interface PromptInput {
  role: string;
  company: string;
  techStack: string;
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
Primary Technology: ${data.techStack || "General"}
Experience: ${data.experience}
Interview Type: ${data.type}
Difficulty: ${data.difficulty}

Instructions:

Instructions:

- Generate questions primarily around the selected role.
- If a target company is provided, imitate that company's interview style.
- If a primary technology is provided, make at least 70% of the interview questions based on that technology.
- The remaining questions may test general concepts related to the role.
- Questions must match the selected experience level.
- Questions must match the selected difficulty.
- Mix conceptual, practical and scenario-based questions.
- Avoid duplicate questions.
- Make the interview feel realistic.

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