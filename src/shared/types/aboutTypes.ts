export interface ITitle {
  text: string;
  descriptions: string[];
}

export interface ISlide {
  image: string;
  title: ITitle;
}

export interface IAboutManePage {
  _id: string;
  title: string;
  key: [];
  bucket: [];
  mime: [];
  size: [];
  slug: string;
  slide: ISlide[];
  descriptions: string[];
  __v: number;
  fullUrl: string;
  absolutePath: string[];
}
