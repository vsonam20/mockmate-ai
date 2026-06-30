interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          Question {current} of {total}
        </span>

        <span className="text-sm font-semibold text-pink-400">
          {Math.round(percent)}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-500"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}