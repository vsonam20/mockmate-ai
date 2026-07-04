export function extractJson<T = unknown>(response: string): T {
  const cleaned = response
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No valid JSON found in AI response.");
  }

  try {
    return JSON.parse(cleaned.slice(start, end + 1)) as T;
  } catch {
    throw new Error("Failed to parse AI JSON response.");
  }
}