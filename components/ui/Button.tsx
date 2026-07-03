type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const base =
    "rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}