import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const NavItemWrapper = styled.li`
  padding: 1rem;
  text-align: center;
`;
export const NavLinkScroll = styled(LinkScroll)`
  color: #fff;
  font-size: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
