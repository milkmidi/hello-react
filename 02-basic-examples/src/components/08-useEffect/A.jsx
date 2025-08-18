import React from 'react';

const ComponentLifeCycle = () => {
  // TODO
  React.useEffect(() => {
    console.log('%cmounted', 'background:#2ecc71');
    return () => {
      console.log('%cunmount', 'background:#e67e22');
    };
  }, []);
  return (
    <section data-name="ComponentLifeCycle">
      <h2>ComponentLifeCycle</h2>
    </section>
  );
};

const Example1LifeCycle = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setShow(!show)}>
        Toggle show
      </button>
      {show && <ComponentLifeCycle />}
    </section>
  );
};

export default Example1LifeCycle;
