import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY");
}

export const ai = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});