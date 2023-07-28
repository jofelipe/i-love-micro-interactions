import * as S from './styles';

type VerticalSeparatorProps = {
  height: number;
};

export default function VerticalSeparator({ height }: VerticalSeparatorProps) {
  return (
    <S.Separator css={{ height }}>
      <span>{height}px</span>
    </S.Separator>
  );
}
