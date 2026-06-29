"use client";

import FAQItem from "./faq-item";
import { faqData } from "./faq-data";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-pink-400 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Everything you need to know before starting your AI interview journey.
          </p>

        </div>

        <div className="space-y-5">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.question}
              {...faq}
            />
          ))}
        </div>

      </div>
    </section>
  );
}