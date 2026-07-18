import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";

import Breadcrumb from "@/components/chapter/Breadcrumb";

import NotesHero from "./components/NotesHero";
import NotesSidebar from "./components/NotesSidebar";
import NotesReader from "./components/NotesReader";

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

  return buildChapterMetadata(chapter, "Notes");
}

export default async function NotesPage({
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

  const pdf =
    chapter.downloads.find(
      (d) => d.type === "Notes"
    )?.file ?? "";

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Breadcrumb
        grade={chapter.metadata.grade}
        title={`${chapter.metadata.title} / Notes`}
      />

      <NotesHero
        title={`${chapter.metadata.title} Notes`}
        description={chapter.metadata.description}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            <NotesSidebar
              tableOfContents={chapter.notes.map(
                (note) => note.title
              )}
              pdf={pdf}
            />
          </div>
        </div>

        {/* Reader */}
        <div className="lg:col-span-9">
          <NotesReader notes={chapter.notes} />
        </div>
      </div>
    </main>
  );
}