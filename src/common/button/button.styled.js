import styled from "@emotion/styled";
import { PRIMARY_ORANGE, PRIMARY_WHITE, WEIGHT_400 } from "../../themes/common";

export const ButtonContainer = styled("span")`
  background-color: ${(props) => props.bgrColor || PRIMARY_ORANGE};
  color: ${(props) => props.color || PRIMARY_WHITE};
  font-size: 14px;
  flex: 1;
  font-weight: ${WEIGHT_400};
  cursor: pointer;
  padding: 0.75rem;
  text-align: center;
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  white-space: nowrap;
  border: ${(props) => props.border || "none"};
  align-items: center;
  max-width: ${(props) => props.maxWidth};
  &:hover {
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
    background-color: ${(props) => props.hoverBgColor};
    opacity: ${(props) => props.hover && "0.9"};
    transition: all ease-in-out 0.2s;
  }
`;
