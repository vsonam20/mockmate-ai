"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  review,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      "
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 mb-5" />

      <p className="text-zinc-300 leading-7">
        "{review}"
      </p>

      <h3 className="mt-6 font-bold text-xl">
        {name}
      </h3>

      <p className="text-pink-400">
        {role}
      </p>
    </motion.div>
  );
}