import styled from "@emotion/styled";
import {
  FaRegUser,
  FaUser,
  FaUserFriends,
  FaApple,
  FaWhatsapp,
  FaRegImages,
  FaSearch,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdEmail,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { GiTakeMyMoney, GiShakingHands } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import {
  IoLogoGooglePlaystore,
  IoLocationSharp,
  IoCarSportOutline,
} from "react-icons/io5";
import {
  AiFillCheckCircle,
  AiFillAppstore,
  AiOutlineStar,
} from "react-icons/ai";
import { VscCircleFilled, VscDash } from "react-icons/vsc";
import { RiPhoneFill } from "react-icons/ri";
import { CgCheckO } from "react-icons/cg";
import { HiCheck, HiMenu } from "react-icons/hi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../themes/common";

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
export const CheckIcon2 = styled(HiCheck)``;
export const WhatsappIcon = styled(FaWhatsapp)``;
export const CircleIcon = styled(VscCircleFilled)``;
export const PhoneIcon = styled(RiPhoneFill)``;
export const CheckOutlinedIcon = styled(CgCheckO)``;
export const LocationIcon = styled(IoLocationSharp)``;
export const EmailIcon = styled(MdEmail)``;
export const DoubleArrowIcon = styled(MdKeyboardDoubleArrowDown)``;
export const ListViewIcon = styled(HiMenu)``;
export const GridViewIcon = styled(AiFillAppstore)``;
export const CompareIcon = styled(TbArrowsRightLeft)``;
export const SearchIcon = styled(FaSearch)``;
export const GoogleIcon = styled(FcGoogle)``;
export const ImagesIcon = styled(FaRegImages)``;
export const StarIcon = styled(AiOutlineStar)``;
export const CarIcon = styled(IoCarSportOutline)``;
export const DashIcon = styled(VscDash)``;

export const IconWrapper = styled("div")`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "1.25rem"};
  cursor: pointer;
  background-color: ${(props) => props.bgrColor};
  padding: ${(props) => props.padding && "0.5rem"};
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.radius && "50%"};
  border: ${(props) => props.border && `2px solid ${PRIMARY_WHITE}`};
  position: ${(props) => props.position};
  transition: all ease-in-out 0.3s;
  z-index: 4000;
  box-shadow: ${(props) =>
    props.shadow &&
    "0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.05)"};
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgrColor};
    border: ${(props) => props.hoverBorder && `2px solid ${PRIMARY_ORANGE}`};
    transition: all ease-in-out 0.3s;
  }
`;
