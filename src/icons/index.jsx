import styled from "@emotion/styled";
import { FaRegUser, FaUser, FaUserFriends, FaApple } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { GiTakeMyMoney, GiShakingHands } from "react-icons/gi";
import { SlBadge } from 'react-icons/sl';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { AiFillCheckCircle } from 'react-icons/ai';


export const UserIconLight = styled(FaRegUser)``;
export const UserIconDark = styled(FaUser)``;
export const UsersIconDark = styled(FaUserFriends)``;
export const MenuIcon = styled(BiMenuAltLeft)``;
export const ArrowLeftIcon = styled(MdOutlineArrowBackIos)``;
export const ArrowRightIcon = styled(MdOutlineArrowForwardIos)``;
export const FinanceIcon = styled(GiTakeMyMoney)``;
export const HandShakeIcon = styled(GiShakingHands)``;
export const BadgeIcon = styled(SlBadge)``;
export const AppleIcon = styled(FaApple)``;
export const PlaystoreIcon = styled(IoLogoGooglePlaystore)``;
export const CheckIcon = styled(AiFillCheckCircle)``;

export const IconWrapper = styled("div")`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  cursor: pointer;
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.radius && "50%"};
`;
