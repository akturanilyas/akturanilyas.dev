import type {Technology} from "../enums/technology.enum.ts";

export type Project = {
  name: string;
  description: string;
  technologies: Array<Technology>;
  githubUrl: string;
};
