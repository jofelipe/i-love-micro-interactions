import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  display: 'inline-block',
  position: 'relative',

  '& .drag-react': {
    display: 'flex',
    justifyContent: 'center',
    transform: 'translateX(-50%)',

    '@mobile': {
      pointerEvents: 'none',
    },
  },
});

export const Frame = styled('div', {
  border: '1px solid $figma',
  cursor: 'url(/images/figma-cursor.png), default',
  display: 'inline',
  position: 'relative',
  width: 'max-content',

  variants: {
    size: {
      xs: {
        px: '$1',
      },
      xl: {
        padding: '$1 $1 $1',
      },
    },
  },
});

export const Dot = styled('span', {
  background: '$figmaBackground',
  width: 6,
  height: 6,
  position: 'absolute',

  variants: {
    position: {
      top: { left: -3, top: -3 },
      right: { right: -3, top: -3 },
      bottom: { left: -3, bottom: -3 },
      left: { right: -3, bottom: -3 },
    },
  },
});

export const Dimensions = styled('div', {
  background: '$figma',
  color: '#fff',
  fontSize: '1.1rem',
  padding: '.2rem .3rem .2rem .4rem',
  borderRadius: '.2rem',
  position: 'absolute',
  bottom: -30,
  left: '50%',
  transform: 'translateX(-50%)',
});
