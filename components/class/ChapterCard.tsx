import Link from "next/link";

interface ChapterCardProps {
  id: number;
  title: string;
  grade: number;
  slug: string;
}

export default function ChapterCard({
  id,
  title,
  grade,
  slug,
}: ChapterCardProps) {
  return (
    <Link
      href={`/class-${grade}/chapter/${slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
          Chapter {id}
        </span>

        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>

      <h2 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-slate-600">
        Notes • Videos • MCQs • PYQs
      </p>
    </Link>
  );
}