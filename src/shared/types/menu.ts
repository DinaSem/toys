export interface IMenuFooterItem {
  highlight: boolean;
  hide: boolean;
  targetBlank: boolean;
  items: any[];
  value: string;
  path: string;
  id: number;
}
export interface IFooterData {
  footerMenuLeft: IFooterMenuData | null;
  footerMenuRight: IFooterMenuData | null;
}

export interface IFooterMenuData {
  _id: string;
  name: string;
  title: string;
  __v: number;
  menuItems: IMenuFooterItem[];
}
