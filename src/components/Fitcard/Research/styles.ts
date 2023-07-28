import { keyframes, styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  height: '100%',

  '& .text': {
    padding: '$5',
    flex: '55%',
  },

  '@mobile': {
    flexDirection: 'column',
  },
});

const marquee = keyframes({
  '0%': { transform: 'translate(0%)' },
  '100%': { transform: 'translate(-100%)' },
});

export const Calendar = styled('div', {
  background: '$gray700',
  flex: '45%',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',

  '& .marquee': {
    position: 'relative',
  },

  '& .days': {
    display: 'flex',
    gap: '$3',
    animation: `${marquee} 50s linear infinite`,
  },

  '@mobile': {
    flex: 1,
    padding: '$5 0',
  },
});

export const Day = styled('div', {
  background: '#fff',
  borderRadius: '$2',
  boxShadow:
    '0px 0px 0px 0px rgba(0, 0, 0, 0.30), 0px 15px 33px 0px rgba(0, 0, 0, 0.29), 0px 60px 60px 0px rgba(0, 0, 0, 0.26), 0px 135px 81px 0px rgba(0, 0, 0, 0.15), 0px 241px 96px 0px rgba(0, 0, 0, 0.04), 0px 376px 105px 0px rgba(0, 0, 0, 0.01)',
  display: 'flex',
  flexDirection: 'column',
  width: '14.8rem',
  height: '14.8rem',
  textAlign: 'center',
  overflow: 'hidden',

  '& .day-name': {
    background: '$primary',
    color: '#fff',
    fontWeight: 700,
    padding: '$2',
  },

  '& .day-number': {
    color: '$gray800',
    flex: 1,
    position: 'relative',
    fontSize: '8rem',
    fontWeight: 700,
  },

  '& .is-past, & .is-today': {
    color: '$primary',
    position: 'absolute',
    inset: 0,
    margin: 'auto',
  },

  '& .is-past': {
    width: 128,
    height: 128,
  },

  '& .is-today': {
    width: 106,
    height: 97,
  },

  variants: {
    past: {
      true: {
        '& .day-name': {
          background: '$gray400',
        },
      },
    },
  },
});
