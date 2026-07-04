import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function Class9Page() {
  const class9Chapters = chapters.filter(
    (chapter) => chapter.grade === 9
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-slate-900">
        Class IX Chemistry
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Select a chapter to begin learning.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {class9Chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/class-9/chapter/${chapter.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-purple-600">
              Chapter {chapter.id}
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              {chapter.title}
            </h2>

            <p className="mt-4 text-slate-500">
              View notes, videos, MCQs and more →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}