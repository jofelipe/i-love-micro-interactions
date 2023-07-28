import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  height: 1,
  background: '$gray500',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  pointerEvents: 'none',
  maxWidth: '114rem',

  variants: {
    position: {
      top: {
        marginBottom: '$3',
      },
      bottom: {
        marginTop: '$3',
        marginBottom: '$7',
      },
    },
  },

  '&::before': {
    content: '',
    background: '$gray500',
    display: 'block',
    width: 1,
    height: 8,
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '&::after': {
    content: '',
    background: '$gray500',
    display: 'block',
    width: 1,
    height: 8,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '& span': {
    background: '$gray500',
    color: '#fff',
    fontSize: '1.1rem',
    padding: '.2rem $1',
    borderRadius: '$1',
  },
});
