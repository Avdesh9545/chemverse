import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ReaderGoal from "./ReaderGoal";
import { NoteSection } from "@/data/curriculum/types";
import ReaderInsight from "./ReaderInsight";

interface ReaderContentProps {
  note: NoteSection;
  pageNumber: number;
}

export default function ReaderContent({
  note,
  pageNumber,
}: ReaderContentProps) {
  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      {/* Topic Badge */}
      <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-violet-700">
  Topic {pageNumber}
</span>

      {/* Title */}
      <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900">
  {note.title}
</h2>

      {/* Accent Line */}
      <div className="mt-6 h-1 w-20 rounded-full bg-violet-600" />

      {/* Learning Goals */}
      <div className="mt-10">
  <ReaderGoal goals={note.learningGoals} />
</div>
{/* Illustration Placeholder */}

<div className="my-12 flex h-72 items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
  <div className="text-center">
    <div className="text-5xl">🧪</div>

    <h3 className="mt-4 text-xl font-semibold text-slate-700">
      Concept Illustration
    </h3>

    <p className="mt-2 text-slate-500">
      Interactive diagrams and illustrations will appear here.
    </p>
  </div>
</div>

{/* Insights */}

{note.insights?.map((insight, index) => (
  <ReaderInsight
    key={index}
    variant={insight.variant}
    title={insight.title}
  >
    {insight.content}
  </ReaderInsight>
))}

      {/* Markdown */}
      <div className="mt-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="mb-6 mt-10 text-4xl font-bold text-slate-900">
                {children}
              </h1>
            ),

            h2: ({ children }) => (
              <h2 className="mb-5 mt-8 text-3xl font-bold text-slate-900">
                {children}
              </h2>
            ),

            h3: ({ children }) => (
              <h3 className="mb-4 mt-6 text-2xl font-semibold text-slate-900">
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p className="mb-6 text-[18px] leading-9 text-slate-700">
                {children}
              </p>
            ),

            ul: ({ children }) => (
              <ul className="mb-6 list-disc space-y-2 pl-6 text-[18px] leading-8 text-slate-700">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="mb-6 list-decimal space-y-2 pl-6 text-[18px] leading-8 text-slate-700">
                {children}
              </ol>
            ),

            blockquote: ({ children }) => (
              <blockquote className="my-8 rounded-r-xl border-l-4 border-violet-600 bg-violet-50 px-6 py-4 italic text-slate-700">
                {children}
              </blockquote>
            ),

            table: ({ children }) => (
              <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300">
                  {children}
                </table>
              </div>
            ),

            th: ({ children }) => (
              <th className="border border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold">
                {children}
              </th>
            ),

            td: ({ children }) => (
              <td className="border border-slate-300 px-4 py-3">
                {children}
              </td>
            ),

            strong: ({ children }) => (
              <strong className="font-bold text-slate-900">
                {children}
              </strong>
            ),

            em: ({ children }) => (
              <em className="italic text-violet-700">
                {children}
              </em>
            ),

            hr: () => <hr className="my-10 border-slate-200" />,
          }}
        >
          {note.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}