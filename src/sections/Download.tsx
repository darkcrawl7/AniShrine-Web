import { Download as DownloadIcon, ShieldAlert } from "lucide-react";
import Reveal from "../components/Reveal";
import {
  APK_CHANGELOG,
  APK_DOWNLOAD_URL,
  APK_FILE_SIZE,
  APK_RELEASE_DATE,
  APP_VERSION,
} from "../config";

const hasUrl = APK_DOWNLOAD_URL.trim().length > 0;

export default function Download() {
  return (
    <section id="download" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/20 blur-[90px]" />
          <p className="text-sm uppercase tracking-[0.2em] text-ember">Download</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Get AniShrine for Android</h2>

          {(APP_VERSION || APK_FILE_SIZE || APK_RELEASE_DATE) && (
            <dl className="mt-6 flex flex-wrap gap-6 text-sm text-ash/70">
              {APP_VERSION && <div><dt className="text-ash/40">Version</dt><dd>{APP_VERSION}</dd></div>}
              {APK_FILE_SIZE && <div><dt className="text-ash/40">File size</dt><dd>{APK_FILE_SIZE}</dd></div>}
              {APK_RELEASE_DATE && <div><dt className="text-ash/40">Released</dt><dd>{APK_RELEASE_DATE}</dd></div>}
            </dl>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hasUrl ? (
              <a href={APK_DOWNLOAD_URL} className="btn-primary" rel="noopener noreferrer">
                <DownloadIcon size={18} aria-hidden /> Download APK
              </a>
            ) : (
              <button type="button" className="btn-primary" disabled aria-disabled="true">
                <DownloadIcon size={18} aria-hidden /> Coming soon
              </button>
            )}
            <p className="flex items-center gap-2 text-xs text-ash/50">
              <ShieldAlert size={14} aria-hidden /> Android may show a warning for apps installed outside the Play Store.
            </p>
          </div>

          {APK_CHANGELOG.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-white">What's new</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ash/70">
                {APK_CHANGELOG.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="text-sm font-semibold text-white">How to install</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ash/70">
              <li>Download the APK file to your phone.</li>
              <li>Open it from your Downloads folder or notification.</li>
              <li>If prompted, allow installs from this source in your phone's settings, then go back and tap Install.</li>
              <li>Open AniShrine from your app drawer.</li>
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
