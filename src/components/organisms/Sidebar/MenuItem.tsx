import { Icon, IconType, Text } from '@hudoro/neron';
import Link from 'next/link';
import { MenuItemWrapper } from './styles';

interface IProps {
  active?: boolean;
  title: string;
  href: string;
  iconName: IconType;
}

function MenuItem({ active, title, href, iconName }: IProps) {
  return (
    <Link href={href}>
      <MenuItemWrapper
        container
        alignItems="center"
        style={{
          borderLeft: active ? '2px solid white' : 'none',
        }}
      >
        <Icon iconName={iconName} color="white" />
        <Text variant="p" style={{ color: 'white' }}>
          {title}
        </Text>
      </MenuItemWrapper>
    </Link>
  );
}

export default MenuItem;
