"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { useLocalizedCertificates } from "@/hooks/useLocalizedCertificates";
import { Award, Calendar, Download, ExternalLink, X } from "lucide-react";
import type { Certificate } from "@/types/data";

const certImageDims: Record<string, { width: number; height: number }> = {
  "/Certi/image.webp": { width: 1122, height: 789 },
  "/Certi/Full.webp": { width: 2048, height: 1447 },
  "/Certi/internship-certificate-preview.webp": { width: 1224, height: 1584 },
};

function resolvedCertImage(image: string) {
  return image.endsWith(".pdf") ? image.replace(".pdf", "-preview.webp") : image;
}

export const CertificatesClient = () => {
  const { isDark } = useTheme();
  const certificates = useLocalizedCertificates();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {t("certificates.title")}
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {t("certificates.heading")}
      </h1>
      <p
        className={`mt-4 text-lg leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("certificates.description")}
      </p>

      <div className="mt-10 space-y-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`rounded-2xl p-6 sm:p-8 border ${
              isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="shrink-0 mx-auto lg:mx-0">
                <div className="relative rounded-xl overflow-hidden w-full max-w-sm lg:w-72 h-48 lg:h-52">
                  <Image
                    src={resolvedCertImage(cert.image)}
                    alt={`${cert.title} ${t("common.certificate")}`}
                    fill
                    sizes="(min-width: 1024px) 288px, (min-width: 640px) 384px, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80">
                    <Award className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h2>
                <p
                  className={`text-sm font-semibold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {cert.provider}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <span className="font-semibold">
                    {t("common.instructor")}:
                  </span>{" "}
                  {cert.instructor}
                </p>
                <p
                  className={`text-xs mt-1 flex items-center gap-1 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <Calendar className="w-3 h-3" />
                  {cert.date.start} {cert.date.end && `- ${cert.date.end}`}
                </p>
                <p
                  className={`text-sm mt-4 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                <div className="mt-4">
                  <p
                    className={`text-xs font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("certificates.technologiesCovered")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p
                    className={`text-xs font-semibold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("certificates.keySkillsGained")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDark
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("certificates.viewCertificate")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={resolvedCertImage(selectedCert.image)}
              alt={`${selectedCert.title} Certificate`}
              {...(certImageDims[resolvedCertImage(selectedCert.image)] ?? {
                width: 1224,
                height: 1584,
              })}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            {selectedCert.image.endsWith(".pdf") && (
              <div className="flex justify-center py-4">
                <a
                  href={selectedCert.image}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("common.downloadPDF")}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
