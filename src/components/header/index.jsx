import React, { useEffect, useState } from "react";
import { loginData } from "../../common/data";
import {
  IconWrapper,
  MenuIcon,
  UserIconLight,
  UsersIconDark,
} from "../../icons";
import { SiteLogo, SiteLogoDark, SiteLogoImg } from "../../images";
import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../themes/common";
import {
  Divider,
  HeaderContainer,
  HeaderRight,
  NavItem,
} from "./header.styled";

function Header({ mobile }) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu(!showMenu);
  const handleClose = () => setShowMenu(false);

  const checkScrolledDown = () => {
    if (!scrolledDown && window.pageYOffset > 20) {
      setScrolledDown(true);
    } else if (scrolledDown && window.pageYOffset <= 20) {
      setScrolledDown(false);
    }
  };

  // const handleLogoClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", checkScrolledDown);
  }, [window.pageYOffset, scrolledDown]);

  return (
    <HeaderContainer mobile={mobile} scrolledDown={scrolledDown && !mobile}>
      {mobile && (
        <IconWrapper color={PRIMARY_ORANGE} size="2rem">
          <MenuIcon />
        </IconWrapper>
      )}
      <SiteLogo src={scrolledDown && !mobile ? SiteLogoDark : SiteLogoImg} />
      {mobile ? (
        <IconWrapper color={PRIMARY_WHITE} size="2rem">
          <UsersIconDark />
        </IconWrapper>
      ) : (
        <HeaderRight>
          <IconWrapper color={PRIMARY_ORANGE} size="18px">
            <UserIconLight />
          </IconWrapper>
          {loginData?.map((item, index) => (
            <NavItem key={index} scrolledDown={scrolledDown && !mobile}>{item}</NavItem>
          ))}
        </HeaderRight>
      )}
    </HeaderContainer>
  );
}

export default Header;
