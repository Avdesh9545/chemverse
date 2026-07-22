type Achievement = {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
};

type AchievementsProps = {
  achievements: Achievement[];
};

export default function Achievements({
  achievements,
}: AchievementsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        🏆 Achievements
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              achievement.unlocked
                ? "border-violet-200 bg-violet-50"
                : "border-slate-200 bg-slate-50 opacity-60"
            }`}
          >
            <div className="mb-4 text-4xl">
              {achievement.icon}
            </div>

            <h3 className="font-semibold text-slate-900">
              {achievement.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {achievement.description}
            </p>

            <p
              className={`mt-4 text-xs font-semibold ${
                achievement.unlocked
                  ? "text-emerald-600"
                  : "text-slate-400"
              }`}
            >
              {achievement.unlocked
                ? "Unlocked"
                : "Locked"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}