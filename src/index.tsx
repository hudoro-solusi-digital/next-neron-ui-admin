import { ReactNode, useState } from "react";
import { Grid } from "@hudoro/neron";
import { IMenuItem } from "./utils/interfaces";
import TopNav from "./components/organisms/TopNav";
import Sidebar from "./components/organisms/Sidebar";
import { ContentWrapper, TopNavWrapper } from "./styles";

interface IProps {
  children: ReactNode;
  sidebarMenuItems: IMenuItem[];
}

function Layout({ children, sidebarMenuItems }: IProps) {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  return (
    <Grid container style={{ backgroundColor: "white" }}>
      <Sidebar menuItems={sidebarMenuItems} sidebarState={sidebarState} />
      <TopNavWrapper>
        <TopNav setSidebarState={setSidebarState} />
        <ContentWrapper>{children}</ContentWrapper>
      </TopNavWrapper>
    </Grid>
  );
}

export default Layout;
