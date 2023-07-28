import LogoIcon from './../Logo/icon';
import LogoText from './../Logo/text';

import * as S from './styles';

export default function Card() {
  return (
    <S.Wrapper>
      <header>
        <div>
          <LogoText />
          <p>Restaurant</p>
        </div>
        <LogoIcon />
      </header>
      <p className="card-number">•••• •••• •••• 1234</p>
      <footer>
        <p>
          <b>Valid thru</b> 12/2030
        </p>
      </footer>
    </S.Wrapper>
  );
}
