import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 0,
  },
  html: {
    fontSize: '62.5%',
    height: '100%',
  },
  '*:before': { boxSizing: 'border-box' },
  '*:after': { boxSizing: 'border-box' },
  body: {
    background: 'url(/images/pattern.png) #151718',
    fontFamily:
      '"DM Sans", Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
    fontSize: '2rem',
    height: '100%',
    textRendering: 'optimizeLegibility',
    overflowX: 'hidden',
  },
  '::selection': {
    background: '#ED1844',
    color: '#fff',
  },
});
