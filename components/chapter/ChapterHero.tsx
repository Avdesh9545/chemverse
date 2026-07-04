import Link from "next/link";

interface ChapterHeroProps {
  grade: number;
  chapter: number;
  title: string;
  description: string;
}

export default function ChapterHero({
  grade,
  chapter,
  title,
  description,
}: ChapterHeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-10 text-white shadow-xl">
      <p className="font-semibold text-violet-100">
        Class {grade} • Chapter {chapter}
      </p>

      <h1 className="mt-3 text-4xl font-bold md:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-violet-100">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="#"
          className="rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 transition hover:bg-slate-100"
        >
          📄 Download Notes
        </Link>

        <Link
          href="#"
          className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
        >
          🎥 Watch Video
        </Link>
      </div>
    </section>
  );
}