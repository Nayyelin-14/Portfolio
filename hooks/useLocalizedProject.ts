import { useCallback } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeDeep } from "@/lib/data-locale";
import type { ProjectDetail } from "@/types/data";

/**
 * Returns a deep copy of `project` with all translatable string fields
 * replaced for the current locale (English fallback).
 */
export function useLocalizedProject(project: ProjectDetail): ProjectDetail {
  const { locale } = useLanguage();

  const localize = useCallback(
    (value: unknown) => localizeDeep(value, locale),
    [locale],
  );

  return localize(project) as ProjectDetail;
}
