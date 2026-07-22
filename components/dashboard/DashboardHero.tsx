type DashboardHeroProps = {
  name?: string | null;
  completedChapters: number;
  totalChapters: number;
};

export default function DashboardHero({
  name,
  completedChapters,
  totalChapters,
}: DashboardHeroProps) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const percentage =
    totalChapters === 0
      ? 0
      : Math.round(
          (completedChapters / totalChapters) * 100
        );

  return (
    <section className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white shadow-xl">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-lg opacity-90">
            👋 {greeting}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {name ?? "Student"}
          </h1>

          <p className="mt-3 max-w-xl text-violet-100">
            Welcome back! Continue building your chemistry
            knowledge one chapter at a time.
          </p>

        </div>

        <div className="w-full max-w-sm">

          <div className="mb-2 flex justify-between text-sm">

            <span>Overall Progress</span>

            <span>{percentage}%</span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-white transition-all"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

          <p className="mt-4 text-sm text-violet-100">

            {completedChapters} of {totalChapters} chapters completed

          </p>

        </div>

      </div>

    </section>
  );
}