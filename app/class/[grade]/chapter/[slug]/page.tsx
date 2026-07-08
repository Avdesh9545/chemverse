import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import ChapterHero from "@/components/chapter/ChapterHero";
import ResourceGrid from "@/components/chapter/ResourceGrid";

import { chapters } from "@/data/chapters";
import { getChapter } from "@/data/chapterContent";

type Props = {
  params: Promise<{
    grade: string;
    slug: string;
  }>;
};

export default async function ChapterPage({ params }: Props) {
  const { grade, slug } = await params;

  const chapter = chapters.find(
    (c) =>
      c.slug === slug &&
      c.grade === Number(grade)
  );

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
  description: "Practice objective questions",
  href: `/class/${grade}/chapter/${slug}/mcqs`,
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

  const content = getChapter(slug);

  if (!chapter || !content) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Breadcrumb
        grade={chapter.grade}
        title={chapter.title}
      />

      <ChapterHero
        grade={chapter.grade}
        chapter={chapter.id}
        title={chapter.title}
        description={content.description}
      />

      <ResourceGrid resources={resources} />
    </main>
  );
}