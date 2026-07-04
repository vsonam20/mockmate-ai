import { ai } from "@/lib/ai/client";
import { extractJson } from "@/lib/utils/extract-json";

import { buildSagePrompt } from "./prompt";
import {
  SageContext,
  SageResponseSchema,
} from "./types";

export async function generateSageResponse(
  context: SageContext
) {
  const prompt = buildSagePrompt(context);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  const parsed = extractJson(text);

  return SageResponseSchema.parse(parsed);
}