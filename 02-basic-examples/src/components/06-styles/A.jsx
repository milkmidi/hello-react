import React from 'react';

const Example = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  return (
    <section data-name="A">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      <div
        // TODO
        style={{
          width: 200,
          height: 200,
          backgroundColor: isGreen ? 'green' : 'red',
        }}
      />
    </section>
  );
};
export default Example;
