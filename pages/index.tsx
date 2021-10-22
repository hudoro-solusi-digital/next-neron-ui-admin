import type { NextPage } from "next";
import Layout from "../src";
import { IMenuItem } from "../src/utils/interfaces";

export const menuItems: IMenuItem[] = [
  {
    title: "Management",
    id: 1,
    menus: [
      {
        title: "Users",
        iconName: "IcUser",
        id: 1,
        path: "/users/pending",
      },
      {
        title: "Aktivitas",
        iconName: "IcHistory",
        id: 2,
        path: "/logs",
      },
    ],
  },
  {
    title: "Requests",
    id: 2,
    menus: [
      {
        title: "Top up",
        iconName: "IcWallet",
        id: 3,
        path: "/topup",
      },
      {
        title: "Pencairan",
        iconName: "IcDollar",
        id: 4,
        path: "/withdraw",
      },
    ],
  },
  {
    title: "Aksi",
    id: 3,
    menus: [
      {
        title: "Keluar",
        iconName: "IcLogout",
        id: 5,
        path: "/signin",
      },
    ],
  },
];

const Home: NextPage = () => {
  return <Layout sidebarMenuItems={menuItems}>Hoho</Layout>;
};

export default Home;
