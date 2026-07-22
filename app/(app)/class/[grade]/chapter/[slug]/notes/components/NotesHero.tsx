interface NotesHeroProps {
  title: string;
  description: string;
}

export default function NotesHero({
  title,
  description,
}: NotesHeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-10 text-white shadow-xl">
      <p className="font-semibold text-violet-100">
        📘 Class IX Chemistry
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-violet-100">
        {description}
      </p>
    </section>
  );
}