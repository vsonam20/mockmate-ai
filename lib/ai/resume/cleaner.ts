export function cleanResumeText(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ ]{2,}/g, " ")
    .trim();
}