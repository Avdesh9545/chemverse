import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import ChapterHero from "@/components/chapter/ChapterHero";
import ChapterNavigation from "@/components/chapter/ChapterNavigation";

import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";
import ChapterPager from "@/components/chapter/ChapterPager";

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

  return buildChapterMetadata(chapter);
}

export default async function ChapterPage({ params }: Props) {
  const { grade, slug } = await params;

  const chapter = getChapter(slug);

  if (!chapter || chapter.metadata.grade !== Number(grade)) {
    notFound();
  }

  const resources = [
    {
      title: "Notes",
      description: "Complete chapter notes",
      href: `/class/${grade}/chapter/${slug}/notes`,
      icon: "📄",
    },
    {
      title: "Videos",
      description: "Watch concept videos",
      href: "#",
      icon: "🎥",
    },
    {
      title: "MCQs",
      description: "Practice & Chapter Test",
      href: `/class/${grade}/chapter/${slug}/test`,
      icon: "📝",
    },
    {
      title: "NCERT Solutions",
      description: "Exercise-wise solutions",
      href: "#",
      icon: "📚",
    },
    {
      title: "PYQs",
      description: "Previous year questions",
      href: "#",
      icon: "📊",
    },
    {
      title: "Downloads",
      description: "PDFs and worksheets",
      href: "#",
      icon: "⬇️",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Breadcrumb
        grade={chapter.metadata.grade}
        title={chapter.metadata.title}
      />

      <ChapterHero
  grade={chapter.metadata.grade}
  chapter={chapter.metadata.chapterNumber}
  slug={chapter.metadata.slug}
  title={chapter.metadata.title}
  description={chapter.metadata.description}
  topics={chapter.topics}
/>

      <ChapterNavigation
        grade={chapter.metadata.grade}
        slug={chapter.metadata.slug}
      />
      <ChapterPager slug={chapter.metadata.slug} />
    </main>
  );
}