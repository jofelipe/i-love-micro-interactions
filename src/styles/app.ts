import { styled } from '@/../stitches.config';

export const Main = styled('main', {
  color: '$gray200',

  '@mobile': {
    fontSize: '1.8rem',
  },
});

export const Container = styled('div', {
  maxWidth: '120rem',
  margin: '0 auto',
  position: 'relative',

  '@tablet': {
    padding: '0 $5',
  },

  '@mobile': {
    padding: '0 $4',
  },
});

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  padding: '$6 0 $7',

  '& .logo': {
    background: 'url(/images/logo.svg) no-repeat',
    display: 'block',
    width: 160,
    height: 44,
    textIndent: '-9999px',
  },
});

export const Beginning = styled('section', {
  color: '$gray300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto $7',
  maxWidth: '110rem',

  '& h2': {
    color: '$gray100',
    fontSize: '3.2rem',
    fontWeight: 'normal',
    marginBottom: '$4',
    position: 'relative',

    '& > div': {
      top: 9,
    },

    '@mobile': {
      fontSize: '2.8rem',

      '& > div': {
        top: 8,
      },
    },
  },

  '& .code-text': {
    fontFamily:
      'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  },

  '& .text': {
    maxWidth: '60rem',

    '@mobile': {
      textAlign: 'center',
    },
  },

  '& .photo': {
    textAlign: 'center',
    width: 273,
    height: 273,
    opacity: '.05',
    ts: '.2s',

    '&:hover': {
      opacity: 1,
    },

    '& img': {
      borderRadius: '$2',
      maxWidth: '100%',
      height: 'auto',
    },

    '& figcaption': {
      fontSize: '1.4rem',
    },

    '@mobile': {
      display: 'none',
    },
  },
});

export const CidadeReclama = styled('section', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.6rem',
  lineHeight: '150%',
  maxWidth: '110rem',
  margin: '0 auto',

  '& p a': {
    color: '$gray200',
    borderBottom: '1px dotted $gray200',
    textDecoration: 'none',
    ts: '.1s',

    '&:hover': {
      color: '$gray100',
      borderBottomColor: '$gray100',
    },
  },

  '@mobile': {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export const CidadeReclamaButton = styled('a', {
  background: 'url(/images/cidade-reclama.png) no-repeat',
  width: 237,
  height: 56,
  display: 'block',
  textIndent: -9999,
  marginRight: '$5',

  //css sprite, like incas
  '&:hover': {
    backgroundPosition: '0 -57px',
  },

  '@mobile': {
    margin: '0 0 $4',
  },
});

export const TitleDescription = styled('h3', {
  color: '$primary',
  fontSize: '4.8rem',
  textAlign: 'center',
  marginBottom: '$7',

  '& small': {
    color: '$gray200',
    display: 'block',
    fontWeight: 'normal',
    fontSize: '2rem',

    '&:first-child': {
      marginBottom: '-.5rem',
    },

    '@mobile': {
      fontSize: '1.8rem',
    },
  },

  '& .fitcard': {
    color: '#B81238',
  },

  '@mobile': {
    fontSize: '3.4rem',
  },
});

export const Developer = styled('section', {
  '& .developer-skills': {
    display: 'flex',
    gap: '$3',
    flexWrap: 'wrap',
  },
});

export const Design = styled('section', {
  textAlign: 'center',
  textWrap: 'balance',
  margin: '0 auto $6',
  maxWidth: '80rem',

  '& h3': {
    color: '#fff',
    fontSize: '3.2rem',
    marginBottom: '$4',
  },
});

export const Project = styled('article', {
  textAlign: 'center',
  textWrap: 'balance',

  '& .project-description': {
    margin: '0 auto $7',
    maxWidth: '80rem',

    '& > p': {
      marginBottom: '$5',
    },

    '& > p a': {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '1px dotted',
      ts: '.1s',

      '&:hover': {
        color: '$gray100',
        borderBottomColor: '$gray100',
      },
    },
  },

  '& .project-type': {
    color: '$gray400',
    display: 'block',
    marginBottom: '$6',
  },
});

export const ProjectTitle = styled('h3', {
  fontSize: '3.6rem',

  variants: {
    project: {
      valeBeneficios: {
        color: '#E8651B',
      },
      avaliacao360: {
        color: 'transparent',
        background: 'linear-gradient(270deg, #F44E72 0%, #8463CE 100%)',
        backgroundClip: 'text',
      },
    },
  },
});

export const Avaliacao360Reasons = styled('div', {
  color: '$gray100',
  display: 'flex',
  maxWidth: '91rem',
  margin: '0 auto $7',
  gap: '$8',

  '& .item': {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    gap: '$5',

    '@mobile': {
      gap: '$3',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },

  '& .item-number': {
    color: 'transparent',
    background: 'linear-gradient(270deg, #F44E72 0%, #8463CE 100%)',
    backgroundClip: 'text',
    fontSize: '3.6rem',
    fontWeight: 700,
  },

  '& .item-text': {
    fontSize: '1.6rem',
    fontStyle: 'italic',
    lineHeight: '150%',
    textWrap: 'balance',
  },

  '@tablet': {
    gap: '$6',
  },

  '@mobile': {
    flexDirection: 'column',
  },
});

export const BlockQuote = styled('blockquote', {
  font: 'italic 3.2rem/130% "Georgia Pro", "Georgia", serif',
  maxWidth: '71rem',
  margin: '0 auto $7',
  textAlign: 'left',

  '& .author': {
    display: 'block',
    fontSize: '2.4rem',
    marginTop: '$3',

    '&::before': {
      content: '— ',
    },
  },

  '@mobile': {
    fontSize: '2.4rem',
    textAlign: 'center',
  },
});

export const FitcardTeam = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
  gridTemplateRows: '27rem 27rem',
  gap: '$4',
  maxWidth: '114rem',
  margin: '0 auto $8',

  '& > div': {
    background: '$gray600',
    borderRadius: '$4',
    textAlign: 'left',
    overflow: 'hidden',
  },

  '& h4': {
    color: 'gray100',
    fontSize: '3.2rem',
    marginBottom: '$2',
  },

  '& p': {
    fontSize: '1.6rem',
    lineHeight: '150%',
  },

  '& .research': {
    gridColumn: 'span 3/span 3',
  },

  '& .okr': {
    gridColumn: 'span 2/span 2',
  },

  '& .agile': {
    gridColumn: 'span 2/span 2',
  },

  '@mobile': {
    display: 'block',
    marginBottom: '$6',

    '& > div': {
      marginBottom: '$4',
    },

    '& h4': {
      fontSize: '2.4rem',
    },
  },
});

export const EndTitle = styled('h5', {
  color: '$grat300',
  fontSize: '3.2rem',
  textAlign: 'center',
  marginBottom: '$8',

  '@mobile': {
    fontSize: '2.4rem',
    textWrap: 'balance',
    marginBottom: '$6',
  },
});

export const HideMobile = styled('div', {
  '@mobile': {
    display: 'none',
  },
});
