import React, { useEffect, useState } from "react";
import { searchCriterias } from "../../common/data";
import { FlexContainer, GridContainer } from "../../themes/Layouts.styled";
import SelectBox from "../../common/select";
import { GridViewIcon, IconWrapper, ListViewIcon } from "../../icons";
import {
  BG_COLOR_BLUE,
  BORDER_COLOR,
  FONT_LIGHT,
  FONT_SECONDARY,
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
import { AppBanner, AppBannerImg } from "../../images";

function ListView(props) {
  const [listView, setListView] = useState(true);
  const handleChangeView = () => setListView(!listView);

  const views = [<GridViewIcon />, <ListViewIcon />];

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
                color={!listView ? PRIMARY_ORANGE : FONT_LIGHT}
                size="2rem"
                onClick={handleChangeView}
              >
                <GridViewIcon />
              </IconWrapper>
              <IconWrapper
                color={listView ? PRIMARY_ORANGE : FONT_LIGHT}
                size="2rem"
                onClick={handleChangeView}
              >
                <ListViewIcon />
              </IconWrapper>
            </>
          )}
          <SelectBox data={searchCriterias} />
        </FlexContainer>
      </FlexContainer>
      <GridContainer>
        {props.data?.map((item, index) => (
          <CarCard
            key={index}
            data={item}
            bgrColor={PRIMARY_WHITE}
            titleColor={SECONDARY_BLACK}
            priceColor={SECONDARY_BLACK}
            mobile={props.mobile}
            border={BORDER_COLOR}
            borderTop={BORDER_COLOR}
          />
        ))}
      </GridContainer>
    </FlexContainer>
  );
}

export default ListView;
