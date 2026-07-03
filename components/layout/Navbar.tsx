export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          ChemVerse
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">Notes</a>
          <a href="#">MCQs</a>
          <a href="#">PYQs</a>
          <a href="#">About</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}