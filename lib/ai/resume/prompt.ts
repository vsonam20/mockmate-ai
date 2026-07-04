interface ResumePromptInput {
  resumeText: string;
  role?: string;
  targetCompany?: string;
  techStack?: string;
}

export function buildResumePrompt({
  resumeText,
  role,
  targetCompany,
  techStack,
}: ResumePromptInput) {
  return `
You are MockMate AI's professional Resume Intelligence Engine.

Analyze the following resume from THREE perspectives:

1. ATS
2. Senior Technical Recruiter
3. Engineering Hiring Manager

Candidate Information

Target Role:
${role ?? "Not specified"}

Target Company:
${targetCompany ?? "Not specified"}

Preferred Tech Stack:
${techStack ?? "Not specified"}

IMPORTANT

Return ONLY valid JSON.

No markdown.

No explanation.

No code fences.

Return exactly this schema:

{
  "atsScore": number,
  "summary": string,
  "strengths": string[],
  "weaknesses": string[],
  "missingSkills": string[],
  "suggestions": string[],
  "projectReview": string,
  "experienceReview": string,
  "educationReview": string,
  "careerReadiness": string
}

Resume

${resumeText}
`;
}