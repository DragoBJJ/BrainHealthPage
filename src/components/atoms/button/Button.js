import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  height: 40px;
  width: 100px;
  color: #fff;
  background-color: transparent;
  padding: 15px 15px;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 20px;
  font-size: 1.8rem;
  outline: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ${({ big }) =>
    big &&
    css`
      height: 60px;
      width: 150px;
      border-radius: 50px;
      font-size: 2.2rem;
    `}

  &:hover {
    border: 2px solid ${({ theme }) => theme.wihte};
    background-color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 768px) {
    display: ${({ sideBar }) => (sideBar ? 'flex' : 'none')};
  }
`;
