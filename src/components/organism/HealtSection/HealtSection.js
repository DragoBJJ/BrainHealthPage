import React from 'react';
import styled from 'styled-components';
import book from 'assets/images/book.svg';

export const HealtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 100px 0;
  margin: auto;
  max-width: 1100px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 20px;
  max-width: 350px;
  height: 460px;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.black};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  max-width: 200px;
  margin-bottom: auto;
`;

export const Header = styled.h2`
  font-size: ${({ small }) => (small ? '3rem' : '5rem')};
  color: ${({ small, theme }) => (small ? '#fff' : theme.primary)};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 30px 0;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperImage = styled.div`
  max-width: 200px;
  margin: 15px 0;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #fff;
  margin-top: auto;
  text-align: center;
`;

const HealtSection = ({ HealtCardData }) => {
  const CardOne = HealtCardData[0];
  const CardTwo = HealtCardData[1];
  const CardThree = HealtCardData[2];

  return (
    <HealtContainer id="Health">
      <Header>Healthy brain</Header>
      <WrapperImage>
        <HeaderImage src={book} />
      </WrapperImage>
      <CardWrapper>
        <Card>
          <Image src={CardOne.image} />
          <Header small>{CardOne.title}</Header>
          <Description>{CardOne.desc}</Description>
        </Card>
        <Card>
          <Image src={CardTwo.image} />
          <Header small>{CardTwo.title}</Header>
          <Description>{CardTwo.desc}</Description>
        </Card>
        <Card>
          <Image src={CardThree.image} />
          <Header small>{CardThree.title}</Header>
          <Description>{CardThree.desc}</Description>
        </Card>
      </CardWrapper>
    </HealtContainer>
  );
};

export default HealtSection;
