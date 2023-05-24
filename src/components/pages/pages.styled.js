import styled from "@emotion/styled";
import { BORDER_RADIUS } from "../../themes/common";

export const CarDetailsImage = styled("img")`
  max-width: 800px;
  border-radius: ${BORDER_RADIUS};
  width: 100%;
`;

export const BreadCrumbs = styled("span")`
  display: flex;
  margin-top: 3rem;
  padding: 1rem 0;
  gap: 1rem;
`;

