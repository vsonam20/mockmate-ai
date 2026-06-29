"use client";

import CategoryCard from "./category-card";
import { categoryData } from "./category-data";

export default function Categories() {
  return (
    <section
    id="categories"
    className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-pink-400 font-semibold">
            Categories
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Master Every Interview
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Practice role-specific interview questions powered by AI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categoryData.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}

        </div>

      </div>
    </section>
  );
}