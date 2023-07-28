import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  padding: '$5',

  '& p': {
    marginBottom: '$4',
  },
});

export const Numbers = styled('div', {
  fontFamily:
    'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  fontSize: '2.4rem',
  wordBreak: 'break-all',
  display: 'flex',
  flexWrap: 'wrap',
  maxHeight: '6rem',
  overflow: 'hidden',
});

export const Number = styled('div', {
  color: '$gray500',
  ts: '.250s',

  '&[data-state="off"]': {
    color: '$gray500',
  },

  '&[data-state="medium"]': {
    color: '$gray400',
  },

  '&[data-state="high"]:after': {
    color: '$gray300',
  },
});
