import styled from "@emotion/styled";
import { FaRegUser, FaUser, FaUserFriends } from "react-icons/fa";
import { BiMenuAltLeft } from 'react-icons/bi';

export const UserIconLight = styled(FaRegUser)``;
export const UserIconDark = styled(FaUser)``;
export const UsersIconDark = styled(FaUserFriends)``;
export const MenuIcon = styled(BiMenuAltLeft)``;

export const IconWrapper = styled("div")`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  cursor: pointer;
`;
