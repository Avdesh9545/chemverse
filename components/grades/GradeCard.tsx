import Link from "next/link";

type GradeCardProps = {
  grade: string;
  title: string;
  chapters: number;
  description: string;
  link: string;
};

export default function GradeCard({
  grade,
  title,
  chapters,
  description,
  link,
}: GradeCardProps) {
   
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {grade}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

      <p className="mt-5 text-sm font-medium text-blue-600">
        📚 {chapters} Chapters
      </p>

      <Link
        href={link}
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Start Learning →
      </Link>
    </div>
  );
}