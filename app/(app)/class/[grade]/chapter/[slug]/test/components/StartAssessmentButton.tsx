import Link from "next/link";

interface Props {
  grade: number;
  slug: string;
}

export default function StartAssessmentButton({
  grade,
  slug,
}: Props) {
  return (
    <section className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Link
        href={`/class/${grade}/chapter/${slug}/test/session`}
        className="inline-flex justify-center rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
      >
        Start Assessment →
      </Link>

      <Link
        href={`/class/${grade}/chapter/${slug}`}
        className="inline-flex justify-center rounded-2xl border border-violet-600 px-8 py-4 font-semibold text-violet-700 transition hover:bg-violet-50"
      >
        Back to Chapter
      </Link>
    </section>
  );
}