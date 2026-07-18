import { chapters } from "@/data/chapters";
import ChapterCard from "./ChapterCard";

export default function NotesSection() {
  // MVP: Show only Class 9 chapters
  const featuredChapters = chapters.filter(
    (chapter) => chapter.grade === 9
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Chemistry Notes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explore Chapters
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Start learning chapter-wise with notes, MCQs and PYQs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredChapters.map((chapter) => (
            <ChapterCard
              key={chapter.slug}
              title={chapter.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}