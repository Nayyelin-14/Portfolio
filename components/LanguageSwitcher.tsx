"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/components/ThemeProvider";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { Globe, ChevronDown, Check } from "lucide-react";

export const LanguageSwitcher = () => {
  const { t, locale, setLocale } = useTranslation();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
          isDark
            ? "border-gray-700 text-gray-200 hover:bg-gray-800"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
        aria-label={t("common.localeSwitch")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title={t("common.localeSwitch")}
      >
        <Globe className="w-4 h-4" />
        <span className="whitespace-nowrap">{LOCALE_LABELS[locale].native}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t("common.localeSwitch")}
          className={`absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border shadow-xl ${
            isDark
              ? "border-gray-700 bg-gray-900"
              : "border-gray-200 bg-white"
          }`}
        >
          {LOCALES.map((item) => {
            const selected = item === locale;
            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => chooseLocale(item)}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? isDark
                      ? "bg-blue-500/15 text-blue-300"
                      : "bg-blue-50 text-blue-600"
                    : isDark
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex flex-col">
                  <span className="font-medium leading-tight">
                    {LOCALE_LABELS[item].native}
                  </span>
                  <span
                    className={`text-[11px] leading-tight ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {LOCALE_LABELS[item].label}
                  </span>
                </span>
                {selected && <Check className="w-4 h-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
