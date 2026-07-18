
import { grades } from "@/data/grades";
import Breadcrumb from "@/components/chapter/Breadcrumb";
import GradeCard from "@/components/grades/GradeCard";

export default function ClassesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Breadcrumb
        grade={0}
        title="Classes"
      />

      <section className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600 via-violet-700 to-blue-600 p-10 text-white shadow-xl">
        <p className="text-lg font-semibold">
          ChemVerse
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Choose Your Class
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-violet-100">
          Select your class to access notes, MCQs, PYQs, videos and tests.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
       {grades.map((item) => (
  <GradeCard
    key={item.id}
    grade={item.grade}
    title={item.title}
    chapters={item.chapters}
    description={item.description}
    link={`/class/${item.id}`}
  />
))}
      </section>
    </main>
  );
}