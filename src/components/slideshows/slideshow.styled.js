import styled from "@emotion/styled";
import { BORDER_RADIUS, PRIMARY_BLACK } from "../../themes/common";

export const MainCarouselContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const CarouselContainer = styled("div")`
  position: relative;
  display: flex;
`;

export const CarouselBody = styled("div")`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselWrapper = styled("div")`
  display: flex;
  flex: 1;
  gap: 0.5rem;
  transition: all 0.5s linear;
  transform: ${(props) =>
    `translateX(-${props.currentIndex * (100 / props.showCount)}%)`};
`;

////////////////////////////////Carousel/////////////////////////////////////////////