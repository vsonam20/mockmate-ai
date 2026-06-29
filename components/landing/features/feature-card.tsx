"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-8
        shadow-[0_0_40px_rgba(255,45,120,.12)]
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500">
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}