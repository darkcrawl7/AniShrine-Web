import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "../components/Reveal";

const QUESTIONS = [
  {
    q: "Is AniShrine free?",
    a: "Pricing has not been finalized here. Check the download section for the latest details once a release is published.",
  },
  {
    q: "Which Android versions are supported?",
    a: "Compatibility details will be listed with each release. If you are unsure, check the release notes before installing.",
  },
  {
    q: "How do I update the app?",
    a: "Download the newest APK from this site and install it over the existing app. Your settings are kept when the package is updated in place.",
  },
  {
    q: "Why does Android warn me when I install it?",
    a: "Android shows a warning for apps installed from outside the Play Store. A website can't remove that warning, and AniShrine does not bypass it. You can review the source and decide whether to continue.",
  },
  {
    q: "The app won't install. What should I check?",
    a: "Make sure the download finished completely, allow installs from your browser or file manager, and free up storage space. If it still fails, open an issue with your Android version and phone model.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-ember">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Questions, answered</h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {QUESTIONS.map((item, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const buttonId = `faq-button-${i}`;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="glass overflow-hidden rounded-2xl">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-white hover:bg-white/[0.03]"
                  >
                    {item.q}
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className={`shrink-0 text-ash/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ash/70">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
