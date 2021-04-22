import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkScroll } from 'components/atoms/navItem/NavItem';
import { NavItemWrapper } from 'components/atoms/navItem/NavItem';
import { Button } from 'components/atoms/button/Button';
import styled, { css } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const SideBarCointainer = styled.div`
  position: fixed;
  top: -100%;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  transition: all 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(100%);
      opacity: 0.9;
    `}
`;

const SideBarMenu = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 150px);
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const StyledScrollLink = styled(NavLinkScroll)`
  font-size: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const CloseButton = styled.div`
  position: absolute;
  display: flex;
  top: 20px;
  right: 20px;
  font-size: 5rem;
  color: #fff;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SideBar = ({ isOpen, toggleNav }) => {
  return (
    <SideBarCointainer isOpen={isOpen}>
      <SideBarMenu>
        <NavItemWrapper>
          <StyledScrollLink
            to="Articles"
            duration={500}
            smooth={true}
            spy={true}
            offset={-20}
            activeClass="active"
          >
            Articles
          </StyledScrollLink>
        </NavItemWrapper>
        <NavItemWrapper>
          <StyledScrollLink
            to="Health"
            duration={500}
            smooth={true}
            spy={true}
            offset={-20}
            activeClass="active"
          >
            Brain Health
          </StyledScrollLink>
        </NavItemWrapper>
        <NavItemWrapper>
          <StyledScrollLink
            to="Mentors"
            duration={500}
            smooth={true}
            spy={true}
            offset={-20}
            activeClass="active"
          >
            Mentors
          </StyledScrollLink>
        </NavItemWrapper>
      </SideBarMenu>

      <StyledNavLink to="/login">
        <Button big sideBar>
          Sign In
        </Button>
      </StyledNavLink>

      <CloseButton onClick={toggleNav}>
        <AiOutlineClose />
      </CloseButton>
    </SideBarCointainer>
  );
};

export default SideBar;
