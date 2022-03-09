import styled from 'styled-components';

export const FooterWrapper = styled.section`
  width: 80vw;
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 16px 48px;
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 40px 0 28px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: 30px;
  }
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 22px;
  text-transform: capitalize;
  color: #f3f3f3;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 12px;
    margin-bottom: 14px;
  }
`;
