import { IImageSlide } from '@/shared/types/sliders';
export interface IDescription {
  description: string;
}

export interface IMainLifestyleIcons {
  _id: string;
  title: string;
  slide: IImageSlide[];
  key: string[];
  bucket: string[];
  mime: string[];
  size: number[];
  descriptions: IDescription[];
  slug: string;
  __v: number;
  fullUrl: string;
  absolutePath: string[];
}
export interface IIcon {
  title: {
    text: string;
  };
}
