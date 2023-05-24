import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  BG_COLOR,
  BORDER_RADIUS,
  FONT_DARK,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  WEIGHT_400,
  WEIGHT_500,
} from "../../themes/common";

export const CarCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.mobile ? "1" : "20%")};
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  cursor: pointer;
  min-width: 300px;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
`;

export const CarCardImage = styled("img")`
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all ease-in-out 0.3s;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    overflow: hidden;
    transition: all ease-in-out 0.3s;
  }
`;

export const CarCardInfo = styled("div")`
  background-color: ${SECONDARY_BLACK};
  padding: 1rem 1.5rem;
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 500;
`;

export const CarCardInfoBottom = styled("div")`
  padding: 1.5rem 0;
  border-top: 1px solid ${FONT_DARK};
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const CarCardText = styled("span")`
  color: ${(props) => props.color || BG_COLOR};
  border-radius: ${(props) => props.radius || "0.25rem"};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || WEIGHT_400};
`;
