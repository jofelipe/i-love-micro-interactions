import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  borderRadius: '$4',
  fontFamily: '"Roboto", Arial, sans-serif',
  overflow: 'hidden',
});

export const Background = styled('div', {
  background: 'url(/images/bg.svg) no-repeat center / cover',
  height: '60rem',
  position: 'relative',
  borderRadius: '$4',
  overflow: 'hidden',
  maxWidth: '114rem',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$6',

  '& .background-animation': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    inset: 0,
    transform: 'scale(1.6)',
    mixBlendMode: 'luminosity',

    '@mobile': {
      transform: 'scale(2.5)',
    },
  },

  '@tablet': {
    height: '40rem',
  },

  '@mobile': {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const Title = styled('h1', {
  color: '#ffd6e9',
  fontSize: '6.4rem',
  fontWeight: 900,
  letterSpacing: -2,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  '& .title-animation': {
    position: 'relative',
  },

  '& span': {
    color: 'transparent',
    '-webkit-text-stroke': '2px #ffd6e9',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    lineHeight: '23rem',
    fontSize: '6rem',
    textAlign: 'center',
  },

  '@mobile': {
    fontSize: '3.2rem',
    letterSpacing: -1,

    '& .title-animation > div': {
      width: '13rem !important',
      height: '13rem !important',
    },

    '& span': {
      fontSize: '3rem',
      '-webkit-text-stroke': '1px #ffd6e9',
      lineHeight: '13rem',
    },
  },
});

export const Draw = styled('div', {});
