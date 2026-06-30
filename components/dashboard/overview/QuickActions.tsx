import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { quickActions } from "@/lib/dashboard/mock-data";
import { ArrowRight } from "lucide-react";

export default function QuickActions() {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-zinc-400">
          Jump directly into your next task.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
            >
              <GlassCard
                className="
                      group
                      relative
                      overflow-hidden

                      h-full
                      min-h-[190px]

                      cursor-pointer

                      rounded-3xl

                      p-7

                      transition-all
                      duration-300

                      hover:-translate-y-2
                      hover:border-pink-500/40
                      hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]
                "
              >

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent opacity-70" />
                <div
                className="
                    mb-6
                    inline-flex
                    rounded-2xl
                    bg-pink-500/10
                    p-3

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-pink-500/20
                "
                >
                  <Icon
                    size={28}
                    className="
                        text-pink-400
                        transition-transform
                        duration-300
                        group-hover:rotate-6"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {action.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {action.description}
                </p>

                <div
                    className="
                        mt-6
                        flex
                        items-center
                        gap-2

                        text-pink-400

                        opacity-0

                        transition-all
                        duration-300

                        group-hover:translate-x-1
                        group-hover:opacity-100
                    "
                    >
                    <span className="text-sm font-medium">
                        Open
                    </span>

                    <ArrowRight size={18} />
                    </div>

              </GlassCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}