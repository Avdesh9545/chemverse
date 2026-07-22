import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Achievements from "@/components/dashboard/Achievements";
import DashboardHero from "@/components/dashboard/DashboardHero";
import ContinueLearningCard from "@/components/dashboard/ContinueLearningCard";
import ProgressOverviewCard from "@/components/dashboard/ProgressOverviewCard";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentActivity, {
  type Activity,
} from "@/components/dashboard/RecentActivity";

import { getStudentByUserId } from "@/lib/services/student.service";
import { getDashboardData } from "@/lib/services/dashboard.service";
import { getChapter } from "@/data/curriculum/registry";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const student = await getStudentByUserId(session.user.id);

  if (!student) {
    redirect("/login");
  }

  const dashboard = await getDashboardData(student.id);

  const totalChapters = dashboard.progress.length;

  const completedChapters = dashboard.progress.filter(
  (chapter) =>
    chapter.notesCompleted && chapter.quizCompleted
).length;

  const chaptersStarted = dashboard.progress.length;

  const bookmarkCount = dashboard.bookmarks.length;

  const quizAttemptCount = dashboard.attempts.length;

  const currentChapter =
  dashboard.progress.find(
    (chapter) =>
      !chapter.notesCompleted ||
      !chapter.quizCompleted
  ) ?? dashboard.progress[0];

  const currentChapterData = currentChapter
    ? getChapter(currentChapter.chapterSlug)
    : null;

  const activities: Activity[] = [];

  if (quizAttemptCount > 0) {
    activities.push({
      id: "quiz",
      title: "Quiz Attempted",
      description: `${quizAttemptCount} quiz attempt(s) completed`,
      date: "Recently",
    });
  }

  if (completedChapters > 0) {
    activities.push({
      id: "chapter",
      title: "Chapter Completed",
      description: `${completedChapters} chapter(s) completed`,
      date: "Recently",
    });
  }

  if (bookmarkCount > 0) {
    activities.push({
      id: "bookmark",
      title: "Bookmarks Added",
      description: `${bookmarkCount} bookmark(s) saved`,
      date: "Recently",
    });
  }

  const achievements = [
    {
      id: "notes",
      icon: "📘",
      title: "Note Reader",
      description: "Complete your first chapter notes.",
      unlocked: completedChapters > 0,
    },
    {
      id: "quiz",
      icon: "📝",
      title: "Quiz Explorer",
      description: "Attempt your first quiz.",
      unlocked: quizAttemptCount > 0,
    },
    {
      id: "chapter",
      icon: "🧪",
      title: "Chemistry Explorer",
      description: "Complete your first chapter.",
      unlocked: completedChapters > 0,
    },
    {
      id: "perfect",
      icon: "⭐",
      title: "Perfect Score",
      description: "Score 100% on a quiz.",
      unlocked: dashboard.attempts.some(
        (attempt) => attempt.score === 100
      ),
    },
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-6 py-10">
      <DashboardHero
        name={session.user.name}
        completedChapters={completedChapters}
        totalChapters={totalChapters}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <ContinueLearningCard
          chapterTitle={
            currentChapterData?.metadata.title ??
            "Start Learning"
          }
          chapterSlug={
            currentChapterData?.metadata.slug ??
            "matter-in-our-surroundings"
          }
          notesCompleted={
            currentChapter?.notesCompleted ?? false
          }
          quizCompleted={
            currentChapter?.quizCompleted ?? false
          }
        />

        <ProgressOverviewCard
          totalChapters={totalChapters}
          completedChapters={completedChapters}
        />
      </div>

      <StatsGrid
        chaptersStarted={chaptersStarted}
        chaptersCompleted={completedChapters}
        bookmarks={bookmarkCount}
        quizAttempts={quizAttemptCount}
      />

      <RecentActivity activities={activities} />

      <Achievements achievements={achievements} />
    </main>
  );
}