import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import ChapterGrid from "@/components/class/ChapterGrid";

import { grades } from "@/data/grades";
import { getChaptersByGrade } from "@/data/curriculum";
import { getChapterStats } from "@/data/adapters/chapterAdapter";
import { toChapterCardViewModel } from "@/lib/viewModels/chapter";

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

  if (!gradeInfo) notFound();

  const curriculumChapters =
    getChaptersByGrade(
      gradeNumber as 9 | 10 | 11 | 12
    );

  const uiChapters =
    curriculumChapters.map(
      toChapterCardViewModel
    );

  const stats = curriculumChapters.reduce(
    (acc, chapter) => {
      const s = getChapterStats(chapter);

      acc.mcqs += s.mcqs;
      acc.pyqs += s.pyqs;
      acc.videos += s.videos;

      return acc;
    },
    {
      mcqs: 0,
      pyqs: 0,
      videos: 0,
    }
  );

  const studyHours = Math.ceil(
    curriculumChapters.reduce(
      (sum, chapter) =>
        sum +
        chapter.metadata.estimatedStudyTime,
      0
    ) / 60
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <Breadcrumb
        grade={gradeNumber}
        title={gradeInfo.title}
      />

      {/* HERO */}

      <section className="mt-6 overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-700 via-violet-600 to-blue-600 shadow-2xl">

        <div className="p-8 lg:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-200">
            Class {gradeNumber} Chemistry
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            {gradeInfo.title}
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-violet-100">
            {gradeInfo.description}
          </p>
          <p className="mt-6 max-w-3xl leading-8 text-violet-100">
  Master every CBSE Chemistry chapter with structured notes,
  MCQs, PYQs, chapter tests and detailed explanations.
</p>

          <div className="mt-6">

            <button className="rounded-2xl bg-white px-7 py-3 font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              🚀 Start with Chapter 1 →

            </button>

          </div>

          {/* Stats */}

          <div className="mt-8 grid gap-4 md:grid-cols-4">

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <p className="text-sm text-violet-200">
                Chapters
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {curriculumChapters.length}
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <p className="text-sm text-violet-200">
                Study Time
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                {studyHours}
                <span className="ml-1 text-lg">
                  hrs
                </span>
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <p className="text-sm text-violet-200">
                Questions
              </p>

              <p className="mt-1 text-2xl font-bold text-white">

                {gradeNumber === 9
                  ? stats.mcqs + stats.pyqs
                  : gradeNumber === 10
                  ? "Intermediate"
                  : gradeNumber === 11
                  ? "Advanced"
                  : "Expert"}

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">

              <p className="text-sm text-violet-200">
                Resources
              </p>

              <p className="mt-1 text-3xl font-bold text-white">

                {stats.mcqs +
                  stats.pyqs +
                  stats.videos}

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CHAPTERS */}

      <section className="mt-10">

        <ChapterGrid
          grade={gradeNumber}
          chapters={uiChapters}
        />

      </section>

    </main>
  );
}