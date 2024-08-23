import React from 'react';

const UseEffect06Clock = () => {
  const [count, setCount] = React.useState(0);
  // TODO
  React.useEffect(() => {
    const timeId = setInterval(() => {
      console.log('setInterval', count);
      setCount(count + 1);
      /* setCount((prev) => {
        // correct
        return prev + 1;
      }); */
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <section data-name="UseEffect06Clock">
      <h2>count:{count}</h2>
    </section>
  );
};

export default UseEffect06Clock;
