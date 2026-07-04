interface MessageBubbleProps {
  message: string;
  isUser?: boolean;
}

export default function MessageBubble({
  message,
  isUser = false,
}: MessageBubbleProps) {
  return (
    <div
      className={`max-w-xl rounded-2xl px-4 py-3 ${
        isUser
          ? "ml-auto bg-pink-500 text-white"
          : "bg-white/10 text-zinc-200"
      }`}
    >
      {message}
    </div>
  );
}