import React from 'react';
import styled from 'styled-components';
import { FiYoutube, FiInstagram } from 'react-icons/fi';

const MentorComponent = styled.div`
  display: grid;
  height: auto;
  padding: 100px 0;
  max-width: 1000px;
  margin: auto;
`;

const MentorRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: (auto, 1fr);
  grid-template-areas: ${({ imageStart }) => (imageStart ? `'col2 col1'` : `'col1 col2'`)};
  grid-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

const ColumnOne = styled.div`
  grid-area: col1;
`;
const ColumnTwo = styled.div`
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }
`;

const MentorHeader = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

const MentorDescription = styled.p`
  font-size: 2.2rem;
  line-height: 3rem;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const WrapperImage = styled.div`
  max-width: 400px;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    max-width: 300px;
    margin: auto;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const Citate = styled.q`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 3rem;
  color: ${({ theme }) => theme.black};
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`;

const StyledLink = styled.a`
  height: 68px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: ${({ theme }) => theme.black};
  cursor: pointer;
  outline: none;
`;

const LinkYoutube = styled(FiYoutube)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: hsl(0, 72%, 51%);
  }
`;

const LinkInstagram = styled(FiInstagram)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MentorSection = ({ title, description, citate, image, youtube, instagram, imageStart }) => {
  return (
    <MentorComponent id="Mentors">
      <MentorRow imageStart={imageStart}>
        <ColumnOne>
          <WrapperText>
            <MentorHeader>{title}</MentorHeader>
            <Citate>{citate}</Citate>
            <MentorDescription>{description}</MentorDescription>
          </WrapperText>
        </ColumnOne>
        <ColumnTwo>
          <WrapperImage>
            <Image src={image} />
          </WrapperImage>
          <LinkWrapper>
            {youtube && (
              <StyledLink href={`https://${youtube}`}>
                <LinkYoutube />
              </StyledLink>
            )}
            {instagram && (
              <StyledLink href={`https://${instagram}`}>
                <LinkInstagram />
              </StyledLink>
            )}
          </LinkWrapper>
        </ColumnTwo>
      </MentorRow>
    </MentorComponent>
  );
};

export default MentorSection;
