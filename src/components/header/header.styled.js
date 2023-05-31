import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  FONT_DARK,
  FONT_LIGHT,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_400,
} from "../../themes/common";

export const HeaderDownAnimation = keyframes`
from {
    top: -100%;
  }
  to {
    top: 0%;
  }`;

export const HeaderContainer = styled("div")`
  position: ${(props) => !props.mobile && "fixed"};
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  background-color: ${(props) =>
    (props.scrolledDown && PRIMARY_WHITE) ||
    (props.home &&  "transparent") ||
    PRIMARY_BLACK};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.mobile ? `1.5rem 1rem` : `1.25rem 4rem`)};
  box-shadow: ${(props) =>
    props.scrolledDown &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
  animation-name: ${HeaderDownAnimation};
  animation-duration: 0.75s;
`;

export const NavItem = styled("span")`
  font-weight: ${WEIGHT_400};
  color: ${(props) => (props.scrolledDown ? PRIMARY_BLACK : PRIMARY_WHITE)};
  font-size: 15px;
  display: flex;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: ${PRIMARY_ORANGE};
    transition: all ease-in-out 0.3s;
  }
`;

export const HeaderRight = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  gap: 2rem;
`;

export const Divider = styled("span")`
  color: ${(props) => (props.scrolledDown ? FONT_LIGHT : FONT_DARK)};
`;
