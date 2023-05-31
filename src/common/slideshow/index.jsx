import React from "react";
import CarCard from "../../components/cards/CarCard";
import { ArrowLeftIcon, ArrowRightIcon, IconWrapper } from "../../icons";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../themes/common";
import Button from "../button";
import { FlexContainer } from "../Layouts.styled";
import ButtonLink from "../link";
import { SlideController } from "./slideshow.styled";

function SlideShow(props) {
  return (
    <FlexContainer direction="column">
      <FlexContainer gap={0.75} overflowX>
        {props.data?.map((item, index) => (
          <CarCard key={index} data={item} mobile={props.mobile} />
        ))}
      </FlexContainer>
      <FlexContainer alignX="space-between" flex margin="1rem 0">
        <FlexContainer alignY="center" gap={1}>
          <IconWrapper
            padding
            size="1.25rem"
            bgrColor={PRIMARY_WHITE}
            radius
            shadow
          >
            <ArrowLeftIcon />
          </IconWrapper>
          <IconWrapper
            padding
            size="1.25rem"
            bgrColor={PRIMARY_WHITE}
            radius
            shadow
          >
            <ArrowRightIcon />
          </IconWrapper>
        </FlexContainer>
        <ButtonLink to="/search">
          <Button bgrColor={PRIMARY_ORANGE} text="Load More" maxWidth />
        </ButtonLink>
      </FlexContainer>
    </FlexContainer>
  );
}

export default SlideShow;
