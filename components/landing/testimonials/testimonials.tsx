"use client";

import TestimonialCard from "./testimonial-card";
import { testimonialData } from "./testimonial-data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-pink-400 font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Loved by Learners
          </h2>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Thousands of students have improved their interview skills and landed
            offers using MockMateAI.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonialData.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}