import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  background: '$vcardBackground',
  borderRadius: '$2',
  color: '$vtext',
  padding: '2.5rem',
  margin: '0 2.5rem 2.5rem 0',
  gridArea: 'transactions',

  '& h3': {
    fontSize: '2rem',
    marginBottom: '2.5rem',
  },

  '@mobile': {
    margin: 0,
  },
});

export const TransactionsList = styled('ul', {});

export const TransactionItem = styled('li', {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  paddingTop: '1.5rem',

  '@mobile': {
    flexWrap: 'wrap',
  },

  variants: {
    credit: {
      true: {
        color: '$vcredit',

        '& .ico': {
          background: '$vcredit',
        },

        '& .amount': {
          color: '$vcredit',
        },
      },
    },
  },

  '&:not(:last-child)': {
    borderBottom: '1px solid $vcardBorder',
    paddingBottom: '1.5rem',
  },

  '& .ico': {
    background: '$vprimary',
    borderRadius: '$circle',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1.5rem',
  },

  '& .name': {
    display: 'flex',
    alignItems: 'center',
    width: '40rem',

    '& h4': {
      fontWeight: 400,
    },

    '@mobile': {
      flex: '100%',
      width: 'auto',
      marginBottom: '$3',
    },
  },

  '& .date': {
    width: '27rem',

    '@mobile': {
      flex: '50%',
      width: 'auto',
    },
  },

  '& .amount': {
    color: '$vdebit',
    fontWeight: 700,
    width: '10rem',

    '@mobile': {
      flex: '50%',
      width: 'auto',
      textAlign: 'right',
    },
  },
});
