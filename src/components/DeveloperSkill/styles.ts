import { keyframes, styled } from '@/../stitches.config';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Skill = styled('div', {
  background: '$gray600',
  borderRadius: '$2',
  overflow: 'hidden',
  position: 'relative',
  padding: 1,
  flex: '1 1 0',

  '& .glow': {
    background:
      'radial-gradient(50% 50% at 50% 50%, $gray500 0%, rgba(255, 255, 255, 0) 100%)',
    width: '200%',
    height: '200%',
    position: 'absolute',
    inset: 0,
    left: '-50%',
    margin: 'auto',
    animation: `${rotate} 10s infinite linear`,
  },

  '& .background': {
    background: '$gray800',
    borderRadius: '$2',
    position: 'relative',
    zIndex: 5,
    padding: '$3 $4',
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    textWrap: 'balance',

    '@mobile': {
      textWrap: 'inherit',
    },
  },

  '& .icon': {
    color: '$primary',
  },

  '& strong': {
    color: '#fff',
    display: 'block',
  },

  '& span': {
    color: '$gray300',
    fontSize: '1.5rem',
  },

  '@tablet': {
    flex: 'calc(50% - 1.6rem)',
  },

  '@mobile': {
    flex: '100%',
  },
});
