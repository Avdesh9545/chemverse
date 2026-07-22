import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import Quiz from "@/components/mcq/Quiz";
import { shuffleArray } from "@/lib/shuffle";
import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    grade: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const chapter = getChapter(slug);

  if (!chapter) return {};

  return buildChapterMetadata(
    chapter,
    "Chapter Assessment"
  );
}

export default async function AssessmentSessionPage({
  params,
}: Props) {
  const { grade, slug } = await params;

  const chapter = getChapter(slug);

  if (
    !chapter ||
    chapter.metadata.grade !== Number(grade)
  ) {
    notFound();
  }
  const assessmentQuestions = shuffleArray(chapter.mcqs).slice(0, 30);

  return (
    <main className="mx-auto max-w-[1500px] px-6 py-10">
      <Breadcrumb
        grade={chapter.metadata.grade}
        title={`${chapter.metadata.title} / Assessment`}
      />

      <div className="mt-8">
  <Quiz
  title={`${chapter.metadata.title} Assessment`}
  chapterSlug={slug}
  questions={assessmentQuestions}
  mode="exam"
/>
</div>
    </main>
  );
}