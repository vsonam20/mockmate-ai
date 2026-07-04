"use server";

import { analyzeWithSage } from "@/lib/ai/sage/analyze";
import { buildSageData } from "@/lib/services/sage.service";

interface AskSageInput {
  question: string;
}

export async function askSageAction(
  input: AskSageInput
) {
  const sageData = await buildSageData();

  return analyzeWithSage({
    ...sageData,
    userQuestion: input.question,
  });
}