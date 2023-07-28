import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme } = createStitches({
  theme: {
    colors: {
      primary: '#ED1844',
      figma: '#0C8CE9',
      figmaBackground: '#FCFCFC',
      grid: '#6C7478',
      gray100: '#EDEDED',
      gray200: '#D7D8DA',
      gray300: '#BEBEBE',
      gray400: '#8B959A',
      gray500: '#404548',
      gray600: '#282C2E',
      gray700: '#1F2324',
      gray800: '#151718',
      gray900: '#0C0D0E',
      vprimary: '',
      vbackground: '',
      vcardBackground: '',
      vcardBorder: '',
      vtext: '',
      vtextSecondary: '',
      vtextLogin: '',
      vsuccess: '',
      verror: '',
      vdebit: '',
      vcredit: '',
      vskeleton: '',
      vskeletonHighlight: '',
      vselectedOption: '',
    },
    space: {
      1: '.4rem',
      2: '.8rem',
      3: '1.6rem',
      4: '2.4rem',
      5: '3.2rem',
      6: '4.8rem',
      7: '6.4rem',
      8: '9.6rem',
      9: '12.8rem',
    },
    radii: {
      1: '.4rem',
      2: '.8rem',
      3: '1.6rem',
      4: '2.4rem',
      rounded: '10rem',
      circle: '50%',
    },
  },
  media: {
    mobile: '(max-width: 767px)',
    tablet: '(max-width: 1140px)',
  },
  utils: {
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    ts: (value: Stitches.PropertyValue<'transitionDuration'>) => ({
      transition: `all ${value} linear`,
    }),
  },
});
