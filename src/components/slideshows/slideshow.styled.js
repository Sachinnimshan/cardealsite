import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { BORDER_RADIUS } from "../../themes/common";

export const MainSlider = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
`;
export const SlideWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 100%;
`;

export const CarouselAnimation = keyframes`
 75%    {transform: translate(-100%)}
  75.01% {transform: translate( 100%)}`;

export const Slides = styled("div")`
  display: ${(props) => props.grid || "flex"};
  grid-auto-flow: column;
  gap: ${(props) => props.gap && "5px"};
  border-radius: ${BORDER_RADIUS};
  grid-auto-columns: ${(props) =>
    props.mobile ? "100%" : `calc(100% / ${props.showCount})`};
  transition: all 0.5s linear;
  /* transform: ${(props) =>
    `translateX(-${props.currentIndex * (100 / props.showCount)}% )`}; */
  cursor: grab;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 5px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

////////////////////////////////Carousel/////////////////////////////////////////////
