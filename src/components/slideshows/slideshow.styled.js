import styled from "@emotion/styled";

export const CarouselContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselWrapper = styled("div")`
  display:  ${(props) => props.grid || "flex"};
  grid-auto-flow: column;
  grid-auto-columns: ${(props) => `calc(100% / ${props.showCount})`};
  grid-gap: 0.5rem;
  transition: all 0.5s linear;
  transform: ${(props) =>
    `translateX(-${props.currentIndex * (100 / props.showCount)}%)`};
`;

////////////////////////////////Carousel/////////////////////////////////////////////
