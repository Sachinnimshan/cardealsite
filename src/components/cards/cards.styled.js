import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  BORDER_RADIUS,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
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

export const FeaturedTag = styled("span")`
  background-color: ${PRIMARY_ORANGE};
  color: ${PRIMARY_WHITE};
  font-size: 14px;
  font-weight: ${WEIGHT_500};
  position: absolute;
  padding: 0.5rem 1rem;
  text-align: center;
  z-index: 90000;
  overflow: hidden;
`;

export const ImageCount = styled("div")`
  display: flex;
  z-index: 5000;
  position: absolute;
  bottom: 0;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

