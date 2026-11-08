"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Github, Phone, Mail } from "lucide-react";

export const ContactClient = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const data = usePortfolioData();

  const handleEmailClick = () => {
    window.location.href = `mailto:${data.personal.email}?subject=Contact%20from%20Portfolio&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding%20potential%20opportunities.%0D%0A%0D%0ABest%20regards`;
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0945462376";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {t("contact.title")}
      </p>
      <h1
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {t("contact.heading")}
      </h1>
      <p
        className={`mt-4 text-lg max-w-2xl leading-relaxed ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {t("contact.description")}
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Email */}
        <button
          onClick={handleEmailClick}
          className={`group flex items-center gap-4 rounded-xl border p-6 text-left transition-all hover:scale-[1.02] ${
            isDark
              ? "border-gray-800 bg-gray-900/50 hover:bg-gray-900 text-blue-400"
              : "border-gray-200 bg-white hover:bg-gray-50 text-blue-600"
          }`}
        >
          <div
            className={`p-2 rounded-lg ${
              isDark ? "bg-blue-500/20" : "bg-blue-100"
            }`}
          >
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              {t("contact.email")}
            </p>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {t("contact.sendMessage")}
            </p>
          </div>
        </button>

        {/* GitHub */}
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-4 rounded-xl border p-6 transition-all hover:scale-[1.02] ${
            isDark
              ? "border-gray-800 bg-gray-900/50 hover:bg-gray-900 text-green-400"
              : "border-gray-200 bg-white hover:bg-gray-50 text-green-600"
          }`}
        >
          <div
            className={`p-2 rounded-lg ${
              isDark ? "bg-green-500/20" : "bg-green-100"
            }`}
          >
            <Github className="w-6 h-6" />
          </div>
          <div>
            <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              {t("contact.github")}
            </p>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {t("contact.viewProjects")}
            </p>
          </div>
        </a>

        {/* Phone */}
        <button
          onClick={handlePhoneClick}
          className={`group flex items-center gap-4 rounded-xl border p-6 text-left transition-all hover:scale-[1.02] ${
            isDark
              ? "border-gray-800 bg-gray-900/50 hover:bg-gray-900 text-purple-400"
              : "border-gray-200 bg-white hover:bg-gray-50 text-purple-600"
          }`}
        >
          <div
            className={`p-2 rounded-lg ${
              isDark ? "bg-purple-500/20" : "bg-purple-100"
            }`}
          >
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              {t("contact.phone")}
            </p>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              0945462376
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
