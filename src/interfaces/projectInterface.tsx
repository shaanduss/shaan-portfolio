type ProjectDetail = {
  title: string;
  description: string;
};
export interface ProjectInterface {
  projectID: string;
  projectName: string;
  projectDescription: string;
  projectDate: Date;
  projectDateStr: string;
  numImages: number;
  details?: ProjectDetail[];
  badges?: string[];
  imageLabels?: (string | null)[];
  githubLink?: string;
}
