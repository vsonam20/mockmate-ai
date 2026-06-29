"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type Props = {
  number: number;
  suffix: string;
  label: string;
};

export default function StatCard({
  number,
  suffix,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-10
      text-center
      transition-all
      duration-300
      hover:border-pink-500/40
      hover:shadow-[0_0_60px_rgba(255,45,120,.18)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent" />

      <h2 className="relative text-5xl font-black text-white">
        <CountUp
          end={number}
          duration={3}
        />
        {suffix}
      </h2>

      <p className="relative mt-4 text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}
