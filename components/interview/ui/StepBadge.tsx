interface StepBadgeProps {
  step: number;
}

export default function StepBadge({
  step,
}: StepBadgeProps) {
  return (
    <div
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-pink-500/10
        text-sm
        font-bold
        text-pink-400
      "
    >
      {step}
    </div>
  );
}