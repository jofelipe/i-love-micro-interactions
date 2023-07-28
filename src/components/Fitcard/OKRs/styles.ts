import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& .text': {
    padding: '$5 $5 $4',

    '@mobile': {
      padding: '$4',
    },
  },
});

export const Progress = styled('div', {
  flex: 1,
  position: 'relative',
  padding: '0 $5',

  '&:after': {
    content: '',
    display: 'block',
    background:
      'linear-gradient(180deg, rgba(40, 44, 46, 0.00) 0%, $gray600 100%)',
    width: '100%',
    height: '8rem',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },

  '@mobile': {
    padding: '0 $4',
  },
});

export const ProgressBar = styled('div', {
  background: '$gray700',
  border: '2px solid $gray700',
  borderRadius: '$rounded',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.6rem',
  fontWeight: 700,
  color: '#fff',
  padding: '1.2rem 0',
  position: 'relative',
  overflow: 'hidden',

  '& .progress': {
    background:
      'linear-gradient(270deg, #0C8CE9 0%, rgba(12, 140, 233, 0.30) 100%)',
    position: 'absolute',
    borderRadius: '$rounded',
    height: '100%',
    width: 400,
    top: 0,
    left: 0,
  },

  '& span': {
    position: 'relative',

    '@mobile': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: '100%',
      padding: '0 $3',
      whiteSpace: 'nowrap',
    },
  },
});

export const Results = styled('ul', {
  position: 'relative',
  marginLeft: '$5',
  paddingTop: '$3',

  '@mobile': {
    marginLeft: '$4',
  },

  '&:before': {
    background: '$gray500',
    content: '',
    display: 'block',
    width: 1,
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },

  '& li': {
    listStyle: 'none',
    fontSize: '1.4rem',
    marginBottom: '$2',
    position: 'relative',
    paddingLeft: '4rem',

    '&:before': {
      background: '$gray500',
      content: '',
      display: 'block',
      width: '4rem',
      height: 1,
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },

    '& span': {
      background: '$gray500',
      color: '$gray100',
      borderRadius: '$rounded',
      display: 'inline-block',
      padding: '$2 $3',

      '@mobile': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
      },
    },
  },
});
