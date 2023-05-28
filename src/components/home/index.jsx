import React from "react";
import Button from "../../common/button";
import { FlexContainer } from "../../common/Layouts.styled";
import { HomeBanner, HomeImg } from "../../images";
import {
  FONT_SECONDARY,
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import SearchBox from "./SearchBox";

function Home(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : "6rem 4rem"}
      bgrColor={PRIMARY_BLACK}
      position="relative"
      flex
      alignX="center"
    >
      <FlexContainer
        alignX={props.mobile ? "center" : "space-between"}
        flex
        flexwrap
        gap={2}
      >
        <FlexContainer
          direction="column"
          gap={1}
          alignY={props.mobile && "center"}
        >
          <TextView
            size={4}
            weight={WEIGHT_700}
            color={PRIMARY_WHITE}
            lineHeight={4}
          >
            Find your {!props.mobile && <br />} dream car
          </TextView>
          <TextView
            size={0.05}
            color={FONT_SECONDARY}
            lineHeight={0.05}
            align={props.mobile && "center"}
          >
            We can help you find the best car. Check our reviews,{" "}
            {!props.mobile && <br />} compare models and find cars for sale.
          </TextView>
          {!props.mobile && <Button text="About Us" maxWidth="125px" />}
        </FlexContainer>
        <SearchBox />
      </FlexContainer>
      <HomeBanner src={HomeImg} alt="Silver Benz car" mobile={props.mobile} />
    </FlexContainer>
  );
}

export default Home;
