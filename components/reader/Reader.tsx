"use client";

import { useState } from "react";

import ReaderHeader from "./ReaderHeader";
import ReaderProgress from "./ReaderProgress";
import ReaderContent from "./ReaderContent";
import ReaderNavigation from "./ReaderNavigation";

interface Note {
  id: string;
  title: string;
  content: string;
}

import { ChapterContent } from "@/data/curriculum/types";

interface ReaderProps {
    chapter: ChapterContent;
}

export default function Reader({
    chapter,
}: ReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const notes = chapter.notes;

const totalPages = notes.length;

const currentNote = notes[currentPage];

  function nextPage() {
    if (currentPage < totalPages - 1) {
      setCurrentPage((page) => page + 1);
    }
  }

  function previousPage() {
    if (currentPage > 0) {
      setCurrentPage((page) => page - 1);
    }
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      <ReaderHeader
    chapter={chapter}
    currentPage={currentPage}
    totalPages={totalPages}
/>

      <ReaderProgress
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <ReaderContent
        note={currentNote}
        pageNumber={currentPage + 1}
      />

      <ReaderNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextPage}
        onPrevious={previousPage}
      />

    </article>
  );
}