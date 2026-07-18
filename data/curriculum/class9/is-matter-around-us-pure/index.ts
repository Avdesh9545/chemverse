import { ChapterContent } from "../../types";
import { topics } from "./topics";
import { notes } from "./notes";
import { mcqs } from "./mcqs";
import { pyqs } from "./pyqs";
import { videos } from "./videos";
import { downloads } from "./downloads";

export const isMatterAroundUsPure: ChapterContent = {
  metadata: {
    id: "is-matter-around-us-pure",
    grade: 9,
    chapterNumber: 2,
    title: "Is Matter Around Us Pure",
    slug: "is-matter-around-us-pure",
    description:
      "Learn about pure substances, mixtures, solutions, colloids, suspensions and methods of separation.",
    estimatedStudyTime: 240,
    tags: [
      "Pure Substance",
      "Mixtures",
      "Solutions",
      "Colloids",
      "Suspensions",
      "Separation",
    ],
    hasNotes: true,
    hasMCQs: true,
    hasPYQs: true,
    hasVideos: true,
    hasWorksheets: true,
  },

  topics,
  notes,
  mcqs,
  pyqs,
  videos,
  downloads,
};