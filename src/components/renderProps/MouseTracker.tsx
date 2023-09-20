import { useEffect, useState } from 'react';

const initialPosition = {
  x: 0,
  y: 0,
};

type MousePositionType = {
  x: number;
  y: number;
};

type MouseTrackerPropType = {
  renderProp: (mousePosition: MousePositionType) => React.ReactNode;
};

// The Render Props pattern is a way to pass a function as a prop to a component,
// so that the component can call that function and render its result.

const MouseTracker = ({ renderProp }: MouseTrackerPropType) => {
  const [mousePosition, setMousePosition] =
    useState<MousePositionType>(initialPosition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return renderProp(mousePosition);
};
export default MouseTracker;
