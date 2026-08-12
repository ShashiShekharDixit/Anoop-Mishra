import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
}

/**
 * Plays a local video file if one exists at `src`. If it's missing (which
 * it will be until a real file is added — see public/media/README.md),
 * falls back to an animated, rotating 3D glass-pane visual instead of a
 * broken video element or a static placeholder. Swap in real footage any
 * time by dropping a file at the same path — zero code changes needed.
 */
export default function VideoBanner({ src, poster, className = "", overlay = true }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ perspective: "1200px" }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(127,168,201,0.12), transparent), " +
              "linear-gradient(160deg, #171c22 0%, #14181D 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-2xl"
              style={{
                width: "42%",
                height: "62%",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [i * 22 - 33, i * 22 - 33 + 8, i * 22 - 33],
                rotateX: [6, -4, 6],
                z: [0, 30, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), transparent 40%, rgba(212,171,116,0.08))",
                }}
              />
            </motion.div>
          ))}
        </div>
        {overlay && (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(20,24,29,0.85) 100%)" }}
          />
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(20,24,29,0.85) 100%)" }}
        />
      )}
    </div>
  );
}
