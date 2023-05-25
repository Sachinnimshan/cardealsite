import React from "react";
import CarCard from "../../components/cards/CarCard";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";
import { PRIMARY_ORANGE } from "../../themes/common";
import Button from "../button";
import { FlexContainer } from "../Layouts.styled";
import { SlideController } from "./slideshow.styled";

function SlideShow(props) {
  return (
    <FlexContainer direction="column">
      <FlexContainer gap={1} overflowX>
        {props.data?.map((item, index) => (
          <CarCard
            key={index}
            images={item?.images}
            title={item?.title}
            price={item?.price}
            year={item?.year}
            fuel={item?.fuel}
            transmission={item?.transmission}
            mobile={props.mobile}
            id={item?.id}
          />
        ))}
      </FlexContainer>
      <FlexContainer alignX="space-between" flex margin="1rem 0">
        <FlexContainer alignY="center" gap={1}>
          <SlideController>
            <ArrowLeftIcon />
          </SlideController>
          <SlideController>
            <ArrowRightIcon />
          </SlideController>
        </FlexContainer>
        <Button bgrColor={PRIMARY_ORANGE} text="Load More" maxWidth />
      </FlexContainer>
    </FlexContainer>
  );
}

export default SlideShow;
