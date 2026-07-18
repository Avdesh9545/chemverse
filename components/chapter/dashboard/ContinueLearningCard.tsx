import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  TrendingUp,
} from "lucide-react";

interface ContinueLearningCardProps {
  title: string;
  progress: number;
  duration: string;
  href: string;
}

export default function ContinueLearningCard({
  title,
  progress,
  duration,
  href,
}: ContinueLearningCardProps) {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-violet-600 to-blue-600 p-8 text-white shadow-xl">

      <div className="flex items-center gap-2 text-violet-200">

        <TrendingUp className="h-5 w-5" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em]">
          Continue Learning
        </span>

      </div>

      <h2 className="mt-5 text-3xl font-bold leading-tight">
        {title}
      </h2>

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-violet-100">
            Chapter Progress
          </span>

          <span className="font-bold">
            {progress}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/20">

          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <Clock3 className="mb-3 h-6 w-6" />

          <p className="text-sm text-violet-100">
            Estimated Study Time
          </p>

          <p className="mt-1 text-xl font-bold">
            {duration}
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">

          <BookOpen className="mb-3 h-6 w-6" />

          <p className="text-sm text-violet-100">
            Current Status
          </p>

          <p className="mt-1 text-xl font-bold">
            Ready to Start
          </p>

        </div>

      </div>

      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-violet-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Start Studying

        <ArrowRight className="h-5 w-5" />

      </Link>

    </section>
  );
}