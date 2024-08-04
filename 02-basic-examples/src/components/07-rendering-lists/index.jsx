import React from 'react';

// Array map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

const Example10 = () => {
  const [list, setList] = React.useState(['學會 JS', '學會 React', '年薪百萬']);
  const atAddClick = () => {
    //* // TODO Wrong
    list.push(new Date().toString());
    setList(list);
    console.log(list);
    // https://github.com/facebook/react/blob/c2034716a5/packages/react-reconciler/src/ReactFiberHooks.js#L656-L693
    // */

    /* // TODO Correct
    const newList = list.concat(new Date().toString());
    setList(newList);
    // */
  };
  return (
    <section data-name="Example07">
      <button className="my-btn" onClick={atAddClick}>
        Add
      </button>
      <ol className="list">
        {/* TODO */}
        {list.map((text) => {
          return <li key={text}>{text}</li>;
        })}
      </ol>
    </section>
  );
};

export default Example10;
