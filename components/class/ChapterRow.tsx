import Link from "next/link";
import {
  BookOpen,
  ClipboardCheck,
  PlayCircle,
  ChevronRight,
  FlaskConical,
} from "lucide-react";

interface ChapterRowProps {
  grade: number;
  id: number;
  title: string;
  slug: string;
}

export default function ChapterRow({
  grade,
  id,
  title,
  slug,
}: ChapterRowProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl">

      <div className="flex">

        {/* Left Number */}

        <div className="flex w-28 flex-col items-center justify-center bg-gradient-to-b from-violet-600 to-blue-600 text-white">

          <span className="text-4xl font-bold">
            {String(id).padStart(2, "0")}
          </span>

        </div>

        {/* Content */}

        <div className="flex flex-1 items-center justify-between p-8">

          <div className="flex items-start gap-6">

            <div className="rounded-2xl bg-violet-100 p-4">
              <FlaskConical className="h-10 w-10 text-violet-600" />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                {title}
              </h2>

              <p className="mt-2 text-slate-600">
                Explore concepts, practice MCQs and
                strengthen your fundamentals.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                <div className="h-3 w-3 rounded-full border-2 border-slate-400" />

                0% Complete

              </div>

            </div>

          </div>

          {/* Actions */}

          <div className="flex items-center gap-3">

            <Link
              href={`/class/${grade}/chapter/${slug}/notes`}
              className="flex items-center gap-2 rounded-xl bg-violet-100 px-5 py-3 font-semibold text-violet-700 transition hover:bg-violet-200"
            >
              <BookOpen className="h-5 w-5" />
              Notes
            </Link>

            <Link
              href={`/class/${grade}/chapter/${slug}/mcqs`}
              className="flex items-center gap-2 rounded-xl bg-blue-100 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-200"
            >
              <ClipboardCheck className="h-5 w-5" />
              MCQs
            </Link>

            <button
              className="flex items-center gap-2 rounded-xl bg-emerald-100 px-5 py-3 font-semibold text-emerald-700"
            >
              <PlayCircle className="h-5 w-5" />
              Videos
            </button>

            <Link
              href={`/class/${grade}/chapter/${slug}`}
              className="rounded-full p-3 transition hover:bg-slate-100"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}