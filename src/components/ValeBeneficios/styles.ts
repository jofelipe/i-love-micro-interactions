import { styled } from '@/../stitches.config';

export const Wrapper = styled('section', {
  background: '$vbackground',
  borderRadius: '$4',
  overflow: 'hidden',
  display: 'grid',
  fontFamily: '"Roboto", Arial, sans-serif',
  fontSize: '1.4rem',
  textAlign: 'left',
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: 'min-content min-content min-content',
  gridTemplateAreas: `
  'sidebar theme'
  'sidebar balance'
  'sidebar transactions'  
  `,
  gap: '$4',
  maxWidth: '114rem',
  margin: '0 auto',

  '@tablet': {
    gridTemplateColumns: '0 1fr',
  },

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem 2rem',
  },
});

export const ThemeToggle = styled('div', {
  gridArea: 'theme',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '2.5rem 2.5rem 0',

  '& .sidebar-logo': {
    display: 'none',
    height: 64,
    margin: '-.5rem 0 0 -.5rem',

    '@mobile': {
      display: 'block',
    },
  },

  '& .path-text': {
    fill: '$vtext',
  },

  '& .react-switch-bg': {
    '& div': {
      color: '$vtextSecondary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  '@mobile': {
    justifyContent: 'space-between',
    padding: 0,
  },
});
