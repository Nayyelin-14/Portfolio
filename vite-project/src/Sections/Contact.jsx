import { Github, Phone, Mail } from "lucide-react"; // make sure Mail is imported
import { portfolioData } from "../assets/Data";

const ContactSection = ({ isDark }) => {
  return (
    <section
      id="contact"
      className={`relative py-24 px-6 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text & call to action */}
        <div className="text-center md:text-left space-y-6">
          <h2
            className={`text-5xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let’s Build Together
          </h2>
          <p
            className={`text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            “A passionate software engineer eager to grow and collaborate. If
            you have any questions, opportunities, or just want to chat, don’t
            hesitate to get in touch — I’m always open to learning and new
            opportunities.”
          </p>
        </div>

        {/* Right side - Contact cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* GitHub Card */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-shadow hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 text-blue-400"
                : "border-gray-300 bg-white text-blue-600"
            }`}
            aria-label="GitHub Profile"
          >
            <Github className="w-10 h-10" />
            <div>
              <p className="font-semibold text-lg">GitHub</p>
            </div>
          </a>

          {/* Phone Card */}
          <button
            className={`flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-shadow hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 text-blue-400"
                : "border-gray-300 bg-white text-blue-600"
            }`}
          >
            <Phone className="w-10 h-10" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-sm opacity-80 truncate max-w-xs">0945462376</p>
            </div>
          </button>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 rounded-xl border p-6 shadow-lg transition-shadow hover:shadow-xl hover:scale-[1.03] ${
              isDark
                ? "border-gray-700 bg-gray-800 text-blue-400"
                : "border-gray-300 bg-white text-blue-600"
            }`}
          >
            <Mail className="w-10 h-10" />
            <div>
              <p className="font-semibold text-lg">Email</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
