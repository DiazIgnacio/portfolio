import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { DiCssdeck } from 'react-icons/di';
import {
  Navbar,
  Container,
  HamburguerInput,
  Hamburger,
  Line1,
  Line2,
  Line3,
  MenuItems,
  MenuLink,
  NavLink,
  Logo,
} from './HeaderStyles';

const lineStyle = {
  display: 'block',
  height: '4px',
  width: '100%',
  borderRadius: '10px',
  background: '#fff',
};

const Header = () => {
  const [checked, setChecked] = useState(false);

  const handleLinkClick = () => {
    setChecked(!checked);
  };

  return (
    <Navbar checked={checked}>
      <Container>
        <HamburguerInput
          type='checkbox'
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Hamburger>
          <Line1 style={lineStyle} checked={checked}></Line1>
          <Line2 style={lineStyle} checked={checked}></Line2>
          <Line3 style={lineStyle} checked={checked}></Line3>
        </Hamburger>
        <MenuItems checked={checked}>
          <MenuLink onClick={handleLinkClick}>
            <Link href='#'>
              <NavLink>Home</NavLink>
            </Link>
          </MenuLink>
          {/* <MenuLink>
            <Link href='#projects'>
              <NavLink>Projects</NavLink>
            </Link>
          </MenuLink> */}
          <MenuLink onClick={handleLinkClick}>
            <Link href='#tech'>
              <NavLink>Technologies</NavLink>
            </Link>
          </MenuLink>
          <MenuLink onClick={handleLinkClick}>
            <Link href='#about'>
              <NavLink>About Me</NavLink>
            </Link>
          </MenuLink>
        </MenuItems>
        <Link href='/'>
          <Logo checked={checked}>
            <DiCssdeck size='3rem' />
            <h2>Portfolio</h2>
          </Logo>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
