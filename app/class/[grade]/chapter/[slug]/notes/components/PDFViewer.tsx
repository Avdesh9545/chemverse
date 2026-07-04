interface PDFViewerProps {
  pdf: string;
}

export default function PDFViewer({
  pdf,
}: PDFViewerProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Chapter Notes
        </h2>

        <p className="mt-1 text-slate-600">
          Read the complete notes directly in your browser.
        </p>
      </div>

      <iframe
        src={pdf}
        title="Chapter Notes PDF"
        className="h-[900px] w-full border-0"
      />
    </section>
  );
}