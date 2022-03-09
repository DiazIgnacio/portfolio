import styled from 'styled-components';

export const Navbar = styled.nav`
  position: fixed;
  left: auto;
  width: 100%;
  background: rgb(7, 12, 23);
  max-width: 1280px;
  color: #fff;
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    height: 64px;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HamburguerInput = styled.input`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
`;

export const MenuItems = styled.ul`
  order: 2;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    z-index: 200;
    padding-top: 100px;
    background: rgba(7, 12, 23, 0.98);
    height: 100vh;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
    transform: ${({ checked }) =>
      checked ? 'translateX(0)' : 'translate(-150%)'};
  }
`;

export const MenuLink = styled.li`
  cursor: pointer;
  list-style: none;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  font-size: 1.8rem;
  &:hover {
    color: #0088a9;
  }
`;

export const Logo = styled.div`
  order: 1;
  font-size: 1.8rem;
  align-items: center;
  display: flex;
  cursor: pointer;

  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.7rem;
  }

  @media (max-width: 500px) {
    display: ${({ checked }) => (checked ? 'none' : 'flex')};
  }
`;

export const Line1 = styled.span`
  @media (max-width: 768px) {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ checked }) => (checked ? 'rotate(45deg)' : 'none')};
  }
`;

export const Line2 = styled.span`
  @media (max-width: 768px) {
    transition: transform 0.1s ease-in-out;
    transform: ${({ checked }) => (checked ? 'scaleY(0)' : 'none')};
  }
`;

export const Line3 = styled.span`
  @media (max-width: 768px) {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
    transform: ${({ checked }) => (checked ? 'rotate(-45deg)' : 'none')};
  }
`;
