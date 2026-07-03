type ChapterCardProps = {
  title: string;
};
import Button from "@/components/ui/Button";
export default function ChapterCard({
  title,
}: ChapterCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-5 flex gap-3">
        <div className="mt-5 flex flex-wrap gap-3">
  <Button size="sm">
    Notes
  </Button>

  <Button size="sm" variant="secondary">
    MCQs
  </Button>

  <Button size="sm" variant="secondary">
    PYQs
  </Button>
</div>
      </div>
    </div>
  );
}