"use client";

import { useEffect, useRef } from "react";

import { useSageChat } from "@/hooks/useSageChat";

import SageLanding from "./SageLanding";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

export default function SageChat() {
  const {
    input,
    setInput,
    loading,
    messages,
    sendMessage,
  } = useSageChat();

  const hasMessages = messages.length > 0;

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="mx-auto flex h-[calc(100vh-145px)] max-w-6xl flex-col">

      {/* Landing */}
      {!hasMessages && (
        <>
          <div className="flex-1">
            <SageLanding onSelect={setInput} />
          </div>

          <div className="mx-auto mt-6 w-full max-w-6xl pb-6">
            <ChatInput
              input={input}
              loading={loading}
              onInputChange={setInput}
              onSend={sendMessage}
            />
          </div>
        </>
      )}

      {/* Conversation */}
      {hasMessages && (
        <>
          <div className="flex-1 min-h-0 overflow-y-auto pr-2">
            <div className="space-y-8 pb-8">

            <div className="mb-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-sm text-zinc-500">
                Today
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <ChatMessages messages={messages} />

            {loading && (
              <div className="mt-6">
                <TypingIndicator />
              </div>
            )}

            <div ref={bottomRef} />
            </div>

          </div>

          <div className="border-t border-white/10 bg-[#090506]/95 pt-4 pb-4 backdrop-blur-xl">
            <ChatInput
              input={input}
              loading={loading}
              onInputChange={setInput}
              onSend={sendMessage}
            />
          </div>
        </>
      )}

    </div>
  );
}