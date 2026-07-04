"use client";

import { useState } from "react";
import { askSage } from "@/lib/api/sage";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function useSageChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  async function sendMessage() {
    const question = input.trim();

    if (!question || loading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await askSage(question);

      const sageMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.response,
      };

      setMessages((prev) => [...prev, sageMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    input,
    setInput,

    messages,

    loading,

    sendMessage,
  };
}