import { extractPdfText } from "./pdf";
import { extractDocxText } from "./docx";

export async function extractResumeText(
  file: File
): Promise<string> {
  const buffer = Buffer.from(
    await file.arrayBuffer()
  );

  switch (file.type) {
    case "application/pdf":
      return extractPdfText(buffer);

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return extractDocxText(buffer);

    default:
      throw new Error("Unsupported resume format.");
  }
}