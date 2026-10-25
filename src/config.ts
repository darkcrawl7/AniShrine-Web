/**
 * Central configuration. Edit these values in ONE place.
 *
 * APK_DOWNLOAD_URL: paste your real APK link here (e.g. a GitHub Release asset URL).
 * Leave it as an empty string and the site shows "Coming soon" with the download disabled.
 *
 * The release fields are shown only when filled in. Do not invent values.
 */
export const APK_DOWNLOAD_URL = "";
export const APP_VERSION = ""; // e.g. "1.2.0"
export const APK_FILE_SIZE = ""; // e.g. "24 MB"
export const APK_RELEASE_DATE = ""; // e.g. "2026-11-01"
export const APK_CHANGELOG: string[] = []; // e.g. ["Smoother splash screen"]

export const SUPPORT_URL = ""; // leave empty until you have a real support page or repo
export const RELEASES_URL = ""; // leave empty until you have a real releases page
export const PRIVACY_DRAFT = true; // keep true until the privacy text is reviewed

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
  { label: "Download", href: "#download" },
];
