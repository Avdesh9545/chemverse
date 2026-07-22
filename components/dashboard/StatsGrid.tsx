import StatCard from "./StatCard";

type StatsGridProps = {
  chaptersStarted: number;
  chaptersCompleted: number;
  bookmarks: number;
  quizAttempts: number;
};

export default function StatsGrid({
  chaptersStarted,
  chaptersCompleted,
  bookmarks,
  quizAttempts,
}: StatsGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Started"
        value={chaptersStarted}
        icon="📘"
      />

      <StatCard
        title="Completed"
        value={chaptersCompleted}
        icon="✅"
      />

      <StatCard
        title="Bookmarks"
        value={bookmarks}
        icon="🔖"
      />

      <StatCard
        title="Quiz Attempts"
        value={quizAttempts}
        icon="📝"
      />
    </div>
  );
}