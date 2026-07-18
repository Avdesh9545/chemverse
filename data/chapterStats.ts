export interface ChapterStats {
  mcqs: number;
  pyqs: number;
  videos: number;
  downloads: number;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const chapterStats: Record<string, ChapterStats> = {
  // ---------- Class IX ----------

  "matter-in-our-surroundings": {
    mcqs: 120,
    pyqs: 35,
    videos: 18,
    downloads: 6,
    duration: "4 hrs",
    difficulty: "Easy",
  },

  "is-matter-around-us-pure": {
    mcqs: 110,
    pyqs: 32,
    videos: 15,
    downloads: 5,
    duration: "3.5 hrs",
    difficulty: "Easy",
  },

  "atoms-and-molecules": {
    mcqs: 145,
    pyqs: 48,
    videos: 20,
    downloads: 8,
    duration: "5 hrs",
    difficulty: "Medium",
  },

  "structure-of-atom": {
    mcqs: 170,
    pyqs: 60,
    videos: 24,
    downloads: 9,
    duration: "6 hrs",
    difficulty: "Hard",
  },

  // ---------- Class X ----------

  "chemical-reactions-and-equations": {
    mcqs: 150,
    pyqs: 45,
    videos: 20,
    downloads: 7,
    duration: "5 hrs",
    difficulty: "Medium",
  },

  "acids-bases-and-salts": {
    mcqs: 180,
    pyqs: 58,
    videos: 23,
    downloads: 9,
    duration: "6 hrs",
    difficulty: "Hard",
  },

  "metals-and-non-metals": {
    mcqs: 160,
    pyqs: 50,
    videos: 18,
    downloads: 7,
    duration: "5 hrs",
    difficulty: "Medium",
  },

  "carbon-and-its-compounds": {
    mcqs: 210,
    pyqs: 75,
    videos: 28,
    downloads: 10,
    duration: "7 hrs",
    difficulty: "Hard",
  },

  "periodic-classification-of-elements": {
    mcqs: 135,
    pyqs: 40,
    videos: 16,
    downloads: 6,
    duration: "4 hrs",
    difficulty: "Medium",
  },
};