export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  details: string[];
  status?: "completed" | "in-progress" | "planned";
}

export interface Experience {
  id: number;
  company: string;
  companyUrl?: string;
  role: string;
  type: string;
  location: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Certificate {
  id: number;
  title: string;
  provider: string;
  instructor: string;
  instructorBio: string;
  date: {
    start: string;
    end?: string;
  };
  image: string;
  description: string;
  techStack: string[];
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    profileImg: string;
    resumeLink: string;
    tagline: string;
    email: string;
    location: string;
    github: string;
    linkedin?: string;
    bio: string;
  };
  skills: {
    allSkills: string[];
  };
  experience: Experience[];
  projects: Project[];
}
