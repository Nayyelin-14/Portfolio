import { useCallback } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { portfolioData } from "@/lib/data";
import { localizeDeep, type Locale } from "@/lib/data-locale";
import type { PortfolioData } from "@/types/data";

/**
 * Returns a deep copy of `portfolioData` where every translatable string field
 * is replaced with the translation for the current locale (falling back to
 * English when no translation exists).
 */
export function usePortfolioData(): PortfolioData {
  const { locale } = useLanguage();

  const localize = useCallback(
    (value: unknown) => localizeDeep(value, locale),
    [locale],
  );

  return localize(portfolioData) as PortfolioData;
}
