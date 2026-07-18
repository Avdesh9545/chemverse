import Link from "next/link";
import { chapters } from "@/data/chapters";

interface ChapterNavigationProps {
  grade: number;
  slug: string;
}

export default function ChapterNavigation({
  grade,
  slug,
}: ChapterNavigationProps) {
  const gradeChapters = chapters.filter(
    (chapter) => chapter.grade === grade
  );

  const currentIndex = gradeChapters.findIndex(
    (chapter) => chapter.slug === slug
  );

  const previous =
    currentIndex > 0
      ? gradeChapters[currentIndex - 1]
      : null;

  const next =
    currentIndex < gradeChapters.length - 1
      ? gradeChapters[currentIndex + 1]
      : null;

  return (
    <section className="mt-16 flex justify-between gap-6">

      {previous ? (
        <Link
          href={`/class/${grade}/chapter/${previous.slug}`}
          className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm text-slate-500">
            ← Previous Chapter
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            {previous.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/class/${grade}/chapter/${next.slug}`}
          className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-sm text-slate-500">
            Next Chapter →
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900">
            {next.title}
          </h3>
        </Link>
      ) : (
        <div />
      )}

    </section>
  );
}