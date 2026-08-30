export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'api' | 'fullstack' | 'collab';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string; // Optional or placeholder
  demoUrl?: string; // Optional or placeholder
  status?: string;
  iconName: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period?: string; // Kept clean if no exact date
  description: string;
  missions: string[];
  technologies: string[];
  type: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  nationality?: string;
  birthDate?: string;
  linkedIn?: string;
  shortBio: string;
  fullBio: string[];
  objectives: string[];
  languages?: LanguageItem[];
  personalQualities?: string[];
  interests?: string[];
  stats: {
    label: string;
    value: string;
  }[];
  socials: {
    platform: string;
    url: string;
    isPlaceholder: boolean;
  }[];
}
