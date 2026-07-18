import {
  BookOpen,
  Clock3,
  GraduationCap,
  Layers3,
} from "lucide-react";

interface ChapterSummaryCardProps {
  grade: number;
  chapter: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
}

const badgeColors = {
  Easy: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Hard: "bg-rose-100 text-rose-700",
};

export default function ChapterSummaryCard({
  grade,
  chapter,
  title,
  difficulty,
  duration,
}: ChapterSummaryCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-wrap items-start justify-between gap-6">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Class {grade} • Chapter {chapter}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            {title}
          </h1>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${badgeColors[difficulty]}`}
        >
          {difficulty}
        </span>

      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">

        <div className="rounded-2xl bg-slate-50 p-5">

          <GraduationCap className="mb-3 h-6 w-6 text-violet-600" />

          <p className="text-sm text-slate-500">
            Difficulty
          </p>

          <p className="mt-1 font-bold text-slate-900">
            {difficulty}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <Clock3 className="mb-3 h-6 w-6 text-orange-500" />

          <p className="text-sm text-slate-500">
            Estimated Time
          </p>

          <p className="mt-1 font-bold text-slate-900">
            {duration}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <Layers3 className="mb-3 h-6 w-6 text-blue-600" />

          <p className="text-sm text-slate-500">
            Resources
          </p>

          <p className="mt-1 font-bold text-slate-900">
            Notes • MCQs • PYQs
          </p>

        </div>

      </div>

    </section>
  );
}