type ChapterCardProps = {
  title: string;
};

export default function ChapterCard({
  title,
}: ChapterCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-5 flex gap-3">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Notes
        </button>

        <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
          MCQs
        </button>

        <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
          PYQs
        </button>
      </div>
    </div>
  );
}