import { grades } from "@/data/grades";
import GradeCard from "@/components/grades/GradeCard";

export default function GradesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Choose Your Class
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Start Your Learning Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Select your grade to access chapter notes, MCQs, PYQs,
            worksheets and practical resources.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {grades.map((item) => {
    console.log("ITEM:", item);
    console.log("PASSING LINK:", `/class-${item.id}`);

    return (
      <GradeCard
        key={item.id}
        grade={item.grade}
        title={item.title}
        chapters={item.chapters}
        description={item.description}
        link={`/class-${item.id}`}
      />
    );
  })}
</div>

      </div>
    </section>
  );
}