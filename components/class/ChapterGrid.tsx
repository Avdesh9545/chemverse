"use client";

import { useMemo, useState } from "react";

import ChapterCard from "./ChapterCard";
import type { ChapterCardViewModel } from "@/lib/viewModels/chapter";

interface ChapterGridProps {
  grade: number;
  chapters: ChapterCardViewModel[];
}

export default function ChapterGrid({
  grade,
  chapters,
}: ChapterGridProps) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<
    "All" | "Easy" | "Medium" | "Hard"
  >("All");

  const filtered = useMemo(() => {
    return chapters.filter((chapter) => {
      const matchesSearch =
        chapter.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        chapter.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        chapter.difficulty === difficulty;

      return (
        matchesSearch &&
        matchesDifficulty
      );
    });
  }, [chapters, search, difficulty]);

  return (
    <section className="space-y-8">

      {/* Search + Filters */}

      <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search chapter..."
          className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-violet-500 lg:max-w-md"
        />

        <div className="flex flex-wrap gap-3">

          {(
            [
              "All",
              "Easy",
              "Medium",
              "Hard",
            ] as const
          ).map((item) => (
            <button
              key={item}
              onClick={() =>
                setDifficulty(item)
              }
              className={`rounded-full px-5 py-2 font-medium transition ${
                difficulty === item
                  ? "bg-violet-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      <p className="text-slate-500">
        Showing{" "}
        <strong>
          {filtered.length}
        </strong>{" "}
        chapter
        {filtered.length !== 1 && "s"}
      </p>

      {/* Cards */}

      <div className="space-y-6">

        {filtered.map((chapter) => (
          <ChapterCard
            key={chapter.slug}
            grade={grade}
            chapter={chapter}
          />
        ))}

      </div>

    </section>
  );
}