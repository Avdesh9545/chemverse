import { notFound } from "next/navigation";

import { chapters } from "@/data/chapters";
import { getMCQs } from "@/data/mcqs";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import Quiz from "@/components/mcq/Quiz";

type Props = {
  params: Promise<{
    grade: string;
    slug: string;
  }>;
};

export default async function MCQsPage({
  params,
}: Props) {
  const { grade, slug } = await params;

  const chapter = chapters.find(
    (c) =>
      c.grade === Number(grade) &&
      c.slug === slug
  );

  const mcqs = getMCQs(slug);

  if (!chapter || !mcqs) {
    notFound();
  }


  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <Breadcrumb
        grade={chapter.grade}
        title={`${chapter.title} / MCQs`}
      />

      <div className="mt-8">
        <Quiz
  title={chapter.title}
  questions={mcqs}
/>
      </div>
    </main>
  );
}