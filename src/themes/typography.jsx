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
  line-height: ${(props) => props.lineHeight || "1.8rem"};
  text-align: justify;
  white-space: ${(props) => props.nowrap && "nowrap"};
  text-transform: ${(props) => props.transform || "capitalize"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
`;
