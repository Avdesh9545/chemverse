export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          CBSE Chemistry • Classes IX–XII
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Master Chemistry
          <span className="text-blue-600"> the Smart Way.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Notes, MCQs, PYQs, Worksheets and practical resources designed
          especially for CBSE students.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Explore Notes
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100">
            View Classes
          </button>
        </div>
      </div>
    </section>
  );
}