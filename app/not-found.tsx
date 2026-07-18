import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100">
          <SearchX className="h-12 w-12 text-violet-700" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Error 404
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Sorry, the page you are looking for does not exist or may have been
          moved. You can return to the homepage or continue exploring the
          ChemVerse curriculum.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            <Home className="h-5 w-5" />
            Go to Home
          </Link>

          <Link
            href="/class"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-500 hover:text-violet-700"
          >
            <ArrowLeft className="h-5 w-5" />
            Browse Classes
          </Link>
        </div>
      </div>
    </main>
  );
}