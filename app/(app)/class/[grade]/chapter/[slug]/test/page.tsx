import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";

import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";

import AssessmentHero from "./components/AssessmentHero";
import AssessmentStats from "./components/AssessmentStats";
import Instructions from "./components/Instructions";
import AssessmentOverview from "./components/AssessmentOverview";
import WarningCard from "./components/WarningCard";
import StartAssessmentButton from "./components/StartAssessmentButton";

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

  if (!chapter) {
    return {};
  }

  return buildChapterMetadata(
    chapter,
    "Chapter Assessment"
  );
}

export default async function TestPage({
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

  const totalQuestions = Math.min(
    30,
    chapter.mcqs.length
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Breadcrumb
        grade={chapter.metadata.grade}
        title={`${chapter.metadata.title} Assessment`}
      />

      <AssessmentHero
        title={chapter.metadata.title}
        description="Evaluate your understanding through a timed chapter assessment designed to strengthen your concepts before moving ahead."
        difficulty="Easy"
        duration={30}
        questions={totalQuestions}
      />

      <AssessmentStats
        questions={totalQuestions}
        duration={30}
        passingScore="60%"
        difficulty="Easy"
      />

      <AssessmentOverview
        questions={totalQuestions}
        duration={30}
        passingScore="60%"
        difficulty="Easy"
      />

      <Instructions />

      <WarningCard />

      <StartAssessmentButton
        grade={Number(grade)}
        slug={slug}
      />
    </main>
  );
}