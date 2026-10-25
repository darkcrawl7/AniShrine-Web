import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Preview from "./sections/Preview";
import Download from "./sections/Download";
import FAQ from "./sections/FAQ";
import PrivacyPage from "./pages/PrivacyPage";

function useHashRoute(): string {
  const get = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onChange = () => setRoute(get());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  // Anchor links (#features, #faq, ...) change the hash; scroll to that section on the home page.
  useEffect(() => {
    const hash = window.location.hash;
    if (route === "/privacy" || hash.length <= 1 || hash.startsWith("#/")) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  }, [route]);

  return (
    <>
      <AnimatePresence>{!loaded && <Loader key="loader" />}</AnimatePresence>

      {route === "/privacy" ? (
        <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navbar />
          <PrivacyPage />
          <Footer />
        </motion.div>
      ) : (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Preview />
            <Download />
            <FAQ />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
