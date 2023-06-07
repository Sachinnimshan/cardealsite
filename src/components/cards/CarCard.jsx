import React from "react";
import { CarCardContainer, FeaturedTag } from "./cards.styled";
import CarImage from "./CarImage";
import CarInformation from "./CarInformation";

function CarCard({
  data,
  zoom = true,
  flexValue = "20%",
  topRadius = true,
  selectedView,
  imageWidth = "100%",
  showControlls = true,
  cardPadding = false,
  ...props
}) {
  return (
    <CarCardContainer
      mobile={props.mobile}
      to={`/cars/${data?.id}`}
      border={props.border}
      cardDirection={props.cardDirection}
      flexValue={flexValue}
      padding={cardPadding && "1rem"}
      selectedView={selectedView}
    >
      {data.featured && <FeaturedTag>Featured</FeaturedTag>}
      <CarImage
        images={data.images}
        small
        zoom={zoom}
        topRadius={topRadius}
        carId={data?.id}
        cardView
        smallIcons
        showControlls={showControlls}
        mobile={props.mobile}
        imageWidth={imageWidth}
        {...props}
      />
      <CarInformation data={data} listView={selectedView} {...props} />
    </CarCardContainer>
  );
}

export default CarCard;
