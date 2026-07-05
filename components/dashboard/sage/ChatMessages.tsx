import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "@/hooks/useSageChat";

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export default function ChatMessages({
  messages,
}: ChatMessagesProps) {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="space-y-10 pb-6">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message.content}
          isUser={message.role === "user"}
        />
      ))}
    </div>
  );
}