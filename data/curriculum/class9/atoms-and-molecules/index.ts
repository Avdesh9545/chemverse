import { ChapterContent } from "../../types";
import { topics } from "./topics";
import { notes } from "./notes";
import { mcqs } from "./mcqs";
import { pyqs } from "./pyqs";
import { videos } from "./videos";
import { downloads } from "./downloads";

export const atomsAndMolecules: ChapterContent = {
  metadata: {
    id: "atoms-and-molecules",
    grade: 9,
    chapterNumber: 3,
    title: "Atoms and Molecules",
    slug: "atoms-and-molecules",
    description:
      "Learn the laws of chemical combination, atoms, molecules, atomic mass, molecular mass, valency, chemical formulae and the mole concept.",
    estimatedStudyTime: 300,
    tags: [
      "Atoms",
      "Molecules",
      "Atomic Mass",
      "Molecular Mass",
      "Valency",
      "Chemical Formula",
      "Mole Concept",
      "Avogadro Number",
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