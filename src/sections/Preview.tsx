import Reveal from "../components/Reveal";
import Logo from "../components/Logo";

/** Illustrative mockups only. Replace with real screenshots once you have them. */
export default function Preview() {
  return (
    <section id="preview" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-ember">Preview</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">A look inside</h2>
        <p className="mt-3 max-w-2xl text-ash/70">
          These are illustrative mockups, not screenshots of the finished app.
        </p>
      </Reveal>

      <div className="mt-14 grid items-end gap-8 md:grid-cols-[1fr_auto]">
        <Reveal className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0a0d] via-graphite to-black p-6">
            <div className="flex h-full flex-col justify-between">
              <div className="flex gap-2">
                {["Action", "Romance", "Mystery", "Fantasy"].map((g) => (
                  <span key={g} className="rounded-full bg-white/10 px-3 py-1 text-xs text-ash/80">{g}</span>
                ))}
              </div>
              <div>
                <div className="h-2 w-2/3 rounded bg-white/20" />
                <div className="mt-3 h-2 w-1/2 rounded bg-white/10" />
                <div className="mt-6 h-1 w-full overflow-hidden rounded bg-white/10">
                  <div className="h-full w-2/5 bg-ember" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ash/50">Tablet / desktop mockup (illustrative)</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-[230px] rounded-[2.5rem] border border-white/15 bg-black/60 p-3 shadow-2xl">
          <div className="flex aspect-[9/19] flex-col items-center justify-between rounded-[2rem] bg-gradient-to-b from-[#1a0a0d] to-graphite p-5">
            <Logo variant="emblem" className="h-16 w-16 opacity-90" />
            <div className="w-full space-y-3">
              <div className="h-20 w-full rounded-2xl bg-white/10" />
              <div className="h-3 w-3/4 rounded bg-white/15" />
              <div className="h-3 w-1/2 rounded bg-white/10" />
            </div>
            <p className="text-[10px] text-ash/40">Phone mockup (illustrative)</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
