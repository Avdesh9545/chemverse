interface BadgeProps {
  children: React.ReactNode;
  color?:
    | "violet"
    | "blue"
    | "green"
    | "amber"
    | "red";
}

export default function Badge({
  children,
  color = "violet",
}: BadgeProps) {
  const styles = {
    violet: "bg-violet-100 text-violet-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${styles[color]}`}
    >
      {children}
    </span>
  );
}