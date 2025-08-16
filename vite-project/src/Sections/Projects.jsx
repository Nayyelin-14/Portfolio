import { useState } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  X,
  Eye,
  Calendar,
  Tag,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "../assets/Data";
import { ImageSlider } from "../components/ImageSlider";

export const ProjectsSection = ({ isDark, visibleElements }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = portfolioData.projects.filter(
    (project) => project.featured
  );

  console.log(featuredProjects);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };
  console.log(selectedProject);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section
        id="projects"
        className={`py-16 relative ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-20 right-10 w-32 h-32 rounded-full opacity-5 ${
              isDark ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <div
            className={`absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-5 ${
              isDark ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="projects-content"
            data-animate
            className={`transition-all duration-1000 delay-200 ${
              visibleElements.has("projects-content")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Here are some of my recent works that showcase my skills and
                passion for development
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 md:h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Overlay on hover (desktop only) */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex gap-3">
                        <button
                          onClick={() => openModal(project)}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group/btn"
                          aria-label="View project details"
                          title="Check more"
                        >
                          <Eye className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform cursor-pointer" />
                        </button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View GitHub repository"
                            title="Go to github"
                          >
                            <Github className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className=" p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors group/btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                            title="View live project"
                          >
                            <ExternalLink className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project status badge */}
                    {project.status && (
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "completed"
                            ? "bg-green-500 text-white"
                            : project.status === "in-progress"
                            ? "bg-yellow-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {project.status.replace("-", " ").toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className={`text-xl font-bold group-hover:text-blue-500 transition-colors ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {project.year && (
                        <span
                          className={`text-sm flex items-center gap-1 ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description ||
                        "A showcase of modern web development techniques and best practices."}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        ?.slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 text-xs rounded-full ${
                              isDark
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies?.length > 3 && (
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            isDark
                              ? "bg-blue-900/50 text-blue-300"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Mobile Action Buttons (always visible on small screens) */}
                    <div className="flex gap-2 mt-4 md:hidden">
                      <button
                        onClick={() => openModal(project)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                        aria-label="View project details"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Details</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Link */}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-50 p-2 rounded-full transition-colors ${
                isDark
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header Image */}
            <ImageSlider
              images={selectedProject.details}
              title={selectedProject.title}
            />

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  About This Project
                </h4>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedProject.description ||
                    selectedProject.longDescription ||
                    "A detailed description of this project showcasing modern development practices and innovative solutions."}
                </p>
              </div>

              {/* Technologies */}
              {selectedProject.technologies && (
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedProject.features && (
                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul
                    className={`space-y-2 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Demo</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
