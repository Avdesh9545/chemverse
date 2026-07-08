import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import { grades } from "@/data/grades";
import { chapters } from "@/data/chapters";

import Link from "next/link";

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

      <section className="mt-8">

        <h1 className="text-4xl font-bold">
          {gradeInfo.grade}
        </h1>

        <p className="mt-3 text-slate-600">
          {gradeInfo.description}
        </p>

      </section>

      <section className="mt-12 grid gap-6">

        {gradeChapters.map((chapter) => (

          <Link
            key={chapter.id}
            href={`/class/${grade}/chapter/${chapter.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-violet-500 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              Chapter {chapter.id}
            </h2>

            <p className="mt-2 text-lg">
              {chapter.title}
            </p>

          </Link>

        ))}

      </section>

    </main>
  );
}