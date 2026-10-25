import { PRIVACY_DRAFT } from "../config";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      {PRIVACY_DRAFT && (
        <p className="mb-6 rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ash">
          DRAFT: this policy is incomplete and must be checked against the actual app before publishing.
        </p>
      )}
      <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ash/75">
        <section>
          <h2 className="text-lg font-semibold text-white">1. What this covers</h2>
          <p>This policy describes how the AniShrine Android app and this website handle information. [TO COMPLETE: confirm each point against the real app.]</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">2. Information we collect</h2>
          <p>[TO COMPLETE: list exactly what the app stores on the device, any account or AniList login data, and any analytics or crash reporting.]</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">3. Third-party services</h2>
          <p>[TO COMPLETE: name each external service the app contacts, such as AniList and any streaming source, and link to their policies.]</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">4. Data retention and deletion</h2>
          <p>[TO COMPLETE: explain how users remove local data, such as clearing app data or uninstalling.]</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">5. Contact</h2>
          <p>[TO COMPLETE: add a contact method you actually use. None has been invented here.]</p>
        </section>
      </div>
      <a href="#/" className="mt-10 inline-block text-sm text-ember hover:underline">← Back to home</a>
    </article>
  );
}
