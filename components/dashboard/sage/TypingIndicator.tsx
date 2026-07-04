export default function TypingIndicator() {
  return (
    <div className="mt-4 flex items-center gap-2 text-zinc-400">

      <div className="flex gap-1">

        <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-pink-400"
          style={{ animationDelay: "150ms" }}
        />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-pink-400"
          style={{ animationDelay: "300ms" }}
        />

      </div>

      <span>Sage is thinking...</span>

    </div>
  );
}