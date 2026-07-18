import {
  Atom,
  Orbit,
  Cloud,
  Droplets,
  FlaskConical,
  Beaker,
  Flame,
  Zap,
  Magnet,
  Dna,
  Leaf,
  Microscope,
  TestTube,
  CircleDot,
  Sparkles,
  Gem,
  Hexagon,
  Circle,
  Waves,
  Snowflake,
  Sun,
  Wind,
  Mountain,
  ScanSearch,
} from "lucide-react";

interface ChapterIconProps {
  icon: string;
  className?: string;
}

export default function ChapterIcon({
  icon,
  className = "h-6 w-6 text-violet-600",
}: ChapterIconProps) {
  switch (icon) {
    case "cloud":
      return <Cloud className={className} />;

    case "droplets":
      return <Droplets className={className} />;

    case "atom":
      return <Atom className={className} />;

    case "orbit":
      return <Orbit className={className} />;

    case "beaker":
      return <Beaker className={className} />;

    case "flame":
      return <Flame className={className} />;

    case "zap":
      return <Zap className={className} />;

    case "magnet":
      return <Magnet className={className} />;

    case "dna":
      return <Dna className={className} />;

    case "leaf":
      return <Leaf className={className} />;

    case "microscope":
      return <Microscope className={className} />;

    case "testtube":
      return <TestTube className={className} />;

    case "circledot":
      return <CircleDot className={className} />;

    case "sparkles":
      return <Sparkles className={className} />;

    case "gem":
      return <Gem className={className} />;

    case "hexagon":
      return <Hexagon className={className} />;

    case "circle":
      return <Circle className={className} />;

    case "waves":
      return <Waves className={className} />;

    case "snowflake":
      return <Snowflake className={className} />;

    case "sun":
      return <Sun className={className} />;

    case "wind":
      return <Wind className={className} />;

    case "mountain":
      return <Mountain className={className} />;

    case "search":
      return <ScanSearch className={className} />;

    default:
      return <FlaskConical className={className} />;
  }
}