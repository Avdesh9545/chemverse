type ProgressOverviewCardProps = {
  totalChapters: number;
  completedChapters: number;
};

export default function ProgressOverviewCard({
  totalChapters,
  completedChapters,
}: ProgressOverviewCardProps) {
  const percentage =
    totalChapters === 0
      ? 0
      : Math.round((completedChapters / totalChapters) * 100);

  return (
    <section className="min-h-[320px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
        Progress Overview
      </p>

      <div className="mt-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-4xl font-extrabold text-slate-900">
              {percentage}%
            </p>

            <p className="mt-2 text-slate-500">
              Overall Progress
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-slate-900">
              {completedChapters}/{totalChapters}
            </p>

            <p className="text-slate-500">
              Chapters Completed
            </p>
          </div>
        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}