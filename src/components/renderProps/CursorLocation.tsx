import MouseTracker from './MouseTracker';

const CursorLocation = () => {
  return (
    <MouseTracker
      // Here we are passing a function which returns some jsx as a prop to MouseTracker Component.
      renderProp={(mousePosition) => {
        return (
          <div>
            {`Mouse Position : x: ${mousePosition.x}, y: ${mousePosition.y}`}
          </div>
        );
      }}
    />
  );
};
export default CursorLocation;
