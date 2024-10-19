export interface IRiverfrontItem {
  _id: string;
  title: string;
  img: string;
  img_max: string;
  background_desktop: string;
  background_tablet: string;
  background_mobile: string;
  description: string;
  hidden: boolean;
}

export interface IRiverfrontData {
  _id: string;
  name: string[];
  slug: string;
  items: IRiverfrontItem[];
}
