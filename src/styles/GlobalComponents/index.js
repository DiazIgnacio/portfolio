import styled from 'styled-components';

export const Section = styled.section`
  display: ${({ grid }) => (grid ? 'grid' : 'flex')};
  place-items: ${({ main }) => (main ? 'center' : 'normal')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  padding: ${({ nopadding }) => (nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto 30px;
  width: 90%;
  max-width: 1280px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${({ nopadding }) => (nopadding ? '0' : '64px 16px 0')};

    width: 80vw;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${({ main }) => (main ? '58px 0 16px' : '0')};

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ main }) => (main ? '56px' : '48px')};
    line-height: ${({ main }) => (main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${({ main }) => (main ? '40px 0 12px' : '0')};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${({ main }) => (main ? '28px' : '32px')};
    line-height: ${({ main }) => (main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: ${({ main }) => (main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 25%;
  height: 0.5rem;
  border-radius: 10px;
  background-color: #fff;
  background: ${({ colorAlt }) =>
    colorAlt
      ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
      : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  margin: ${({ divider }) => (divider ? '4rem 0' : '')};
  margin: 2rem 0 2rem;
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? '150px' : '262px')};
  height: ${({ alt }) => (alt ? '52px' : '64px')};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
      : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? '150px' : '184px')};
    height: ${({ alt }) => (alt ? '52px' : '48px')};
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
    margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
      : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
      : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? '16px' : '8px')};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? '0' : '8px')};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? '32px' : '24px')};

  @media ${() => theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? '16px' : '24px')};
  }

  @media ${() => theme.breakpoints.sm} {
    height: ${({ large }) => (large ? '32px' : '16px')};
  }
`;
