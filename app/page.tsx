"use client";

import { HeroSection } from "@/sections/HeroSection";
import { CoreStrengthsSection } from "@/sections/CoreStrengthsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutClient } from "@/app/about/AboutClient";
import { ExperienceClient } from "@/app/experience/ExperienceClient";
import { SkillsClient } from "@/app/skills/SkillsClient";
import { CertificatesClient } from "@/app/certificates/CertificatesClient";
import { ContactClient } from "@/app/contact/ContactClient";

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      {/* 2 — About & Experience combined: no duplicate internship or photo */}
      <section id="about" className="scroll-mt-20">
        <AboutClient hidePortrait />
      </section>

      {/* 3 — Projects: strongest proof, front-loaded */}
      <section id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </section>

      {/* 4 — Skills: scan stack after seeing projects in use */}
      <section id="skills" className="scroll-mt-20">
        <SkillsClient />
      </section>

      {/* 5 — Core Strengths: how you work — now has context after proof */}
      <section id="strengths" className="scroll-mt-20">
        <CoreStrengthsSection />
      </section>

      {/* 6 — Services: what you can do — concrete capabilities */}
      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      {/* 7 — Experience: dedicated timeline (kept separate, not merged) */}
      <section id="experience" className="scroll-mt-20">
        <ExperienceClient />
      </section>

      {/* 8 — Certificates */}
      <section id="certificates" className="scroll-mt-20">
        <CertificatesClient />
      </section>

      {/* 9 — Contact */}
      <section id="contact" className="scroll-mt-20">
        <ContactClient />
      </section>
    </>
  );
}
