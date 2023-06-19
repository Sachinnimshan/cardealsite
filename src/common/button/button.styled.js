import styled from "@emotion/styled";
import {
  BORDER_RADIUS,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_500,
} from "../../themes/common";

export const ButtonContainer = styled("span")`
  background-color: ${(props) => props.bgrColor || PRIMARY_ORANGE};
  font-size: 15px;
  font-weight: ${(props) => props.weight || WEIGHT_500};
  color: ${(props) => props.color || PRIMARY_WHITE};
  gap: 0.5rem;
  flex: ${(props) => props.flex || 1};
  cursor: pointer;
  display: flex;
  padding: 0.9rem;
  text-align: center;
  height: fit-content;
  transition: all ease-in-out 0.2s;
  border-radius: ${BORDER_RADIUS};
  white-space: nowrap;
  border: ${(props) => props.border && `1.75px solid ${PRIMARY_ORANGE}`};
  align-items: center;
  justify-content: center;
  max-width: ${(props) => props.maxWidth && "150px"};
  &:hover {
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
    background-color: ${(props) => props.hoverBgColor};
    opacity: ${(props) => props.hover && "0.9"};
    transition: all ease-in-out 0.2s;
  }
`;
