import React from "react";
import Carousel from "../../common/carousel";
import { PADDING_DESKTOP, PADDING_MOBILE } from "../../themes/common";
import { FlexContainer } from "../../themes/Layouts.styled";
import { carBrands } from "../../common/data";
import { CarLogo } from "../../images";
import { CarouselItem } from "../../common/carousel/carousel.styled";
function Brands(props) {
  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      direction="column"
    >
      <Carousel mobile={props.mobile}>
        {carBrands?.map((item, index) => (
          <CarouselItem key={index}>
            <CarLogo src={item.logo} />
          </CarouselItem>
        ))}
      </Carousel>
    </FlexContainer>
  );
}

export default Brands;
