import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious: boolean;
  isLast: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  disablePrevious,
  isLast,
}: Props) {
  return (
    <div className="flex items-center justify-between">

      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          px-6
          py-3
          text-white
          disabled:opacity-40
        "
      >
        <ArrowLeft size={18} />
        Previous
      </button>

      <button
        onClick={onNext}
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-pink-500
          to-fuchsia-500
          px-6
          py-3
          font-semibold
          text-white
        "
      >
        {isLast ? "Finish Interview" : "Next Question"}

        <ArrowRight size={18} />
      </button>

    </div>
  );
}