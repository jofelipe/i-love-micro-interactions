import { styled } from '@/../stitches.config';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Wrapper = styled('div', {
  background: '#fff',
  borderRadius: '$4',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: '"Roboto", Arial, sans-serif',
  padding: '$7 0',
  textAlign: 'left',
  maxWidth: '114rem',
  margin: '0 auto',
  overflow: 'hidden',

  '@tablet': {
    padding: '$7',
    justifyContent: 'flex-start',
  },

  '@mobile': {
    display: 'none',
  },
});

export const NoteHint = styled('div', {
  position: 'absolute',
  top: 40,
  right: -278,
  display: 'flex',
  alignItems: 'flex-start',
  ts: '.1s',
  opacity: 0,

  '@mobile': {
    display: 'none',
  },

  '&::before': {
    content: '',
    width: 12,
    display: 'block',
    borderBottom: '1px solid #b2b2c9',
    margin: '20px 5px 0 0',
  },

  '& .user-hint': {
    background: '#b2b2c9',
    width: 38,
    height: 38,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 5,
    position: 'relative',

    '& .user-hint-animation': {
      width: 172,
      height: 172,
      position: 'relative',
      top: -56,
      left: -69,
    },
  },

  '& .text': {
    background: '#b2b2c9',
    borderRadius: '5px 15px 15px 15px',
    color: '#fff',
    padding: 12,
    width: 210,
    fontSize: '1.5rem',

    '& p': {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: 400,
      marginBottom: 0,
    },
  },
});

export const Notes = styled('div', {
  position: 'relative',

  '& p': {
    color: '$gray500',
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '$2',
  },

  [`&:hover ${NoteHint}`]: {
    opacity: 1,
  },
});

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
});

export const RadioGroupItem = styled(RadioGroup.Item, {
  background: 'transparent',
  border: '1px solid $gray400',
  marginLeft: -1,
  overflow: 'hidden',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'center',
  padding: '$3 $6',
  ts: '.1s',
  position: 'relative',

  '&:first-child': {
    borderRadius: '$2 0 0 $2',
  },

  '&:last-child': {
    borderRadius: '0 $2 $2 0',
  },

  '&:hover': {
    background: '#89899B',
    color: '#fff',
  },

  '&[data-state=checked]': {
    background: '#7e64d0',
    color: '#fff',
  },
});

export const Label = styled('label', {
  cursor: 'pointer',
  fontSize: '1.6rem',
});

export const HighestNote = styled('div', {
  '& .animation': {
    position: 'absolute',
  },

  '& .overflow': {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  '& .unicorn': {
    width: 114,
    height: 64,
  },

  '& .explosion': {
    top: -22,
    left: -15,
    width: 96,
    height: 96,
  },
});
