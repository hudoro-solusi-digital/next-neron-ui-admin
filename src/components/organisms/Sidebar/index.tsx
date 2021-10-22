import { Grid } from "@hudoro/neron";
import { useRouter } from "next/dist/client/router";
import { IMenuItem } from "../../../utils/interfaces";
import MenuItem from "./MenuItem";
import MenuItemGroup from "./MenuItemGroup";
import { Wrapper } from "./styles";

interface IProps {
  sidebarState: boolean;
  menuItems: IMenuItem[];
}

function Sidebar({ sidebarState, menuItems }: IProps) {
  const router = useRouter();
  const parentPath = router.pathname.split("/")[1];

  return (
    <Wrapper isActive={sidebarState}>
      <Grid
        container
        flexDirection="column"
        gap={20}
        style={{
          marginTop: sidebarState ? "20px" : "0",
          transition: ".5s",
        }}
      >
        {menuItems?.map((menuItem) => (
          <MenuItemGroup
            key={menuItem.id}
            title={menuItem?.title}
            sidebarState={sidebarState}
          >
            {menuItem?.menus?.map((item) => {
              const itemPath = item.path.split("/")[1];
              return (
                <MenuItem
                  href={item.path}
                  title={item?.title}
                  key={item.id}
                  iconName={item.iconName}
                  active={parentPath === itemPath}
                />
              );
            })}
          </MenuItemGroup>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Sidebar;
