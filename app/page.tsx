"use client";

import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScroll";
import { useTheme } from "@/hooks/useTheme";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/Projects";
import { CertificatesSection } from "@/sections/Exp";
import ContactSection from "@/sections/Contact";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const visibleElements = useScrollAnimation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={`font-inter ${isDark ? "dark" : ""}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} visibleElements={visibleElements} />
      <AboutSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <ExperienceSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <SkillsSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <ProjectsSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <CertificatesSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <ContactSection isDark={isDark} />
    </div>
  );
}
