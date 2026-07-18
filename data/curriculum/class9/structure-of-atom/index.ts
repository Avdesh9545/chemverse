import { ChapterContent } from "../../types";
import { topics } from "./topics";
import { notes } from "./notes";
import { mcqs } from "./mcqs";
import { pyqs } from "./pyqs";
import { videos } from "./videos";
import { downloads } from "./downloads";

export const structureOfAtom: ChapterContent = {
  metadata: {
    id: "structure-of-atom",
    grade: 9,
    chapterNumber: 4,
    title: "Structure of the Atom",
    slug: "structure-of-atom",
    description:
      "Learn about the structure of the atom, subatomic particles, atomic models, electronic configuration, isotopes and isobars.",
    estimatedStudyTime: 300,
    tags: [
      "Atom",
      "Electron",
      "Proton",
      "Neutron",
      "Bohr Model",
      "Rutherford Model",
      "Electronic Configuration",
      "Isotopes",
      "Isobars",
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