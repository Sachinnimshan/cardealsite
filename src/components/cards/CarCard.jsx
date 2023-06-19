import React from "react";
import { CardContainer, FeaturedTag } from "./cards.styled";
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
    <CardContainer
      to={`/cars/${data?.id}`}
      border={border}
      shrink={shrink}
      className="carcard"
    >
      {data.featured && <FeaturedTag>Featured</FeaturedTag>}
      <CarImage
        images={data.images}
        topRadius={topRadius}
        small={small}
        cardView={cardView}
        zoom={zoom}
      />
      <CarInformation data={data} {...props} />
    </CardContainer>
  );
}

export default CarCard;
