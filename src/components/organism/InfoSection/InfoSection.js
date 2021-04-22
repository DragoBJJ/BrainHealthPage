import React from 'react';
import styled from 'styled-components';
import { FcLink } from 'react-icons/fc';

const InfoContainer = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  justify-content: center;
  padding: 150px 0;
  margin: auto;
`;

const InfoWrapper = styled.div`
  display: grid;
  max-width: 1000px;
  margin: auto;
  height: 100%;
  grid-auto-columns: (auto, 1fr);
  grid-template-areas: ${({ imgStart }) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};
  justify-content: center;
  align-items: center;
  grid-gap: 80px;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? '"col1" "col2"' : `"col1 col1" " col2 col2"`};
    grid-gap: 0;
  }
`;

const ColumnOne = styled.div`
  position: relative;
  grid-area: col1;
  margin-top: -5vh;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const ColumnTwo = styled.div`
  grid-area: col2;
  margin: auto;
  margin-top: 20vh;

  @media screen and (max-width: 768px) {
    margin-top: 5vh;
  }
`;

const ImgWrapper = styled.div`
  max-width: 400px;
  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled.a`
  position: absolute;
  height: 68px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    height: 58px;
    width: 58px;
  }
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 15px;
`;

const HeroText = styled.p`
  font-size: 2.2rem;
  text-align: center;
  line-height: 4.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 4rem;
  }
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    max-width: 440px;
    padding-top: 20px;
    font-size: 3rem;
  }
`;

const InfoSection = ({ headline, description, imgStart, img, link }) => {
  return (
    <InfoContainer id="Articles">
      <InfoWrapper imgStart={imgStart}>
        <ColumnOne>
          <TextWrapper>
            <Heading>{headline}</Heading>
            <StyledLink href={`https://${link}`}>
              <FcLink />
            </StyledLink>
            <HeroText>{description}</HeroText>
          </TextWrapper>
        </ColumnOne>
        <ColumnTwo>
          <ImgWrapper>
            <Image src={img} />
          </ImgWrapper>
        </ColumnTwo>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
