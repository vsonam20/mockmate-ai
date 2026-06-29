"use client";

import Marquee from "react-fast-marquee";
import CompanyCard from "./company-card";
import { companyData } from "./company-data";

export default function Companies() {
  return (
    <section
    id="companies"
    className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-pink-400 font-semibold tracking-widest uppercase">
            Trusted Worldwide
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Prepare for Interviews at
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Join thousands of learners preparing for top tech companies.
          </p>

        </div>

        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
        >
          {companyData.map((company) => (
            <div
              key={company}
              className="mx-5"
            >
              <CompanyCard
                name={company}
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
}