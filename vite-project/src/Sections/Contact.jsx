import React from "react";
import { Github, Phone, Mail } from "lucide-react";
import { portfolioData } from "../assets/Data";

const ContactSection = ({ isDark }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}?subject=Contact%20from%20Portfolio&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding%20potential%20opportunities.%0D%0A%0D%0ABest%20regards`;
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0945462376";
  };

  return (
    <section
      id="contact"
      className={`relative py-24 px-6 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text & call to action */}
        <div className="text-center md:text-left space-y-6">
          <div className="space-y-4">
            <h2
              className={`text-5xl font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Build Together
            </h2>
            <div
              className={`w-24 h-1 ${isDark ? "bg-blue-400" : "bg-blue-600"} ${
                window.innerWidth >= 768 ? "" : "mx-auto"
              }`}
            ></div>
          </div>

          <p
            className={`text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            "A passionate software engineer eager to grow and collaborate. If
            you have any questions, opportunities, or just want to chat, don't
            hesitate to get in touch — I'm always open to learning and new
            opportunities."
          </p>

          <div
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Click any contact method below to get in touch instantly
          </div>
        </div>

        {/* Right side - Contact cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          {/* Email Card */}
          <button
            onClick={handleEmailClick}
            className={`group flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 hover:bg-gray-750 text-blue-400"
                : "border-gray-300 bg-white hover:bg-gray-50 text-blue-600"
            }`}
            aria-label="Send Email"
          >
            <div
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-blue-500/20 group-hover:bg-blue-500/30"
                  : "bg-blue-100 group-hover:bg-blue-200"
              }`}
            >
              <Mail className="w-6 h-6 group-hover:animate-pulse" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Email</p>
              <p
                className={`text-sm opacity-80 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Send message
              </p>
            </div>
          </button>

          {/* GitHub Card */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 hover:bg-gray-750 text-green-400"
                : "border-gray-300 bg-white hover:bg-gray-50 text-green-600"
            }`}
            aria-label="GitHub Profile"
          >
            <div
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-green-500/20 group-hover:bg-green-500/30"
                  : "bg-green-100 group-hover:bg-green-200"
              }`}
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">GitHub</p>
              <p
                className={`text-sm opacity-80 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                View projects
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <button
            onClick={handlePhoneClick}
            className={`group flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 hover:bg-gray-750 text-purple-400"
                : "border-gray-300 bg-white hover:bg-gray-50 text-purple-600"
            }`}
            aria-label="Call Phone"
          >
            <div
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-purple-500/20 group-hover:bg-purple-500/30"
                  : "bg-purple-100 group-hover:bg-purple-200"
              }`}
            >
              <Phone className="w-6 h-6 group-hover:animate-bounce" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Phone</p>
              <p
                className={`text-sm opacity-80 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                } truncate max-w-xs`}
              >
                0945462376
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div
        className={`absolute top-10 right-10 w-32 h-32 rounded-full opacity-10 ${
          isDark ? "bg-blue-500" : "bg-blue-300"
        }`}
      ></div>
      <div
        className={`absolute bottom-10 left-10 w-24 h-24 rounded-full opacity-10 ${
          isDark ? "bg-purple-500" : "bg-purple-300"
        }`}
      ></div>
    </section>
  );
};

export default ContactSection;
