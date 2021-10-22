import { IconType } from "@hudoro/neron";

export interface IMenu {
  id: number;
  title: string;
  iconName: IconType;
  path: string;
}

export interface IMenuItem {
  id: number;
  title: string;
  menus: IMenu[];
}
