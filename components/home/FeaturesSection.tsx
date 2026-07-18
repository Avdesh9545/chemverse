import {
  BookOpen,
  Brain,
  FileQuestion,
  PlayCircle,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Notes",
    description:
      "Learn every concept with structured, exam-oriented notes written for conceptual understanding rather than memorisation.",
  },
  {
    icon: Brain,
    title: "Premium MCQs",
    description:
      "Practice carefully curated questions with detailed explanations to strengthen your concepts and improve accuracy.",
  },
  {
    icon: FileQuestion,
    title: "Chapter Tests",
    description:
      "Assess your preparation with interactive chapter-wise tests and instant performance analysis.",
  },
  {
    icon: PlayCircle,
    title: "Curated Videos",
    description:
      "Reinforce difficult concepts through high-quality video lessons selected specifically for each chapter.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Why ChemVerse?
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Everything You Need to Master Chemistry
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            ChemVerse combines high-quality study material,
            practice and assessment into one modern learning platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}