import {
  Clock3,
  CheckCircle2,
  FileQuestion,
  TriangleAlert,
} from "lucide-react";

export default function Instructions() {
  const items = [
    {
      icon: Clock3,
      title: "Time Limit",
      text: "Complete the assessment within the allotted time.",
    },
    {
      icon: FileQuestion,
      title: "Navigation",
      text: "You may move between questions freely before submission.",
    },
    {
      icon: CheckCircle2,
      title: "Submission",
      text: "Review your answers before submitting the test.",
    },
    {
      icon: TriangleAlert,
      title: "Auto Submit",
      text: "The assessment will automatically submit when time expires.",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">
        Before You Begin
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Read these instructions carefully before starting your chapter assessment.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-violet-600" />

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}