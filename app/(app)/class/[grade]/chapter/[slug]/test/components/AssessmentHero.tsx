interface AssessmentHeroProps {
  title: string;
  description: string;
  difficulty: string;
  duration: number;
  questions: number;
}

export default function AssessmentHero({
  title,
  description,
  difficulty,
  duration,
  questions,
}: AssessmentHeroProps) {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-700 via-violet-600 to-blue-700 shadow-2xl">
      <div className="p-10 lg:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-violet-200">
          Chapter Assessment
        </p>

        <h1 className="mt-4 text-5xl font-black text-white">
          {title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <span className="rounded-full bg-white/15 px-5 py-2 font-semibold text-white backdrop-blur">
            📘 {difficulty}
          </span>

          <span className="rounded-full bg-white/15 px-5 py-2 font-semibold text-white backdrop-blur">
            ⏱ {duration} Minutes
          </span>

          <span className="rounded-full bg-white/15 px-5 py-2 font-semibold text-white backdrop-blur">
            📝 {questions} Questions
          </span>
        </div>
      </div>
    </section>
  );
}