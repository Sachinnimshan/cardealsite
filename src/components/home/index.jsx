import React from "react";
import { carTypes } from "../../common/data";
import { FlexContainer } from "../../themes/Layouts.styled";
import ButtonLink from "../../common/link";
import { CarIcon, IconWrapper } from "../../icons";
import {
  PADDING_MOBILE,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import SearchBox from "./SearchBox";
import { CarType } from "../../images";

function Home(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : "6rem 4rem"}
      bgrColor={PRIMARY_BLACK}
      position="relative"
      flex
      direction="column"
      alignY={!props.mobile && "center"}
      gap={props.mobile ? 1 : 3}
      background
    >
      <TextView
        size={4}
        weight={WEIGHT_700}
        color={PRIMARY_WHITE}
        lineHeight={4}
        alignY
      >
        Find Your{"  "}
        <TextView
          color={PRIMARY_ORANGE}
          size={4}
          weight={WEIGHT_700}
          padding="0 0.5rem"
          transform="uppercase"
        >
          Dream
        </TextView>
        {"  "}
        Car
      </TextView>
      <SearchBox mobile={props.mobile} />
      <FlexContainer flex flexwrap gap={1} alignX="center">
        {carTypes?.map((item, index) => (
          <ButtonLink to="/search">
            <FlexContainer
              direction="column"
              gap={1}
              alignY="center"
              width="80px"
            >
              <IconWrapper
                color={PRIMARY_WHITE}
                size="1.75rem"
                border
                radius
                padding
                hoverBorder
              >
                <CarIcon/>
              </IconWrapper>
              <TextView key={index} color={PRIMARY_WHITE} size={0.01}>
                {item?.name}
              </TextView>
            </FlexContainer>
          </ButtonLink>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Home;
