import {
  ArrowRight,
  Brain,
  Clock3,
  Sparkles,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import { todaysFocus } from "@/lib/dashboard/mock-data";

export default function TodayFocus() {
  return (
    <section className="space-y-5">
      {/* Section Header */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          🧠 Today's Focus
        </h2>

        <p className="mt-1 text-zinc-400">
          Your AI coach recommends this challenge today.
        </p>
      </div>

      {/* Card */}

      <GlassCard
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-pink-500/20
          bg-gradient-to-br
          from-pink-500/10
          via-transparent
          to-purple-500/10
          p-8
        "
      >
        {/* Background Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative z-10">

          {/* Top */}

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            {/* Left */}

            <div className="flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10">
                <Brain className="text-pink-400" size={28} />
              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  {todaysFocus.title}
                </h3>

                <p className="mt-1 text-zinc-400">
                  {todaysFocus.difficulty}
                </p>

              </div>

            </div>

            {/* CTA */}

            <GlowButton className="shrink-0">
              Start Practice

              <ArrowRight
                size={18}
                className="ml-2"
              />
            </GlowButton>

          </div>

          {/* Description */}

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
            {todaysFocus.description}
          </p>

          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-wrap gap-6">

              <div className="flex items-center gap-2 text-zinc-300">
                <Clock3 size={18} />

                <span>{todaysFocus.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-pink-400">
                <Sparkles size={18} />

                <span>{todaysFocus.xp}</span>
              </div>

            </div>

            <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
              🔥 Recommended Today
            </div>

          </div>

        </div>
      </GlassCard>
    </section>
  );
}