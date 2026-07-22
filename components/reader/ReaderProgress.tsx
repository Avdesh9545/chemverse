interface ReaderProgressProps {
  currentPage: number;
  totalPages: number;
}

export default function ReaderProgress({
  currentPage,
  totalPages,
}: ReaderProgressProps) {
  const progress =
    ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="border-b border-slate-200 bg-white px-10 py-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          Reading Progress
        </span>

        <span className="text-sm font-semibold text-violet-600">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {Math.round(progress)}% completed
      </p>
    </div>
  );
}