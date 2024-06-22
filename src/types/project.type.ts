import { Technology } from '@/enums/technology.enum';

export type Project = {
  name: string;
  description: string;
  technologies: Array<Technology>;
  githubUrl: string;
};
