"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/hooks/useTranslation";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", key: "footer.home" },
  { href: "/about", key: "footer.about" },
  { href: "/skills", key: "footer.skills" },
  { href: "/projects", key: "footer.projects" },
  { href: "/experience", key: "footer.experience" },
  { href: "/contact", key: "footer.contact" },
];

export const Footer = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const data = usePortfolioData();

  return (
    <footer
      className={`border-t ${
        isDark ? "border-gray-800 bg-gray-950" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className={`text-lg font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {data.personal.name}
            </Link>
            <p className="mt-2 text-sm leading-relaxed">
              {t("footer.brand")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                isDark ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                isDark ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {t("footer.letsConnect")}
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href={`mailto:${data.personal.email}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {data.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                {data.personal.location}
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Linkedin className="w-4 h-4 shrink-0" />
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  {t("footer.linkedin")}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Github className="w-4 h-4 shrink-0" />
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  {t("footer.github")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t text-center text-xs ${
            isDark
              ? "border-gray-800 text-gray-500"
              : "border-gray-200 text-gray-500"
          }`}
        >
          &copy; {new Date().getFullYear()} {data.personal.name}.{" "}
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};
