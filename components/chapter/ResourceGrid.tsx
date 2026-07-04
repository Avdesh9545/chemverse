import ResourceCard from "./ResourceCard";

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({
  resources,
}: ResourceGridProps) {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Resources
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            {...resource}
          />
        ))}
      </div>
    </section>
  );
}