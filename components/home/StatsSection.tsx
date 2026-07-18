const stats = [
  {
    value: "15+",
    label: "Chapters",
    icon: "📘",
  },
  {
    value: "2000+",
    label: "MCQs",
    icon: "📝",
  },
  {
    value: "300+",
    label: "PYQs",
    icon: "📊",
  },
  {
    value: "100%",
    label: "Free Access",
    icon: "🎯",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-4xl text-white shadow-lg">
                {stat.icon}
              </div>

              <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
                {stat.value}
              </h2>

              <p className="mt-3 text-lg font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}