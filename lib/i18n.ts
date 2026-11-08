export type Locale = "en" | "th" | "my" | "zh";

export const LOCALES: Locale[] = ["en", "th", "my", "zh"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { label: string; native: string }> = {
  en: { label: "English", native: "English" },
  th: { label: "Thai", native: "ไทย" },
  my: { label: "Myanmar", native: "မြန်မာ" },
  zh: { label: "Chinese", native: "中文" },
};

export const LOCALE_DIRECTION: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  th: "ltr",
  my: "ltr",
  zh: "ltr",
};

// LocalStorage key used to persist the user's language choice.
export const LANGUAGE_STORAGE_KEY = "portfolio-lang";

/**
 * Detect the best locale from a prioritized list of sources:
 * 1. explicit `lang` URL search param
 * 2. saved preference in localStorage
 * 3. browser navigator language
 * 4. default locale
 */
export function detectLocale(
  searchParam?: string | null,
  stored?: string | null,
  navigatorLang?: string | null,
): Locale {
  const candidates: Array<string | undefined> = [
    searchParam ?? undefined,
    stored ?? undefined,
    navigatorLang ?? undefined,
  ];

  for (const c of candidates) {
    if (!c) continue;
    const normalized = c.toLowerCase().replace(/_/g, "-").split("-")[0];
    if (LOCALES.includes(normalized as Locale)) {
      return normalized as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * Returns true when the given locale needs right-to-left styling.
 * (None of en/th/my are RTL, but kept for completeness.)
 */
export function isRTL(locale: Locale): boolean {
  return LOCALE_DIRECTION[locale] === "rtl";
}
