import { keyframes, styled } from '@/../stitches.config';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Wrapper = styled('div', {
  background: '$gray500',
  borderRadius: '$rounded',
  display: 'inline-block',
  margin: '0 auto',
  overflow: 'hidden',
  position: 'relative',
  padding: 1,

  '& .glow': {
    background:
      'radial-gradient(50% 50% at 50% 50%, $gray400 0%, rgba(255, 255, 255, 0) 100%)',
    width: '200%',
    height: '200%',
    position: 'absolute',
    inset: 0,
    left: '-50%',
    margin: 'auto',
    animation: `${rotate} 10s infinite linear`,
  },

  '& .background': {
    background: '$gray600',
    borderRadius: '$rounded',
    color: '$gray100',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 5,
    fontSize: '1.8rem',
    padding: '$3 $5',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    ts: '.2s',

    '&:hover': {
      background: '$gray700',
    },

    '@mobile': {
      fontSize: '1.6rem',
      padding: '$3 $4',
    },
  },
});
