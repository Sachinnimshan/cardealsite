import styled from "@emotion/styled";
import {
  BG_COLOR,
  FONT_DARK,
  PRIMARY_ORANGE,
  WEIGHT_400,
  WEIGHT_500,
} from "../../themes/common";

export const TabContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled("div")`
  padding: 0.75rem;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  min-width: 100px;
  transition: all ease-in-out 0.2s;
  background-color: ${(props) => (props.active ? "#FEF1EB" : BG_COLOR)};
  border: ${(props) =>
    props.active ? `1px solid ${PRIMARY_ORANGE}` : `1px solid transparent`};
`;

export const TabText = styled("span")`
  font-weight: ${WEIGHT_400};
  color: ${(props) => (props.active && PRIMARY_ORANGE || props.color)};
  font-size: ${(props) => props.fontSize};
  white-space: nowrap;
  text-align: center;
`;
