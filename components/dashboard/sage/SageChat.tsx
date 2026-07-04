"use client";

import { useSageChat } from "@/hooks/useSageChat";

import ChatWindow from "./ChatWindow";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import SageWelcome from "./SageWelcome";

export default function SageChat() {
  const {
    input,
    setInput,
    loading,
    messages,
    sendMessage,
  } = useSageChat();

  const hasMessages = messages.length > 0;

  return (
    <div className="mx-auto max-w-7xl">

      {!hasMessages && (
        <SageWelcome />
      )}

      <div className="sticky top-0 z-20 mb-8 rounded-3xl border border-white/10 bg-[#151010]/90 p-5 backdrop-blur-xl">
        <ChatInput
          input={input}
          loading={loading}
          onInputChange={setInput}
          onSend={sendMessage}
        />
      </div>

      {hasMessages && (
        <ChatWindow>
          <ChatMessages messages={messages} />

          {loading && <TypingIndicator />}
        </ChatWindow>
      )}

    </div>
  );
}