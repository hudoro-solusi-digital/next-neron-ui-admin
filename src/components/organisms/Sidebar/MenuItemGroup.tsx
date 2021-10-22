import { Grid } from '@hudoro/neron';
import { ReactNode } from 'react';
import { MenuItemGroupWrapper, StyledText } from './styles';

interface IProps {
  title: string;
  children: ReactNode;
  sidebarState: boolean;
}

function MenuItemGroup({ title, children, sidebarState }: IProps) {
  return (
    <MenuItemGroupWrapper
      container
      flexDirection="column"
      isActive={sidebarState}
    >
      <StyledText variant="p" isActive={sidebarState}>
        {title}
      </StyledText>
      <Grid container flexDirection="column">
        {children}
      </Grid>
    </MenuItemGroupWrapper>
  );
}

export default MenuItemGroup;
