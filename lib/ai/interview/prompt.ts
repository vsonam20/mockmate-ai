interface PromptInput {
  role: string;
  company: string;
  techStack: string;
  experience: string;
  type: string;
  difficulty: string;
  questions: number;
  resumeText?: string;
}

export function buildInterviewPrompt(data: PromptInput) {
  return `
You are an expert interviewer capable of conducting Technical, HR, Behavioral, Mixed, and Company-specific interviews.

Generate a mock interview.

Role: ${data.role}
Target Company: ${data.company || "General"}
Primary Technology: ${data.techStack || "General"}
Experience: ${data.experience}
Interview Type: ${data.type}

Difficulty: ${data.difficulty}

IMPORTANT RULES:

Interview Type Rules:

- If Interview Type is "HR", generate ONLY HR and behavioral questions.
- Do NOT ask coding, DSA, SQL, system design, programming or technical questions.

- If Interview Type is "Technical", generate ONLY technical questions.

- If Interview Type is "Mixed", generate approximately:
  • 70% Technical questions
  • 30% HR/Behavioral questions

Difficulty Rules:

Easy:
- Beginner level
- Basic concepts
- Short questions
- No tricky scenarios
- No advanced system design

Medium:
- Intermediate practical questions
- Resume-based questions
- Scenario-based questions

Hard:
- Senior-level interview
- Complex scenarios
- Deep technical knowledge
- Cross-topic questions
- Follow-up style questions

Resume Rules:

If resumeText is provided:

- Around 60% of the interview should come from the resume.
- Remaining questions should follow the selected Interview Type.
- Never ignore the selected Interview Type because of the resume.

Examples:

If Interview Type = HR:
Ask HR questions about the projects instead of technical implementation.

Example:
"Tell me about your Student Task Manager project."
"What challenge did you face?"
"Why did you choose Java?"

NOT:
"Explain JDBC transactions."

If Interview Type = Technical:
Ask implementation questions.

If Interview Type = Mixed:
Mix both HR and technical.

${
  data.resumeText
    ? `
Candidate Resume:

${data.resumeText}

IMPORTANT:
- Use the candidate's resume to personalize the interview.
- Ask questions about the candidate's projects.
- Ask about the technologies mentioned in the resume.
- Ask about internships, certifications and experience if available.
- Do NOT ask only generic questions.
- Around 60% of the interview should be based on the resume.
`
    : ""
}

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


Before generating questions, verify that every question follows the selected Interview Type and Difficulty. If any question violates these settings, regenerate it.
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