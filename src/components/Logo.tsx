interface LogoProps {
  variant?: "wordmark" | "emblem";
  className?: string;
}

/**
 * Uses the supplied artwork unchanged. Place your files in /public:
 *   public/anishrine_wordmark.png  and  public/anishrine_emblem.png
 */
export default function Logo({ variant = "wordmark", className = "" }: LogoProps) {
  const src = variant === "wordmark" ? "/anishrine_wordmark.png" : "/anishrine_emblem.png";
  return (
    <img
      src={src}
      alt="AniShrine logo"
      draggable={false}
      loading="eager"
      decoding="async"
      className={`select-none object-contain ${className}`}
    />
  );
}
