import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  getNextChapter,
  getPreviousChapter,
} from "@/data/curriculum";

interface ChapterPagerProps {
  slug: string;
}

export default function ChapterPager({
  slug,
}: ChapterPagerProps) {
  const previous = getPreviousChapter(slug);
  const next = getNextChapter(slug);

  return (
    <section className="mt-16 grid gap-6 md:grid-cols-2">
      {previous ? (
        <Link
          href={`/class/${previous.metadata.grade}/chapter/${previous.metadata.slug}`}
          className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            Previous Chapter
          </div>

          <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-violet-700">
            {previous.metadata.title}
          </h3>
        </Link>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 opacity-60">
          <p className="text-sm font-medium text-slate-500">
            Previous Chapter
          </p>

          <h3 className="mt-3 text-xl font-semibold text-slate-400">
            This is the first chapter
          </h3>
        </div>
      )}

      {next ? (
        <Link
          href={`/class/${next.metadata.grade}/chapter/${next.metadata.slug}`}
          className="group rounded-3xl border border-slate-200 bg-white p-6 text-right transition hover:border-violet-300 hover:shadow-lg"
        >
          <div className="flex items-center justify-end gap-2 text-sm font-medium text-slate-500">
            Next Chapter
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>

          <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-violet-700">
            {next.metadata.title}
          </h3>
        </Link>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-6 text-right opacity-60">
          <p className="text-sm font-medium text-slate-500">
            Next Chapter
          </p>

          <h3 className="mt-3 text-xl font-semibold text-slate-400">
            Last chapter of this class
          </h3>
        </div>
      )}
    </section>
  );
}