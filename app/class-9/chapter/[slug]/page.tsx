import Breadcrumb from "@/components/chapter/Breadcrumb";
import { notFound } from "next/navigation";

import { getChapter } from "@/lib/getChapter";

import ChapterHero from "@/components/chapter/ChapterHero";
import ResourceGrid from "@/components/chapter/ResourceGrid";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChapterPage({
  params,
}: Props) {
  const { slug } = await params;

  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  const resources = [
    {
      title: "Notes",
      description: "Complete chapter notes",
      href: `/class-9/chapter/${slug}/notes`,
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
      href: "#",
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
   // <main className="mx-auto max-w-7xl px-6 py-12">
      <>
      <Breadcrumb
       grade={chapter.grade}
        title={chapter.title}
      />
<ChapterHero
  grade={chapter.grade}
  chapter={chapter.id}
  title={chapter.title}
  description={chapter.description}
/>

<ResourceGrid resources={resources} />
</>
    //</main>
  );
}