import { styled } from '@/../stitches.config';

export const Wrapper = styled('aside', {
  background: '$vcardBackground',
  borderRight: '1px solid $vcardBorder',
  gridArea: 'sidebar',
  padding: '2.5rem',

  '& .sidebar-logo': {
    marginBottom: '4rem',

    '& .path-text': {
      fill: '$vtext',
    },
  },

  '@tablet': {
    display: 'none',
  },
});

export const Avatar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4rem',

  '& .avatar-background': {
    background: '$vprimary',
    color: '#fff',
    width: 44,
    height: 44,
    borderRadius: '$circle',
    marginRight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& p': {
    fontSize: '1.1rem',
    color: '$vtextSecondary',

    '& b': {
      color: '$vtext',
      display: 'block',
      fontSize: '1.9rem',
    },
  },
});

export const Menu = styled('nav', {
  margin: '0 -2.5rem 2.5rem',

  '& li': {
    listStyle: 'none',

    '&:not(:last-child)': {
      borderBottom: '1px solid $vcardBorder',
    },

    '&.active': {
      '& a': {
        color: '$vprimary',
      },
    },
  },

  '& a': {
    color: '$vtext',
    display: 'flex',
    alignItems: 'center',
    padding: '2rem 2.5rem',
    ts: '.1s',
    textDecoration: 'none',
    width: '100%',

    '& svg': {
      marginRight: '1.5rem',
    },

    '&:hover': {
      color: '$vprimary',
    },
  },
});

export const AppDownload = styled('div', {
  '& p': {
    color: '$vtextSecondary',
    textTransform: 'uppercase',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },

  '& li': {
    listStyle: 'none',

    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
  },

  '& a': {
    color: '$vtext',
    display: 'flex',
    alignItems: 'center',
    ts: '.1s',
    textDecoration: 'none',

    '& img': {
      marginRight: '1.5rem',
    },
  },
});
