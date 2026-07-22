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
  "Understand pure substances, mixtures, solutions, suspensions, colloids, and the different methods used to separate mixtures",
    estimatedStudyTime: 240,
    tags: [
  "Pure Substances",
  "Mixtures",
  "Solutions",
  "Suspensions",
  "Colloids",
  "Separation Techniques",
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