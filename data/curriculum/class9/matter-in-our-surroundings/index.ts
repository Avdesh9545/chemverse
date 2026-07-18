import { ChapterContent } from "../../types";

import { topics } from "./topics";
import { notes } from "./notes";
import { mcqs } from "./mcqs";
import { pyqs } from "./pyqs";
import { videos } from "./videos";
import { downloads } from "./downloads";

export const matterInOurSurroundings: ChapterContent = {
  metadata: {
    id: "c9-ch1",
    grade: 9,
    chapterNumber: 1,
    title: "Matter in Our Surroundings",
    slug: "matter-in-our-surroundings",
    description:
      "Understand the physical nature of matter, states of matter, diffusion, evaporation and changes of state.",
    estimatedStudyTime: 240,
    tags: [
      "Matter",
      "States of Matter",
      "Diffusion",
      "Evaporation",
      "Latent Heat",
      "NCERT",
      "CBSE",
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