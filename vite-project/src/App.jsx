import React, { useEffect } from "react";
import { useScrollAnimation } from "./hooks/useScroll";
import { useTheme } from "./hooks/useTheme";
import { Navigation } from "./Nav";
import { HeroSection } from "./Sections/HeroSection";

import { ProjectsSection } from "./Sections/Projects";
import { CertificatesEducationSection } from "./Sections/Exp";
import ContactSection from "./Sections/Contact";
import { AboutSection } from "./Sections/AboutSection";

const App = () => {
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
        toggleTheme={toggleTheme}
        visibleElements={visibleElements}
      />

      <ProjectsSection isDark={isDark} visibleElements={visibleElements} />
      <CertificatesEducationSection
        isDark={isDark}
        visibleElements={visibleElements}
      />
      <ContactSection isDark={isDark} visibleElements={visibleElements} />
    </div>
  );
};

export default App;
