import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  borderRadius: '$2',
  background: '$vprimary',
  color: '#fff',
  height: 200,
  padding: '2.5rem',

  '@mobile': {
    height: 'auto',
    padding: '2rem',
  },

  '& header': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '3rem',

    '& p': {
      fontSize: '1.4rem',
    },

    '& img': {
      maxHeight: 20,
      marginLeft: 'auto',
      maxWidth: 45,
    },

    '@mobile': {
      marginBottom: '2rem',
    },
  },

  '& .card-number': {
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: 5,
    marginBottom: '2.5rem',

    '& div': {
      display: 'inline-block',
    },

    '@mobile': {
      letterSpacing: 2,
    },
  },

  '& footer': {
    fontSize: '1.4rem',

    '& b': {
      display: 'block',
      fontSize: '1.1rem',
      textTransform: 'uppercase',
    },
  },
});
