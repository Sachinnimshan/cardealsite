import React from "react";
import { useState } from "react";
import CarCard from "../cards/CarCard";
import { PRIMARY_ORANGE } from "../../themes/common";
import Button from "../../common/button";
import { FlexContainer } from "../../themes/Layouts.styled";
import ButtonLink from "../../common/link";
import SlideButtons from "../../common/slidebtn";

function SlideShow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  return (
    <FlexContainer direction="column">
      <FlexContainer gap={0.5} overflowX>
        {props.data?.map((item, index) => (
          <CarCard key={index} data={item} mobile={props.mobile} />
        ))}
      </FlexContainer>
      <FlexContainer alignX="space-between" flex margin="1rem 0">
        <SlideButtons showNext showPrevious/>
        <ButtonLink to="/search">
          <Button bgrColor={PRIMARY_ORANGE} text="Load More" maxWidth />
        </ButtonLink>
      </FlexContainer>
    </FlexContainer>
  );
}

export default SlideShow;
