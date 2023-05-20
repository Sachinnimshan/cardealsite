import React from "react";
import CarCard from "../../components/cards/CarCard";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";
import { PRIMARY_ORANGE } from "../../themes/common";
import { SectionBottom } from "../../themes/typography";
import Button from "../button";
import { SlideContainer, SlideController, SlideControls, SlideShowContainer } from "./slideshow.styled";

function SlideShow(props) {
  return (
    <SlideShowContainer>
      <SlideContainer>
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
          />
        ))}
      </SlideContainer>
      <SectionBottom>
        <SlideControls>
          <SlideController>
            <ArrowLeftIcon />
          </SlideController>
          <SlideController>
            <ArrowRightIcon />
          </SlideController>
        </SlideControls>
        <Button bgrColor={PRIMARY_ORANGE} text="Load More" maxWidth />
      </SectionBottom>
    </SlideShowContainer>
  );
}

export default SlideShow;
