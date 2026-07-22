type WelcomeCardProps = {
  name?: string | null;
};

export default function WelcomeCard({
  name,
}: WelcomeCardProps) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-700 p-8 text-white shadow-xl">
      {/* Decorative Blobs */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-100">
          ChemVerse Dashboard
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
          {greeting},
          <span className="block">
            {name ?? "Student"} 👋
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-violet-100">
          Welcome back to ChemVerse. Continue your chemistry journey,
          strengthen your concepts, and take one step closer to mastering
          Chemistry.
        </p>
      </div>
    </section>
  );
}