import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download as DownloadIcon } from "lucide-react";
import Logo from "../components/Logo";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      {/* Atmospheric glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-ember/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.p {...fade(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ash/70">
            Android · Anime companion
          </motion.p>

          <motion.h1 {...fade(0.1)} className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your anime.<br />
            <span className="bg-gradient-to-r from-ash via-white to-ember bg-clip-text text-transparent">Your shrine.</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-6 max-w-lg text-base leading-relaxed text-ash/70 sm:text-lg">
            AniShrine helps you discover anime, browse by genre, and keep your watching in one calm,
            cinematic space built for your phone.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap gap-3">
            <a href="#download" className="btn-primary">
              <DownloadIcon size={18} aria-hidden /> Get AniShrine
            </a>
            <a href="#features" className="btn-ghost">
              Explore features <ArrowRight size={18} aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } })}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute inset-10 rounded-full bg-ember/25 blur-[80px]" aria-hidden />
          <div className="glass relative flex aspect-square w-full items-center justify-center rounded-[2rem] p-10 shadow-2xl">
            <Logo variant="emblem" className="h-full w-full max-h-72 max-w-72" />
          </div>
          <div className="absolute -bottom-4 left-4 right-4">
            <Logo variant="wordmark" className="mx-auto h-10 w-auto opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
