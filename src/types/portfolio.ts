export interface Social {
  github?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  website?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: number;
  bio: string;
  avatarSvg: string;
  avatarImage?: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: number;
  link?: string;
  github?: string;
  image?: string;
  highlight: boolean;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface Blog {
  slug: string;
  title: string;
  date: string;
  summary: string;
  link: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: {
    categories: SkillCategory[];
  };
  experience: Experience[];
  projects: Project[];
  education: Education[];
  achievements: Achievement[];
  blogs: Blog[];
}
