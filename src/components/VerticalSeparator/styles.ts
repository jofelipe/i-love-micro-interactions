import { styled } from '@/../stitches.config';

export const Separator = styled('div', {
  width: 1,
  background: '$gray500',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  pointerEvents: 'none',

  '&::before': {
    content: '',
    background: '$gray500',
    display: 'block',
    width: 8,
    height: 1,
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '&::after': {
    content: '',
    background: '$gray500',
    display: 'block',
    width: 8,
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '& span': {
    background: '$gray500',
    color: '#fff',
    fontSize: '1.1rem',
    padding: '.2rem $1',
    borderRadius: '$1',
  },
});
