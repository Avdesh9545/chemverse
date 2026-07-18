interface ProgressProps {
  value: number;
}

export default function Progress({
  value,
}: ProgressProps) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-500"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}