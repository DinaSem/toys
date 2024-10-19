export interface IImageSlide {
  image: string;
  title: {
    text: string;
    descriptions: string[];
  };
}
export interface IPromoCard {
  title: string;
  img: string;
  img_max: string;
  background_desktop: string;
  background_tablet: string;
  background_mobile: string;
  description: string;
  hidden: boolean;
  _id: string;
}

export interface IButton {
  value: string;
  description: string;
  description_2: string;
  path: string;
  highlight: boolean;
  hide: boolean;
  targetBlank: boolean;
  items: [];
  id: number;
}
