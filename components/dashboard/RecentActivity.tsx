export type Activity = {
  id: string;
  title: string;
  description: string;
  date: string;
};

type RecentActivityProps = {
  activities: Activity[];
};

export default function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <div className="rounded-xl bg-slate-50 p-8 text-center">
          <p className="text-slate-500">
            No recent activity yet.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex gap-4"
            >
              <div className="mt-1 h-3 w-3 rounded-full bg-violet-600" />

              <div className="flex-1">
                <p className="font-semibold text-slate-900">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-500">
                  {activity.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {activity.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}