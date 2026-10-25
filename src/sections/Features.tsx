import { Compass, Film, Heart, ListVideo, Palette, Search, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";

type Status = "available" | "planned";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  status: Status;
}

// Status must match what the app actually ships. Update as features land.
const FEATURES: Feature[] = [
  { icon: Search, title: "Anime discovery and search", body: "Find shows quickly with search and the AniList catalog.", status: "available" },
  { icon: Compass, title: "Genre browsing", body: "Explore by genre to find your next series.", status: "planned" },
  { icon: ListVideo, title: "Detail pages and episode lists", body: "Synopsis, details, and episode lists for each title.", status: "available" },
  { icon: Heart, title: "Watch progress and library", body: "Keep track of what you're watching and what's next.", status: "planned" },
  { icon: Film, title: "In-app video player", body: "Playback powered by Media3 inside the app.", status: "available" },
  { icon: Palette, title: "Personalization and themes", body: "Settings and themes to make the app yours.", status: "planned" },
];

export default function Features() {
  const reduce = useReducedMotion();
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-ember">Features</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Everything in one shrine</h2>
        <p className="mt-3 max-w-2xl text-ash/70">Features marked “In development” are planned and not yet in the app.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.title}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="glass group rounded-3xl p-6 transition-colors hover:border-ember/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ember/15 text-ember">
                <f.icon size={22} aria-hidden />
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  f.status === "available" ? "bg-emerald-500/15 text-emerald-300" : "bg-white/10 text-ash/60"
                }`}
              >
                {f.status === "available" ? "Available" : "In development"}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ash/65">{f.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
