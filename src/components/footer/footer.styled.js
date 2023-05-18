import styled from "@emotion/styled";
import { PADDING_DESKTOP, PADDING_MOBILE, PRIMARY_BLACK } from "../../themes/common";

export const FooterContainer = styled("div")`
  padding: ${(props) => (props.mobile ? PADDING_MOBILE : PADDING_DESKTOP)};
  background-color: ${PRIMARY_BLACK};
`;
