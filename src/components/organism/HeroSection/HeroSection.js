import React from 'react';
import styled from 'styled-components';
import kid from 'assets/video/kid.mp4';

const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  height: 800px;
  width: 100vw;
  justify-content: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  -object-fit: cover;
  object-fit: cover;
`;

const HeroHeader = styled.h1`
  margin-top: 30vh;
  text-align: center;
  color: #fff;
  font-size: 5rem;
  letter-spacing: 1px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    max-width: 460px;
    font-size: 4rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="Hero">
      <HeroHeader>Take Care Of Your Brain</HeroHeader>
      <HeroBackground>
        <HeroVideo src={kid} type="Video/mp4" autoPlay muted loop />
      </HeroBackground>
    </HeroContainer>
  );
};

export default HeroSection;
