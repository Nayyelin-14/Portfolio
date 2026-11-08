import type { Locale } from "./i18n";
import { projectDetailsTh } from "./translations/project-details-th";
import { projectDetailsZh } from "./translations/project-details-zh";
import { certificatesTh } from "./translations/certificates-th";
import { certificatesZh } from "./translations/certificates-zh";

/**
 * Translations that live outside the small UI-string locale files.
 *
 * - `PROJECT_DETAIL_TRANSLATIONS` is keyed by project slug and consumed by
 *   `useLocalizedProject` (paths are prefixed with `projectDetails.<slug>`).
 * - `CERTIFICATE_TRANSLATIONS` is keyed by array index and consumed by
 *   `useLocalizedCertificates` (paths are prefixed with `certificatesData`).
 *
 * English is the source of truth in `lib/projects/*` and `lib/certificates.ts`,
 * so the `en` / `my` maps are intentionally empty and fall back to the source.
 */
export const PROJECT_DETAIL_TRANSLATIONS: Record<
  Locale,
  Record<string, string>
> = {
  en: {},
  th: projectDetailsTh,
  my: {},
  zh: projectDetailsZh,
};

export const CERTIFICATE_TRANSLATIONS: Record<
  Locale,
  Record<string, string>
> = {
  en: {},
  th: certificatesTh,
  my: {},
  zh: certificatesZh,
};
