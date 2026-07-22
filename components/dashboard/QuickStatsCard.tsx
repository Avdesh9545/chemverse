type QuickStatsCardProps = {
  chaptersStarted: number;
  chaptersCompleted: number;
  bookmarks: number;
  quizAttempts: number;
};

export default function QuickStatsCard({
  chaptersStarted,
  chaptersCompleted,
  bookmarks,
  quizAttempts,
}: QuickStatsCardProps) {
  const stats = [
    {
      label: "Chapters Started",
      value: chaptersStarted,
      icon: "📘",
    },
    {
      label: "Chapters Completed",
      value: chaptersCompleted,
      icon: "✅",
    },
    {
      label: "Bookmarks",
      value: bookmarks,
      icon: "⭐",
    },
    {
      label: "Quiz Attempts",
      value: quizAttempts,
      icon: "📝",
    },
  ];

  return (
    <section className="min-h-[320px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
        Quick Stats
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-slate-50 p-4 transition hover:bg-violet-50"
          >
            <div className="text-2xl">
              {stat.icon}
            </div>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {stat.value}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}