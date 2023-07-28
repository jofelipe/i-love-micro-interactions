import FigmaText from '@/components/FigmaText';

import * as S from './styles';

export default function PageTitle() {
  const today = new Date();
  const hour = today.getHours();

  const currentGreeting =
    (hour < 12 && 'morning') || (hour < 18 && 'afternoon') || 'evening';

  return (
    <S.Wrapper>
      <S.Title>
        <div className="memoji"></div>
        <div className="sticker"></div>

        <FigmaText
          initialState={{ width: 865, height: 101 }}
          size="xl"
          showDimensions
        >
          <S.Text>I love micro-interactions</S.Text>
        </FigmaText>
      </S.Title>

      <p>
        Good {currentGreeting}, guys! <br />I built this page to showcase some
        of my work as a front-end developer.
      </p>
    </S.Wrapper>
  );
}
