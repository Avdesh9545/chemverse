interface ChemVerseLogoProps {
  size?: number;
  className?: string;
}

export default function ChemVerseLogo({
  size = 56,
  className = "",
}: ChemVerseLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Hexagon */}
      <polygon
        points="64,10 108,36 108,92 64,118 20,92 20,36"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Aromatic Ring */}
      <circle
        cx="64"
        cy="64"
        r="30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="3 6"
      />

      {/* Letter C */}
      <path
        d="
          M82 44
          C75 36 60 34 49 42
          C39 49 36 63 42 76
          C48 89 62 94 77 86
        "
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}