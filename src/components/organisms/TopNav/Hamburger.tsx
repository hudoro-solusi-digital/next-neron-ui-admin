import { colors, Grid, Icon } from '@hudoro/neron';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setSidebarState: Dispatch<SetStateAction<boolean>>;
}

function Hamburger({ setSidebarState }: IProps) {
  const handleSidebarToggle = () => {
    setSidebarState((prev) => !prev);
  };
  return (
    <Grid container onClick={handleSidebarToggle} style={{ cursor: 'pointer' }}>
      <Icon iconName="IcHamburger" color={colors.primary[100]} />
    </Grid>
  );
}

export default Hamburger;
