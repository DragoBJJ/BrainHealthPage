import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavItemWrapper, NavLinkScroll } from 'components/atoms/navItem/NavItem';
import { TiThMenu } from 'react-icons/ti';
import { BiBrain } from 'react-icons/bi';

import { Button } from 'components/atoms/button/Button';

export const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  margin-top: -100px;
  z-index: 4;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  transition: all 0.3s ease-in-out;
  opacity: ${({ activeScroll }) => (activeScroll ? '0.6' : '1')};
  color: red;
`;
export const NavMenu = styled.ul`
  display: flex;
  height: 100%;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  font-size: 7rem;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;

export const StyledButton = styled(Button)`
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: fixed;
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    transform: translate(-40%, 60%);
    font-size: 3.5rem;
    color: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const IconScrollUp = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  bottom: -80vh;
  right: 20px;
  font-size: 6rem;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const NabBar = ({ toggleNav }) => {
  const [activeScroll, setScroll] = useState(false);
  const [IconScrollToUp, setIcon] = useState(false);

  const scrollToUp = () => {
    scroll.scrollToTop();
  };

  const updateScroll = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    if (window.scrollY >= 5400) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <>
      <NavContainer activeScroll={activeScroll}>
        <NavLogo>
          <BiBrain />
        </NavLogo>

        <NavMenu>
          <NavItemWrapper>
            <NavLinkScroll
              to="Articles"
              duration={500}
              smooth={true}
              spy={true}
              offset={-80}
              activeClass="active"
            >
              Articles
            </NavLinkScroll>
          </NavItemWrapper>
          <NavItemWrapper>
            <NavLinkScroll
              to="Health"
              duration={500}
              smooth={true}
              spy={true}
              offset={0}
              activeClass="active"
            >
              Brain Health
            </NavLinkScroll>
          </NavItemWrapper>
          <NavItemWrapper>
            <NavLinkScroll
              to="Mentors"
              duration={500}
              smooth={true}
              spy={true}
              offset={0}
              activeClass="active"
            >
              Mentors
            </NavLinkScroll>
          </NavItemWrapper>
        </NavMenu>
        <StyledButton as={Link} to="/login">
          Sign In
        </StyledButton>
        <MobileIcon onClick={toggleNav}>
          <TiThMenu />
        </MobileIcon>
        <IconScrollUp onClick={scrollToUp} visible={IconScrollToUp}>
          <BiBrain />
        </IconScrollUp>
      </NavContainer>
    </>
  );
};

export default NabBar;
