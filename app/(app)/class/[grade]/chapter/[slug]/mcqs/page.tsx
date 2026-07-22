
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import Quiz from "@/components/mcq/Quiz";

type Props = {
  params: Promise<{
    grade: string;
    slug: string;
  }>;

  searchParams: Promise<{
    mode?: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const chapter = getChapter(slug);

  if (!chapter) {
    return {};
  }

  return buildChapterMetadata(chapter, "MCQs");
}

export default async function MCQsPage({
  params,
  searchParams,
}: Props) {
  const { grade, slug } = await params;
  const { mode } = await searchParams;

  const chapter = getChapter(slug);

  if (
    !chapter ||
    chapter.metadata.grade !== Number(grade)
  ) {
    notFound();
  }

  const quizMode =
    mode === "exam" ? "exam" : "practice";

  return (
    <main className="mx-auto max-w-[1500px] px-6 py-10">
      <Breadcrumb
        grade={chapter.metadata.grade}
        title={`${chapter.metadata.title} / ${
          quizMode === "exam"
            ? "Chapter Test"
            : "Practice"
        }`}
      />

      <div className="mt-8">
        <Quiz
  title={chapter.metadata.title}
  chapterSlug={chapter.metadata.slug}
  questions={chapter.mcqs}
  mode={quizMode}
/>
      </div>
    </main>
  );
}