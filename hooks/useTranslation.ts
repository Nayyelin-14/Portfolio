import { useCallback, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";
import en from "@/locales/en.json";
import th from "@/locales/th.json";
import my from "@/locales/my.json";
import zh from "@/locales/zh.json";

// All locale bundles are small JSON files. Importing them statically makes
// language switching synchronous and guarantees every string updates
// immediately (no async race while a new bundle loads).
const MESSAGES: Record<Locale, Record<string, unknown>> = {
  en,
  th,
  my,
  zh,
};

function resolveKey(
  messages: Record<string, unknown>,
  key: string,
): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (
      acc !== null &&
      acc !== undefined &&
      typeof acc === "object" &&
      part in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, messages);
}

interface UseTranslationReturn {
  t: (key: string, replacements?: Record<string, string | number>) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isReady: boolean;
}

export function useTranslation(): UseTranslationReturn {
  const { locale, setLocale, isReady } = useLanguage();

  const t = useCallback(
    (key: string, replacements?: Record<string, string | number>): string => {
      let value: unknown = resolveKey(MESSAGES[locale], key);

      // Fall back to English when a key has not been translated yet, so a
      // partially translated locale never renders raw dot-path keys.
      if (value === undefined && locale !== "en") {
        value = resolveKey(MESSAGES.en, key);
      }

      if (value === undefined) value = key;
      if (typeof value !== "string") return String(value);

      if (replacements) {
        value = String(value).replace(/\{\{(\w+)\}}/g, (_match, name) => {
          const repl = replacements[name];
          return repl !== undefined ? String(repl) : _match;
        });
      }
      return String(value);
    },
    [locale],
  );

  return useMemo<UseTranslationReturn>(
    () => ({ t, locale, setLocale, isReady }),
    [t, locale, setLocale, isReady],
  );
}
