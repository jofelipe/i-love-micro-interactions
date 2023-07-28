import { styled } from '@/../stitches.config';

export const Wrapper = styled('div', {
  padding: '$8 0',

  '@mobile': {
    padding: '$5 0',
  },
});

export const Divider = styled('div', {
  $$background: '#fff',
  $$color: 'hsl(0 0% 43.9%);',
  $$height: '1px',
  $$width: '5px',
  $$fadeStop: '90%',
  $$offset: '-100px',
  position: 'absolute',
  width: 'calc(100% + $$offset)',
  height: '$$height',
  left: 'calc($$offset / 2 * -1)',
  background:
    'linear-gradient(to right,$$color,$$color 50%,transparent 0,transparent)',
  backgroundSize: '$$width $$height',
  '-webkit-mask-composite': 'xor',
  '-webkit-mask':
    'linear-gradient(to left,black $$fadeStop,transparent),linear-gradient(to right,black $$fadeStop,transparent),linear-gradient(#000,#000)',
});
