interface ChapterTopicsCardProps {
  topics: string[];
}

export default function ChapterTopicsCard({
  topics,
}: ChapterTopicsCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Topics Covered
      </h2>

      <p className="mt-2 text-slate-500">
        Complete these concepts to master this chapter.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        {topics.map((topic, index) => (

          <div
            key={topic}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 font-bold text-white">

              {index + 1}

            </div>

            <span className="font-medium text-slate-700">
              {topic}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}