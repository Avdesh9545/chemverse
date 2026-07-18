import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              ChemVerse
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              A modern Chemistry learning platform
              for CBSE students with Notes,
              MCQs, PYQs, Videos and more.
            </p>
          </div>

          {/* Classes */}

          <div>
            <h3 className="text-lg font-semibold">
              Classes
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">

              <li><Link href="/class/9">Class IX</Link></li>

              <li><Link href="#">Class X</Link></li>

              <li><Link href="#">Class XI</Link></li>

              <li><Link href="#">Class XII</Link></li>

            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-lg font-semibold">
              Resources
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">

              <li><Link href="#">Notes</Link></li>

              <li><Link href="#">MCQs</Link></li>

              <li><Link href="#">PYQs</Link></li>

              <li><Link href="#">Worksheets</Link></li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold">
              ChemVerse
            </h3>

            <p className="mt-4 text-slate-400">
              Learn smarter.
              Practice better.
              Score higher.
            </p>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">

          © {new Date().getFullYear()} ChemVerse.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}