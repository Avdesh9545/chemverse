"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];

    return chapters.filter((chapter) =>
      chapter.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative hidden lg:block">

      <input
        type="text"
        placeholder="Search chapters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 rounded-xl border border-slate-300 px-4 py-3 focus:border-violet-500 focus:outline-none"
      />

      {results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">

          {results.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/class/${chapter.grade}/chapter/${chapter.slug}`}
              onClick={() => setQuery("")}
              className="block border-b border-slate-100 px-4 py-3 hover:bg-violet-50 last:border-b-0"
            >
              <div className="font-semibold text-slate-900">
                {chapter.title}
              </div>

              <div className="text-sm text-slate-500">
                Class {chapter.grade}
              </div>
            </Link>
          ))}

        </div>
      )}

    </div>
  );
}