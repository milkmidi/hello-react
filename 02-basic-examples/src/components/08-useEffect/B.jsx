import React from 'react';

const UseEffect03Dependency = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('milkmidi');
  // TODO
  React.useEffect(() => {
    console.log('effect count', count);
    if (count === 5) {
      alert('hi, React');
    }
  }, [count]);

  return (
    <section data-name="UseEffect03Dependency">
      <h2>count:{count}</h2>
      <h2>name:{name}</h2>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        addCount
      </button>
      <button className="my-btn" onClick={() => setName('奶綠茶')}>
        setName
      </button>
    </section>
  );
};

export default UseEffect03Dependency;
