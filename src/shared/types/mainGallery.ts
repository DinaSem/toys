export interface IMainGalleryTab {
  _id: string;
  title: string;
  text: string;
  priority: number;
  fileUrl: string[];
  mimeType: string[];
  descriptions: {
    title: string;
    description: string;
  }[];
  slug: string;
  page: string;
  hide_in_general: boolean;
  absolutePath: string[];
}
