"use client";

import { motion } from "framer-motion";
import StatCard from "./stat-card";
import { statsData } from "./stats-data";

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[0.3em] text-pink-400 font-semibold">
            Statistics
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trusted by Thousands
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Our numbers speak for themselves.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {statsData.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
            />
          ))}

        </div>

      </div>
    </section>
  );
}