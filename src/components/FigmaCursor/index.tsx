import * as S from './styles';

type FigmaCursorProps = {
  children: React.ReactNode;
};

export default function FigmaCursor({ children }: FigmaCursorProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
