import styled from "@emotion/styled";
import {
  BORDER_RADIUS,
  FONT_LIGHT,
  PRIMARY_BLACK,
  WEIGHT_400,
  WEIGHT_700,
} from "./common";

export const SectionTitle = styled("span")`
  font-size: calc(1rem + 2.25vw);
  color: ${(props) => props.color || PRIMARY_BLACK};
  font-weight: ${WEIGHT_700};
`;

export const SectionText = styled("span")`
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || FONT_LIGHT};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  line-height: 1.75rem;
  text-align: justify;
`;

export const TextView = styled("span")`
  font-size: ${(props) => `calc(0.875rem + ${props.size}vw)`};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  color: ${(props) => props.color || FONT_LIGHT};
  line-height: ${(props) => `calc(2rem + ${props.lineHeight}vw)`};
  text-align: ${(props) => props.align || "justify"};
  white-space: ${(props) => props.nowrap && "nowrap"};
  text-transform: ${(props) => props.transform || "capitalize"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.fullWidth && "100%"};
  display: flex;
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgColor};
    opacity: ${(props) => props.hover && "0.9"};
    transition: all ease-in-out 0.2s;
  }
`;

