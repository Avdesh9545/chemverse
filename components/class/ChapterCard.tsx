import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Clock3,
  PlayCircle,
  FileQuestion,
} from "lucide-react";

import ChapterIcon from "@/components/common/ChapterIcon";
import type { ChapterCardViewModel } from "@/lib/viewModels/chapter";

interface ChapterCardProps {
  grade: number;
  chapter: ChapterCardViewModel;
}

const difficultyColors = {
  Easy: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  Hard: "bg-rose-100 text-rose-700",
};

export default function ChapterCard({
  grade,
  chapter,
}: ChapterCardProps) {
  return (
    <article className="group w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-2xl">

      {/* Header */}

      <div className="p-8">

        <div className="flex items-start justify-between">

          <div className="flex gap-5">

            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">

              <ChapterIcon
                icon={chapter.icon}
                className="h-9 w-9 text-violet-600 group-hover:text-white"
              />

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.30em] text-violet-600">
                Chapter {String(chapter.id).padStart(2, "0")}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                CBSE Chemistry
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {chapter.title}
              </h2>

            </div>

          </div>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${difficultyColors[chapter.difficulty]}`}
          >
            {chapter.difficulty}
          </span>

        </div>

        <p className="mt-6 max-w-4xl leading-7 text-slate-600">
          {chapter.description}
        </p>

        {/* Resource Pills */}

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            📘 Notes
          </span>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            📝 MCQs
          </span>

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            📄 Questions
          </span>

          <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
            🎥 Videos
          </span>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-4 border-y border-slate-100 bg-slate-50 px-8 py-6">

        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">

          <ClipboardCheck className="mx-auto h-6 w-6 text-violet-600" />

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {chapter.mcqs}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            MCQs
          </p>

        </div>

        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">

          <FileQuestion className="mx-auto h-6 w-6 text-blue-600" />

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {chapter.pyqs}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Questions
          </p>

        </div>

        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">

          <Clock3 className="mx-auto h-6 w-6 text-orange-500" />

          <p className="mt-3 text-2xl font-bold text-slate-900">
            {chapter.duration}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Study Time
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="p-8">

        <div className="flex flex-wrap gap-4">

          <Link
            href={`/class/${grade}/chapter/${chapter.slug}/notes`}
            className="flex-1 rounded-2xl bg-violet-600 px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-violet-700"
          >
            📖 Study Notes
          </Link>

          <Link
            href={`/class/${grade}/chapter/${chapter.slug}/mcqs`}
            className="rounded-2xl border border-slate-200 px-6 py-4 text-lg font-semibold transition hover:bg-violet-50"
          >
            📝 Practice
          </Link>

        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

          <div className="flex items-center gap-3 text-slate-500">

            <PlayCircle className="h-5 w-5 text-violet-500" />

            <span className="font-medium">
              Videos Available
            </span>

          </div>

          <Link
            href={`/class/${grade}/chapter/${chapter.slug}`}
            className="flex items-center gap-2 font-semibold text-violet-600 transition group-hover:translate-x-1"
          >
            View Chapter

            <ArrowRight className="h-5 w-5" />

          </Link>

        </div>

      </div>

    </article>
  );
}