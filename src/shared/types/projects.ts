export interface Project {
  _id: string;
  name: string;
  comagicURL: string;
  url: string;
  blockId: number;
  cdnUrl: string;
  __v: number;
  isr: boolean;
}

export interface IProjectData {
  _id: string;
  header: string[];
  fileUrl: string[];
  mimeType: string[];
  link: string;
  description: string[];
  slug: string;
  project: Project;
  jsonData: any[];
  __v: number;
}
