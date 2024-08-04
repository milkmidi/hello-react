import React from 'react';

const Example2 = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  // TODO
  let boxClassName = 'box';
  if (isGreen) {
    boxClassName += ' style-green';
  }
  return (
    <section data-name="Example2">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      <div className={boxClassName} />
    </section>
  );
};
export default Example2;
