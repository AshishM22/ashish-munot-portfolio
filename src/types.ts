import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SectionBadgeProps {
  label: string;
  icon?: LucideIcon;
}

export interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  barClass: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Languages';

export type ProjectCategory = 'All' | 'Customer systems' | 'Operations' | 'Platforms';

export interface ProjectItem {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  bannerLabel: string;
  result: string;
  accent: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  achievements: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
