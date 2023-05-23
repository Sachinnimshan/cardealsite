import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../common/button";
import { CommonLayout, FlexContainer } from "../../common/Layouts.styled";
import SlideShow from "../../common/slideshow";
import {
  CheckOutlinedIcon,
  CircleIcon,
  IconWrapper,
  PhoneIcon,
  WhatsappIcon,
} from "../../icons";
import { HistoryImg, VehicleHistoryImage } from "../../images";
import {
  BG_COLOR_BLUE,
  FONT_SECONDARY,
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
import ContactForm from "../contact";
import { CarDetailsImage } from "./pages.styled";

function CarDetails(props) {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log("Key Specs", data.keySpecs);

  useEffect(() => {
    if (id) {
      const response = props.data.find((item, index) => item.id === id);
      setData(response);
    }
  }, [id]);

  return (
    <CommonLayout mobile={props.mobile} direction="column" flexwrap>
      <FlexContainer gap={0.75} margin={!props.mobile && "4rem 0 2rem 0"}>
        <TextView size={0.05}>Home Page</TextView>
        <TextView size={0.05}>|</TextView>
        <TextView color={PRIMARY_ORANGE} size={0.05}>
          {data?.title}
        </TextView>
      </FlexContainer>
      <FlexContainer gap={3} flexwrap>
        <FlexContainer direction="column" gap={2} flex>
          <CarDetailsImage src={data.images} />
          <FlexContainer direction="column" gap={2}>
            <TextView weight={WEIGHT_700} size={0.5} color={SECONDARY_BLACK}>
              Description
            </TextView>
            <TextView color={SECONDARY_BLACK} size={0.01}>
              {data?.description}
            </TextView>
          </FlexContainer>
          <FlexContainer
            bgrColor={BG_COLOR_BLUE}
            padding="1.5rem"
            radius
            gap={2}
            direction="column"
            flexwrap
            flex
          >
            <FlexContainer flexwrap flex gap={1}>
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
                    size={0.05}
                    weight={WEIGHT_500}
                    nowrap
                  >
                    {item}
                  </TextView>
                </FlexContainer>
              ))}
            </FlexContainer>
            <FlexContainer direction="column" gap={2}>
              <TextView color={SECONDARY_BLACK} weight={WEIGHT_700} size={0.5}>
                Vehicle history
              </TextView>
              <FlexContainer
                flexwrap
                flex
                alignX="space-between"
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
                <TextView size={0.05} color={SECONDARY_BLACK}>
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
        <FlexContainer direction="column" gap={1.5} flex>
          <TextView size={1} color={SECONDARY_BLACK} weight={WEIGHT_400}>
            {data?.title}
          </TextView>
          <FlexContainer gap={1.5}>
            <FlexContainer gap={0.5}>
              <IconWrapper color={PRIMARY_ORANGE} size="12px">
                <CircleIcon />
              </IconWrapper>
              <TextView>{data?.year}</TextView>
            </FlexContainer>
            <FlexContainer gap={0.5}>
              <IconWrapper color={PRIMARY_ORANGE} size="12px">
                <CircleIcon />
              </IconWrapper>
              <TextView>{data?.transmission}</TextView>
            </FlexContainer>
            <FlexContainer gap={0.5}>
              <IconWrapper color={PRIMARY_ORANGE} size="12px">
                <CircleIcon />
              </IconWrapper>
              <TextView>{data?.fuel}</TextView>
            </FlexContainer>
          </FlexContainer>
          <TextView size={1} color={PRIMARY_ORANGE} weight={WEIGHT_600}>
            {data?.price}
          </TextView>
          {/* <FlexContainer
            radius
            bgrColor={BG_COLOR_BLUE}
            direction="column"
            padding="1rem 2rem"
            gap={0.5}
          >
            {data?.keySpecs?.map((item, index) => (
              <FlexContainer key={index} gap={5}>
                <TextView
                  color={SECONDARY_BLACK}
                  weight={WEIGHT_500}
                  size={0.02}
                >
                  {item}
                </TextView>
                <TextView color={SECONDARY_BLACK} size={0.02}></TextView>
              </FlexContainer>
            ))}
          </FlexContainer> */}
          <FlexContainer direction="column" gap={0.75}>
            <Button
              text={
                <FlexContainer alignX="center" alignY="center" gap={1}>
                  <PhoneIcon size="1.25rem" color={PRIMARY_ORANGE} />
                  <TextView color={PRIMARY_ORANGE}>
                    123 *** *** - reveal
                  </TextView>
                </FlexContainer>
              }
              border
              bgrColor="transparent"
              color={SECONDARY_BLACK}
              hoverBgColor={SECONDARY_ORANGE}
            />
            <Button
              text={
                <FlexContainer alignX="center" alignY="center" gap={1}>
                  <WhatsappIcon size="1.25rem" />
                  <TextView color={PRIMARY_WHITE}>Chat via whatsapp</TextView>
                </FlexContainer>
              }
              bgrColor="#04CD51"
            />
            <Button text="Send message" />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <ContactForm mobile={props.mobile} />
      <SlideShow data={props.data} mobile={props.mobile}/>
    </CommonLayout>
  );
}

export default CarDetails;
