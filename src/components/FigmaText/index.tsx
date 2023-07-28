import useDimensions from '@/hooks/useDimensions';
import { Draggable } from 'drag-react';
import { useRef } from 'react';

import * as S from './styles';

type FigmaTextProps = {
  size: 'xs' | 'xl';
  children: React.ReactNode;
  showDimensions?: boolean;
  initialState: {
    width: number;
    height: number;
  };
};

export default function ({
  initialState,
  size,
  showDimensions,
  children,
}: FigmaTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const { width, height } = useDimensions({ ref: elementRef, initialState });

  return (
    <S.Wrapper css={{ width, height }}>
      <Draggable
        style={{
          cursor: 'default',
          position: 'absolute',
          top: 0,
          left: '50%',
        }}
      >
        <S.Frame size={size} ref={elementRef}>
          <S.Dot position="top" />
          <S.Dot position="right" />
          <S.Dot position="bottom" />
          <S.Dot position="left" />

          {children}

          {showDimensions && (
            <S.Dimensions>
              {width} × {height}
            </S.Dimensions>
          )}
        </S.Frame>
      </Draggable>
    </S.Wrapper>
  );
}
