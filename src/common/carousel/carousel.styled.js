import styled from "@emotion/styled";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const CarouselContainer = styled("div")`
  position: relative;
  display: flex;
  padding: 0 2rem;
`;

export const CarouselBody = styled("div")`
  overflow: hidden;
`;

export const CarouselWrapper = styled("div")`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${(props) => `calc(100% / ${props.showCount})`};
  //transition: all 0.25s linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  transform: ${(props) =>
    `translateX(-${props.currentIndex * (100 / props.showCount)}%)`};
`;

export const CarouselItem = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;
