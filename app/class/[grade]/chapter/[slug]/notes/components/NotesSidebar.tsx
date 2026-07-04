interface NotesSidebarProps {
  tableOfContents: string[];
  pdf: string;
}

export default function NotesSidebar({
  tableOfContents,
  pdf,
}: NotesSidebarProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-xl font-bold text-slate-900">
        📚 Chapter Contents
      </h3>

      <ul className="space-y-2">
        {tableOfContents.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer rounded-lg px-3 py-2 text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
          >
            {index + 1}. {item}
          </li>
        ))}
      </ul>

      <div className="my-6 border-t border-slate-200"></div>

      <h4 className="font-bold text-slate-900">
        📄 Complete Notes
      </h4>

      <p className="mt-2 text-sm text-slate-600">
        Download the printable PDF for offline study.
      </p>

      <a
        href={pdf}
        download
        className="mt-5 flex w-full items-center justify-center rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        ⬇ Download PDF
      </a>
    </aside>
  );
}