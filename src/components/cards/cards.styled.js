import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  BORDER_RADIUS,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  TRANSITION,
  WEIGHT_500,
} from "../../themes/common";

export const CardContainer = styled(Link)`
  text-decoration: none;
  border-radius: ${BORDER_RADIUS};
  flex-grow: ${(props) => props.grow || 1};
  flex-shrink: ${(props) => props.shrink || 1};
  flex-basis: 300px;
  overflow: hidden;
  padding: ${(props) => props.padding};
  position: relative;
  transition: ${TRANSITION};
  display: flex;
  flex-direction: ${(props) => (props.selectedView ? "row" : "column")};
  border: ${(props) => `1px solid ${props.border}`};
`;

export const CarDetailsImage = styled("img")`
  width: 100%;
  height: ${(props) => props.small && "225px"};
  object-fit: cover;
  display: flex;
  overflow: hidden;
  border-radius: ${(props) =>
    props.topRadius ? "0.5rem 0.5rem 0 0" : BORDER_RADIUS};
  border: ${(props) => props.border && "2px solid transparent"};
  border: ${(props) => props.active && `2px solid ${PRIMARY_ORANGE}`};
  transition: ${TRANSITION};

  &:hover {
    opacity: ${(props) => props.hover && 1};
    transition: ${TRANSITION};
    transform: ${(props) => props.zoom && `scale(1.05)`};
    overflow: ${(props) => props.overflowHide && "hidden"};
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
  overflow: hidden;
  opacity: 0.9;
  border-radius: ${BORDER_RADIUS} 0 ${BORDER_RADIUS} 0;
  z-index: 4000;
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
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export const ListViewCardContainer = styled("div")`
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  display: flex;
`;

export const TeamCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: ${(props) => props.grow || 1};
  flex-shrink: ${(props) => props.shrink || 1};
  flex-basis: 300px;
  border-radius: ${BORDER_RADIUS};
  transition: ${TRANSITION};
  overflow: hidden;
`;

export const TeamMemberContainer = styled("div")`
  overflow-x: scroll;
  display: flex;
`;

export const TeamCardImage = styled("img")`
  width: 100%;
`;

export const TeamMemberIconContainer = styled("div")`
  display: flex;
  align-items: center;
  bottom: -8%;
  position: absolute;
  gap: 0.5rem;
  left: 2rem;
`;
