"use client";
import FeatureCard from "./feature-card";
import { featureData } from "./feature-data";

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto mt-40 max-w-7xl px-6 py-32"
    >
      <div className="mb-16 text-center">

        <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-pink-400">
          Features
        </p>

        <h2 className="text-5xl font-black text-white">
          Everything You Need
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          MockMateAI combines AI-powered interviews,
          intelligent evaluation and detailed analytics
          to help you confidently crack your dream job.
        </p>

      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </section>
  );
}