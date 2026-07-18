import ActivityCard from "./ActivityCard";

interface Activity {
  title: string;
  description: string;
  href?: string;
  available: boolean;
  icon:
    | "notes"
    | "practice"
    | "test"
    | "videos"
    | "pyqs"
    | "downloads";
}
interface ActivityGridProps {
  activities: Activity[];
}

export default function ActivityGrid({
  activities,
}: ActivityGridProps) {
  return (
    <section>

      <div className="mb-6">

       <h2 className="text-3xl font-bold text-slate-900">
Choose How You would Like to Study
</h2>

<p className="mt-2 text-slate-500">
Select a learning method that matches your study plan.
</p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {activities.map((activity) => (

          <ActivityCard
            key={activity.title}
            {...activity}
          />

        ))}

      </div>

    </section>
  );
}