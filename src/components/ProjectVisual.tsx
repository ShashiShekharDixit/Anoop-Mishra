import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  hue: "brass" | "pane" | "mixed";
  icon?: string;
  className?: string;
}

const HUE_ACCENT: Record<string, string> = {
  brass: "#B98B4E",
  pane: "#7FA8C9",
  mixed: "#9C8B6F",
};

export default function ProjectVisual({ src, alt, hue, icon = "🏗️", className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  const accent = HUE_ACCENT[hue];

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${className}`}
        style={{ background: "linear-gradient(160deg, #1B2129 0%, #171B21 100%)" }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.35]"
          preserveAspectRatio="none"
          viewBox="0 0 400 260"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="260" stroke={accent} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 52} x2="400" y2={i * 52} stroke={accent} strokeWidth="0.5" />
          ))}
          <rect x="60" y="70" width="280" height="150" fill="none" stroke={accent} strokeWidth="1.2" />
          {Array.from({ length: 5 }).map((_, i) => (
            <rect
              key={`w${i}`}
              x={80 + i * 52}
              y="95"
              width="34"
              height="100"
              fill={accent}
              fillOpacity="0.12"
              stroke={accent}
              strokeWidth="0.8"
            />
          ))}
        </svg>
        {/* Distinct icon per project so placeholders read as different projects,
            not the same repeated graphic with a different color tint. */}
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm"
          style={{ background: "rgba(20,24,29,0.55)", border: `1px solid ${accent}66` }}
        >
          {icon}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
