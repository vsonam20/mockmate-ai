export default function ChatHeader() {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Sage
          </h1>

          <p className="mt-2 text-zinc-400">
            Your Personal AI Interview Mentor
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="text-sm text-zinc-400">
            Online
          </span>
        </div>
      </div>
    </header>
  );
}