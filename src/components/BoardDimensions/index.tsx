import useDimensions from '@/hooks/useDimensions';
import { useRef } from 'react';

import * as S from './styles';

type BoardDimensionsProps = {
  position: 'top' | 'bottom';
};

export default function BoardDimensions({ position }: BoardDimensionsProps) {
  const boardDimensionsRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions({
    ref: boardDimensionsRef,
    initialState: { width: 1140, height: 0 },
  });

  return (
    <S.Wrapper ref={boardDimensionsRef} position={position}>
      <span>{width}px</span>
    </S.Wrapper>
  );
}
