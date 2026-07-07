"use client";

import { Sparkles, SendHorizontal } from "lucide-react";

interface ChatInputProps {
  input: string;
  loading: boolean;
  onInputChange: (value: string) => void;
  onSend: () => void;

  compact?: boolean;
}

export default function ChatInput({
  input,
  loading,
  onInputChange,
  onSend,
  compact = false,
}: ChatInputProps) {
return (
  <div
    className={`
      mx-auto
      w-full
      ${compact ? "max-w-2xl" : "max-w-4xl"}
    `}
  >
    <div className="flex items-center rounded-full border border-white/10 bg-[#141418] px-5 py-2.5 shadow-lg">

    <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/10">
      <Sparkles className="h-4 w-4 text-pink-400" />
    </div>

      <input
        type="text"
        value={input}
        placeholder="Ask Sage anything..."
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend();
          }
        }}
        disabled={loading}
        className="flex-1 bg-transparent py-2 text-[16px] text-white placeholder:text-zinc-500 outline-none"
      />

      <button
        onClick={onSend}
        disabled={loading}
        className="
          ml-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-pink-500
          text-white
          transition
          hover:bg-pink-600
          disabled:opacity-50
        "
      >
        <SendHorizontal className="h-5 w-5" />
      </button>

    </div>
  </div>
);
}