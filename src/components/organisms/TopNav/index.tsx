import { Grid } from "@hudoro/neron";
import { Dispatch, SetStateAction } from "react";
import Actions from "./Actions";
import Hamburger from "./Hamburger";
import { Wrapper } from "./styles";

interface IProps {
  setSidebarState: Dispatch<SetStateAction<boolean>>;
  profileImage?: string;
}

function TopNav({ setSidebarState, profileImage }: IProps) {
  return (
    <Wrapper id="Header">
      <Grid container justifyContent="space-between" alignItems="center">
        <Hamburger setSidebarState={setSidebarState} />
        <Actions profileImage={profileImage} />
      </Grid>
    </Wrapper>
  );
}

export default TopNav;
