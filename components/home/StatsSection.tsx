const stats = [
  {
    number: "60+",
    label: "Chapters",
  },
  {
    number: "1500+",
    label: "MCQs",
  },
  {
    number: "300+",
    label: "PYQs",
  },
  {
    number: "200+",
    label: "Worksheets",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h2 className="text-5xl font-bold">
              {stat.number}
            </h2>

            <p className="mt-3 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}