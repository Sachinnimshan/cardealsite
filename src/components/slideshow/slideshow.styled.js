import styled from "@emotion/styled";
import { PRIMARY_WHITE } from "../../themes/common";

export const SlideShowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

export const SlideContainer = styled("div")`
  display: flex;
  overflow-x: scroll;
  gap: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideControls = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const SlideController = styled("div")`
  background-color: ${PRIMARY_WHITE};
  border-radius: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
