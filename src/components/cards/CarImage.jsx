import React, { useState } from "react";
import { FlexContainer } from "../../themes/Layouts.styled";
import SlideButtons from "../../common/slidebtn";
import { IconWrapper, ImagesIcon, StarIcon } from "../../icons";
import { BG_COLOR_BLUE } from "../../themes/common";
import { TextView } from "../../themes/typography";
import { CarDetailsImage, ImageCount } from "./cards.styled";

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
      <FlexContainer
        position="relative"
        onMouseEnter={handleShowControlls}
        onMouseLeave={handleHideControlls}
        flex
      >
        <CarDetailsImage
          src={props?.images && props?.images[imageIndex]}
          topRadius={props.topRadius}
          small={props.small}
          zoom={props.zoom}
        />
        {showControlls &&
          props.showControlls &&
          props.images &&
          props.images?.length > 1 && (
            <SlideButtons
              position="absolute"
              width="100%"
              alignX="space-between"
              size={props.mobile ? "0.75rem" : "1.25rem"}
              top="40%"
              onClickNext={handleNext}
              onClickPrevious={handlePrevious}
              showNext
              showPrevious
            />
          )}
        <ImageCount>
          <IconWrapper
            color={BG_COLOR_BLUE}
            size={props.small ? "1.1rem" : "1.5rem"}
            padding="0.75rem"
          >
            <StarIcon />
          </IconWrapper>
          {props.images && props.images.length > 1 && (
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
          )}
        </ImageCount>
      </FlexContainer>
      {props.slideView && (
        <FlexContainer flex gap={0.25} overflowX>
          {props.images?.length > 1 &&
            props.images?.map((item, index) => (
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
