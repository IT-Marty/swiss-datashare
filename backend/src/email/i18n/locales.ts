export const SUPPORTED_EMAIL_LOCALES = [
  "en-US",
  "de-DE",
  "fr-FR",
  "es-ES",
  "it-IT",
] as const;

export type SupportedEmailLocale = (typeof SUPPORTED_EMAIL_LOCALES)[number];

const BASE_LANGUAGE_TO_LOCALE: Record<string, SupportedEmailLocale> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
};

export function normalizeEmailLocale(locale?: string | null): SupportedEmailLocale {
  if (!locale) return "en-US";
  const normalized = locale.trim().toLowerCase();

  const exactMatch = SUPPORTED_EMAIL_LOCALES.find(
    (candidate) => candidate.toLowerCase() === normalized,
  );
  if (exactMatch) return exactMatch;

  const baseLanguage = normalized.split("-")[0];
  return BASE_LANGUAGE_TO_LOCALE[baseLanguage] ?? "en-US";
}
