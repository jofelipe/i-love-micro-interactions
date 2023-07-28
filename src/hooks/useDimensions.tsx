import { useEffect, useState } from 'react';

type UseDimensionsProps = {
  ref: React.RefObject<HTMLElement>;
  initialState: {
    width: number;
    height: number;
  };
};

export default function useDimensions({
  ref,
  initialState,
}: UseDimensionsProps) {
  const [width, setWidth] = useState(initialState.width);
  const [height, setHeight] = useState(initialState.height);

  const handleResize = () => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
}
