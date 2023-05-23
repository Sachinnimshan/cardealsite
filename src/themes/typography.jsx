import styled from "@emotion/styled";
import {
  FONT_LIGHT,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  WEIGHT_400,
  WEIGHT_700,
} from "./common";

export const SectionHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SectionHeaderColumn = styled("div")`
  display: flex;
  flex-direction: ${(props) => props.column && "column"};
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
`;

export const SectionBottom = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

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

export const SectionSubTitle = styled("span")`
  font-size: calc(1rem + 0.4vw);
  color: ${PRIMARY_ORANGE};
  font-weight: ${WEIGHT_400};
`;

export const TextView = styled("span")`
  font-size: ${(props) => `calc(0.875rem + ${props.size}vw)`};
  font-weight: ${(props) => props.weight || WEIGHT_400};
  color: ${(props) => props.color || FONT_LIGHT};
  line-height: 1.8rem;
  text-align: justify;
  white-space: ${(props) => props.nowrap && "nowrap"};
  text-transform: ${(props) => props.transform || "capitalize"};
`;
