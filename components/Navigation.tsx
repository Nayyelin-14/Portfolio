"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { portfolioData } from "@/lib/data";
import { Menu, Moon, Sun, X, Download } from "lucide-react";

type NavItem = { label: string; href: string; hash: string };

// Full set for off-home routes; on home, Experience lives inside About
// so we hide it to avoid duplicate anchor and misordered highlight.
const allNavItems: NavItem[] = [
  { label: "About", href: "/about", hash: "about" },
  { label: "Projects", href: "/projects", hash: "projects" },
  { label: "Skills", href: "/skills", hash: "skills" },
  { label: "Experience", href: "/experience", hash: "experience" },
  { label: "Contact", href: "/contact", hash: "contact" },
];

export const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const navItems = allNavItems;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Scroll spy — only on home, only for hashes that actually exist in current nav.
  useEffect(() => {
    if (!isHome) return;

    const ids = ["home", ...navItems.map((n) => n.hash)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry closest to the top of the viewport among intersecting.
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!best || e.boundingClientRect.top < best.boundingClientRect.top)
              best = e;
          }
        }
        if (best?.target.id) {
          if (best.target.id === "home") {
            setActiveHash("");
          } else {
            setActiveHash(best.target.id);
          }
        }
      },
      {
        // Start highlighting right as header (64px) clears the section top.
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, navItems]);

  // Clear active near top of page
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      if (window.scrollY < 80) setActiveHash("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Sliding indicator — follows scroll-spy on home, pathname off home.
  // Uses a frame to ensure layout is settled; also re-runs on resize.
  useEffect(() => {
    const update = () => {
      const indicator = indicatorRef.current;
      const nav = navRef.current;
      if (!indicator || !nav) return;

      const activeKey = isHome
        ? activeHash
          ? (navItems.find((n) => n.hash === activeHash)?.href ?? "")
          : ""
        : (allNavItems.find(
            (n) => pathname === n.href || pathname.startsWith(n.href + "/"),
          )?.href ?? pathname);

      const link = activeKey ? linkRefs.current.get(activeKey) : null;
      if (link) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        indicator.style.width = `${linkRect.width}px`;
        indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
        indicator.style.opacity = "1";
      } else {
        indicator.style.opacity = "0";
      }
    };

    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
    };
  }, [pathname, activeHash, isHome, navItems]);

  // Handle nav click on home — smooth scroll to section with header offset
  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    if (!isHome) return; // normal navigation
    e.preventDefault();
    const el = document.getElementById(item.hash);
    if (el) {
      const headerOffset = 72;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${item.hash}`);
    }
    setIsMenuOpen(false);
  };

  const isActive = (item: NavItem) => {
    if (isHome) return activeHash === item.hash;
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark
          ? "bg-gray-950/80 backdrop-blur-md"
          : "bg-white/80 backdrop-blur-md"
      } border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.replaceState(null, "", "/");
                setActiveHash("");
              }
            }}
            className={`text-lg font-bold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {portfolioData.personal.name}
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={isHome ? `#${item.hash}` : item.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.href, el);
                  else linkRefs.current.delete(item.href);
                }}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer ${
                  isActive(item)
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : isDark
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            ))}
            <span
              ref={indicatorRef}
              className={`absolute bottom-0 h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                isDark ? "bg-blue-500" : "bg-blue-600"
              }`}
              style={{ opacity: 0 }}
            />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={portfolioData.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                isDark
                  ? "text-gray-300 hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <a
              href={portfolioData.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                isDark
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden pb-4 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={isHome ? `#${item.hash}` : item.href}
                className={`block py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  isActive(item)
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : isDark
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  handleNavClick(e, item);
                  if (!isHome) setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
