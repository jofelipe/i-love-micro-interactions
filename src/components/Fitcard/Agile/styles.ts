import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  '& .text': {
    padding: '$5',
  },
});

export const KanBan = styled('div', {
  display: 'grid',
  gap: '$3',
  padding: '0 $5',
  gridTemplateColumns: '1fr 1fr 1fr',

  '@mobile': {
    overflowX: 'scroll',
    maxWidth: '100%',
  },
});

export const KanBanColumn = styled('div', {
  background: '$gray100',
  borderRadius: '$2',
  overflow: 'hidden',
  minHeight: '20rem',

  '@mobile': {
    width: '20rem',
  },

  '& header': {
    color: '#fff',
    fontSize: '1.6rem',
    fontWeight: 700,
    padding: '$1 $3',
  },

  '& .cards': {
    padding: '$2',
  },

  variants: {
    step: {
      backlog: {
        '& header': {
          background: '#EC6B5E',
        },
      },
      doing: {
        '& header': {
          background: '#F4BF4F',
        },
      },
      done: {
        '& header': {
          background: '#61C453',
        },
      },
    },
  },
});

export const Card = styled('div', {
  background: '#fff',
  border: '1px solid $gray200',
  borderRadius: '$1',
  fontSize: '1.2rem',
  color: '$gray600',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$2',

  '& .team': {
    background: '$gray100',
    color: '$gray500',
    padding: '$1 $2',
    borderRadius: '$1',
    width: 'max-content',
  },

  variants: {
    done: {
      true: {
        borderStyle: 'dashed',
        opacity: '.5',
      },
    },
  },
});
