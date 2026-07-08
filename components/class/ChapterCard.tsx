import Link from "next/link";

interface ChapterCardProps {
  grade: number;
  id: number;
  title: string;
  slug: string;
}

export default function ChapterCard({
  grade,
  id,
  title,
  slug,
}: ChapterCardProps) {
  return (
    <Link
      href={`/class/${grade}/chapter/${slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl"
    >
      <div className="flex items-start justify-between">

        <div>

          <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
            Chapter {id}
          </span>

          <h2 className="mt-4 text-2xl font-bold text-slate-900 group-hover:text-violet-700">
            {title}
          </h2>

          <p className="mt-3 text-slate-600">
            Notes • MCQs • PYQs • Videos
          </p>

        </div>

        <div className="text-3xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </div>

      </div>
    </Link>
  );
}