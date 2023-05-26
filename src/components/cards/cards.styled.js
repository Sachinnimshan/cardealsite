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
  position: relative;
  cursor: pointer;
  min-width: 300px;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  border: ${(props) => `1px solid ${props.border}`};
`;

export const CarCardImage = styled("img")`
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all ease-in-out 0.3s;
  overflow: hidden;
  max-width: 100%;
  &:hover {
    transform: scale(1.05);
    overflow: hidden;
    transition: all ease-in-out 0.3s;
  }
`;

export const FeaturedTag = styled("span")`
  background-color: ${PRIMARY_ORANGE};
  color: ${PRIMARY_WHITE};
  font-size: 14px;
  font-weight: ${WEIGHT_500};
  position: absolute;
  padding: 0.5rem 1rem;
  text-align: center;
  z-index: 2000;
  overflow: hidden;
`;
