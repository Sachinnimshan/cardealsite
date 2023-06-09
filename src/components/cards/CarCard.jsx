import React from "react";
import { CarCardContainer, FeaturedTag } from "./cards.styled";
import CarImage from "./CarImage";
import CarInformation from "./CarInformation";

function CarCard({
  data,
  mobile,
  topRadius = true,
  small = true,
  border,
  cardView = true,
  zoom = true,
  shrink,
  ...props
}) {
  return (
    <CarCardContainer to={`/cars/${data?.id}`} border={border} shrink={shrink}>
      {data.featured && <FeaturedTag>Featured</FeaturedTag>}
      <CarImage
        images={data.images}
        topRadius={topRadius}
        small={small}
        cardView={cardView}
        zoom={zoom}
      />
      <CarInformation data={data} {...props} />
    </CarCardContainer>
  );
}

export default CarCard;
