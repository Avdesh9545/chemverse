import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import ChapterCard from "@/components/class/ChapterCard";

import { grades } from "@/data/grades";
import { chapters } from "@/data/chapters";

type Props = {
  params: Promise<{
    grade: string;
  }>;
};

export default async function GradePage({
  params,
}: Props) {
  const { grade } = await params;

  const gradeNumber = Number(grade);

  const gradeInfo = grades.find(
    (g) => g.id === gradeNumber
  );

  if (!gradeInfo) {
    notFound();
  }

  const gradeChapters = chapters.filter(
    (chapter) => chapter.grade === gradeNumber
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <Breadcrumb
        grade={gradeNumber}
        title={gradeInfo.title}
      />

      <section className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-10 text-white shadow-xl">

        <p className="text-lg font-semibold">
          {gradeInfo.grade} Chemistry
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          {gradeInfo.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-violet-100">
          {gradeInfo.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-10">

          <div>
            <p className="text-3xl font-bold">
              {gradeChapters.length}
            </p>
            <p className="text-violet-100">
              Chapters
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              500+
            </p>
            <p className="text-violet-100">
              MCQs
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              100+
            </p>
            <p className="text-violet-100">
              PYQs
            </p>
          </div>

        </div>

      </section>

      <section className="mt-12">

        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Chapters
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {gradeChapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              grade={gradeNumber}
              id={chapter.id}
              title={chapter.title}
              slug={chapter.slug}
            />
          ))}

        </div>

      </section>

    </main>
  );
}