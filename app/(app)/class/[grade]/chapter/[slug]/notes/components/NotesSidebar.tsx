interface NotesSidebarProps {
  tableOfContents: string[];
  pdf: string;
}

export default function NotesSidebar({
  tableOfContents,
  pdf,
}: NotesSidebarProps) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 p-6">

        <h3 className="text-xl font-bold text-slate-900">
          📚 Chapter Contents
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Read every topic carefully before attempting the MCQs.
        </p>

      </div>

      {/* Topics */}

      <div className="space-y-2 p-6">

        {tableOfContents.map((topic, index) => (

          <a
            key={topic}
            href={`#n${index + 1}`}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-violet-50"
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">

              {index + 1}

            </div>

            <span className="text-sm font-medium text-slate-700">

              {topic}

            </span>

          </a>

        ))}

      </div>

      {/* Divider */}

      <div className="mx-6 border-t border-slate-100" />

      {/* Download */}

      <div className="p-6">

        <a
          href={pdf}
          download
          className="flex w-full items-center justify-center rounded-2xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          ⬇ Download PDF
        </a>

      </div>

      {/* Progress */}

      <div className="border-t border-slate-100 p-6">

        <div className="flex items-center justify-between">

          <span className="font-semibold text-slate-900">
            Reading Progress
          </span>

          <span className="text-violet-600 font-bold">
            0%
          </span>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-0 rounded-full bg-violet-600" />

        </div>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Progress tracking will automatically update after login in a future release.
        </p>

      </div>

    </aside>
  );
}