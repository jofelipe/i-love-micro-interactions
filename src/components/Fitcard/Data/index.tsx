import { useEffect, useRef } from 'react';

import * as S from './styles';

export default function Data() {
  const numbersRef = useRef<HTMLDivElement>(null);

  const numbers = 42;
  const indices = [
    2, 3, 5, 6, 8, 11, 13, 14, 15, 17, 19, 20, 21, 23, 24, 26, 28,
  ];
  const states = ['off', 'medium', 'high'];

  const randonBinary = () => {
    const numeroAleatorio = Math.random();
    return numeroAleatorio < 0.5 ? '0' : '1';
  };

  useEffect(() => {
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const interval = setInterval(() => {
      indices.forEach((index) => {
        const light = numbersRef.current?.querySelector(
          `[data-index="${index}"]`
        ) as HTMLElement;

        if (!light) {
          return;
        }

        const nextState = states[Math.floor(Math.random() * states.length)];
        const currentState = light.dataset.state;

        if (currentState === 'high' && nextState === 'medium') {
          light.dataset.state = 'off';
        } else {
          light.dataset.state = nextState;
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
      timeoutIds.forEach(clearTimeout);
    };
  });

  return (
    <S.Wrapper>
      <h4>Data-driven</h4>
      <p>
        Many calls with Fitcard's Business Intelligence team to validate
        hypothesis.
      </p>

      <S.Numbers ref={numbersRef}>
        {Array.from({ length: numbers }).map((_, i) => {
          return (
            <S.Number key={i} data-state="off" data-index={i}>
              {randonBinary()}
            </S.Number>
          );
        })}
      </S.Numbers>
    </S.Wrapper>
  );
}
