import {
  portfolioProfile,
  educationList,
  researchList,
  articlesList,
  experiencesList,
  projectsList,
  achievementsList,
  certificatesList,
  skillCategoriesList,
  timelineMilestones
} from '../data/portfolioData';

import {
  Profile,
  Education,
  ResearchItem,
  Article,
  Experience,
  Project,
  Achievement,
  Certificate,
  SkillCategory,
  TimelineMilestone
} from '../types';

/**
 * Data Access Layer for Dr. Pawan's Medical Portfolio.
 * Architected to seamlessly integrate with Firebase Firestore in the future.
 */
export const dataService = {
  getProfile: async (): Promise<Profile> => {
    return Promise.resolve(portfolioProfile);
  },

  getEducation: async (): Promise<Education[]> => {
    return Promise.resolve(educationList);
  },

  getResearchList: async (): Promise<ResearchItem[]> => {
    return Promise.resolve(researchList);
  },

  getFeaturedResearch: async (): Promise<ResearchItem[]> => {
    return Promise.resolve(researchList.filter(r => r.featured));
  },

  getResearchBySlug: async (slug: string): Promise<ResearchItem | undefined> => {
    return Promise.resolve(researchList.find(r => r.slug === slug));
  },

  getArticles: async (): Promise<Article[]> => {
    return Promise.resolve(articlesList);
  },

  getFeaturedArticles: async (): Promise<Article[]> => {
    return Promise.resolve(articlesList.filter(a => a.featured));
  },

  getArticleBySlug: async (slug: string): Promise<Article | undefined> => {
    return Promise.resolve(articlesList.find(a => a.slug === slug));
  },

  getExperiences: async (): Promise<Experience[]> => {
    return Promise.resolve(experiencesList);
  },

  getProjects: async (): Promise<Project[]> => {
    return Promise.resolve(projectsList);
  },

  getAchievements: async (): Promise<Achievement[]> => {
    return Promise.resolve(achievementsList);
  },

  getCertificates: async (): Promise<Certificate[]> => {
    return Promise.resolve(certificatesList);
  },

  getSkillCategories: async (): Promise<SkillCategory[]> => {
    return Promise.resolve(skillCategoriesList);
  },

  getTimelineMilestones: async (): Promise<TimelineMilestone[]> => {
    return Promise.resolve(timelineMilestones);
  }
};
