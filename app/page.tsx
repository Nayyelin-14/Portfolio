import { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/HeroSection";
import { AboutClient } from "@/app/about/AboutClient";

const ProjectsSection = dynamic(
  () => import("@/sections/ProjectsSection").then((m) => m.ProjectsSection),
);
const SkillsClient = dynamic(() =>
  import("@/app/skills/SkillsClient").then((m) => m.SkillsClient),
);
const CoreStrengthsSection = dynamic(
  () =>
    import("@/sections/CoreStrengthsSection").then(
      (m) => m.CoreStrengthsSection,
    ),
);
const ServicesSection = dynamic(
  () => import("@/sections/ServicesSection").then((m) => m.ServicesSection),
);
const ExperienceClient = dynamic(() =>
  import("@/app/experience/ExperienceClient").then((m) => m.ExperienceClient),
);
const CertificatesClient = dynamic(() =>
  import("@/app/certificates/CertificatesClient").then(
    (m) => m.CertificatesClient,
  ),
);
const ContactClient = dynamic(() =>
  import("@/app/contact/ContactClient").then((m) => m.ContactClient),
);

function SectionFallback() {
  return (
    <div
      aria-hidden
      className="min-h-[300px] animate-pulse bg-zinc-100 dark:bg-zinc-900/50"
    />
  );
}

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
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
      </section>

      {/* 4 — Skills: scan stack after seeing projects in use */}
      <section id="skills" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <SkillsClient />
        </Suspense>
      </section>

      {/* 5 — Core Strengths: how you work — now has context after proof */}
      <section id="strengths" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <CoreStrengthsSection />
        </Suspense>
      </section>

      {/* 6 — Services: what you can do — concrete capabilities */}
      <section id="services" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
      </section>

      {/* 7 — Experience: dedicated timeline (kept separate, not merged) */}
      <section id="experience" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <ExperienceClient />
        </Suspense>
      </section>

      {/* 8 — Certificates */}
      <section id="certificates" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <CertificatesClient />
        </Suspense>
      </section>

      {/* 9 — Contact */}
      <section id="contact" className="scroll-mt-20">
        <Suspense fallback={<SectionFallback />}>
          <ContactClient />
        </Suspense>
      </section>
    </>
  );
}