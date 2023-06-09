import React, { useEffect, useState } from "react";
import { loginData } from "../../common/data";
import ButtonLink from "../../common/link";
import {
  IconWrapper,
  MenuIcon,
  UserIconLight,
  UsersIconDark,
} from "../../icons";
import { SiteLogo, SiteLogoDark, SiteLogoImg } from "../../images";
import {
  BG_COLOR,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  SECONDARY_BLACK,
} from "../../themes/common";
import { TextView } from "../../themes/typography";
import { HeaderContainer, HeaderRight, NavItem } from "./header.styled";

function Header(props) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname == "/") {
      setIsHome(true);
    }
  }, [window.location.pathname]);

  const handleShow = () => setShowMenu(!showMenu);
  const handleClose = () => setShowMenu(false);

  const checkScrolledDown = () => {
    if (!scrolledDown && window.pageYOffset > 80) {
      setScrolledDown(true);
    } else if (scrolledDown && window.pageYOffset <= 80) {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrolledDown);
  }, [window.pageYOffset, scrolledDown]);

  return (
    <HeaderContainer
      mobile={props.mobile}
      scrolledDown={scrolledDown && !props.mobile}
    >
      {props.mobile && (
        <IconWrapper color={PRIMARY_ORANGE} size="2rem">
          <MenuIcon />
        </IconWrapper>
      )}
      <ButtonLink to="/">
        <SiteLogo
          src={scrolledDown ? SiteLogoDark : SiteLogoImg}
          mobile={props.mobile}
        />
      </ButtonLink>
      {props.mobile ? (
        <ButtonLink to="/login">
          <IconWrapper color={PRIMARY_WHITE} size="2rem">
            <UsersIconDark />
          </IconWrapper>
        </ButtonLink>
      ) : (
        <HeaderRight>
          <IconWrapper color={PRIMARY_ORANGE} size="18px">
            <UserIconLight />
          </IconWrapper>
          {loginData?.map((item, index) => (
            <ButtonLink to="/login">
              <TextView
                key={index}
                scrolledDown={scrolledDown && !props.mobile}
                color={scrolledDown ? SECONDARY_BLACK : BG_COLOR}
                size={0.05}
              >
                {item}
              </TextView>
            </ButtonLink>
          ))}
        </HeaderRight>
      )}
    </HeaderContainer>
  );
}

export default Header;
