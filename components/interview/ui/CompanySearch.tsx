"use client";

import { Search } from "lucide-react";
import {useEffect, useMemo, useState } from "react";

import { COMPANIES } from "@/lib/constants/companies";

interface Props {
  value: string;
  onSelect: (role: string) => void;
}

export default function RoleSearch({
  value,
  onSelect,
}: Props) {
  const [query, setQuery] = useState(value);
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];

    return COMPANIES.filter((role) =>
      role.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
  }, [query]);

  return (
    <div className="relative">

      {/* Search */}

      <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">

        <Search
          size={18}
          className="mr-3 text-zinc-500"
        />

        <input
          value={query}
          placeholder="Search company (optional)..."
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500"
        />

      </div>

      {/* Suggestions */}

      {query.trim() && 
      query.toLowerCase() !== value.toLowerCase() && (
        <div className="absolute z-20 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#111114] p-2 shadow-2xl">

          {filtered.length > 0 ? (
            filtered.map((role) => (
              <button
                key={role}
                onClick={() => {
                  onSelect(role);
                  setQuery(role);
                }}
                className={`
                  mb-1
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  transition

                  ${
                    value === role
                      ? "bg-pink-500 text-white"
                      : "text-zinc-300 hover:bg-pink-500/10"
                  }
                `}
              >
                {role}
              </button>
            ))
          ) : (
            <button
              onClick={() => {
                onSelect(query);
                setQuery(query);
                }}
              className="w-full rounded-xl px-4 py-3 text-left text-pink-400 hover:bg-pink-500/10"
            >
              Use "{query}" as company
            </button>
          )}

        </div>
      )}

    </div>
  );
}