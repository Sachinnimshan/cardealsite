import styled from "@emotion/styled";
import { BORDER_RADIUS } from "./common";

export const FlexContainer = styled("div")`
  display: flex;
  gap: ${(props) => `${props.gap}rem`};
  align-items: ${(props) => props.alignY};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.alignX};
  border-radius: ${(props) => props.radius && BORDER_RADIUS};
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexwrap && "wrap"};
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex && "1"};
  overflow: ${(props) => props.overflow && "hidden"};
  max-width: ${(props) => props.maxWidth};
  position: ${(props) => props.position};
  border-top: ${(props) => `1px solid ${props.borderTop}`};
  border: ${(props) => props.border && `1px solid ${props.border}`};
  overflow-x: ${(props) => props.overflowX && "scroll"};
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
  width: ${(props) => props.width};

  cursor: ${(props) => props.cursor || "pointer"};
  background: ${(props) =>
    props.background &&
    `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    url("/images/home2.jpg") no-repeat center center`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: ${(props) => props.opacity};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.75rem;
`;
