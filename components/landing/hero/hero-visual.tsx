import SageCanvas from "@/components/sage/SageCanvas";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">

      <div className="w-[520px] h-[520px]">
        <SageCanvas />
    </div>

      {/* Floating Score Card */}

      <div
        className="
        absolute
        left-0
        top-16
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_40px_rgba(255,45,120,.2)]
        "
      >
        <p className="text-xs text-zinc-400">
          Interview Score
        </p>

        <h2 className="text-3xl font-bold text-white">
          92
        </h2>

        <p className="text-green-400 text-sm">
          Excellent
        </p>
      </div>

      {/* AI Card */}

      <div
        className="
        absolute
        right-0
        bottom-16
        rounded-3xl
        border
        border-pink-500/20
        bg-white/5
        backdrop-blur-2xl
        p-5
        shadow-[0_0_50px_rgba(255,45,120,.2)]
        "
      >
        <p className="text-pink-400 font-semibold">
          SAGE AI
        </p>

        <p className="text-sm text-zinc-300 mt-2">
          Live interview
          evaluation
        </p>
      </div>
    </div>
  );
}