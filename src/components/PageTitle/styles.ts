import { keyframes, styled } from '@/../stitches.config';

const translateUpDown = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(25px)' },
});

export const Wrapper = styled('div', {
  marginBottom: '$8',
  textAlign: 'center',

  '@mobile': {
    marginBottom: '$6',
  },

  '& .memoji': {
    background: 'url(/images/memoji.png) no-repeat',
    width: 114,
    height: 138,
    position: 'absolute',
    bottom: -50,
    left: 25,
    ts: '.1s',
    zIndex: 10,
    animation: `${translateUpDown} 2s infinite alternate-reverse linear`,

    '@mobile': {
      display: 'none',
    },
  },

  '& .sticker': {
    background: 'url(/images/sticker.png) no-repeat',
    width: 151,
    height: 134,
    position: 'absolute',
    top: -50,
    right: -25,
    ts: '.1s',
    zIndex: 10,
    animation: `${translateUpDown} 2s infinite alternate linear`,

    '@mobile': {
      display: 'none',
    },
  },

  '& i': {
    borderBottom: '1px dotted',
    cursor: 'help',
    position: 'relative',

    '&:hover .flag': {
      opacity: 1,
    },

    '& .flag': {
      background: 'url(/images/ireland.svg) no-repeat',
      width: 22,
      height: 16,
      display: 'block',
      position: 'absolute',
      top: 5,
      right: -32,
      borderRadius: 2,
      ts: '.2s',
      opacity: 0,
    },
  },
});

export const Title = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '$7',
  position: 'relative',
});

export const Text = styled('h1', {
  color: '#fff',
  fontSize: '7.2rem',
  fontWeight: 'bold',

  '@tablet': {
    fontSize: '5rem',
  },

  '@mobile': {
    maxWidth: '30rem',
    fontSize: '4rem',
  },
});
