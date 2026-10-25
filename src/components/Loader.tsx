import { motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";

export default function Loader() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      role="status"
      aria-label="Loading AniShrine"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <Logo variant="emblem" className="h-24 w-24 sm:h-28 sm:w-28" />
        <div className="h-px w-32 overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-ember"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={reduce ? { duration: 0 } : { duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
