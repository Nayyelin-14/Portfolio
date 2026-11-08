"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { Globe, ChevronDown } from "lucide-react";

export const LanguageSwitcher = () => {
  const { t, locale, setLocale } = useTranslation();

  const nextLocale = (current: Locale): Locale => {
    const idx = LOCALES.indexOf(current);
    return LOCALES[(idx + 1) % LOCALES.length];
  };

  return (
    <button
      onClick={() => setLocale(nextLocale(locale))}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border"
      aria-label="Change language"
      title={t("common.localeSwitch")}
    >
      <Globe className="w-4 h-4" />
      <span>{LOCALE_LABELS[locale].native}</span>
      <ChevronDown className="w-3 h-3" />
    </button>
  );
}
