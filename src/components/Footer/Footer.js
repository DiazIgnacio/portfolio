import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LINKS, PHONE_NUMBER } from '../../constants/constants';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* Phone Number */}
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href={`tel:${PHONE_NUMBER}`}>+54 9 {PHONE_NUMBER}</LinkItem>
        </LinkColumn>
        {/* Email */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={`mailto:${LINKS.email}`}>{LINKS.email}</LinkItem>
        </LinkColumn>
      </LinkList>
      {/* Social media */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          {/* Github */}
          <SocialIcons href={LINKS.github}>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          {/* Linkedin */}
          <SocialIcons href={LINKS.linkedin}>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
