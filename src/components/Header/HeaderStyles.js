import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 3rem;
`;

export const NavIcon = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 2rem;
`;

// Navigation Links
export const NavLink = styled.a`
  margin:auto 2rem;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavLinks = styled.ul`
  display:flex;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`;
