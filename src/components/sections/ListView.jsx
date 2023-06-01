import React, { useState } from "react";
import { searchCriterias } from "../../common/data";
import { FlexContainer } from "../../themes/Layouts.styled";
import SelectBox from "../../common/select";
import { GridViewIcon, IconWrapper, ListViewIcon } from "../../icons";
import {
  BORDER_COLOR,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  SECONDARY_ORANGE,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import CarCard from "../cards/CarCard";

function ListView(props) {
  const [selectedView, setSelectedView] = useState(false);
  const handleSelectView = () => setSelectedView(!selectedView);

  return (
    <FlexContainer
      direction="column"
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      gap={2}
    >
      <FlexContainer
        alignX="space-between"
        alignY="center"
        gap={0.5}
        flex
        flexwrap
      >
        <TextView color={SECONDARY_BLACK} weight={WEIGHT_700} size={1}>
          100 Results
        </TextView>
        <FlexContainer gap={1}>
          {!props.mobile && (
            <>
              <IconWrapper
                size="2rem"
                color={PRIMARY_ORANGE}
                hoverColor={SECONDARY_ORANGE}
              >
                <GridViewIcon />
              </IconWrapper>
              <IconWrapper
                size="2rem"
                color={PRIMARY_ORANGE}
                hoverColor={SECONDARY_ORANGE}
              >
                <ListViewIcon />
              </IconWrapper>
            </>
          )}
          <SelectBox data={searchCriterias} />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer flex gap={0.75} flexwrap>
        {props.data?.map((item, index) => (
          <CarCard
            key={index}
            data={item}
            bgrColor={PRIMARY_WHITE}
            titleColor={SECONDARY_BLACK}
            priceColor={SECONDARY_BLACK}
            border={BORDER_COLOR}
            borderTop={BORDER_COLOR}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default ListView;
