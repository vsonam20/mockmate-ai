import { Sparkles } from "lucide-react";
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
    className={`flex ${
      isUser ? "justify-end" : "justify-start"
    }`}
  >
    {!isUser && (
      <div className="mr-4 mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d1520] pt-2">
        <Sparkles
          size={18}
          className="text-pink-400"
        />
      </div>
    )}

    <div
      className={`
        max-w-[760px]
        rounded-[24px]
        ${
          isUser
            ? "px-6 py-4"
            : "px-7 py-5"
        }
        text-[17px]
        leading-8
        whitespace-pre-wrap
        shadow-sm
        ${
          isUser
          ? "max-w-[420px] bg-pink-500 text-white"
          : "max-w-[650px] bg-[#2b2028] text-zinc-200"
        }
      `}
    >
      {message}
    </div>
  </div>
);
}