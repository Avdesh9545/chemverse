export default function NotesContent() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">
        About These Notes
      </h2>

      <p className="mt-5 leading-8 text-slate-700">
        These notes are carefully prepared to help students understand
        concepts quickly, revise efficiently, and perform well in school
        examinations as well as competitive exams.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-violet-50 p-5">
          <div className="text-3xl">📘</div>
          <h3 className="mt-3 font-semibold">NCERT Based</h3>
        </div>

        <div className="rounded-xl bg-green-50 p-5">
          <div className="text-3xl">📝</div>
          <h3 className="mt-3 font-semibold">Exam Ready</h3>
        </div>

        <div className="rounded-xl bg-blue-50 p-5">
          <div className="text-3xl">⚡</div>
          <h3 className="mt-3 font-semibold">Quick Revision</h3>
        </div>
      </div>
    </article>
  );
}