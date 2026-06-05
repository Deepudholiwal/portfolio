export type ProjectCard = {
  slug: string;
  label: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
};
