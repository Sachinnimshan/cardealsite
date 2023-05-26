import styled from "@emotion/styled";
import {
  BG_COLOR_BLUE,
  FONT_LIGHT,
  PRIMARY_ORANGE,
  WEIGHT_400,
} from "../../themes/common";

export const Tab = styled("span")`
  padding: ${(props) => props.padding};
  font-size: ${(props) => `calc(0.875rem + ${props.size}vw)`};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  color: ${(props) => (props.active && PRIMARY_ORANGE) || props.color};
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  border-top: ${(props) =>
    props.activeTop
      ? `2px solid ${PRIMARY_ORANGE}`
      : `2px solid ${BG_COLOR_BLUE}`};
  border-bottom: ${(props) =>
    props.activeBottom
      ? `1px solid ${PRIMARY_ORANGE}`
      : `1px solid transparent`};
  &:hover {
    color: ${(props) => props.hoverColor || PRIMARY_ORANGE};
    transition: all ease-in-out 0.3s;
  }
`;
