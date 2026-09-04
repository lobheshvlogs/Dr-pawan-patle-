export interface Profile {
  name: string;
  professionalTitle: string;
  degreeBadge: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  currentYear: string;
  degree: string;
  institution: string;
  university: string;
  location: string;
  email: string;
  linkedin: string;
  instagram?: string;
  researchGate?: string;
  twitter?: string;
  portraitImage: string;
  heroStatement: string;
  coreInterests: string[];
  futureGoals: {
    title: string;
    description: string;
    focusAreas: string[];
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hospital Postings' | 'College Campus' | 'Seminars & CME' | 'Workshops' | 'Medical Events';
  imageUrl: string;
  date: string;
  location: string;
  caption: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  university: string;
  startYear: string;
  expectedGraduation: string;
  currentYear: string;
  location: string;
  honors?: string;
  coreSubjects: string[];
  description: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  status: 'Ongoing' | 'Under Peer Review' | 'Symposium Presentation' | 'Student Working Paper';
  abstract: string;
  methodology: string;
  keywords: string[];
  authorList: string;
  journalOrSymposium?: string;
  findingsBrief: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string[];
  category: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  featured?: boolean;
  tableOfContents?: { id: string; title: string }[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  category: 'Clinical Exposure' | 'Academic Workshop' | 'Conference & Symposium' | 'Community Health Camp' | 'Student Leadership';
  date: string;
  location: string;
  description: string;
  whatILearned: string[];
  skillsLearned: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  approach: string;
  outcome: string;
  skills: string[];
  tools: string[];
  image: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Academic Honor' | 'Presentation' | 'Competition' | 'Leadership Recognition';
  description: string;
  tier: 'Gold' | 'Distinction' | 'Merit';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  previewUrl: string;
  verified: boolean;
  skillsHighlighted: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  status: 'Completed' | 'Current Focus' | 'Upcoming Milestone';
  summary: string;
  keyHighlights: string[];
}
