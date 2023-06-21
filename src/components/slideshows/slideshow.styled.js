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

export const CarouselBody = styled("div")`
  display: flex;
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
`;

////////////////////////////////Carousel/////////////////////////////////////////////
