import React from 'react';
import {
  HeaderContainer,
  HeaderRight,
  LogoWrapper,
  Nav,
  NavWrapper,
} from './styles';

interface Props {
  isScrollBackground: boolean;
  isScrollShadow: boolean;
  isScrollTransition: boolean;
}

const Header = ({
  isScrollBackground,
  isScrollShadow,
  isScrollTransition,
}: Props) => {
  return (
    <>
      <HeaderContainer
        isScrollBackground={isScrollBackground}
        isScrollShadow={isScrollShadow}
        isScrollTransition={isScrollTransition}
      >
        <LogoWrapper to="/">CHI CHU</LogoWrapper>
        <HeaderRight>
          <Nav>
            <NavWrapper to="/search">보험검색</NavWrapper>
            <NavWrapper to="/">치츄가이드</NavWrapper>
            <NavWrapper to="/">AboutUS</NavWrapper>
          </Nav>
        </HeaderRight>
      </HeaderContainer>
      {/* <HeaderResponsive /> */}
    </>
  );
};
export default Header;

Header.defaultProps = {
  isScrollBackground: 'false',
  isScrollShadow: 'false',
  isScrollTransition: 'false',
};