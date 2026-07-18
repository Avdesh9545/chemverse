import ChapterSummaryCard from "./dashboard/ChapterSummaryCard";
import ContinueLearningCard from "./dashboard/ContinueLearningCard";
import ActivityGrid from "./dashboard/ActivityGrid";
import ChapterTopicsCard from "./dashboard/ChapterTopicsCard";

interface ChapterHeroProps {
  grade: number;
  chapter: number;
  slug: string;
  title: string;
  description: string;
  topics: string[];
}

export default function ChapterHero({
  grade,
  chapter,
  slug,
  title,
  description,
  topics,
}: ChapterHeroProps) {
  const activities = [
    {
      title: "Study Notes",
      description: "Complete chapter notes with theory and examples.",
      href: `/class/${grade}/chapter/${slug}/notes`,
      available: true,
      icon: "notes" as const,
    },

    {
      title: "Practice MCQs",
      description: "Practice chapter-wise MCQs with instant results.",
      href: `/class/${grade}/chapter/${slug}/mcqs`,
      available: true,
      icon: "practice" as const,
    },

    {
      title: "Chapter Test",
      description: "Attempt a full CBT-style chapter test.",
      href: `/class/${grade}/chapter/${slug}/test`,
      available: true,
      icon: "test" as const,
    },

    {
      title: "Video Lectures",
      description: "Watch concept-wise video lectures.",
      available: false,
      icon: "videos" as const,
    },

    {
      title: "Previous Year Questions",
      description: "Solve important CBSE previous year questions.",
      available: false,
      icon: "pyqs" as const,
    },

    {
      title: "Downloads",
      description: "Download notes, worksheets and PDFs.",
      available: false,
      icon: "downloads" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <ChapterSummaryCard
        grade={grade}
        chapter={chapter}
        title={title}
        difficulty="Easy"
        duration="4 hrs"
      />

      <ContinueLearningCard
        title={title}
        progress={0}
        duration="4 hrs"
        href={`/class/${grade}/chapter/${slug}/notes`}
      />

      <ActivityGrid activities={activities} />

      <ChapterTopicsCard topics={topics} />
    </div>
  );
}