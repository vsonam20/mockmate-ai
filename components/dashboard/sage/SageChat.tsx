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
    <div className="mx-auto flex h-full max-w-6xl flex-col">

      {/* ---------------- Landing ---------------- */}

      {!hasMessages && (
        <>
          <div className="flex-1">
            <SageLanding onSelect={setInput} />
          </div>

          <div className="pt-6">
          <ChatInput
              compact
              input={input}
              loading={loading}
              onInputChange={setInput}
              onSend={sendMessage}
          />
          </div>
        </>
      )}

      {/* ---------------- Conversation ---------------- */}

      {hasMessages && (
        <>
          <div className="flex-1 min-h-0 overflow-y-auto px-6">

            <div className="mx-auto max-w-5xl">

              <ChatMessages messages={messages} />

              {loading && (
                <div className="mt-6">
                  <TypingIndicator />
                </div>
              )}

              <div ref={bottomRef} />

            </div>

          </div>

          <div className="border-t border-white/10 px-2 pt-8 pb-6">

            <div className="mx-auto max-w-5xl">
              <ChatInput
                input={input}
                loading={loading}
                onInputChange={setInput}
                onSend={sendMessage}
              />
            </div>

          </div>
        </>
      )}

    </div>
  );
}