import { portfolioData } from "../assets/Data";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export const HeroSection = ({ isDark, visibleElements }) => (
  <section
    id="hero-content"
    data-animate
    className={`relative w-full min-h-screen px-8 py-24 flex flex-col md:flex-row items-center justify-center gap-16 overflow-hidden transition-all duration-1000 ${
      visibleElements?.has("hero-content")
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    } ${isDark ? "bg-gray-900" : "bg-white"}`}
  >
    {/* Left side: Profile */}
    <div
      className={`relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0 rounded-xl overflow-hidden border-4 shadow-lg hover:scale-105 transition-transform duration-500 ${
        isDark
          ? "border-purple-600" // dark mode border
          : "border-gradient-to-tr from-purple-500 via-pink-500 to-red-500"
      }`}
    >
      <img
        src={portfolioData.personal.profileImg}
        alt="Profile"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2 ring-1 ${
          isDark
            ? "bg-gray-800 text-green-400 ring-green-400/50"
            : "bg-gradient-to-r from-green-400 to-green-600 text-white ring-green-500/40"
        }`}
      >
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        AVAILABLE
      </div>
    </div>

    {/* Right side: Text */}
    <div className="max-w-xl text-left">
      <p
        className={`uppercase text-sm tracking-widest font-semibold mb-3 ${
          isDark ? "text-green-400" : "text-pink-600"
        }`}
      >
        Hello, I’m
      </p>

      <h1
        className={`text-5xl font-extrabold mb-4 tracking-tight ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {portfolioData.personal.name.toUpperCase()}
      </h1>

      <h2
        className={`text-2xl font-medium mb-6 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {portfolioData.personal.title}
      </h2>

      <p
        className={`mb-8 leading-relaxed text-base sm:text-lg ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {portfolioData.personal.tagline}
      </p>

      <a
        href="#contact"
        className={`inline-block font-semibold px-8 py-3 rounded-full shadow-lg hover:brightness-110 transition ${
          isDark
            ? "bg-gradient-to-r from-purple-700 via-pink-700 to-blue-600 text-white"
            : "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white"
        }`}
      >
        Contact Me
      </a>

      {/* Social Links */}
      <div className="flex gap-6 my-5">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`group relative transition-colors ${
            isDark
              ? "text-gray-200 hover:text-purple-400"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          <Github className="w-7 h-7" />
          <span
            className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity`}
          >
            GitHub
          </span>
        </a>
        {portfolioData.personal.Linkedin && (
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`group relative transition-colors ${
              isDark
                ? "text-gray-200 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <Linkedin className="w-7 h-7" />
            <span
              className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity`}
            >
              LinkedIn
            </span>
          </a>
        )}
      </div>
    </div>

    {/* Scroll Indicator */}
    <a
      href="#about"
      className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer select-none animate-bounce`}
      aria-label="Scroll to about section"
    >
      <span
        className={`uppercase text-xs tracking-widest mb-2 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        scroll
      </span>
      <div
        className={`w-8 h-14 rounded-3xl border-2 flex justify-center items-start p-1 ${
          isDark ? "border-gray-400" : "border-current"
        }`}
      >
        <ArrowDown
          className={`w-5 h-5 mt-1 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        />
      </div>
    </a>
  </section>
);
