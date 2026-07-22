import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesReaderProps {
  notes: Note[];
}

export default function NotesReader({
  notes,
}: NotesReaderProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b border-slate-100 px-10 py-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Chapter Notes
        </p>

        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Read & Understand
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Carefully read every topic before attempting the MCQs and Chapter Test.
        </p>
      </div>

      {/* Notes */}

      <div className="space-y-14 px-10 py-10">
        {notes.map((note, index) => (
          <section
            id={`n${index + 1}`}
            key={note.id}
            className="scroll-mt-28"
          >
            {/* Topic */}

            <span className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700">
              Topic {index + 1}
            </span>

            {/* Title */}

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              {note.title}
            </h3>

            <div className="mt-5 h-1 w-24 rounded-full bg-violet-600" />

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

                  hr: () => (
                    <hr className="my-10 border-slate-200" />
                  ),
                }}
              >
                {note.content}
              </ReactMarkdown>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}