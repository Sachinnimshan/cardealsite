import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../common/button";
import { FlexContainer } from "../../common/Layouts.styled";
import BreadCrumbs from "../../common/sectioncommons/BreadCrumbs";
import SlideShow from "../../common/slideshow";
import {
  CheckOutlinedIcon,
  CircleIcon,
  IconWrapper,
  PhoneIcon,
  WhatsappIcon,
} from "../../icons";
import { CarDetailsImage, HistoryImg, VehicleHistoryImage } from "../../images";
import {
  BG_COLOR_BLUE,
  FONT_DARK,
  FONT_LIGHT,
  FONT_SECONDARY,
  PADDING_DESKTOP,
  PADDING_MOBILE,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
  SECONDARY_ORANGE,
  WEIGHT_400,
  WEIGHT_500,
  WEIGHT_600,
  WEIGHT_700,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import formatCurrency from "../../utils/currency";
import CarImage from "../cards/CarImage";
import ContactForm from "../contact";

function CarDetails(props) {
  const [data, setData] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const { id } = useParams();

  const handleChangeIndex = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    if (id) {
      const response = props.data.find((item, index) => item.id === id);
      setData(response);
    }
  }, [id]);

  return (
    <FlexContainer
      padding={props.mobile ? PADDING_MOBILE : PADDING_DESKTOP}
      direction="column"
      gap={1}
    >
      <BreadCrumbs title={data?.title} mobile={props.mobile} />
      <FlexContainer gap={3} flexwrap>
        <FlexContainer direction={props.mobile && "column"} gap={2} flex>
          <CarImage images={data?.images} slideView hover slideCount />
          <FlexContainer direction="column" gap={0.75} flex>
            <TextView size={1} color={SECONDARY_BLACK} weight={WEIGHT_600}>
              {data?.title}
            </TextView>
            <FlexContainer gap={2}>
              <FlexContainer gap={0.5}>
                <IconWrapper color={PRIMARY_ORANGE} size="12px">
                  <CircleIcon />
                </IconWrapper>
                <TextView size={0.1}>{data?.year}</TextView>
              </FlexContainer>
              <FlexContainer gap={0.5}>
                <IconWrapper color={PRIMARY_ORANGE} size="12px">
                  <CircleIcon />
                </IconWrapper>
                <TextView size={0.1}>{data?.transmission}</TextView>
              </FlexContainer>
              <FlexContainer gap={0.5}>
                <IconWrapper color={PRIMARY_ORANGE} size="12px">
                  <CircleIcon />
                </IconWrapper>
                <TextView size={0.1}>{data?.fuel}</TextView>
              </FlexContainer>
            </FlexContainer>
            <TextView size={1.5} color={PRIMARY_ORANGE} weight={WEIGHT_600}>
              {data?.price && formatCurrency(data?.price)}
            </TextView>
            {data?.keySpecs && (
              <FlexContainer
                radius
                bgrColor={BG_COLOR_BLUE}
                direction="column"
                padding="1rem 2rem"
                gap={0.75}
              >
                {Object.keys(data?.keySpecs)?.map((item, index) => (
                  <FlexContainer key={index}>
                    <TextView
                      weight={WEIGHT_600}
                      size={0.05}
                      nowrap
                      maxWidth="200px"
                      fullWidth
                      align="left"
                    >
                      {item}
                    </TextView>
                    <TextView
                      size={0.05}
                      nowrap
                      maxWidth="200px"
                      fullWidth
                      align="left"
                    >
                      {data?.keySpecs[item]}
                    </TextView>
                  </FlexContainer>
                ))}
              </FlexContainer>
            )}
            <FlexContainer direction="column" gap={0.75}>
              <Button
                icon={<PhoneIcon />}
                text="123 *** *** - reveal"
                border
                bgrColor="transparent"
                color={SECONDARY_BLACK}
                hoverBgColor={SECONDARY_ORANGE}
              />
              <Button
                icon={<WhatsappIcon />}
                text="Chat via whatsapp"
                bgrColor="#04CD51"
              />
              <Button text="Send message" />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer direction="column" gap={0.5}>
          <TextView weight={WEIGHT_700} size={1} color={SECONDARY_BLACK}>
            Description
          </TextView>
          <TextView
            color={FONT_LIGHT}
            size={0.01}
            lineHeight={0.25}
            color={SECONDARY_BLACK}
          >
            {data?.description}
          </TextView>
        </FlexContainer>
        <FlexContainer
          bgrColor={BG_COLOR_BLUE}
          padding="1rem"
          radius
          gap={2}
          direction="column"
          flexwrap
          flex
        >
          <FlexContainer flexwrap flex gap={0.5}>
            {data?.techSpecs?.map((item, index) => (
              <FlexContainer
                key={index}
                bgrColor={PRIMARY_WHITE}
                padding="1rem"
                radius
                gap={0.5}
                flex
              >
                <IconWrapper color={PRIMARY_ORANGE} size="1.25rem">
                  <CheckOutlinedIcon />
                </IconWrapper>
                <TextView
                  color={SECONDARY_BLACK}
                  size={0.01}
                  weight={WEIGHT_400}
                  nowrap
                >
                  {item}
                </TextView>
              </FlexContainer>
            ))}
          </FlexContainer>
          <FlexContainer
            direction="column"
            gap={2}
            alignY={props.mobile && "center"}
          >
            <TextView color={SECONDARY_BLACK} weight={WEIGHT_700} size={1}>
              Vehicle history
            </TextView>
            <FlexContainer
              flexwrap
              flex
              alignX={props.mobile ? "center" : " space-between"}
              alignY="center"
              gap={2}
            >
              <Button
                text="Download Report"
                color={PRIMARY_ORANGE}
                hoverColor={PRIMARY_WHITE}
                bgrColor={SECONDARY_ORANGE}
                border
                hoverBgColor={PRIMARY_ORANGE}
              />
              <TextView
                size={0.05}
                color={SECONDARY_BLACK}
                align={props.mobile && "center"}
              >
                Before you decide to buy a car,
                <br /> read its history for free.
              </TextView>
              {!props.mobile && (
                <VehicleHistoryImage src={HistoryImg} alt="Vehicle History" />
              )}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <ContactForm mobile={props.mobile} />
      <SlideShow data={props.data} mobile={props.mobile} />
    </FlexContainer>
  );
}

export default CarDetails;
