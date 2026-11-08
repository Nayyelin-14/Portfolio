"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LANGUAGE_STORAGE_KEY,
  detectLocale,
  type Locale,
} from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isReady: boolean;
}

const LanguageContext =
  createContext<LanguageContextType>({
    locale: DEFAULT_LOCALE,
    setLocale: () => {},
    isReady: false,
  });

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({
  children,
}: LanguageProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [storedLocale, setStoredLocale] = useState<Locale | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Read the persisted preference + navigator language once the client hydrates.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      // localStorage may be unavailable in some environments.
    }

    const searchParam = searchParams.get("lang");
    const navigatorLang =
      typeof navigator !== "undefined" ? navigator.language : undefined;

    const detected = detectLocale(searchParam, stored, navigatorLang);
    setStoredLocale(detected);
    setIsReady(true);
  }, [searchParams]);

  const locale = useMemo<Locale>(
    () => storedLocale ?? DEFAULT_LOCALE,
    [storedLocale],
  );

  // Keep the document language in sync for accessibility and SEO.
  useEffect(() => {
    if (!isReady) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [isReady, locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      // Persist the choice.
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
      } catch {
        // Ignore storage errors.
      }
      setStoredLocale(nextLocale);

      // Reflect it in the URL without losing the current page.
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", nextLocale);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const value = useMemo<LanguageContextType>(
    () => ({ locale, setLocale, isReady }),
    [locale, setLocale, isReady],
  );

  if (!isReady) {
    return null; // avoid flashing the wrong language before hydration
  }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
