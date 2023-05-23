import styled from "@emotion/styled";
import {
  PRIMARY_ORANGE,
  SECONDARY_ORANGE,
  WEIGHT_400,
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
  border-radius: 5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  min-width: 120px;
  transition: all ease-in-out 0.2s;
  background-color: ${(props) => (props.active ? SECONDARY_ORANGE : props.bgrColor)};
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
