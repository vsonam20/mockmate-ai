export function buildResumePrompt(
  resumeText: string
) {
  return `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "atsScore": 85,
  "summary": "...",
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "missingSkills": [
    "...",
    "..."
  ],
  "suggestions": [
    "...",
    "..."
  ]
}

Resume:

${resumeText}

Do not return markdown.
Do not use code fences.
Return JSON only.
`;
}