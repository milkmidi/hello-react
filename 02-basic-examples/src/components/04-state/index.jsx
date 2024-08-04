import React from 'react';

// https://reactjs.org/docs/hooks-reference.html#usestate
const Counter = () => {
  // TODO React hooks - useState
  const [count, setCount] = React.useState(0);
  /* 上面一行等於三面這三行
  const stateArr = React.useState(0);
  const count = stateArr[0];
  const setCount = stateArr[1];
  */

  const atClick = () => {
    // TODO
    setCount(count + 1);
  };
  return (
    <div className="border-2 p-4 border-black">
      <h2 className="count">count:{count}</h2>
      <button className="button" onClick={atClick}>
        increment
      </button>
    </div>
  );
};

/** // FIXME，三分鐘的隨堂測試
 * 放兩個 Counter Component
 * 一個 count 為 0
 * 另一個 count 為 1
 */
const Example = () => {
  return (
    <section data-name="Example4">
      <Counter />
    </section>
  );
};
export default Example;
