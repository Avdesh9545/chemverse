import { notFound } from "next/navigation";
import { chapters } from "@/data/chapters";
import { chapterContent } from "@/data/chapterContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;

  // Find the chapter from chapters.ts
  const chapter = chapters.find((c) => c.slug === slug);

  if (!chapter) {
    notFound();
  }

  // Find detailed content from chapterContent.ts
  const content = chapterContent[slug as keyof typeof chapterContent];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-purple-400 font-semibold">
          Class {chapter.grade}
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          {chapter.title}
        </h1>

        <p className="mt-6 text-slate-300">
          {content?.description}
        </p>

        {/* Downloads */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Downloads
          </h2>

          <div className="space-y-4">
            {content?.downloads.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}