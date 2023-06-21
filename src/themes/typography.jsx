import styled from "@emotion/styled";
import { BORDER_RADIUS, SECONDARY_BLACK, WEIGHT_400 } from "./common";

export const TextView = styled("span")`
  font-size: ${(props) => `calc(0.87rem + ${props.size}vw)`};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  color: ${(props) => props.color || SECONDARY_BLACK};
  line-height: ${(props) => `calc(2rem + ${props.lineHeight}vw)`};
  text-align: ${(props) => props.align || "justify"};
  white-space: ${(props) => props.nowrap && "nowrap"};
  text-transform: ${(props) => props.transform || "capitalize"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.fullWidth && "100%"};
  align-self: ${(props) => props.alignY && "center"};
  justify-self: ${(props) => props.alignX && "center"};
  overflow-x: ${(props) => props.overflowX && "scroll"};
  display: flex;
  height: fit-content;
  flex: ${(props) => props.flex};
  text-decoration: ${(props) => props.underline && "underline"};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgColor};
    opacity: ${(props) => props.hover && "0.9"};
    transition: all ease-in-out 0.2s;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
