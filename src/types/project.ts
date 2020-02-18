export interface Project {
  name: string;
  description: string;
  url: string;
  highlights: string[];
  _id: number;
}

export type Projects = Project[];
