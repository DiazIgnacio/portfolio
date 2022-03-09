import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  Container,
  NavLink,
  NavIcon,
  SocialIcons,
  Span,
  NavLinks,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <NavIcon>
      <GiHamburgerMenu size='3rem' />
    </NavIcon>
    <Link href='/'>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginBottom: '20px',
        }}
      >
        <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
      </a>
    </Link>
    <NavLinks>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </NavLinks>
    <div>
      <SocialIcons href='https://github.com/DiazIgnacio'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ignacio-d%C3%ADaz/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </div>
  </Container>
);

export default Header;
