interface ReaderInsightProps {
  variant: "tip" | "warning" | "takeaway";
  title: string;
  children: React.ReactNode;
}

const styles = {
  tip: {
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: "💡",
  },
  warning: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    icon: "⚠️",
  },
  takeaway: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    icon: "✅",
  },
};

export default function ReaderInsight({
  variant,
  title,
  children,
}: ReaderInsightProps) {
  const style = styles[variant];

  return (
    <section
      className={`my-8 rounded-2xl border ${style.border} ${style.bg} p-6`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{style.icon}</span>

        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="mt-4 text-slate-700 leading-8">
        {children}
      </div>
    </section>
  );
}