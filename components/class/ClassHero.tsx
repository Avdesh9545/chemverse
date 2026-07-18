import {
  BookOpen,
  Clock3,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

interface ClassHeroProps {
  grade: {
    id: number;
    title: string;
    description: string;
  };
  chapters: number;
  studyHours: number;
  mcqs: number;
}

export default function ClassHero({
  grade,
  chapters,
  studyHours,
  mcqs,
}: ClassHeroProps) {
  const level =
    grade.id === 9
      ? "Foundation"
      : grade.id === 10
      ? "Intermediate"
      : grade.id === 11
      ? "Advanced"
      : "Expert";

  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 via-violet-600 to-blue-600 shadow-2xl">

      <div className="p-10 lg:p-12 text-white">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
          Class {grade.id} Chemistry
        </p>

        <h1 className="mt-3 text-5xl font-extrabold tracking-tight">
          {grade.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">
          {grade.description}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <Stat
            icon={<BookOpen className="h-7 w-7" />}
            label="Chapters"
            value={chapters.toString()}
          />

          <Stat
            icon={<Clock3 className="h-7 w-7" />}
            label="Study Hours"
            value={`${studyHours} hrs`}
          />

          <Stat
            icon={<ClipboardCheck className="h-7 w-7" />}
            label="MCQs"
            value={mcqs.toString()}
          />

          <Stat
            icon={<Trophy className="h-7 w-7" />}
            label="Level"
            value={level}
          />

        </div>

      </div>

    </section>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">

      <div className="mb-4">
        {icon}
      </div>

      <p className="text-sm text-violet-200">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}