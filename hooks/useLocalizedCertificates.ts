import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeDeep } from "@/lib/data-locale";
import { certificatesData } from "@/lib/certificates";
import type { Certificate } from "@/types/data";

/**
 * Returns the certificates data localized for the current language.
 */
export function useLocalizedCertificates(): Certificate[] {
  const { locale } = useLanguage();

  return useMemo(
    () =>
      localizeDeep(
        certificatesData,
        locale,
        "certificatesData",
      ) as Certificate[],
    [locale],
  );
}
