interface TranscriptBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TranscriptBox({
  value,
  onChange,
}: TranscriptBoxProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      <h3 className="mb-5 text-xl font-semibold text-white">
        Your Answer
      </h3>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your answer here or use the microphone..."
        className="
          min-h-[220px]
          w-full
          resize-none
          rounded-2xl
          border
          border-white/10
          bg-black/30
          p-5
          text-lg
          leading-8
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-zinc-500
          focus:border-pink-500
          focus:ring-2
          focus:ring-pink-500/20
        "
      />
    </div>
  );
}