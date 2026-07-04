import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "@/hooks/useSageChat";

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export default function ChatMessages({
  messages,
}: ChatMessagesProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      {messages.length === 0 ? (
        <p className="text-center text-zinc-500">
          Start a conversation with Sage.
        </p>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.content}
              isUser={message.role === "user"}
            />
          ))}
        </div>
      )}
    </section>
  );
}