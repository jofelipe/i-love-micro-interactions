import Lottie from 'react-lottie-player';

import backgroundAnimation from './assets/background.json';
import drawAnimation from './assets/draw.json';
import linesAnimation from './assets/lines.json';

import * as S from './styles';

export default function Avaliacao360() {
  return (
    <S.Wrapper>
      <S.Background>
        <Lottie
          animationData={backgroundAnimation}
          className="background-animation"
          loop
          play
        />

        <S.Title>
          Avaliação
          <div className="title-animation">
            <Lottie
              animationData={linesAnimation}
              loop
              play
              style={{ width: 225, height: 225 }}
            />
            <span className="text">360</span>
          </div>
        </S.Title>

        <S.Draw>
          <Lottie animationData={drawAnimation} loop play />
        </S.Draw>
      </S.Background>
    </S.Wrapper>
  );
}
