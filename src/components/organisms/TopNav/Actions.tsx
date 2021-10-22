import { Avatar, Grid, Icon, Text } from "@hudoro/neron";

interface IProps {
  profileImage?: string;
}

function Actions({ profileImage }: IProps) {
  return (
    <Grid container alignItems="center" gap={20}>
      <Icon iconName="IcNotification" />
      <Icon iconName="IcSettings" />
      <Grid
        container
        alignItems="center"
        gap={10}
        style={{ cursor: "pointer" }}
      >
        <Avatar size="s" src={profileImage} />
        <Text variant="p">Neron Hydor</Text>
      </Grid>
    </Grid>
  );
}

export default Actions;
