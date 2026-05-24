// src/hooks/usePortfolioData.ts
import { useState, useEffect } from 'react';
import { profileData, navItems } from '../data/config';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';
import { Profile, NavSection, Education, Experience, Project } from '../types';

export interface UsePortfolioDataReturn {
  profile: Profile;
  navigation: NavSection[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  isLoading: boolean;
}

export const usePortfolioData = (): UsePortfolioDataReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating a brief load state to ensure smooth mounting
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    profile: profileData,
    navigation: navItems,
    education: educationData,
    experience: experienceData,
    projects: projectsData,
    isLoading
  };
};