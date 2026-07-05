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

  try {
    const response =
      await ai.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const text =
      response.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error("Groq returned an empty response.");
    }

    const parsed = extractJson(text);

    return SageResponseSchema.parse(parsed);
  } catch (error) {
    console.error("Groq Error:", error);
    throw error;
  }
}