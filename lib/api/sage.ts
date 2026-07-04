import { askSageAction } from "@/app/actions/sage";

export async function askSage(question: string) {
  return askSageAction({
    question,
  });
}