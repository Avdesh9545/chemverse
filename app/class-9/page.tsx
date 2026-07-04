import { chapters } from "@/data/chapters";
import ChapterCard from "@/components/class/ChapterCard";

export default function Class9Page() {
  const class9Chapters = chapters.filter(
    (chapter) => chapter.grade === 9
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-slate-900">
          Class IX Chemistry
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Choose a chapter to start learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {class9Chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            id={chapter.id}
            title={chapter.title}
            grade={chapter.grade}
            slug={chapter.slug}
          />
        ))}
      </div>
    </main>
  );
}