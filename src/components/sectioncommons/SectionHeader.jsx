import React from "react";
import {
  PRIMARY_ORANGE,
  SECONDARY_BLACK,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import { FlexContainer } from "../../themes/Layouts.styled";

function SectionHeader({ subTitle, title, children, mobile }) {
  return (
    <FlexContainer
      flexwrap
      gap={1}
      alignX={mobile ? "center" : "space-between"}
      margin="0 0 2rem 0"
    >
      <FlexContainer direction="column" alignY={mobile && "center"}>
        {subTitle && (
          <TextView size={0.75} color={PRIMARY_ORANGE}>
            {subTitle}
          </TextView>
        )}
        {title && (
          <TextView size={2} color={SECONDARY_BLACK} weight={WEIGHT_700}>
            {title}
          </TextView>
        )}
      </FlexContainer>
      {children}
    </FlexContainer>
  );
}

export default SectionHeader;
