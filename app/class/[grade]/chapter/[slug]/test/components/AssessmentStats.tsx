import {
  ClipboardCheck,
  Clock3,
  Trophy,
  BookOpen,
} from "lucide-react";

interface AssessmentStatsProps {
  questions: number;
  duration: number;
  passingScore: string;
  difficulty: string;
}

export default function AssessmentStats({
  questions,
  duration,
  passingScore,
  difficulty,
}: AssessmentStatsProps) {
  const cards = [
    {
      icon: ClipboardCheck,
      color: "text-violet-600",
      value: questions,
      label: "Questions",
    },
    {
      icon: Clock3,
      color: "text-blue-600",
      value: `${duration} min`,
      label: "Duration",
    },
    {
      icon: Trophy,
      color: "text-amber-600",
      value: passingScore,
      label: "Passing Score",
    },
    {
      icon: BookOpen,
      color: "text-emerald-600",
      value: difficulty,
      label: "Difficulty",
    },
  ];

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon className={`mb-4 h-8 w-8 ${card.color}`} />

            <p className="text-3xl font-bold text-slate-900">
              {card.value}
            </p>

            <p className="mt-2 text-slate-500">
              {card.label}
            </p>
          </div>
        );
      })}
    </section>
  );
}