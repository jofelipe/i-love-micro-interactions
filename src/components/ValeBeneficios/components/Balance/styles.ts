import { styled } from '@/../stitches.config';

export const Wrapper = styled('section', {
  color: '$vtext',
  display: 'grid',
  gridArea: 'balance',
  marginRight: '5rem',
  gridTemplateColumns: '50% 50%',
  gridTemplateAreas: `
  'user card'
  'evolution card'
  `,
  gap: '2.5rem',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 0,
  },
});

export const Card = styled('div', {
  background: '$vcardBackground',
  borderRadius: '$2',
  padding: '2.5rem',

  '@mobile': {
    padding: '2rem',
  },
});

export const User = styled('div', {
  '& h1': {
    fontSize: '2rem',
    marginBottom: '2.5rem',
  },

  '& ul': {
    columnCount: 2,
    marginBottom: '-$3',

    '@mobile': {
      columnCount: 1,
    },
  },

  '& li': {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '$3',

    '& svg': {
      marginRight: '1rem',
      minWidth: 16,
      position: 'relative',
      top: '-1.5px',
    },
  },
});

export const ExpensesEvolution = styled('div', {
  '& .recharts-wrapper text': {
    fontSize: '1.2rem',
  },

  '& .recharts-default-tooltip': {
    background: '$vcardBackground !important',
    border: '1px solid $vcardBorder !important',
    borderRadius: '$1',
    padding: '5px 10px !important',
  },

  '& .recharts-default-tooltip li': {
    color: '$vtext !important',
  },

  '& .recharts-tooltip-label, & .recharts-tooltip-item-name, & .recharts-tooltip-item-separator':
    {
      display: 'none',
    },
});

export const Balance = styled('div', {
  '& .balance-resume': {
    display: 'flex',
    alignItems: 'flex-start',
    userSelect: 'none',
    borderBottom: '1px solid $vcardBorder',
    marginBottom: '2.5rem',
  },

  '& .balance': {
    color: '$vprimary',
    fontSize: '4rem',
    lineHeight: '130%',
    fontWeight: 900,
    position: 'relative',

    '&::selection': {
      background: 'none',
    },
  },

  '& .mask-balance': {
    borderRadius: '$1',
    display: 'block',
    width: '100%',
    position: 'absolute',
    background: '$vskeleton',
    height: 40,
    top: 2,
  },

  '& .balance-diary': {
    fontSize: '1.6rem',
    height: 30,
    marginBottom: '1.5rem',
    pointerEvents: 'none',

    '& b': {
      cursor: 'text',
      display: 'inline-block',
      position: 'relative',
      marginLeft: 3,

      '&::selection': {
        background: 'none',
      },
    },
  },

  '& .mask-diary-balance': {
    borderRadius: '$1',
    display: 'block',
    width: '101%',
    position: 'absolute',
    background: '$vskeleton',
    height: '100%',
  },

  '& .toggle-balance-visibility': {
    background: 'none',
    border: 0,
    cursor: 'pointer',
    color: '$vtextSecondary',
  },

  '& .card-actions': {
    marginLeft: 'auto',
  },
});
