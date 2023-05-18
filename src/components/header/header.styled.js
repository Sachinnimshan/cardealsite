import styled from "@emotion/styled";
import {
  FONT_DARK,
  FONT_LIGHT,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_400,
  WEIGHT_500,
} from "../../themes/common";

export const HeaderContainer = styled("div")`
  position: ${(props) => (props.mobile ? "relative" : "fixed")};
  left: 0;
  right: 0;
  top: 0;
  background-color: ${(props) =>
    (props.scrolledDown && PRIMARY_WHITE) || "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  box-shadow: ${(props) =>
    props.scrolledDown &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
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
