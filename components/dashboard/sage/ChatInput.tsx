"use client";

interface ChatInputProps {
  input: string;
  loading: boolean;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  input,
  loading,
  onInputChange,
  onSend,
}: ChatInputProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex gap-3">
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
          className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="rounded-xl bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-600 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </section>
  );
}