"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SageOrb() {
  return (
    <div className="flex justify-center py-8">

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Outer Glow */}

        <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-3xl" />

        {/* Orb */}

        <div
          className="
            relative
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            border
            border-pink-400/30
            bg-gradient-to-br
            from-pink-500/30
            via-fuchsia-500/20
            to-violet-500/20
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={44}
            className="text-white"
          />
        </div>

      </motion.div>

    </div>
  );
}