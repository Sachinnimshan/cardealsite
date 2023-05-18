import styled from "@emotion/styled";
import { PADDING_DESKTOP, PADDING_MOBILE } from "../../themes/common";

export const FeaturedContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
`;
