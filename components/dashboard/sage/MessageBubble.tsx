interface MessageBubbleProps {
  message: string;
  isUser?: boolean;
}

export default function MessageBubble({
  message,
  isUser = false,
}: MessageBubbleProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[65%]
          rounded-3xl
          px-5
          py-4
          whitespace-pre-wrap
          leading-7
          shadow-sm
          ${
            isUser
              ? "bg-pink-500 text-white"
              : "bg-white/10 text-zinc-200"
          }
        `}
      >
        {message}
      </div>
    </div>
  );
}