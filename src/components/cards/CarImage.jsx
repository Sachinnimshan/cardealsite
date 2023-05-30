import React, { useState } from "react";
import { FlexContainer } from "../../common/Layouts.styled";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  IconWrapper,
  ImagesIcon,
  StarIcon,
} from "../../icons";
import { CarDetailsImage } from "../../images";
import {
  BG_COLOR_BLUE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import { ImageCount } from "./cards.styled";

function CarImage(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [showControlls, setShowControlls] = useState(false);

  const handleShowControlls = () => setShowControlls(true);
  const handleHideControlls = () => setShowControlls(false);

  const handleNext = () => {
    setImageIndex(imageIndex === props.images?.length - 1 ? 0 : imageIndex + 1);
  };

  const handlePrevious = () => {
    setImageIndex(imageIndex === 0 ? props.images?.length - 1 : imageIndex - 1);
  };

  const handleChangeIndex = (index) => setImageIndex(index);

  return (
    <FlexContainer direction="column" gap={1} flex>
      <FlexContainer position="relative" flex>
        <CarDetailsImage
          src={props?.images && props?.images[imageIndex]}
          small={props.small}
          topRadius={props.topRadius}
          zoom={props.zoom}
          overflowHide
          onMouseEnter={handleShowControlls}
          onMouseLeave={handleHideControlls}
        />
        { (
          <FlexContainer
            position="absolute"
            top="45%"
            width="100%"
            alignX="space-between"
          >
            <IconWrapper
              color={SECONDARY_BLACK}
              bgrColor={PRIMARY_WHITE}
              padding
              radius
              onClick={handlePrevious}
            >
              <ArrowLeftIcon />
            </IconWrapper>
            <IconWrapper
              color={SECONDARY_BLACK}
              bgrColor={PRIMARY_WHITE}
              padding
              radius
              onClick={handleNext}
            >
              <ArrowRightIcon />
            </IconWrapper>
          </FlexContainer>
        )}
        <ImageCount>
          <IconWrapper
            color={BG_COLOR_BLUE}
            size={props.small ? "1.1rem" : "1.5rem"}
            padding="0.75rem"
          >
            <StarIcon />
          </IconWrapper>
          <FlexContainer gap={0.5} alignY="center" padding="0.75rem">
            <IconWrapper
              color={BG_COLOR_BLUE}
              size={props.small ? "1.1rem" : "1.5rem"}
            >
              <ImagesIcon />
            </IconWrapper>
            <TextView color={BG_COLOR_BLUE} size={props.small ? 0.01 : 0.5}>
              {props.images &&
                (props.cardView
                  ? props.images.length
                  : `${imageIndex === 0 ? 1 : imageIndex + 1}/${
                      props.images.length
                    }`)}
            </TextView>
          </FlexContainer>
        </ImageCount>
      </FlexContainer>
      {props.slideView && (
        <FlexContainer flex gap={0.25} overflowX>
          {props.images?.map((item, index) => (
            <CarDetailsImage
              key={index}
              src={item}
              fade={imageIndex !== index}
              active={imageIndex === index}
              onClick={() => handleChangeIndex(index)}
              maxWidth="125px"
              height="100px"
              hover={props.hover}
              border
            />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
}

export default CarImage;
