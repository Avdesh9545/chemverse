import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getChapter } from "@/data/curriculum";
import { buildChapterMetadata } from "@/lib/seo";

import Breadcrumb from "@/components/chapter/Breadcrumb";

import NotesHero from "./components/NotesHero";
import NotesSidebar from "./components/NotesSidebar";
import CompletionButton from "@/components/learning/CompletionButton";
import { Reader } from "@/components/reader";

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

      <section className="mt-6 mb-8 rounded-3xl border border-slate-200 bg-white px-8 py-8 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
    CLASS {chapter.metadata.grade} • CHEMISTRY
  </p>

  <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
  Chapter Notes
</h1>

  <p className="mt-3 max-w-3xl text-slate-600">
  Read every topic carefully before attempting MCQs and chapter tests.
</p>

  <div className="mt-6 flex flex-wrap gap-3 text-sm">
    <span className="rounded-full bg-violet-100 px-3 py-1 text-violet-700">
      {chapter.notes.length} Topics
    </span>

    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
      {chapter.metadata.estimatedStudyTime} min study plan
    </span>
  </div>
</section>

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
        {/* Reader */}
<div className="lg:col-span-9">
  <div className="mb-8 flex justify-end">
    <CompletionButton
      chapterSlug={chapter.metadata.slug}
    />
  </div>

  <Reader chapter={chapter} />
</div>
      </div>
    </main>
  );
}