import { colors, Grid, Text } from "@hudoro/neron";
import styled, { css } from "styled-components";

interface IProps {
  isActive: boolean;
}

export const Wrapper = styled.div<IProps>`
  min-height: 100vh;
  background-color: ${colors.primary[100]};
  width: ${(props) => (props.isActive ? "200px" : "56px")};
  overflow: hidden;
  transition: 0.5s;
  @media (max-width: 768px) {
    width: 200px;
    position: fixed;
    top: 64px;
    bottom: 0;
    left: 0;
    transform: ${(props) =>
      props.isActive ? "translateX(0)" : "translateX(-100%)"};
    z-index: 99;
  }
`;

export const StyledText = styled(Text)`
  color: white;
  padding-left: 20px;
  transition: 0.5s;
  opacity: 1;
  ${(props: IProps) =>
    !props.isActive &&
    css`
      opacity: 0;
    `}
`;

export const MenuItemGroupWrapper = styled(Grid)`
  gap: 10px;
  transition: 0.3s;
  transition-delay: 0.2s;
  &:not(:first-child) {
    ${(props: IProps) =>
      !props.isActive &&
      css`
        border-top: 2px solid white;
      `}
  }
`;

export const MenuItemWrapper = styled(Grid)`
  gap: 20px;
  padding: 10px 0 10px 20px;
  cursor: pointer;
  flex-wrap: nowrap;
`;
