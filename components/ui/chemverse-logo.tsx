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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Hexagon */}
      <polygon
        points="50,8 84,28 84,72 50,92 16,72 16,28"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Aromatic Circle */}
      <circle
        cx="50"
        cy="50"
        r="24"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="4 4"
      />

      {/* C */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="34"
        fontWeight="800"
        fill="currentColor"
        fontFamily="Inter, sans-serif"
      >
        C
      </text>
    </svg>
  );
}