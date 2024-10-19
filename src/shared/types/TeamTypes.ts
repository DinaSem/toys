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

export interface ITeamItemDataType {
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

export interface ITeamItemType extends ITeamItemDataType {
  name: string;
}

export interface ITeamDataType {
  _id: string;
  name: string[];
  project: Project;
  slug: string;
  items: ITeamItemType[];
  __v: number;
}

export interface ITeamInfoType {
  title: string;
  content: string;
  _id: string;
  slug: string;
}
