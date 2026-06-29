"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-10
        shadow-[0_0_60px_rgba(255,50,140,.18)]
      "
    >
      {children}
    </motion.div>
  );
}