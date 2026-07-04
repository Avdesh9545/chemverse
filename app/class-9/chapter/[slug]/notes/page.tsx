import { notFound } from "next/navigation";

import Breadcrumb from "@/components/chapter/Breadcrumb";
import { getChapter } from "@/lib/getChapter";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NotesPage({
  params,
}: Props) {
  const { slug } = await params;

  const chapter = getChapter(slug);

  if (!chapter) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        grade={chapter.grade}
        title={`${chapter.title} / Notes`}
      />

      <h1 className="text-4xl font-bold text-slate-900">
        {chapter.title} Notes
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Download detailed notes, revision notes, and important concepts for this chapter.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          📄 Complete Notes
        </h2>

        <p className="mt-3 text-slate-600">
          Notes will be available here.
        </p>
      </div>
    </>
  );
}