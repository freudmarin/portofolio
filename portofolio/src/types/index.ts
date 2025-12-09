// Portfolio app types

export type Project = {
  title: string;
  description: string;
  image?: string;
  links: { label: string; url: string }[];
  tags: string[];
  type: 'main' | 'frontend-learning' | 'fullstack';
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type Skill = {
  name: string;
  level: number; // 1-100
  icon?: string;
};