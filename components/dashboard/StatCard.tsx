import GlassCard from "@/components/ui/GlassCard";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <GlassCard className="group relative overflow-hidden p-6 transition-all duration-300

      hover:-translate-y-2
      hover:border-pink-500/40
      hover:shadow-[0_0_35px_rgba(236,72,153,0.18)]
     "
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-transparent opacity-70" />
        
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white
                         transition-all duration-300 
                         group-hover:text-pink-300 ">
            {value}
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            {subtitle}
          </p>
        </div>

        <div
          className="
          rounded-2xl
          bg-pink-500/10
          p-3
          
          transition-all
          duration-300
          
          group-hover:scale-110
          group-hover:bg-pink-500/20"
        >
          <Icon
            size={24}
            className="text-pink-400 
                       transition-transform
                       duration-300
                       group-hover:rotate-6"
          />
        </div>
      </div>
    </GlassCard>
  );
}