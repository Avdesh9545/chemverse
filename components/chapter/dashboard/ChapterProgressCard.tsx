import {
  BookOpen,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  FileQuestion,
  PlayCircle,
} from "lucide-react";

interface ChapterProgressCardProps {
  progress: number;
}

export default function ChapterProgressCard({
  progress,
}: ChapterProgressCardProps) {
  const tasks = [
    {
      icon: BookOpen,
      title: "Read Notes",
      done: false,
    },
    {
      icon: ClipboardCheck,
      title: "Practice MCQs",
      done: false,
    },
    {
      icon: FileQuestion,
      title: "Solve PYQs",
      done: false,
    },
    {
      icon: PlayCircle,
      title: "Watch Videos",
      done: false,
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Chapter Progress
        </h2>

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          {progress}%
        </span>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-8 space-y-4">

        {tasks.map((task) => {

          const Icon = task.icon;

          return (
            <div
              key={task.title}
              className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
            >

              <div className="flex items-center gap-4">

                <Icon className="h-5 w-5 text-violet-600" />

                <span className="font-medium">
                  {task.title}
                </span>

              </div>

              {task.done ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              ) : (
                <Circle className="h-6 w-6 text-slate-300" />
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}