import React from "react";
import { CarCardImage, CardContainer, FeaturedTag } from "./cards.styled";
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
      {...props}
    >
      {data.featured && <FeaturedTag>Featured</FeaturedTag>}
      <CarCardImage src={data?.images[0]} />
      <CarInformation data={data} {...props} />
    </CardContainer>
  );
}

export default CarCard;
