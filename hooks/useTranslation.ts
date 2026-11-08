import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

const localeModules: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/locales/en.json"),
  th: () => import("@/locales/th.json"),
  my: () => import("@/locales/my.json"),
  zh: () => import("@/locales/zh.json"),
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
  const [messages, setMessages] = useState<Record<string, unknown> | null>(
    null,
  );
  const mounted = useRef(true);

  useEffect(() => {
    if (!isReady) return;
    localeModules[locale]().then((mod) => {
      if (!mounted.current) return;
      setMessages((mod.default ?? mod) as Record<string, unknown>);
    });
    return () => {
      mounted.current = false;
    };
  }, [isReady, locale]);

  const t = useCallback(
    (key: string, replacements?: Record<string, string | number>): string => {
      if (!isReady || !messages) return key;
      let value: unknown = resolveKey(messages, key);
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
    [isReady, messages],
  );

  return useMemo<UseTranslationReturn>(
    () => ({ t, locale, setLocale, isReady }),
    [t, locale, setLocale, isReady],
  );
}
