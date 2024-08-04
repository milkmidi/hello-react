import React from 'react';
import ChildComponent from './ChildComponent';
import './app.scss';

const Example = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState('');
  // TODO
  const atCallParent = (value) => {
    setData(value);
  };
  return (
    <section data-name="Example11">
      <h1>ParentComponent</h1>
      <p>count:{count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <p>date:{data}</p>
      {/* TODO */}
      <ChildComponent count={count} onCallParent={atCallParent} />
    </section>
  );
};

export default Example;
