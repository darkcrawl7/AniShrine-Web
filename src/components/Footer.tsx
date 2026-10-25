import Logo from "./Logo";
import { NAV_LINKS, RELEASES_URL, SUPPORT_URL } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo variant="wordmark" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-ash/60">
            Your anime. Your shrine. A discovery and streaming companion for Android.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ash/70 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#/privacy" className="text-ash/70 hover:text-white">Privacy Policy</a>
          <span className="text-ash/40" aria-disabled="true">Terms (coming soon)</span>
          {SUPPORT_URL ? (
            <a href={SUPPORT_URL} className="text-ash/70 hover:text-white" target="_blank" rel="noopener noreferrer">Support</a>
          ) : (
            <span className="text-ash/40" aria-disabled="true">Support (coming soon)</span>
          )}
          {RELEASES_URL ? (
            <a href={RELEASES_URL} className="text-ash/70 hover:text-white" target="_blank" rel="noopener noreferrer">Releases</a>
          ) : (
            <span className="text-ash/40" aria-disabled="true">Releases (coming soon)</span>
          )}
        </nav>

        <div className="text-sm text-ash/50 md:text-right">
          <p>© {year} AniShrine. All rights reserved.</p>
          <p className="mt-2">AniShrine is an independent project and is not affiliated with AniList or any anime studio.</p>
        </div>
      </div>
    </footer>
  );
}
