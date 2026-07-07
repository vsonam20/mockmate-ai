"use client";

import { useEffect, useRef } from "react";

import type { ChatMessage } from "@/hooks/useSageChat";

import ChatMessages from "./ChatMessages";
import TypingIndicator from "./TypingIndicator";

interface Props {
  messages: ChatMessage[];
  loading: boolean;
}

export default function Conversation({
  messages,
  loading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      <div className="mx-auto w-full max-w-5xl px-2 py-6">

        <ChatMessages messages={messages} />

        {loading && (
          <div className="mt-8">
            <TypingIndicator />
          </div>
        )}

        <div ref={bottomRef} />

      </div>
    </div>
  );
}