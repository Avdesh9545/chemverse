import { notFound } from "next/navigation";

import { chapters } from "@/data/chapters";
import { getChapter } from "@/data/chapterContent";

import Breadcrumb from "@/components/chapter/Breadcrumb";

import NotesHero from "./components/NotesHero";
import NotesSidebar from "./components/NotesSidebar";
import NotesContent from "./components/NotesContent";
import PDFViewer from "./components/PDFViewer";
//import DownloadCard from "./components/DownloadCard";

type Props = {
  params: Promise<{
    grade: string;
    slug: string;
  }>;
};

export default async function NotesPage({
  params,
}: Props) {
  const { grade, slug } = await params;

  // Find the chapter
  const chapter = chapters.find(
    (c) =>
      c.grade === Number(grade) &&
      c.slug === slug
  );

  // Find chapter content
  const content = getChapter(slug);
  console.log("Slug =", slug);
  console.log("Content =", content);
  if (!chapter || !content) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Breadcrumb */}
      <Breadcrumb
        grade={chapter.grade}
        title={`${chapter.title} / Notes`}
      />

      {/* Hero */}
      <NotesHero
        title={`${chapter.title} Notes`}
        description={content.description}
      />

      {/* Main Layout */}
      <div className="mt-10 grid gap-8 lg:grid-cols-4">

        {/* Left Sidebar */}
       <div className="sticky top-24 self-start">

  <NotesSidebar
    tableOfContents={content.tableOfContents}
    pdf={content.pdf}
  />

</div>

        {/* Main Content */}
        <div className="space-y-8 lg:col-span-3">

          <PDFViewer pdf={content.pdf} />

          <NotesContent />

        </div>

      </div>

    </main>
  );
}