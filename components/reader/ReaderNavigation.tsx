interface ReaderNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ReaderNavigation({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: ReaderNavigationProps) {
  const isFirst = currentPage === 0;
  const isLast = currentPage === totalPages - 1;

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-10 py-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Previous
        </button>

        <div className="text-center">
          <p className="text-sm text-slate-500">Current Page</p>

          <p className="text-lg font-bold text-slate-900">
            {currentPage + 1} / {totalPages}
          </p>
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-violet-300"
        >
          Next →
        </button>
      </div>
    </footer>
  );
}