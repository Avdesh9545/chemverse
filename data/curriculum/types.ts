// =============================================
// ChemVerse Curriculum Engine
// Master Types
// =============================================

export type Grade = 9 | 10 | 11 | 12;

export type Difficulty =
  | "Easy"
  | "Medium"
  | "Hard"
  | "JEE Main"
  | "JEE Advanced"
  | "NEET";

export type ResourceType =
  | "Notes"
  | "MCQs"
  | "PYQs"
  | "Worksheet"
  | "Mind Map"
  | "Formula Sheet";

export interface ChapterMetadata {
  id: string;
  grade: Grade;
  chapterNumber: number;
  title: string;
  slug: string;
  description: string;
  estimatedStudyTime: number;
  tags: string[];
  hasNotes: boolean;
  hasMCQs: boolean;
  hasPYQs: boolean;
  hasVideos: boolean;
  hasWorksheets: boolean;
}
export interface ReaderInsight {
  variant: "tip" | "warning" | "takeaway";
  title: string;
  content: string;
}

export interface NoteSection {
    id: string;
    title: string;
    content: string;

    // Optional learning enhancements
    learningGoals?: string[];
    keyTakeaway?: string;
    examTip?: string;
    commonMistake?: string;

    // Reserved for future rich content
    illustration?: string;
    insights?: ReaderInsight[];
}

export interface VideoResource {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
}

export interface DownloadResource {
  id: string;
  title: string;
  type: ResourceType;
  file: string;
}

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty: Difficulty;
  topic: string;
}

export interface PYQQuestion {
  id: number;
  year: number;
  exam: string;
  question: string;
  solution: string;
  topic: string;
}

export interface ChapterContent {
  metadata: ChapterMetadata;

  /**
   * Quick chapter outline shown on the chapter page.
   */
  topics: string[];

  notes: NoteSection[];

  mcqs: MCQQuestion[];

  pyqs: PYQQuestion[];

  videos: VideoResource[];

  downloads: DownloadResource[];
}